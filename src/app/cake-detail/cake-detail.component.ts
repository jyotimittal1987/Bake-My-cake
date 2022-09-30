import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Cake } from '../models/cake';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../models/order';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  cakes: Cake = { price: 0 };
  constructor(private cakeservice: CakeService, private activatedRoute: ActivatedRoute,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.cakeservice.getCake(+id).subscribe(data => {
        this.cakes = data;
      })
    });

  }
  order:Order={};

 
  onSubmit()
  {
    this._snackBar.open('Data addedd successfully!! You will soon hear from us', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })

  }
}


