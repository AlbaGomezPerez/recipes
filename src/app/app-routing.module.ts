import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {path: '', component: ListComponent, pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'recipe/:id', component: DetailComponent, pathMatch: 'prefix'},
  {path: '**', component: AppComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
