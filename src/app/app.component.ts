import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSidebarCollapsed = false;
  isMobileMenuOpen = false;

  navItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/tasks', icon: 'assignment', label: 'Tasks' },
    { path: '/habits', icon: 'loop', label: 'Habits' },
    { path: '/analytics', icon: 'insights', label: 'Analytics' }
  ];

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
