import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  birthdayGifts = ["Birthday Cakes", "Personalized Cakes", "New Arrivals", "Best Sellers"];
  occassion = ["Happy Birthday", "Thank You", "Congratulations", "Sorry", "Get Well Soon", "Best Wishes"];

  constructor(private cakeservice: CakeService) { }



  ngOnInit(): void {

  }

}
