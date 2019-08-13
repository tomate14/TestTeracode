import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meetingBook';
  private menuColapsed:boolean;
  
  constructor(){
    this.menuColapsed = false;
  }

  toggleNavbar(){
    this.menuColapsed = !this.menuColapsed;
  }
}
