import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <h2>Technical Skills</h2>

    <ul>
      @for (skill of skills(); track skill) {
        <li>{{ skill }}</li>
      }
    </ul>
  `
})
export class SkillsComponent {

  skills = signal([
    'Angular 21',
    'NgRx',
    'RxJS',
    'Node.js BFF',
    'AWS Lambda',
    'Redis',
    'IBM API Connect',
    'Ionic 8',
    'TypeScript'
  ]);

}