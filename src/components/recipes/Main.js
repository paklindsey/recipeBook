import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import "../../styles/recipes.scss";
import { db } from "../../config/firebase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import addIcon from "../../assets/addButton.svg";
import xButton from "../../assets/xButton.svg";

const RecipesMain = () => {
  const [popoutOpen, setPopoutOpen] = useState(false);
  const [currRecipe, setCurrentRecipe] = useState(null);
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

  const handlePopout = (card) => {
    setCurrentRecipe(card);
    setPopoutOpen(true);
  };

  const cardsVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 1.5,
      },
    },
  };
  const cardsChildVariant = {
    initial: {
      y: -30,
    },
    animate: {
      y: 0,
    },
  };

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
            <motion.button
              whileHover={{ scale: 1.05 }}
              variants={cardsVariant}
              initial="initial"
              animate="animate"
              onClick={() => handlePopout(card)}
              key={card.name}
            >
              <motion.div
                variants={cardsChildVariant}
                className="recipes__card"
                key={card.id}
                style={{ backgroundImage: `URL(${card.imageURL})` }}
              >
                <div className="overlay" />
                <h6>{card.name}</h6>
              </motion.div>
            </motion.button>
          ))}
        {popoutOpen && (
          <div className="recipesPopout">
            <div className="recipesPopout__mainCont">
              <div className="closeButton">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setPopoutOpen(false)}
                >
                  <img src={xButton} alt="circle with x" />
                </motion.button>
              </div>
              <div
                className="headerImg"
                style={{ backgroundImage: `URL(${currRecipe.imageURL})` }}
              />
              <div className="info">
                <div className="info__header">
                  <h2>{currRecipe.name}</h2>
                </div>
                <div className="info__lists">
                  <div className="info__lists__ingredients">
                    <p className="bold">Ingredients</p>
                    <ul>
                      {currRecipe.ingredients.map((ingredient) => (
                        <li key={currRecipe.ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="bold">Directions</p>
                    <ul>
                      {currRecipe.directions.map((direction) => (
                        <li key={currRecipe.direction}>{direction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default RecipesMain;
