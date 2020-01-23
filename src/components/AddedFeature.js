import React from 'react';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>Remove</button> 
      {props.feature.name}
    </li> //onclick with anon function to pass in remove feature props & indiv feature data to remove
  );
};

export default AddedFeature;