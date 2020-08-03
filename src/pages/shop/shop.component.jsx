import React from "react";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
