import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('typing', [
      transition(':enter', [
        style({ width: '0ch', overflow: 'hidden', display: 'inline-block' }),
        animate('2s steps(30, end)', style({ width: '*' })),
      ]),
    ]),
  ]
})
export class HomeComponent {

}
