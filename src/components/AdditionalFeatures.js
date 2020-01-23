import React from 'react';
import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? ( //if something is here, map over the additional features and display
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem = {props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p> //if nothing here display text
      )}
    </div>
  );
};



export default AdditionalFeatures;
