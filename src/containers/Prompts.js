import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import { API , Storage} from "aws-amplify";
import "./Prompts.css";
import { LinkContainer } from "react-router-bootstrap";
import { useParams, useHistory } from "react-router-dom";

export default function Prompts() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const { id , setId} = useParams();
  const history = useHistory();

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
  return API.get("notes", "/notes");
}

async function getURL(theURL)
  {
    return await Storage.vault.get(theURL)
  }

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
          <ListGroupItem header={note.content.trim().split("\n")[0]}>
            {"Created: " + new Date(note.createdAt).toLocaleString()}{'            '}
            <Button size="lg" variant="primary" href={`/showvideo/${note.noteId}`}>Show Video</Button>{'            '}
            <Button size="lg" variant="danger" onClick={() => deleteIt(note.noteId)}>Delete Video</Button>
          </ListGroupItem>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }
  

  async function deleteNote(id) {
    return API.del("notes", `/notes/${id}`);
  }
  
  async function deleteIt(id) {
    await deleteNote(id);
    window.location.reload(false);
  }
  
function renderNotes() {
  return (
    <div className="notes">
      <PageHeader>Video List</PageHeader>
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
