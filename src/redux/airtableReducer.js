const initState = {
  loading: false,
  error: false,
  Menu: [],
  About: [],
  Work: [],
  Footer: [],
  Home: [],
  Services: [],
  Contact: [],
};

const airtableReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_LOADER":
      return { ...state, loading: action.payload };
    case "FETCH_MENU":
      return { ...state, Menu: action.payload };
    case "FETCH_ABOUT":
      return { ...state, About: action.payload };
    case "FETCH_WORK":
      return { ...state, Work: action.payload };
    case "FETCH_FOOTER":
      return { ...state, Footer: action.payload };
    case "FETCH_HOME":
      return { ...state, Home: action.payload };
    case "FETCH_SERVICES":
      return { ...state, Services: action.payload };
    case "FETCH_CONTACT":
      return { ...state, Contact: action.payload };
    default:
      return state;
  }
};

export default airtableReducer;
