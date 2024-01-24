import mapoTofu from "../../assets/mapoTofuImg.jpg";
import chiaSeedPudding from "../../assets/chiaSeedPudding.jpg";

const recipeData = [
  {
    name: "Mapo Tofu",
    image: mapoTofu,
    ingredients: [
      "ground turkey (1lb) or other ground meat of choice",
      "silky tofu (1 pack)",
      "garlic ~6 pieces",
      "gochugaru",
      "ginger (on preference)",
      "black bean sauce",
      "red miso",
      "oyster sauce",
      "szechuan chili oil (i like blank slate)",
    ],
    directions: [
      "put ground meat into hot pan with minced garlic ",
      "add sauces to taste",
      "add gochugaru and ginger to taste",
      "put in chopped tofu",
      "cook until tofu is browned",
      "top with scallions and szechuan chili oil",
    ],
    credit: "https://chloeting.com/recipes/healthy-mapo-tofu",
  },
  {
    name: "Matcha Chia Seed Pudding",
    image: chiaSeedPudding,
    ingredients: [
      "milk of choice (i like oat)",
      "chia seeds",
      "choice of fruit",
    ],
    directions: [
      "put chia seeds into oatmilk into container or bowl (1:3 ratio of seeds to milk)",
      "let sit for ~3 hours",
      "top with cut fruit",
    ],
    credit: "",
  },
];

export default recipeData;
