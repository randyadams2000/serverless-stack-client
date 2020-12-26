import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { Button, Modal, PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
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
    const [notes, setNotes] = useState([]);
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);

    var questionCount = 0;
  

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
    var title = questionCount === 0 ? ("Recording Instructions") : ("Question");
    var body = questionCount === 0 ? ("<h4>You will be presented with a series of questions.  You can choose to record and asnwer to the question or skip to the next question.<p>The more questions you answer the better your immorticon will become, so try to answer every question.<p>First you will be presented with a question and you need to click OK to begin the process of answering the question.<p>At that point you just need to click the red record button to start the recording (a countdown timer will give you 3 seconds to prepare then start recording. Click the red squaree button to end the recording. <p>After you stop recording, the recording will play and you can decide to accept that recording or re-record it.<p>Please try to keep your head inside the green circle and look directly into the camera.  It is also important to end the recording with your body and face in the same position and expression it was when you started the recording or the system will not appear natural between responses.<p>Also please answer the question as if a person just asked you the question, don't repeat the question.</h4>")
    :
    (
      getPrompt()
    );

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
   

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <b>{title}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div  dangerouslySetInnerHTML={{__html: body}}></div>
        </Modal.Body>
        <Modal.Footer>
        questionCount === 0 ? (
          <Button onClick={props.onHide}>OK</Button>)
          :
          (
            <Button onClick={props.onHide}>OK</Button>
            <Button onClick={props.onHide}>SKIP</Button>
          );
        </Modal.Footer>
      </Modal>
    );
  }

  function questionModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <b>{title}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div  dangerouslySetInnerHTML={{__html: body}}></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }
    

    return (
   <div className="Record">
        <VideoRecorder 
            isOnInitially
            onRecordingComplete={(videoBlob) => {
                theVideoBlob = videoBlob;
                console.log("recording complete");
                console.log(getPrompt().prompt);
            }}        
            onSaveVideo={() => {
                uploadVideo(theVideoBlob);
                console.log("uploaded");
            }}        
        />
        <Button1>PLEASE KEEP FACE INSIDE THIS</Button1>

        <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>

        </div>
    );
}