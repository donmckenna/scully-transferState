import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    Home<br/>----------------------<br/>
    <app-post-list></app-post-list>
  `
})
export class HomeComponent {}
