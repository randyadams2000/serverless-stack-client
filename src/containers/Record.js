import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import VideoRecorder from 'react-video-recorder'
import { API } from "aws-amplify";
import { s3UploadBlob } from "../libs/awsLib";
import { onError } from "../libs/errorLib";
import styled from 'styled-components';
import "./Record.css";


export default function Record(props) {
 //   const history = useHistory();
 
 const [modalShow, setModalShow] = React.useState(false);
 const [content] = useState("");
 const [mobileBody, setMobileBody] = useState("Please identify yourself by telling us your name and where you were born, then prompt the listener to ask you questions about your life.");
  const [notes, setNotes] = useState([]);
  const {isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  

    useEffect(() => {
        async function onLoad() {
          if (!isAuthenticated) {
            return;
          }
      
          try {
            const notes = await loadNotes();
            setNotes(notes);
          } catch (e) {
            onError(e);
          }
          setIsLoading(false);
          setModalShow(true);
        }
        onLoad();
      }, [isAuthenticated]);
      
      function loadNotes() {
        console.log(API.get("notes","/prompts"));
        return API.get("notes","/prompts");
      
      }

      function getPrompt() {
        return notes.shift();
      };
      
      
    function createNote(note) {
        return API.post("notes", "/notes", {
          body: note
        });
      }

    async function uploadVideo(videoBlob) { 

        setModalShow(true);

        try {
            const attachment = await s3UploadBlob("video.mp4",videoBlob);
            await createNote({ content, attachment });
            console.log(attachment);
//            history.push("/");
        } catch (e) {
            onError(e);
        }
    }
    var theVideoBlob;
   
    const Button1 = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 22px;
    border-radius:50%;
    color: white;
    border: 10px solid rgba(0, 355, 0, .3);;
    transition: 0.5s all ease-out;
   position: absolute;
   top:100px;
   left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
   width: 400px;
   height: 500px;
  `;
   

    

    return (
   <div className="Record">
        <VideoRecorder 
            isOnInitially
            onRecordingComplete={(videoBlob) => {
                theVideoBlob = videoBlob;
                console.log("recording complete");
//                console.log(getPrompt().prompt);
            }}        
            onSaveVideo={() => {
                setMobileBody(getPrompt().prompt);
                uploadVideo(theVideoBlob);
                console.log("uploaded");
            }}        
        />
        <Button1>PLEASE KEEP FACE INSIDE THIS</Button1>
        <h2>Question: {mobileBody}</h2>

        <>

        <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Record an Answer to This:</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div><h2>{mobileBody}</h2></div>
        </Modal.Body>
        <Modal.Footer>
        <center>
            <Button color="green" size="lg" onClick={() => setModalShow(false)}>OK</Button>
        </center>
        </Modal.Footer>
      </Modal>
      </>


        </div>
    );
}