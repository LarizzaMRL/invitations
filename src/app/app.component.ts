import { Component } from '@angular/core';
import { DateComponent } from './sections/date/date.component';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    DateComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-invitation';
}
