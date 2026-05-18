import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-ceremony',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './ceremony.component.html',
  styleUrl: './ceremony.component.scss'
})
export class CeremonyComponent {}
