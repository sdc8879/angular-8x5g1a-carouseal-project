import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  imageArray = ['a', 'b', 'c', 'd', 'e'];
  currentIndex = 0;

  left() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.imageArray.length - 1 
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
  }
  right() {

    if (this.imageArray.length - 1 == this.currentIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }

  }


}
