import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
