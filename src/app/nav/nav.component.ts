import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  styles: [`
    ul { display:flex; padding-left:0; }
    li { list-style:none; margin-right:12px; }
  `],
  template: `
    <ul>
      <li><a routerLink="/">"/"</a></li>
      <li><a routerLink="/search">/search</a></li>
      <li><a [routerLink]="['/']">['/']</a></li>
      <li><a [routerLink]="['/search']">['/search']</a></li>
    </ul>
  `,
})
export class NavComponent {}
