import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./modules/shared/shared.module";
import { ProductModule } from "./modules/product/product.module";
import { BasketModule } from "./modules/basket/basket.module";
import { BasketService } from "./modules/basket/services/basket.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    BasketModule,
    SharedModule,
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
