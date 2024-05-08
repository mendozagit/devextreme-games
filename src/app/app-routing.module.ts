import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxTabsModule, DxToolbarModule } from 'devextreme-angular';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { DetailGridComponent } from './pages/invoices/detail-grid.component';
import { CommonModule } from '@angular/common';
import { SubDetailGridComponent } from './pages/invoices/sub-detail-grid.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';

const routes: Routes = [
  {
    path: 'task-details',
    component: TaskDetailsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'task-list',
    component: TaskListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { useHash: true }),
     DxDataGridModule,
     DxFormModule,
     DxToolbarModule,
     DxTabsModule,
     DxButtonModule,
     CommonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    InvoicesComponent,
    DetailGridComponent,
    SubDetailGridComponent,
    TaskListComponent,
    TaskDetailsComponent
  ]
})
export class AppRoutingModule { }
