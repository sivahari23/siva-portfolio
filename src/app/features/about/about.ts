import { Component, signal } from '@angular/core';
import { SkillCategory } from './about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  skillCategories = signal<SkillCategory[]>([

    {
      title: 'Frontend Engineering',
      skills: [
        'Angular 21',
        'Angular Material',
        'Spartacus',
        'Ionic 8',
        'SCSS',
        'HTML5'
      ]
    },

    {
      title: 'State Management',
      skills: [
        'NgRx',
        'RxJS',
        'Signals',
        'Reactive Forms'
      ]
    },

    {
      title: 'Backend & BFF Layer',
      skills: [
        'Node.js',
        'BFF Architecture',
        'REST APIs',
        'SOAP APIs'
      ]
    },

    {
      title: 'Cloud & Performance',
      skills: [
        'AWS Lambda',
        'Redis Caching',
        'API Connect (APIC)',
        'Serverless Architecture'
      ]
    },

    {
      title: 'Testing & Quality',
      skills: [
        'Jasmine',
        'Karma',
        'Jest',
        'Dependency Optimization'
      ]
    }

  ]);

}