import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isDarkTheme: string | null = localStorage.getItem("dark")

  constructor(private themeService: ThemeService) {}
  
  ngOnInit(): void {
    console.log(this.isDarkTheme);
    if (this.isDarkTheme !== null) {
      this.themeService.setTheme(JSON.parse(this.isDarkTheme));
    }
  }
}
