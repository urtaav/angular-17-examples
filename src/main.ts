import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: `
  
  .menu {
  padding: 1em;
  display: flex;
  gap: 1em;
  font-size: 16px;

  &__item {
    padding: 1em;
    cursor: pointer;
    border-radius: 8px;
    background-color: #9c27b0;
    color: white;
  }
}
`,
  template: `
<section class="menu">
  <span class="menu__item" routerLink="/">Control Flow</span>
  <span class="menu__item" routerLink="/defer">Defer - Lazy Component</span>
</section>

<router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
