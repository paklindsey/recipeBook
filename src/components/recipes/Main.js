import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import "../../styles/recipes.scss";
import db from "../../config/firebase";

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
    <section className="recipes">
      {recipes &&
        recipes.map((card) => (
          <div className="recipes__card" key={card.id}>
            <h6>{card.name}</h6>
            <img src={card.image} alt="food" />
          </div>
        ))}
    </section>
  );
};

export default RecipesMain;
