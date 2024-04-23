import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './Component/users/users.component';
import { DashbordComponent } from './Component/dashbord/dashbord.component';
import { UserDetailComponent } from './Component/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'user/:userId', // pass userId in route
        component: UserDetailComponent 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
