import React, {} from "react";
//import ScriptTag from 'react-script-tag';
import {  } from "react-router-dom";
import {Helmet} from "react-helmet";
//import { API, Storage } from "aws-amplify";
//import { onError } from "../libs/errorLib";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import { PageHeader } from "react-bootstrap";
import "./Record.css";

//import { s3Upload } from "../libs/awsLib";

export default function Record() {




return (
  <Helmet>
  <script src="./recordRTC.js" type="text/javascript" />
  <script src="./main.js" type="text/javascript" />
  <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.12.min.js" type="text/javascript" />
  </Helmet>
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