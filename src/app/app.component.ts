import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfawky-dev';

  showMenu(){
    let x = document.getElementById('navlinks');
    if(x.style.display === "none"){
      x.style.display = "block";
    }
    else{
      x.style.display = "none";
    }
  }
}
