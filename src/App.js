import "./styles/App.scss";
import Hero from "./components/Hero";
import RecipesMain from "./components/recipes/Main";

function App() {
  return (
    <div className="App">
      <Hero />
      <RecipesMain />
    </div>
  );
}

export default App;
