import React, { useEffect } from "react";
import { PageHeader } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import "./Home.css";

export default function Home() {
  const { isAuthenticated } = useAppContext();

useEffect(() => {
  async function onLoad() {
    if (!isAuthenticated) {
      return;
    }
  }
  onLoad();
}, [isAuthenticated]);


  function renderLander() {
    return (
      <center>
      <div className="lander">
        <h1>Stand Up for Yourself After You're Dead</h1>
        <p>Let us create an immortal avatar that looks like you,<br/> sounds like you and tells the story of your life.</p>
        <p>There is no charge or obligation, it's free and easy to create.</p>
        <p>All your information is kept private but you can choose<br/> to share your avatar with others if you wish.</p>
        <p>To begin, simply click the Signup button above.</p>
      </div>
      </center>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Authenticated</PageHeader>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}