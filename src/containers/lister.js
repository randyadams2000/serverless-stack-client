import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import VideoRecorder from 'react-video-recorder'
import { API } from "aws-amplify";
import { s3UploadBlob } from "../libs/awsLib";
import { onError } from "../libs/errorLib";
import styled from 'styled-components';
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
    var question = "This is a test";

    const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 22px;
    border-radius:50%;
    color: white;
    border: 10px solid green;
    transition: 0.5s all ease-out;
   position: absolute;
   top:15%;
   left:30%;
   height:40%;
   width: 40%;
  `;
  const Header = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 36px;
    border: 10px solid transparent;
    color: black;
    transition: 0.5s all ease-out;
   position: relative;
 
  `;
   

    return (
        <div>
        <Header>{question}</Header>
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
        <Button>PLEASE KEEP FACE INSIDE THIS</Button>
        </div>
        </div>
    );
}