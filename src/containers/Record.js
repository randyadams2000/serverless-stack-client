import React from "react";
//import {  } from "react-router-dom";
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
//import { useRecordWebcam } from 'react-record-webcam'
//import {Helmet} from "react-helmet";
//import { API, Storage } from "aws-amplify";
//import { onError } from "../libs/errorLib";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
//import { PageHeader } from "react-bootstrap";
import "./Record.css";

//import { s3Upload } from "../libs/awsLib";

export default function Record(props) {
return (
    <VideoRecorder 
    onRecordingComplete={(videoBlob) => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
    }} 
  />
);
}