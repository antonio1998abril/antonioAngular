import { Component } from '@angular/core';
import { OneService } from 'src/app/services/one.service';

@Component({
  selector: 'app-custom-a',
  templateUrl: './custom-a.component.html',
})
export class CustomAComponent {
  public strArray: Array<string> = [];
  constructor(private readonly injectableAService: OneService) {
    this.strArray = this.injectableAService.strArray;
  }
}

