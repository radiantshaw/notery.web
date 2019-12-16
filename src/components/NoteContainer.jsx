import React from 'react';

import NoteActions from './NoteActions';
import NoteArea from './NoteArea';
import NoteShareActions from './NoteShareActions';
import NoteShareList from './NoteShareList';
import { useTextInputBinding } from "../hooks";

export default function NoteContainer(props) {
  const { note, onUpdate, onDelete, onShare } = props;
  const { permission, contributors, readers } = note;

  const [content, bindContent] = useTextInputBinding(note.content)

  function handleUpdateClick() {
    onUpdate(content);
  }

  function handleDeleteClick() {
    onDelete(content);
  }
  
  function handleContributorShare(data) {
    onShare({
      ...data,
      permission: "contributing"
    });
  }

  function handleReaderShare(data) {
    onShare({
      ...data,
      permission: "reading"
    });
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
        onContributorShare={handleContributorShare}
        onReaderShare={handleReaderShare}
      />
      <NoteShareList
        contributors={contributors}
        readers={readers}
        isOwner={permission === "mine"}
      />
    </React.Fragment>
  );
}