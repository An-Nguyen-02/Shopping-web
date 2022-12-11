import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imgURL, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgURL})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitles">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
