import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatTabsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  navigateToTab(index: number) {
    const paths = ['/dashboard', '/activity', '/hospital-sops', '/feedback'];
    this.navigate(paths[index]);
  }
  
}
