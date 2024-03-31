import { Component } from '@angular/core';

@Component({
  selector: 'app-first-home-work',
  templateUrl: './first-home-work.component.html',
  styleUrls: ['./first-home-work.component.scss'],
})
export class FirstHomeWorkComponent {
  active: boolean = false;
  changeColor() {
    if (this.active) {
      this.active = false;
    } else {
      this.active = true;
    }
  }
}
