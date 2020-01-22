import React from 'react';
import { connect } from 'react-redux';



const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => this.props.addFeature(this.state.newFeature)}>Add</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = state =>{
  return {
    id: state.featureReducer.id,
    name:state.featureReducer.name,
    price:state.featureReducer.price
  }
}
export default connect({
  mapStateToProps
})(AddedFeature);
