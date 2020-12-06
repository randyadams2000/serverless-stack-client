import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import VideoRecorder from 'react-video-recorder'
import { API } from "aws-amplify";
import { s3UploadBlob } from "../libs/awsLib";
import { onError } from "../libs/errorLib";
import "./Record.css";



export default function Record(props) {
 //   const history = useHistory();
    const [content] = useState("");

    function createNote(note) {
        return API.post("notes", "/notes", {
          body: note
        });
      }

    async function uploadVideo(videoBlob) { 
        try {
            const attachment = await s3UploadBlob("video.mp4",videoBlob);
            await createNote({ content, attachment });
//            history.push("/");
        } catch (e) {
            onError(e);
        }

    }
    var theVideoBlob;



    return (
        <div className="Record">
        <VideoRecorder 
            isOnInitially
            onRecordingComplete={(videoBlob) => {
                theVideoBlob = videoBlob;
                console.log("recording complete");
            }}        
            onSaveVideo={() => {
                uploadVideo(theVideoBlob);
                console.log("uploaded");
            }}        
        />
            
        </div>
    );
}