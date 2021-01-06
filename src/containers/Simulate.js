import React, { useState, useEffect } from "react";
import "./Simulate.css";
import Amplify from 'aws-amplify';
import { Interactions } from 'aws-amplify';
import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";
import { API, Storage } from "aws-amplify";


export default function Simulate() {

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
        console.log("response");
        console.log(response.message);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  
  







/* 
  state = {
    loading: true
  };
  componentDidMount() {
    if (this.video) {
      this.video.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }
*/
return (
  /*
  <video
  autoPlay
  muted
  style={{
    position: "fixed",
    width: "100%",
    left: 0,
    top: 0,
    animation: "fadeIn ease 3s"
  }}
>
  <source src="" type="video/mp4" />
</video>
*/
<div className="Notes">
{note && (
  <video
  autoPlay
  style={{
    position: "fixed",
    width: "80%",
    left: "10%",
    top: 100,
    animation: "fadeIn ease 3s"
  }}
>
  <source src={note.attachmentURL} type="video/mp4" />
</video>
)}
</div> 
);
}
