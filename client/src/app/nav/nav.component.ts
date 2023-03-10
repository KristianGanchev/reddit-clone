import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isMenuOpen: boolean = false;
  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const dark = localStorage.getItem("dark");

    if (dark !== null){
      this.isDarkTheme = JSON.parse(dark);
    }
  }

  toggleDarkTheme(checked: any) {
    this.themeService.setTheme(checked.target.checked);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  clickedOutside(): void {
    this.isMenuOpen = false;
  }
}
