import React, {} from "react";
import {  } from "react-router-dom";
import { useRecordWebcam } from 'react-record-webcam'
//import {Helmet} from "react-helmet";
//import { API, Storage } from "aws-amplify";
//import { onError } from "../libs/errorLib";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
//import { PageHeader } from "react-bootstrap";
import "./Record.css";

//import { s3Upload } from "../libs/awsLib";

export default function Record(props) {
    const recordWebcam = useRecordWebcam();
return (
    <div>
    <p>Camera status: {recordWebcam.status}</p>
    <button onClick={recordWebcam.open}>Open camera</button>
    <button onClick={recordWebcam.start}>Start recording</button>
    <button onClick={recordWebcam.stop}>Stop recording</button>
    <button onClick={recordWebcam.retake}>Retake recording</button>
    <button onClick={recordWebcam.download}>Download recording</button>
    <video ref={recordWebcam.webcamRef} autoPlay muted />
    <video ref={recordWebcam.previewRef} autoPlay muted loop />
  </div>
);
}