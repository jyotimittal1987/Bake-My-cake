import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakeService } from '../cake.service';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private cakeservice: CakeService, private activatedRoute: ActivatedRoute) { }
  @Input()
  cakes: Cake[] = [];

  ngOnInit(): void {
    this.cakeservice.getCakes().subscribe({
      next: data => {
        this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }
  onSearchTextChanged(cakeName: string) {
    this.cakeservice.getCakes().subscribe({
      next: data => {
        if (cakeName || cakeName !== '') {
          this.cakes = data.filter(cake => cake.name?.toLowerCase().includes(cakeName.toLowerCase()));
        }
        else
          this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }
}



