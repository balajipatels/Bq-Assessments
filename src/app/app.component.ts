import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatCardModule, MatIconModule, MatGridListModule, MatProgressBarModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
