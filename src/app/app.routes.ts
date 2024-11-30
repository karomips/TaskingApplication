import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/dashboard' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
