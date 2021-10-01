import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./modules/shared/components/main-layout/main-layout.component";
import { BasketRoutingModule } from "./modules/basket/basket-routing.module";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', loadChildren: () => import('./modules/product/product-routing.module').then((m) => m.ProductRoutingModule) },
      { path: 'basket', loadChildren: () => BasketRoutingModule },
      { path: '**', redirectTo: '/' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
