import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipesMain from "./components/recipes/Main";
import Navbar from "./components/Navbar";
import AddRecipeForm from "./components/recipes/AddRecipeForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesMain />} />
        <Route path="addRecipe" element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
