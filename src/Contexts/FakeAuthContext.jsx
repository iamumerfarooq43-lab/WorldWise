import { createContext, useContext, useReducer } from "react";

// for creating context
const AuthContext = createContext();

// initial state dec
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error(`Unknown action`);
  }
}

// Fake User data
const FAKE_USER = {
  name: "Umer Farooq",
  email: "umerfarooq@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// reducer for checking user auth
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispacted] = useReducer(
    reducer,
    initialState,
  );

  // function for checking email, pass
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispacted({ type: "login", payload: FAKE_USER });
  }

  //   for checking logout
  function logout() {
    dispacted({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
