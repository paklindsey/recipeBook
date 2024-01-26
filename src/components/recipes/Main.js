import "../../styles/recipes.scss";
import RecipeCard from "./RecipeCard";

const RecipesMain = () => {
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
