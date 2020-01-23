//add all actions here(add remove total)

export const buyItem = item => {
    console.log('this is ADD item', item);
    return {
      type: 'ADD_FEATURE',
      payload: item
    }
};

export const removeFeature = item => {
    return {
      type: 'REMOVE_FEATURE',
      payload: item
    }
};

