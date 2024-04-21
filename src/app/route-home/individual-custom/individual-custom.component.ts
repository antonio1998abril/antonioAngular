import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-custom',
  templateUrl: './individual-custom.component.html',
})
export class IndividualCustomComponent {
  @Input() anotherRouteCustomData:string ='Custom Individual Example'
  constructor() { }
}
