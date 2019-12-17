import React from 'react';

import NoteActions from './NoteActions';
import NoteArea from './NoteArea';
import NoteShareActions from './NoteShareActions';
import NoteShareList from './NoteShareList';
import { useTextInputBinding } from "../hooks";

export default function NoteContainer(props) {
  const { note, onUpdate, onDelete, onShare } = props;
  const { permission, contributing, reading } = note;

  const [content, bindContent] = useTextInputBinding(note.content)

  function handleUpdateClick() {
    onUpdate({
      "note": {
        "content": content
      }
    });
  }

  function handleDeleteClick() {
    onDelete();
  }
  
  return (
    <React.Fragment>
      <NoteActions
        permission={permission}
        onUpdateClick={handleUpdateClick}
        onDeleteClick={handleDeleteClick}
      />
      <NoteArea
        permission={permission}
        onChange={bindContent}
        defaultContent={note.content}
        content={content}
      />
      <NoteShareActions
        permission={permission}
        onShare={onShare}
      />
      <NoteShareList
        contributing={contributing}
        reading={reading}
        isOwner={permission === "mine"}
      />
    </React.Fragment>
  );
}