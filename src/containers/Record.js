import React from "react";
import {  } from "react-router-dom";
//import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'

import Amplify, { Storage } from 'aws-amplify';


//import AWS from 'aws-sdk'
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

/*
AWS.config.update({
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:58369085-ac6e-44af-9b1e-bc749d769f09'
    })
})
AWS.config.apiVersions = {
  s3: '2006-03-01'
};
var s3 = new AWS.S3({
    params: { 
        Bucket: 'immortify-uploads' 
    }
});

*/



Storage.configure({
    bucket: "immortify-uploads",
    level: "public",
});


export default function Record(props) {
return (
    <div className="Record">
    <VideoRecorder 
     isOnInitially
    onRecordingComplete={(videoBlob) => {
        console.log("recording complete");
        new Promise(async (resolve, reject) =>  {
            Storage.put('test.mp4', videoBlob, { contentType: 'video/mp4' })
            .then(result => resolve(result))
            .catch(err => reject({error: err, object: blob})); 
        });

    }

 /*       
        s3.putObject({
                    Key: "video.mp4",
                    Body: videoBlob,
                    'ContentType': 'video/mp4',
                    ACL: 'public-read'
                    }, (err) => {
                        if(err){
                            console.log("successful upload");
                            // On Error
                        } else {
                            console.log("failed upload");
                            // On Success
                        }
                    }
                );
*/
 //     console.log('videoBlob', videoBlob)
    }
  />
  </div>
);
}