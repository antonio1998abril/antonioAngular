import { Component } from '@angular/core';
import { TwoService } from 'src/app/services/two.service';
@Component({
  selector: 'app-custom-c',
  templateUrl: './custom-c.component.html',
})
export class CustomCComponent {
  public persistentData!: string;

  constructor(private readonly injectableBService: TwoService) {
    this.persistentData = this.injectableBService.persistentData;
  }
}
