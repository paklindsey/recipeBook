import "../styles/home.scss";
import Hero from "../components/Hero";
import PinnedText from "../components/PinnedText";
import HorizontalText from "../components/HorizontalText";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PinnedText />
      <HorizontalText />
    </div>
  );
};

export default Home;
