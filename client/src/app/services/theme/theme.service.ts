import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  light = {
    primary: "#0079d3",
    primaryLight: "#1484d6",
    background: "#dae0e6",
    white : "#ffffff",
    icon: "#949698"
  };

  dark = {
    primary: "#333",
    primaryLight: "#333",
    background: "#333",
    dark : "#333",
    icon: "#333"
  };

  constructor() { }

  setTheme(isDarkTheme: boolean) {
    if (!isDarkTheme) {
      document.documentElement.style.setProperty("--primary-color", this.light.primary);
      document.documentElement.style.setProperty("--primary-light-color", this.light.primaryLight);
      document.documentElement.style.setProperty("--background-color", this.light.background);
      document.documentElement.style.setProperty("--white-color", this.light.white);
      document.documentElement.style.setProperty("--icon-color", this.light.icon);

      localStorage.setItem("dark", "false");
    } else {
      document.documentElement.style.setProperty("--primary-color", this.dark.primary);
      document.documentElement.style.setProperty("--primary-light-color", this.dark.primaryLight);
      document.documentElement.style.setProperty("--background-color", this.dark.background);
      document.documentElement.style.setProperty("--white-color", this.dark.dark);
      document.documentElement.style.setProperty("--icon-color", this.dark.icon);

      localStorage.setItem("dark", "true");
    }
  }
}
