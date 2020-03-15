import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DepositeProductDetailsComponent } from "./deposite-product-details/deposite-product-details.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent, DepositeProductDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
