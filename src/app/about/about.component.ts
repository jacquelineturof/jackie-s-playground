import { Component } from '@angular/core';


export interface Feature {
    color: string;
    cols: number;
    rows: number;
    name: string;
    description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  features: Feature[] = [
    { name: 'Feature 1', description: 'You think water moves fast?',
      cols: 3, rows: 1, color: '#0e4caf' },
    { name: 'Feature 2', description: 'You should see ice.',
      cols: 1, rows: 2, color: '#57B8FF' },
    { name: 'Feature 3', description: 'It moves like it has a mind.',
      cols: 1, rows: 1, color: '#B66D0D' },
    { name: 'Feature 4', description: 'Like it knows it killed the world once and got a taste for murder.',
      cols: 2, rows: 1, color: '#FE6847' }
  ];
}
