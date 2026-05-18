import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss'
})
export class GiftsComponent {
  copy(value: string, event: Event) {
    const btn = event.currentTarget as HTMLElement;
    navigator.clipboard?.writeText(value).then(() => {
      const original = btn.getAttribute('data-label') ?? '';
      btn.textContent = '¡Copiado!';
      setTimeout(() => { btn.textContent = original; }, 1500);
    });
  }
}
