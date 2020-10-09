//initial State= []

var latestIndex= 0;

export default function reducers(state=[], action){
    switch(action.type){
        case 'ADD_ITEM':
            return [
              ...state,
              {
                  id: ++latestIndex,
                  descrition: action.payload.descrition,
                  buyingStat: false
            }
        ];

        case 'DELETE_ITEM' : 
            return state.filter(item => item.id !== action.payload.id);
        
        default:
            return state;
    }

}