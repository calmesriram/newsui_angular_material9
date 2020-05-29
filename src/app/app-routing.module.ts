import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  // {
  //   path:'',
  //   // component:MainComponent
  // },
  {
    path: '',
    loadChildren: () => import('./lazyloding/lazyloding.module').then(m => m.LazylodingModule)
    // loadChildren:'app/lazyloding/lazyloding.module#LazylodingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
