import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-fourth-home-work',
  templateUrl: './fourth-home-work.component.html',
  styleUrls: ['./fourth-home-work.component.scss']
})
export class FourthHomeWorkComponent {
  newMessage:string = "Hello World";

  messageAlert(){
    alert('I was triggered by an event')
  }
}
