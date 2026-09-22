import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import {Header} from "./header/header";
import {Footer} from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  handleSubscribeClick() {
    alert('Subscribe button clicked!');
  }
  title = "My Notes App";

}
