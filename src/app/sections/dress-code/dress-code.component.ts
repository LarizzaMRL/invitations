import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-dress-code',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './dress-code.component.html',
  styleUrl: './dress-code.component.scss'
})
export class DressCodeComponent {}
