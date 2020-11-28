import React, {} from "react";
import {  } from "react-router-dom";
//import { API, Storage } from "aws-amplify";
//import { onError } from "../libs/errorLib";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import { PageHeader } from "react-bootstrap";
import "./Record.css";
import "./recordRTC.js";
import "./recordRTCc.js";
import "./main.js";
//import { s3Upload } from "../libs/awsLib";

export default function Record() {
return (
  <div className="Notes">
  <PageHeader>Record</PageHeader>
  <button id="btn-start-recording">
      Start Recording
  </button>
  <button disabled="disabled" id="btn-stop-recording">
      Stop Recording
  </button>
  <button id="cancel-button">
      Cancel Upload
  </button>
  <hr/>
  <video autoplay="" controls="" id="my-preview">
  </video>
  <p id="percentage">
  </p>
</div>
);
}