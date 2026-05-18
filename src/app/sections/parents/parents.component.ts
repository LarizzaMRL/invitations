import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.scss'
})
export class ParentsComponent {}
