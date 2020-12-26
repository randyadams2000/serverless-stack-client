import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import { API } from "aws-amplify";
import "./Prompts.css";

export default function Prompts() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
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
  }

  onLoad();
}, [isAuthenticated]);

function loadNotes() {
  console.log(API.get("notes","/prompts"));
  return API.get("notes","/prompts");

}

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
          <ListGroupItem >
            {note.prompt}
          </ListGroupItem>
      ) : (
          <ListGroupItem>
           
          </ListGroupItem>
      )
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Question List</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }


return (
  <div className="Home">
  {renderNotes()}
</div>
);
}
