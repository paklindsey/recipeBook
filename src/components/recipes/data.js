import mapoTofu from "../../assets/mapoTofuImg.jpg";
import chiaSeedPudding from "../../assets/chiaSeedPudding.jpg";
import savoryOats from "../../assets/savoryOats.jpg";
import vermicelli from "../../assets/vermicelliNoodleBowl.jpg";
import padkrapow from "../../assets/padkrapow.jpg";

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
      "put chia seeds into oatmilk into container or bowl (1:4 ratio of seeds to milk)",
      "let sit for ~3 hours",
      "top with cut fruit",
    ],
    credit: "",
  },
  {
    name: "Savory Oats",
    image: savoryOats,
    ingredients: [
      "old fashioned oats",
      "1 egg (onsen)",
      "spinach",
      "furikake",
      "sesame seeds",
      "salt",
      "optional: beef stock/ dashida",
      "optional: chili oil",
    ],
    directions: [
      "into a bowl put in oats, water, sesame oil, salt, dashida",
      "microwave for 2min",
      "put in spinach",
      "microwave for 1min ",
      "top with sesame seeds, furikake, onsen egg, chili oil",
    ],
    credit: "",
  },
  {
    name: "Vermicelli Noodle Bowl",
    image: vermicelli,
    ingredients: [
      "vermicelli noodle",
      "chicken thigh or breast",
      "lettuce",
      "cucumber",
      "cilantro",
      "other veggies you want",
      "lemon",
      "fish sauce",
      "sriacha",
      "paprika",
      "garlic",
      "soy sauce",
      "black vinegar",
    ],
    directions: [
      "dice chicken and marinate in soy sauce, paprika, minced garlic, soy sauce, black vinegar",
      "air fry chicken or back at 320 for 15min",
      "prep all other veggies",
      "make sauce with lemon, fish sauce, and water",
      "assemble chicken, veggies, and noodles into a bowl, enjoy",
    ],
    credit: "",
  },
  {
    name: "Pad Krapow",
    image: padkrapow,
    ingredients: [
      "rice",
      "ground beef",
      "1 egg (poached)",
      "thai chile peppers",
      "basil",
      "garlic",
      "lemon",
      "oyster sauce",
      "fish sauce",
    ],
    directions: [
      "chop basil, thai chile peppers, mince garlic",
      "cook ground beef and above ingredients in a pan",
      "add in sauces",
      "squeeze in lemon juice at the end",
      "poach egg",
      "assemble beef, rice, poached egg, scallion",
    ],
    credit: "",
  },
];

export default recipeData;
