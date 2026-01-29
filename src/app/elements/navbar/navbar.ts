import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isDarkMode = true; // Default to Dark Mode

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');

      // If user specifically chose light, we disable dark mode.
      if (savedTheme === 'light') {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark-theme');
      } else {
        // Otherwise (default or explicit dark), we apply dark mode
        this.isDarkMode = true;
        document.documentElement.classList.add('dark-theme');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
