import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLogedInGuard, IsNotLogedInGuard } from './auth/auth.guard';

//Lazy loading
const routes: Routes = [
  {
    path: 'login-page',canActivate:[IsNotLogedInGuard], loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule) 
  },
  {
    path: 'register-page',canActivate:[IsNotLogedInGuard], loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'user-Page',canActivate:[IsLogedInGuard], loadChildren: () => import('./auth/userPage/userPage.module').then(m => m.UserPageModule)
  },
  {
    path: 'chat-page',canActivate:[IsLogedInGuard], loadChildren: () => import('./auth/chats/chat.module').then(m => m.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
