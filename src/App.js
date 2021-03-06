import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";
import clouds from './assets/img/clouds.jpg'

function App() {
const history = useHistory();
const [isAuthenticated, userHasAuthenticated] = useState(false);
const [isAuthenticating, setIsAuthenticating] = useState(true);
useEffect(() => {
  onLoad();
}, []);

async function onLoad() {
  try {
    await Auth.currentSession();
    userHasAuthenticated(true);
  }
  catch(e) {
    if (e !== 'No current user') {
	onError(e);
    }
  }

  setIsAuthenticating(false);
}

async function handleLogout() {
  await Auth.signOut();
  userHasAuthenticated(false);
  history.push("/login");
}


return (
  !isAuthenticating && (
    <div className="App container" styles={{ backgroundImage:`url(${clouds})` }}>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img src="../infinity.png" alt="Immortify"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {isAuthenticated ? (
              <>
              <LinkContainer to="/simulate">
                  <NavItem>Simulate</NavItem>
                </LinkContainer>
                <LinkContainer to="/prompts">
                  <NavItem>Recordings</NavItem>
                  </LinkContainer>
                <LinkContainer to="/record">
                  <NavItem>Record</NavItem>
                  </LinkContainer>
                <LinkContainer to="/settings">
                  <NavItem>Settings</NavItem>
                </LinkContainer>
                <NavItem onClick={handleLogout}>Logout</NavItem>
              </>
            ) : (
              <>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider
        value={{ isAuthenticated, userHasAuthenticated }}
      >
        <Routes />
      </AppContext.Provider>
    </div>
  )
);

}
export default App;