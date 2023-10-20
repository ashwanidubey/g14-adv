export const INCREMENTBOOK='INCREMENTBOOK';
export const DECREMENTBOOK='DECREMENTBOOK';
export const INCREMENTPEN='INCREMENTPEN';
export const DECREMENTPEN='DECREMENTPEN';


export const IncrementPen=(d)=>{
    return {
        'type': INCREMENTPEN ,
        'value': d
    }
}
export const DecrementPen=(d)=>{
    return {
        'type': DECREMENTPEN,
        'value': d
    }
}
export const IncrementBook=(d)=>{
    return {
        'type': INCREMENTBOOK ,
        'value': d
    }
}
export const DecrementBook=(d)=>{
    return {
        'type': DECREMENTBOOK ,
        'value': d
    }
}