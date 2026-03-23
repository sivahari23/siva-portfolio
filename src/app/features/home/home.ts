import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  highlights = signal([
    'Angular Upgrade Leadership (v18 → v19)',
    'Redis Performance Optimization (Node.js BFF)',
    'NgRx Enterprise State Management',
    'AWS Lambda Serverless Integration',
    'Spartacus Enterprise Storefront Experience'
  ]);

}