import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital';
  isMenuScrolled=false;

  @HostListener('window:scroll')
  scrollCheck(){
    if(window.pageYOffset > 200){
      this.isMenuScrolled=true;
    }
    else
    {
    this.isMenuScrolled=false;
    }
  }
}
