import React from "react";
import { Route } from "react-router";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { ShopPageContainer } from "./shop.styles";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import Spinner from "../../components/spinner/spinner.component";
import { connect } from "react-redux";
import { fetchCollections } from "../../redux/shop/shop.action";

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unSubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collection");
    collectionRef.onSnapshot(async (collection) => {
      this.props.fetchCollections(convertCollectionSnapshotToMap(collection));
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: (collection) => dispatch(fetchCollections(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
