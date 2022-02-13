import MenuItem from "../menu-item/menu-item.js";
import "./menu.scss";
import { connect } from "react-redux";
import { selectDirectorySecions } from "../../redux/directory/directory.selectors.js";
import { createStructuredSelector } from "reselect";
const Menu = ({ sections }) => {
  return (
    <div className="menu">
      {sections.map(({ imageUrl, id, ...otherSectionProps }) => (
        <MenuItem key={id} imgURL={imageUrl} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySecions,
});
export default connect(mapStateToProps)(Menu);
