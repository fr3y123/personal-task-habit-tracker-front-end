import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HabitsComponent } from './components/habits/habits.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'habits', component: HabitsComponent },
    { path: 'analytics', component: AnalyticsComponent },
];
