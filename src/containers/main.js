AWS.config.region = 'us-east-1'; // 1. Enter your region

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:7ea26b5d-926b-44fd-8936-f8bec3c89452' // 2. Enter your identity pool
});

AWS.config.credentials.get(function(err) {
    if (err) alert(err);
    console.log(AWS.config.credentials);
});

var bucketName = 'immortify-videos'; // Enter your bucket name+

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
bstr = atob(arr[2]), n = bstr.length, u8arr = new Uint8Array(n);
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

const audioSource = audioInputSelect.value;
const videoSource = videoSelect.value;
const constraints = {
  audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
  video: {deviceId: videoSource ? {exact: videoSource} : undefined}
};

// Request access to the media devices
navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
// Display a live preview on the video element of the page
setSrcObject(stream, video);

// Start to display the preview on the video element
// and mute the video to disable the echo issue !
video.play();
video.muted = true;

// Initialize the recorder
recorder = new RecordRTCPromisesHandler(stream, {
    mimeType: 'video/webm',
    bitsPerSecond: 1280000
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

var objKey = url_file.name;
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
//                listObjs();
});


  cancelUpload.addEventListener('click', function() {
        if(request.abort()){
            percentage.innerHTML = "Uploading has been canceled.";
        }
    });



// here you can use the result of promiseB
});

// Retrieve recorded video as blob and display in the preview element
/*           var videoBlob = recorder.getBlob();

var blobUrl = URL.createObjectURL(videoBlob);

console.log("Blob url" + blobUrl);

video.srcObject = videoBlob;
video.src = URL.createObjectURL(videoBlob);
video.play();

// Unmute video on preview
video.muted = false;

// Stop the device streaming
recorder.stream.stop();
*/
// Enable record button again !
document.getElementById('btn-start-recording').disabled = false;
}).catch(function(error) {
console.error('stopRecording failure', error);
});
}, false);
         
function listObjs() {
var prefix = '';
bucket.listObjects({
Prefix: prefix
}, function(err, data) {
if (err) {
    results.innerHTML = 'ERROR: ' + err;
} else {
    var objKeys = "";
    data.Contents.forEach(function(obj) {
        objKeys += obj.Key + "<br>";
    });
    results.innerHTML = objKeys;
}
});
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
    modal.style.display = "block";
}
  
'use strict';

const videoElement = document.querySelector('video');
const audioInputSelect = document.querySelector('select#audioSource');
const audioOutputSelect = document.querySelector('select#audioOutput');
const videoSelect = document.querySelector('select#videoSource');
const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);

function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  const values = selectors.map(select => select.value);
  selectors.forEach(select => {
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
  });
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'audioinput') {
      option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
      audioInputSelect.appendChild(option);
    } else if (deviceInfo.kind === 'audiooutput') {
      option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
      audioOutputSelect.appendChild(option);
    } else if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
      videoSelect.appendChild(option);
    } else {
      console.log('Some other kind of source/device: ', deviceInfo);
    }
  }
  selectors.forEach((select, selectorIndex) => {
    if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
      select.value = values[selectorIndex];
    }
  });
}

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

// Attach audio output device to video element using device/sink ID.
function attachSinkId(element, sinkId) {
  if (typeof element.sinkId !== 'undefined') {
    element.setSinkId(sinkId)
        .then(() => {
          console.log(`Success, audio output device attached: ${sinkId}`);
        })
        .catch(error => {
          let errorMessage = error;
          if (error.name === 'SecurityError') {
            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
          }
          console.error(errorMessage);
          // Jump back to first output device in the list as it's the default.
          audioOutputSelect.selectedIndex = 0;
        });
  } else {
    console.warn('Browser does not support output device selection.');
  }
}

function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
  }
/*  
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
    })
 */ 

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  const audioSource = audioInputSelect.value;
  const videoSource = videoSelect.value;
  const constraints = {
    audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  };
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream){

    setSrcObject(stream, video);
    
    // Start to display the preview on the video element
    // and mute the video to disable the echo issue !
    video.play();   
  });
}

audioInputSelect.onchange = start;
videoSelect.onchange = start;
start();
