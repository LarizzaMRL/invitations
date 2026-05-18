import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.scss'
})
export class VenueComponent {}
