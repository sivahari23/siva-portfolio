import {
  Injectable,
  signal,
  inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  platformId = inject(PLATFORM_ID);

  darkMode = signal(false);

  constructor() {

    if (isPlatformBrowser(this.platformId)) {

      const savedTheme =
        localStorage.getItem('theme');

      this.darkMode.set(
        savedTheme === 'dark'
      );

      this.applyTheme();

    }

  }

  toggleTheme() {

    this.darkMode.update(v => !v);

    this.applyTheme();

  }

  applyTheme() {

    if (isPlatformBrowser(this.platformId)) {

      const theme =
        this.darkMode()
          ? 'dark-theme'
          : 'light-theme';

      document.body.className = theme;

      localStorage.setItem(
        'theme',
        this.darkMode() ? 'dark' : 'light'
      );

    }

  }

}