import { Component ,signal} from '@angular/core';
import { NoteService } from '../services/noteService';
import { Note } from '../models/note.models';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor(private noteService: NoteService) {}
  handleTitleClick(){
    alert('Title clicked!');
  }

  protected get notes(){
    return this.noteService.getNotes();
  }

  newNoteTitle = signal<Partial<Note>>({
    title: '',
    content: '',
  });

  protected addNote() {
    const NewNote = this.newNoteTitle();
    if(!NewNote.title || !NewNote.content)  return;
    this.noteService.addNotes(NewNote.title, NewNote.content);
    this.newNoteTitle.set({ title: '', content: '' });
  }
}
