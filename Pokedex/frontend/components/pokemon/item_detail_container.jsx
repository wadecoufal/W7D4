import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { requestItemDetail } from "../../actions/pokemon_actions";

const mapStateToProps = (state, { match }) => ({
  
});



export default connect(mapStateToProps)(ItemDetail);
