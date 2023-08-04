import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfawky-dev';
  isToggled = false;

  toggleMenu(){
    this.isToggled = !this.isToggled;
    }
  }
