import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [{
    "Id": 1,
    "Type": "Mark Hill",
    "Price": 12000
  },
  {
    "Id": 2,
    "Type": "Birla House",
    "Price": 7000
  },
  {
    "Id": 3,
    "Type": "Erose House",
    "Price": 8000
  },
  {
    "Id": 4,
    "Type": "Macro House",
    "Price": 10000
  },
  {
    "Id": 5,
    "Type": "Pearl White House",
    "Price": 15000
  },
  {
    "Id": 6,
    "Type": "Pearl Black House",
    "Price": 18000
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
