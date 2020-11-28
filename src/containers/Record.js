import React, {} from "react";
import {  } from "react-router-dom";
//import { API, Storage } from "aws-amplify";
//import { onError } from "../libs/errorLib";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import { PageHeader } from "react-bootstrap";
import "./Record.css";
//import { s3Upload } from "../libs/awsLib";





export default function Record() {




  AWS.config.region = 'us-east-2'; // 1. Enter your region

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-2:333333-0768569a-664443-23333333377' // 2. Enter your identity pool
  });

  AWS.config.credentials.get(function(err) {
      if (err) alert(err);
      console.log(AWS.config.credentials);
  });

  var bucketName = 'appmaistersupload'; // Enter your bucket name+

  var bucket = new AWS.S3({
      params: {
          Bucket: bucketName
      }
  });

  var fileChooser = document.getElementById('file-chooser');
  var button = document.getElementById('upload-button');
  var results = document.getElementById('results');
  var percentage = document.getElementById('percentage');
  var cancelUpload = document.getElementById('cancel-button');

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}
// Store a reference of the preview video element and a global reference to the recorder instance
var video = document.getElementById('my-preview');
var recorder;

// When the user clicks on start video recording
document.getElementById('btn-start-recording').addEventListener("click", function(){
// Disable start recording button
this.disabled = true;

// Request access to the media devices
navigator.mediaDevices.getUserMedia({
  audio: true, 
  video: true
}).then(function(stream) {
  // Display a live preview on the video element of the page
  setSrcObject(stream, video);

  // Start to display the preview on the video element
  // and mute the video to disable the echo issue !
  video.play();
  video.muted = true;

  // Initialize the recorder
  recorder = new RecordRTCPromisesHandler(stream, {
      mimeType: 'video/webm',
      bitsPerSecond: 128000
  });

  // Start recording the video
  recorder.startRecording().then(function() {
      console.info('Recording video ...');
  }).catch(function(error) {
      console.log(error);
      console.error('Cannot start video recording: ', error);
  });

  // release stream on stopRecording
  recorder.stream = stream;

  // Enable stop recording button
  document.getElementById('btn-stop-recording').disabled = false;
}).catch(function(error) {
         console.log(error);
  console.error("Cannot access media devices: ", error);
});
}, false);

// When the user clicks on Stop video recording
document.getElementById('btn-stop-recording').addEventListener("click", function(){
this.disabled = true;

recorder.stopRecording().then(function() {
  console.info('stopRecording success');

 var DataUrl = recorder.getDataURL();
 var random = Math.random( ); 
 DataUrl.then(function(result) {

      var url_file = dataURLtoFile(result, random +'.webm');

var objKey = 'testing/' + url_file.name;
  var params = {
      Key: objKey,
      ContentType: url_file.type,
      Body: url_file,
      ACL: 'public-read'
  };

  // bucket.putObject(params, function(err, data) {
  //     if (err) {
  //         results.innerHTML = 'ERROR: ' + err;
  //     } else {
  //         listObjs();
  //     }
  // });
  var request = bucket.putObject(params);

  request.on('httpUploadProgress', function (progress) {
      percentage.innerHTML = parseInt((progress.loaded * 100) / progress.total)+'%'; 
      console.log("Uploaded :: " + parseInt((progress.loaded * 100) / progress.total)+'%');
     // console.log(progress.loaded + " of " + progress.total + " bytes");
  }).send(function(err, data){
      percentage.innerHTML = "File has been uploaded successfully.";
      listObjs();
  });


    cancelUpload.addEventListener('click', function() {
          if(request.abort()){
              percentage.innerHTML = "Uploading has been canceled.";
          }
      });


 
// here you can use the result of promiseB
});
 
  // Retrieve recorded video as blob and display in the preview element
 /* var videoBlob = recorder.getBlob();

  var blobUrl = URL.createObjectURL(videoBlob);

  console.log("Blob url" + blobUrl);

   video.srcObject = videoBlob*/
//  video.src = URL.createObjectURL(videoBlob);
  video.play();

  // Unmute video on preview
  video.muted = false;

  // Stop the device streaming
  recorder.stream.stop();

  // Enable record button again !
  document.getElementById('btn-start-recording').disabled = false;
}).catch(function(error) {
  console.error('stopRecording failure', error);
});
}, false);







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