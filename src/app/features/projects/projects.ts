import { Component, signal } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = signal<Project[]>([
    {
      title: 'Barclays Credit Card Management Platform',
      company: 'Capgemini',
      description:
        'Developed enterprise-scale Angular applications with NgRx state management and Router Guards for secure navigation.',
      techStack: [
        'Angular',
        'NgRx',
        'TypeScript',
        'Angular Material',
        'SCSS'
      ],
      architecture: [
        'Enterprise SPA',
        'Route Guards',
        'State Management',
        'Secure Navigation'
      ],
      impact:
        '$7.9B incremental revenue contribution through UI modernization'
    },

    {
      title: 'Hartford Insurance Digital Platform',
      company: 'Accenture',
      description:
        'Led Angular upgrade from v18 to v19 and optimized Redis caching integration in AWS-backed Node.js BFF layer.',
      techStack: [
        'Angular 19',
        'Ionic 8',
        'Node.js',
        'Redis',
        'AWS Lambda'
      ],
      architecture: [
        'BFF Architecture',
        'Serverless Backend',
        'Caching Layer',
        'Performance Optimization'
      ],
      impact:
        'Reduced backend load and improved response time using Redis caching'
    },

    {
      title: 'Australian Pharmaceutical Industries (Spartacus)',
      company: 'Publicis Sapient',
      description:
        'Resolved Angular Spartacus defects and enhanced SCSS templates with improved API communication using HttpClient.',
      techStack: [
        'Angular Spartacus',
        'RxJS',
        'NgRx',
        'SCSS',
        'TypeScript'
      ],
      architecture: [
        'Composable Storefront',
        'Reactive Programming',
        'Enterprise E-commerce'
      ],
      impact:
        'Improved UI stability and defect resolution across enterprise storefront'
    }
  ]);

}

