import { Component ,signal} from '@angular/core';
import { NoteService } from '../../services/noteService';
import { Note } from '../../models/note.models';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NoteAdd} from "../../components/note-add/note-add";
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink, NoteAdd],
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
}
