import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Experience } from './features/experience/experience';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
   component: About
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component:Projects
  },
  {
    path: 'experience',
    component: Experience
  },
  {
    path: 'contact',
    component: Contact
  }
];