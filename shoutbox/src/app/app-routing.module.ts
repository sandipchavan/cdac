import { IsUserLoggedOutGuard } from './is-user-logged-out.guard';
import { FriendListComponent } from './friend-list/friend-list.component';

import { FeedsComponent } from './feeds/feeds.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FriendComponent } from './friend/friend.component';
import { IsLoggedInGuard } from './is-logged-in.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'signup',component:SignupComponent,canActivate:[IsUserLoggedOutGuard]},
  {path:'login', component:LoginComponent, canActivate:[IsUserLoggedOutGuard]},
  {path:'feeds', component:FeedsComponent,canActivate:[IsLoggedInGuard], canActivateChild:[IsLoggedInGuard],
  },
{path:'friendlist',component:FriendListComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
