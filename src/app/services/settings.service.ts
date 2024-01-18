import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    let urlTheme =
      localStorage.getItem('theme') ?? './assets/css/colors/blue-dark.css';

    this.linkTheme?.setAttribute('href', urlTheme);
  }

  changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');
    links.forEach((element) => {
      element.classList.remove('working');
      const btnLink = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnLink}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
