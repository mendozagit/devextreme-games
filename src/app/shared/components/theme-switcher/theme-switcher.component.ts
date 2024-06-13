import {
  Component, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';
import themes from 'devextreme/ui/themes';
import { refreshTheme } from 'devextreme/viz/themes';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'theme-switcher',
  template: `
    <dx-button
      class="theme-button"
      stylingMode="text"
      [icon]="themeService.currentTheme !== 'dark' ? 'moon' : 'sun'"
      (onClick)="onToggleThemeClick()"
    ></dx-button>
`,
  styleUrls: [],
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) {}


  onToggleThemeClick () {
    console.log("currentTheme", themes.current());

    if (this.isLight()) {
      console.log('switching to dark');
      themes.current('material.purple.dark');

    } else {

      console.log('switching to light');
      themes.current('material.purple.light');

    }

    refreshTheme();

    themes.ready(() => {
      console.log('switched to', themes.current());
    });

  }

  isLight(): boolean{
    const currentTheme = themes.current();
    return currentTheme ? currentTheme.includes('light') : false;
  }
}

@NgModule({
  imports: [CommonModule, DxButtonModule],
  declarations: [ThemeSwitcherComponent],
  exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule { }
