import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  public strArray: string[] = ['one', 'two'];
  constructor() { }
}
