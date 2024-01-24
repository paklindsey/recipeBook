import "../../styles/recipes.scss";
import RecipeCard from "./RecipeCard";

const RecipesMain = () => {
  return (
    <section className="recipesMain">
      <RecipeCard index={0} />
      <RecipeCard index={1} />
    </section>
  );
};

export default RecipesMain;
