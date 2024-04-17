import { Component } from '@angular/core';
import { TwoService } from 'src/app/services/two.service';
@Component({
  selector: 'app-custom-b',
  templateUrl: './custom-b.component.html',
})
export class CustomBComponent {
  public persistentData!: string;

  constructor(private readonly injectableBService: TwoService) {
    this.persistentData = this.injectableBService.persistentData;
  }
}
