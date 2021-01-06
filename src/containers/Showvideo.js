import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./Showvideo.css";
export default function Showvideo() {
const file = useRef(null);
const { id } = useParams();
const history = useHistory();
const [note, setNote] = useState(null);
const [URL, setURL] = useState(null);
const [content, setContent] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    function loadNote() {
      return API.get("notes", `/notes/${id}`);
    }
    async function onLoad() {
      try {
        const note = await loadNote();
        const { content, attachment } = note;

        note.attachmentURL = await Storage.vault.get(attachment);

        setContent(content);
        setNote(note);
      } catch (e) {
        onError(e);
      }

    }

    onLoad();
  }, [id]);


return (
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
