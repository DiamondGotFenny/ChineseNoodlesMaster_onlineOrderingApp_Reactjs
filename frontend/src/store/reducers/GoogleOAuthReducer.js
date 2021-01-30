const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SING_IN":
        return { ...state, isSignedIn: true, userId: action.payload };
      case "SING_OUT":
        return { ...state, isSignedIn: false };
      default:
        return state;
    }
  };