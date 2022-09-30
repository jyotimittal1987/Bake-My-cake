import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CakeService } from '../cake.service';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: Order = {};

  constructor(private cakeservice: CakeService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.cakeservice.add(this.order).subscribe(data => {
      alert("Details Added");
      //this.order = {};


    })
  }
}
