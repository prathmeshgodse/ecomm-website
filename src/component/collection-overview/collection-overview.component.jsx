import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionForOverview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-over-view.styles.scss";

const CollectionOverview = ({ collectionsForOverview }) => (
  <div className="collections-overview">
    {collectionsForOverview.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collectionsForOverview: selectShopCollectionForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
