import React from "react";
import {  } from "react-router-dom";
//import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import AWS from 'aws-sdk';
//import { API } from "aws-amplify";
//import { s3Upload } from "../libs/awsLib";


//import { useRecordWebcam } from 'react-record-webcam'
//import {Helmet} from "react-helmet";
//import { API, Storage } from "aws-amplify";
//import { onError } from "../libs/errorLib";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
//import { PageHeader } from "react-bootstrap";
import "./Record.css";

//import { s3Upload } from "../libs/awsLib";


AWS.config.update({
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:7ea26b5d-926b-44fd-8936-f8bec3c89452'
    })
})
AWS.config.apiVersions = {
  s3: '2006-03-01'
};
var s3 = new AWS.S3({
    params: { 
        Bucket: 'immortify-videos' 
    }
});



export default function Record(props) {
return (
    <div className="Record">
    <VideoRecorder 
     isOnInitially
    onRecordingComplete={(videoBlob) => {

        s3.putObject({
                    Key: "video.mp4",
                    Body: videoBlob,
                    'ContentType': 'video/mp4',
                    ACL: 'public-read'
                    }, (err) => {
                        if(err){
                            // On Error
                        } else {
                            // On Success
                        }
                    }
                );
//      console.log('videoBlob', videoBlob)
    }} 
  />
  </div>
);
}