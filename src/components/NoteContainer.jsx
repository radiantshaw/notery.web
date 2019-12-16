import React from 'react';

import NoteActions from './NoteActions';
import NoteArea from './NoteArea';
import NoteShareActions from './NoteShareActions';
import NoteShareList from './NoteShareList';

export default function NoteContainer({ permission, contributors, readers, onShare }) {
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
      <NoteActions permission={permission} />
      <NoteArea permission={permission} />
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