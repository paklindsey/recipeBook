import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import "../../styles/recipes.scss";
import { db } from "../../config/firebase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import addIcon from "../../assets/addButton.svg";

const RecipesMain = () => {
  const [popoutOpen, setPopoutOpen] = useState(false);
  const [recipes, setRecipes] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  useEffect(
    () =>
      onSnapshot(collection(db, "recipes"), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <>
      <section className="addRecipeButton">
        <div className="">
          <Link to="/addRecipe">
            <motion.button whileHover={{ scale: 1.05 }}>
              <img src={addIcon} alt="plus within circle" />
              <p className="bold">add new recipe</p>
            </motion.button>
          </Link>
        </div>
      </section>

      <section className="recipes">
        {recipes &&
          recipes.map((card) => (
            <div className="recipes__card" key={card.id}>
              <h6>{card.name}</h6>
              <img src={card.image} alt="food" />
            </div>
          ))}
      </section>
    </>
  );
};

export default RecipesMain;
