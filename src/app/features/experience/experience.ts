import { Component, signal } from '@angular/core';
import { Experiences } from './experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  experiences = signal<Experiences[]>([
    {
      company: 'Accenture',
      role: 'Packaged App Development Senior Analyst',
      duration: 'Sep 2025 – Present',
      highlights: [
        'Led Angular upgrade from v18 to v19',
        'Integrated Redis caching in Node.js BFF layer',
        'Improved response time and reduced backend load',
        'Worked on enterprise insurance platform (Hartford)'
      ],
      technologies: [
        'Angular 19',
        'Ionic 8',
        'Redis',
        'Node.js',
        'AWS Lambda',
        'BFF Architecture'
      ]
    },

    {
      company: 'Publicis Sapient',
      role: 'Senior System Engineer',
      duration: 'Sep 2024 – Present',
      highlights: [
        'Resolved defects in Angular Spartacus storefront',
        'Improved SCSS template stability',
        'Optimized API communication using HttpClient',
        'Worked on enterprise pharmaceutical e-commerce platform'
      ],
      technologies: [
        'Angular Spartacus',
        'RxJS',
        'NgRx',
        'SCSS',
        'TypeScript'
      ]
    },

    {
      company: 'Capgemini',
      role: 'Senior Software Engineer',
      duration: 'Jun 2021 – Sep 2024',
      highlights: [
        'Developed Barclays credit card platform using Angular',
        'Implemented NgRx state management',
        'Created Router Guards for secure navigation',
        'Contributed to UI modernization improving productivity'
      ],
      technologies: [
        'Angular',
        'NgRx',
        'TypeScript',
        'Angular Material',
        'SCSS'
      ]
    }
  ]);

}