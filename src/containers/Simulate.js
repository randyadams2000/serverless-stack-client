import React, { useState, useEffect } from "react";
import "./Simulate.css";
import Amplify from 'aws-amplify';
import { Interactions } from 'aws-amplify';
import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";
import { API, Storage } from "aws-amplify";
import {Button, Fade} from "react-bootstrap"



export default function Simulate() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState(null);
  const [URL, setURL] = useState(null);
  const [content, setContent] = useState("");
  


  useEffect(() => {
    function loadNote(id) {
      return API.get("notes", `/video/${id}`);
    }
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
      Amplify.configure({
        Auth: {
          identityPoolId: 'us-east-1:58369085-ac6e-44af-9b1e-bc749d769f09',
          region: 'us-east-1'
        },
        Interactions: {
          bots: {
            "Immortify": {
              "name": "immortify",
              "alias": "$LATEST",
              "region": "us-east-1",
            },
          }
        }
      });
  
      try {
        let userInput = "who are you";
  
        // Provide a bot name and user input
        const response = await Interactions.send("Immortify", userInput);

        const note = await loadNote(response.message);
        
        // Log chatbot response
        const { content, attachment } = note;

        note.attachmentURL = await Storage.vault.get(attachment);

        setContent(content);
        setNote(note);

        var vid = document.getElementById("video1");
        vid.onplaying = function() {
            console.log("The video is now playing");
            console.log("video height:" + vid.clientHeight); // returns the intrinsic height of the video
            console.log("video width:" + vid.clientWidth); // returns the intrinsic height of the video

        };
        console.log("response");
        console.log(response.message);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
return (
  <>
  
  <Fade in={open1} >

<div id="videodiv">
{note && (
  <video id="video1"
  autoPlay
  style={{
    zIndex: '9000',
    position: "absolute",
    width: "80%",
    left: "10%",
    top: 100,
  }}
>
  <source src={note.attachmentURL} type="video/mp4" />
</video>
)}
</div> 
</Fade>
<Fade in={open2} >
<div>
{note && (
  <video id="video2"
  style={{
    zIndex: '9000',
    position: "absolute",
    width: "80%",
    left: "10%",
    top: 100,
  }}
>
  <source src={note.attachmentURL} type="video/mp4" />
</video>
)}
</div> 
</Fade>
<Button style={{zIndex:'9999', bottom:100, position: "absolute"}}
    onClick={() => setOpen1(!open1)}
    onClick={() => setOpen2(!open2)}
 //   aria-controls="example-fade-text"
 //   aria-expanded={open1}
  >
        Toggle Video 1
      </Button>
</>
);
}
