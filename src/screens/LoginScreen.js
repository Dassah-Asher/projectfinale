import { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const LoginScreen = ({ history, location }) => {
  const { loginUser, userInfo } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo.token) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    loginUser(user);
  };

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
        opacity:0
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 15,
          padding: "20px",
          border: "1px solid blue"
        }}
      >
        <h3 className="text-center">SIGN IN </h3>
        <Form.Control
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">SIGN IN</Button>
        
      </Form>
    </div>
  );
};

export default LoginScreen;
