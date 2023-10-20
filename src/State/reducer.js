import { INCREMENTBOOK,DECREMENTBOOK, INCREMENTPEN,DECREMENTPEN } from "./action";

const initialvalue={
    pen:10,
    book:50
};

const reducer=(state=initialvalue,action)=>{
     switch(action.type){
        case INCREMENTBOOK:
            return {...initialvalue,book:state.book+action.value};
        case  DECREMENTBOOK:
            return {...initialvalue,book:state.book-action.value};
        case INCREMENTPEN:
            return {...initialvalue,pen:state.pen+action.value};
        case  DECREMENTPEN:
            return {...initialvalue,pen:state.pen-action.value};          
        default :
           return state;       
     }
}

export default reducer