import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductCardListComponent } from "./components/product-card-list/product-card-list.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductCardListComponent },
      { path: 'products/:id', component: ProductDetailsComponent }
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
