import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NoteService} from "../../services/noteService";
import {Note} from "../../models/note.models";

@Component({
  selector: 'app-note-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
 constructor(private noteService: NoteService) {}
  newNoteTitle = signal<Partial<Note>>({
    title: '',
    content: '',
  });

  protected submitted = false;

  protected addNote(form:any) {
    this.submitted = true;

    if(form.invalid) return;
    
    const NewNote = this.newNoteTitle();
    if(!NewNote.title || !NewNote.content)  return;
    this.noteService.addNotes(NewNote.title, NewNote.content);
    this.newNoteTitle.set({ title: '', content: '' });

    form.resetForm();
    this.submitted = false;
  }
}
