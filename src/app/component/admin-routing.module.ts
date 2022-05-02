import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './guard/auth.guard';
// import { ProfileResolve } from './profile/service/profile.resolve';
import { LoginComponent } from './auth/components/login.component';
import { RegisterComponent } from './auth/components/register.component';
import { HomeComponent } from './home/component/home.component';
import { ProfileComponent } from './profile/component/profile.component';
import { LogoutComponent } from './auth/components/logout.component';
// import { LayoutComponent } from './layout/layout.component';
// import { DashboardComponent } from './dashboard/components/dashboard.component';
// import { ResetPasswordComponent } from './auth/components/resetpassword.component';
// import { ForgotPasswordComponent } from './auth/components/forgotpassword.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [AdminAuthGuard],
    // component: LayoutComponent, resolve: { profile: ProfileResolve },
    children:[
      { path: "", component:HomeComponent},
      { path: "profile", component:ProfileComponent },
      { path: "project", loadChildren: () => import(`./project/project.module`).then(m => m.ProjectModule) },
      { path: "language", loadChildren: () => import(`./language/language.module`).then(m => m.LanguageModule) },
      
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  // { path: "forgot_password", component: ForgotPasswordComponent },
  // { path: "reset_password", component: ResetPasswordComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
