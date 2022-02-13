import "./Homepage.scss";
import Menu from "../../components/menu/menu.js";
// import { HomePageContainer } from "./Homepage-styles";

const Homepage = () => {
  return (
    // Using css
    <div className="homepage">
      <Menu />
    </div>

    //using Styled components
    // <HomePageContainer>
    //   <Menu />
    // </HomePageContainer>
  );
};

export default Homepage;
