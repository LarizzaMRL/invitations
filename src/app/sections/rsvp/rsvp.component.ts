import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  phone = '529614422149';
  passes = this.getPassesFromUrl();

  private getPassesFromUrl(): number {
    if (typeof window === 'undefined') return 1;
    const params = new URLSearchParams(window.location.search);
    const code = parseInt(params.get('code') ?? '', 10);
    return [1, 2, 3, 4].includes(code) ? code : 1;
  }

  get passesLabel(): string {
    return `${this.passes} ${this.passes === 1 ? 'persona' : 'personas'}`;
  }

  get message(): string {
    return `Hola, confirmo mi asistencia (${this.passesLabel}) a la boda de Larizza & Alonso el 07 de noviembre.`;
  }

  get whatsappLink(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
