import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'admin-sign-in',
    pathMatch: 'full'
  },
  {
    path: 'admin-sign-in',
    loadChildren: () => import('./admin-sign-in/admin-sign-in.module').then( m => m.AdminSignInPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
