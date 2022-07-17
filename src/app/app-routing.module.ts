import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './Content/book-details/book-details.component';
import { MainComponent } from './Content/main/main.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:'LogIn',component:LogInComponent,pathMatch:'full'},
  {path:'main',component:MainComponent,pathMatch:'full'},
  {path:'book/:id',component:BookDetailsComponent,pathMatch:'full'},
  {path:'',redirectTo:'main',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
