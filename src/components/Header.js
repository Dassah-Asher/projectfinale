import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FiPower, FiUser, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


const Header = () => {
  const { logout, userInfo } = useContext(UserContext);

  // const user = JSON.parse(localStorage.getItem("userInfo"));

  const handlelogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-primary navbar-expand text-white"
     style={{
       textDecoration:"none"
     }}
    >
      <Container
      >
        <Navbar.Brand className="text-white">
          <Link to="/" style={{
            color: "white",
            textDecoration:"none",
           textDecoration:"none",
            marginLeft:"970%",
           padding: "20px 2rem",
           border: "0.1px solid #3693ff",
           borderRadius: "10px",
           fontSize:"10px"
             
              
           
        }}><FiHome size={30}/></Link>
        </Navbar.Brand>
        <Nav>

          {userInfo.token ? (
            <>
                    <Nav.Link>
                <Link to="/results" className="nav-link" style={{color: "white"}}>
                  RESULTS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/addresult" className="nav-link" style={{color: "white"}}>
                  ADD
                </Link>
              </Nav.Link>
              <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{userInfo.name}</NavDropdown.Item>
                <NavDropdown.Item>{userInfo.email}</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/logout"
                    className="nav-link bg-success text-white"
                    onClick={handlelogout}
                  >
                    <FiPower size={30} />
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              {/* <Link to="/signin">
                <Nav.Link href="/signin">SIGN IN</Nav.Link>
              </Link> */}
              <Link to="/register"
              className="button"
              style={{
                textDecoration:"none",
                color:"blue",
                textDecoration: "none",
                padding: "1px 2rem",
                border: "0.1px solid #3693ff",
                borderRadius: "10px",
                fontWeight: "bold",
                marginLeft:"75%",
                fontSize:"10px"
              }}
              >
                <Nav.Link href="/register" style={{color: "white"}}>SIGN UP</Nav.Link>
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
