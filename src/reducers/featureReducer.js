const initialState = {
    //set intial data state
    additionalPrice: 0,
    car: {
      price: '',
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const featureReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price
                    }] //spread in original state. then spread car state, then features state for add feature action
                }
            };
      

case 'REMOVE_FEATURE': 
    return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
            ...state.car,
            features: state.car.features.filter((car => car.id !== action.payload.id))
            
        } //spread in oiginal state. then spread car state for pic/info, then let feature data = featues state. filter through features by id & add action for removal to be opposite what is equal to feat id.

    };
        

    default:
        return state;
}


}

