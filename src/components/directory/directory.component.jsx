import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import SECTIONS_DATA from "./directory.data";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {/*{this.state.sections.map(({ title, id, imageUrl, size }) => (*/}
        {/*  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />*/}
        {/*))}*/}
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
