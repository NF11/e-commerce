import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  ItemsStyles,
  TitleStyles,
} from "./collection.styles";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <CollectionPageContainer>
      <TitleStyles>{title}</TitleStyles>
      <ItemsStyles>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsStyles>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
