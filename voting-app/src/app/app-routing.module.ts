import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path : "",redirectTo : "/login",pathMatch : 'full'},
  {path : "login",component: LoginComponent},
  {path : "register",component: RegisterComponent},
  {path : "main",component: MainComponent ,children : [
    {path : "adminpage",component: AdminpageComponent},
    {path : "userpage",component: UserpageComponent},
  ]},
  {path : '**',component : PageNotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
