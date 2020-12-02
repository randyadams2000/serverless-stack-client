import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button         } from "react-bootstrap";
import VideoRecorder from 'react-video-recorder'
import { API } from "aws-amplify";
import { s3UploadBlob } from "../libs/awsLib";
import { onError } from "../libs/errorLib";
import "./Record.css";


export default function Record(props) {
    const history = useHistory();
    const [content] = useState("");
    isLoading,
    disabled = false,
    ...props
    function createNote(note) {
        return API.post("notes", "/notes", {
          body: note
        });
      }
    async function uploadVideo(videoBlob) {
        try {
            const attachment = await s3UploadBlob("video.mp4",videoBlob);
            await createNote({ content, attachment });
            history.push("/");
        } catch (e) {
            onError(e);
        }

    }
        
    return (
        <div className="Record">
        <Button
            disabled={disabled || isLoading}
            >SAVE RECORDING</Button>
        <VideoRecorder 
            isOnInitially
            onRecordingComplete={(videoBlob) => {
                uploadVideo(videoBlob);
                console.log("recording complete");
            }        
            }
        />
        </div>
    );
}