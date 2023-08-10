import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  isToggled = false;

  toggleMenu(){
    this.isToggled = !this.isToggled;
    
    }

    ngOnDestroy(): void {
      this.isToggled = false;
    }
}
