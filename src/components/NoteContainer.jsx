import React from 'react';

import NoteActions from './NoteActions';
import NoteArea from './NoteArea';
import NoteShareActions from './NoteShareActions';
import NoteShareList from './NoteShareList';

export default function NoteContainer({ type, contributors, readers, onShare }) {
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
      <NoteActions type={type} />
      <NoteArea type={type} />
      <NoteShareActions
        type={type}
        onContributorShare={handleContributorShare}
        onReaderShare={handleReaderShare}
      />
      <NoteShareList
        contributors={contributors}
        readers={readers}
        isOwner={type === "mine"}
      />
    </React.Fragment>
  );
}