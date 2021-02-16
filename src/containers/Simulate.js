import React, { useState, useEffect } from "react";
import "./Simulate.css";
import Amplify from 'aws-amplify';
import { Interactions } from 'aws-amplify';
import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";
import { API, Storage } from "aws-amplify";
import {Button, FormControl,Spinner} from "react-bootstrap"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


export default function Simulate() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState(null);
  const [URL, setURL] = useState(null);
  const [content, setContent] = useState("");
  const [video1Z, setVideo1Z] = useState("9001");
  const [video2Z, setVideo2Z] = useState("9000");
  const [videoSource1, setVideoSource1] = useState("");
  const [videoSource2, setVideoSource2] = useState("");

  useEffect(() => {
    function loadNote(id) {
      console.log('Id:' + id);
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
        console.log("Note.attachment="+attachment);
        note.attachmentURL = await Storage.vault.get(attachment);
        console.log("URL is:" + note.attachmentURL);

        setContent(content);
        setNote(note);

        var vid = document.getElementById("video1");
        vid.src = note.attachmentURL;
        vid.play();

        vid.onplaying = function() {
            setIsLoading(false);
            console.log("The video is now playing");
            console.log("video height:" + vid.clientHeight); // returns the intrinsic height of the video
            console.log("video width:" + vid.clientWidth); // returns the intrinsic height of the video
            var but = document.getElementById("subButton");
            but.style.top = vid.clientHeight;
            console.log("herer is buttontop:" + but.style.top);

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

  function loadNote1(id) {
    var note = API.get("notes", `/video/${id}`);
    console.log("THERETURN = " + note);
    const { content, attachment } = note;
    if (attachment == undefined)
      alert("undeifind result");
    console.log("attachment=" + attachment);
    return note;
  }

  async function getAnswer()
  {
    var input = document.getElementById("inputField");
    var vid ="";
    setIsLoading(true);
    console.log("Asking Lex for answer to :" + input);
    const response = await Interactions.send("Immortify", input.value);
    console.log("response is:" + response.message);
    const note = await loadNote1(response.message);
    // Log chatbot response
    const { content, attachment } = note;

    console.log("Note.attachment="+attachment);
    note.attachmentURL = await Storage.vault.get(attachment);
    console.log("URL is:" + note.attachmentURL);
    setContent(content);
    setNote(note);
    if(video1Z == "9000")
    {
      vid = document.getElementById("video1");
      vid.src = note.attachmentURL;
      console.log("Video 1 to the front");
      setVideo1Z("9001");
      setVideo2Z("9000");
      vid.play();
      vid.onplaying = function() {
        setIsLoading(false);
        console.log("The video is now playing");
        console.log("video height:" + vid.clientHeight); // returns the intrinsic height of the video
        console.log("video width:" + vid.clientWidth); // returns the intrinsic height of the video
        var but = document.getElementById("subButton");
        but.style.top = vid.clientHeight;
        console.log("herer is buttontop:" + but.style.top);

    };

        console.log("playing video 1");
    }
    else{
      vid = document.getElementById("video2");
      vid.src = note.attachmentURL;
      console.log("Video 2 to the front");
      setVideo1Z("9000");
      setVideo2Z("9001");
      vid.play();
        console.log("playing video 2");
        vid.onplaying = function() {
          setIsLoading(false);
          console.log("The video is now playing");
          console.log("video height:" + vid.clientHeight); // returns the intrinsic height of the video
          console.log("video width:" + vid.clientWidth); // returns the intrinsic height of the video
          var but = document.getElementById("subButton");
          but.style.top = vid.clientHeight;
          console.log("herer is buttontop:" + but.style.top);

      };

    }
    var inputfield = document.getElementById("inputField");
    inputfield.value = "";
  }

function onKeyUp(event) {
  if(event.charCode==13){
    getAnswer();    
  } 
}
  
return (
  <>
<Loader type="Puff" color="#00BFFF" height={100} width={100} visible={isLoading}  style={{
    zIndex: 10000,
    position: "absolute",
    left: "50%",
    top: "50%",
  }}/>
{note && (
  <video id="video1"
  style={{
    zIndex: video1Z,
    position: "absolute",
    width: "80%",
    left: "10%",
    top: 100,
  }}
>
</video>
)}




{note && (
  <video id="video2"
  style={{
    zIndex: video2Z,
    position: "absolute",
    width: "80%",
    left: "10%",
    top: 100,
  }}
>
</video>
)}


    



    <FormControl onKeyPress={onKeyUp} id="inputField" style={{zIndex:'9999', width:"70%", left:"10%", position: "absolute"}}
      placeholder="Ask me a question."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />



<Button id="subButton" style={{zIndex:'9999', right:"10%", position: "absolute"}}
 //   onClick={() => toggleVideo()}
      onClick={() => getAnswer()}
 
  >
        Answer Question
      </Button>
</>
);
}
