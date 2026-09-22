import { Injectable,signal } from '@angular/core';
import { Note } from '../models/note.models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
    private readonly notes = signal<Note[]>([
    {
      id: 1,
      title: 'Note 1',
      content: 'This is the content of note 1.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      title: 'Note 2',
      content: 'This is the content of note 2.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  getNotes() {
    return this.notes();
  }

  addNotes(title: string, content: string) {
    const newNote: Note = {
      id: Date.now(),
      title: title,
      content:content,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.notes.update(notes => [...notes, newNote]);
  }
}
