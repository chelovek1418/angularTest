import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit {

  public isModalOneOpen: boolean = false;
  public isModalTwoOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleModalOne(): void {
    this.isModalOneOpen = !this.isModalOneOpen;
  }

  public toggleModalTwo(): void {
    this.isModalTwoOpen = !this.isModalTwoOpen;
  }

}
