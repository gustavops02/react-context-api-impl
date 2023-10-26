export default function counterReducer(state = 9, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
            
        case "DECREMENT":
            return state -1;
        default:
            return state;
    }

}