import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.models';
import {CommonModule} from "@angular/common";
import {Header} from "./header/header";
import {Footer} from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [CommonModule,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  handleSubscribeClick() {
    alert('Subscribe button clicked!');
  }
  protected readonly notes = signal<Note[]>([
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
}
