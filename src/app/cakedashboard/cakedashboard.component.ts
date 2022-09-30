import { Component, Input, OnInit } from '@angular/core';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-cakedashboard',
  templateUrl: './cakedashboard.component.html',
  styleUrls: ['./cakedashboard.component.css']
})
export class CakedashboardComponent implements OnInit {

  @Input()
  cakes: Cake[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
