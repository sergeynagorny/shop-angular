import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketPageComponent } from "./components/basket-page/basket-page.component";
import { ThankYouPageComponent } from "./components/thank-you-page/thank-you-page.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: BasketPageComponent },
      { path: 'thank-you', component: ThankYouPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
