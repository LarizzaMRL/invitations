import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToNext() {
    document.getElementById('parents')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
