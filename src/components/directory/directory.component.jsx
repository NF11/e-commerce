import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {/*{this.state.sections.map(({ title, id, imageUrl, size }) => (*/}
      {/*  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />*/}
      {/*))}*/}
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
