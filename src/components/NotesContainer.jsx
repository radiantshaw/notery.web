import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import NoteThumb from './NoteThumb';

export default function NotesContainer(props) {
  return (
    <Tabs defaultActiveKey="mine">
      <Tab eventKey="mine" title="Mine">
        {props.notes.filter(note => {
          return note['type'] === 'mine'
        }).map(note => {
          return (
            <NoteThumb key={note['id']} id={note['id']}>
              {note['content']}
            </NoteThumb>
          );
        })}
      </Tab>
      <Tab eventKey="contributing" title="Contributing">
        {props.notes.filter(note => {
          return note['type'] === 'contributing'
        }).map(note => (
          <NoteThumb key={note['id']} id={note['id']}>
            {note['content']}
          </NoteThumb>
        ))}
      </Tab>
      <Tab eventKey="reading" title="Reading">
        {props.notes.filter(note => {
          return note['type'] === 'reading'
        }).map(note => (
          <NoteThumb key={note['id']} id={note['id']}>
            {note['content']}
          </NoteThumb>
        ))}
      </Tab>
    </Tabs>
  );
}