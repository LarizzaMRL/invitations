import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { ParentsComponent } from './sections/parents/parents.component';
import { CeremonyComponent } from './sections/ceremony/ceremony.component';
import { VenueComponent } from './sections/venue/venue.component';
import { DressCodeComponent } from './sections/dress-code/dress-code.component';
import { GiftsComponent } from './sections/gifts/gifts.component';
import { RsvpComponent } from './sections/rsvp/rsvp.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    ParentsComponent,
    ScheduleComponent,
    CeremonyComponent,
    VenueComponent,
    DressCodeComponent,
    GiftsComponent,
    RsvpComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-invitation';
}
