import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import axios from "axios";

const initialState = {
  loading: true,
  userInfo: {},
  error: null,
};

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  //signin user
  async function loginUser(userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://rhest.herokuapp.com/api/v2/users/login",
      userInfo,
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(res.data));
    const userLogin = (await localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};

    dispatch({
      type: "LOGIN",
      payload: userLogin,
    });
    console.log(res.data);
  }
  //logout
  async function logout() {
    await localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  }

  //signup user
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://rhest.herokuapp.com/api/v2/users/register",
        newuser,
        config
      );

      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userInfo: state.userInfo,
        loading: state.loading,
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
