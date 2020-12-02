import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import VideoRecorder from 'react-video-recorder'
import { API } from "aws-amplify";
import { s3UploadBlob } from "../libs/awsLib";
import { onError } from "../libs/errorLib";


export default function Record(props) {
    const file = useRef(null);
    const history = useHistory();
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function createNote(note) {
        return API.post("notes", "/notes", {
          body: note
        });
      }
async function uploadVideo(videoBlob) {
    setIsLoading(true);
    try {
        const attachment = await s3UploadBlob("video.mp4",videoBlob);
        await createNote({ content, attachment });
        history.push("/");
    } catch (e) {
        onError(e);
        setIsLoading(false);
    }

}
      
    return (
        <div className="Record">
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