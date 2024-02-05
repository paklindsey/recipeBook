import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import "../../styles/recipes.scss";
import RecipeCard from "./RecipeCard";
import db from "../../config/firebase";

const RecipesMain = () => {
  const [recipes, setRecipes] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, "recipes"), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <section className="recipesMain">
      <RecipeCard index={0} />
      <RecipeCard index={1} />
      <RecipeCard index={2} />
      <RecipeCard index={3} />
      <RecipeCard index={4} />
      <RecipeCard index={5} />
    </section>
  );
};

export default RecipesMain;
