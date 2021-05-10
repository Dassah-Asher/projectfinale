import { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Form, Button, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const RegisterUserScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const [name, setname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const { registerUser, userInfo } = useContext(UserContext);

  const redirect = location.search ? location.search.split("=")[1] : "";

  useEffect(() => {
    if (userInfo.name) {
      history.push("/login");
    }
  }, [userInfo, history, redirect]);

  function handlesubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }

  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center center",
      backgroundSize: "cover",
     
      
      display:"grid",
       marginTop:"10px"
        
      }}
    >
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="border border-white mt-5 p-3"
        >
          <Form
            onSubmit={handlesubmit}
            style={{
             /* display: "grid",
              border: "1px solid steelblue",
              width:"500px",
              height:"350px",
              position:"relative",
              margin:"2% auto",
              padding:"10px",
              overflow:"hidden",*/
              

              
            }}
          >
            <Form.Group>
              <h3 
                style={{
                  color:"grey",
                  fontWeight: 1000,

                  
                }}
                >SIGN UP</h3>
              <Form.Label
              style={{
                color:"grey",
                fontStyle:"italic"
              }}
              >Name</Form.Label>
              <Form.Control

                style={{
                     boxShadow:"0 0 15px 4px rgba(0,0,0,0.06)",
                    border:"none",
                    padding: "10px",
                    borderRadius:"10px"
  
               }}
                placeholder="Enter  Name"
                value={name}
                onChange={(text) => setname(text.target.value)}
              />
           
            </Form.Group>
            <Form.Group>
              <Form.Label
               style={{
                color:"grey",
                fontStyle:"italic"
              }}
              >Email</Form.Label>
              <Form.Control
                placeholder="Enter Email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}

                style={{
                  boxShadow:"0 0 15px 4px rgba(0,0,0,0.06)",
                  border:"none",
                  padding: "10px",
                    borderRadius:"10px"

                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
              
              style={{
                color:"grey",
                fontStyle:"italic"
              }}
              >Password</Form.Label>
              <Form.Control
              style={{
             
             
               
                 border:"0",
                 padding: "10px",
                 borderRadius:"10px",
                boxShadow:"0 0 15px 4px rgba(0,0,0,0.06)"

              }}
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit"
            style={{
              width:"220px",
              margin:"35px auto",
             
          
           
            }}
            >SIGN UP</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterUserScreen;
