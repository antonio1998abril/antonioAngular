import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteHomeComponent } from './route-home.component';
import { IndividualComponent } from './individual/individual.component';
import { IndividualCustomComponent } from './individual-custom/individual-custom.component';

const routes: Routes = [
   {
    path: 'home',
    component: RouteHomeComponent,
    children: [
      {
        path:'child/:slug',
        component: IndividualComponent,
        loadChildren: () =>
          import('./individual/individual.module').then(
            (module) => module.IndividualModule
          ),  
      },
      {
        path:'child2/:slug',
        component: IndividualCustomComponent,
        loadChildren: () =>
          import('./individual/individual.module').then(
            (module) => module.IndividualModule
          ),  
      },
    ],
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteHomeRoutingModule {}
