import "../../styles/recipes.scss";
import recipeData from "./data";

const RecipeCard = ({ index }) => {
  const data = recipeData[index];
  return (
    <div className="recipeCard">
      <div className="recipeCard__name">
        <h5>{data.name}</h5>
      </div>
      <div className="recipeCard__info">
        <div className="recipeCard__info__image">
          <img src={data.image} alt="food" />
        </div>
        <div className="recipeCard__info__ingredients">
          <div className="list">
            <h6>ingredients</h6>
            {data.ingredients.map((ingredient) => (
              <ul>
                <li>{ingredient}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="recipeCard__info__directions">
          <div className="list">
            <h6>directions</h6>
            {data.directions.map((direction) => (
              <ul>
                <li>{direction}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="recipeCard__credit">
        <p>inspo/creds: </p>
        <a href={data.credit} rel="noreferrer" target="_blank">
          {data.credit}
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
