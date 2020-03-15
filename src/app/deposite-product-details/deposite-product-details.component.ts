import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-deposite-product-details",
  templateUrl: "./deposite-product-details.component.html",
  styleUrls: ["./deposite-product-details.component.css"]
})
export class DepositeProductDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  dppForm = this.fb.group({
    productName: ["", Validators.required]
  });

  onSubmite() {
    console.warn(this.dppForm.value);
  }
}
