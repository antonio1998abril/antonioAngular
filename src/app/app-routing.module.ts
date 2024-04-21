import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteDemoComponent } from './route-demo/route-demo.component';
import { RouteHomeComponent } from './route-home/route-home.component';

const routes: Routes = [
  {
    path: '',
    component: RouteDemoComponent, 
  },
  {
    path: 'home',
    component: RouteHomeComponent,
     loadChildren: () =>
      import('./route-home/route-home.module').then(
        (module) => module.RouteHomeModule
      ), 
      
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
