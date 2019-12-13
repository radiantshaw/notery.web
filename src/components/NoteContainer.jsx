import React from 'react';

import NoteActions from './NoteActions';
import NoteArea from './NoteArea';
import NoteShareActions from './NoteShareActions';
import NoteShareList from './NoteShareList';

export default function NoteContainer({ type, contributors, readers }) {
  return (
    <React.Fragment>
      <NoteActions type={type} />
      <NoteArea type={type} />
      <NoteShareActions type={type} />
      <NoteShareList
        contributors={contributors}
        readers={readers}
        isOwner={type === "mine"}
      />
    </React.Fragment>
  );
}