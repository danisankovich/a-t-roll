import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = [
    { name: 'Game 1', next: 'Not Scheduled', image: '' },
    { name: 'Game 2', next: '10/24/2020 08:00 AM EST', image: '' },
    { name: 'Game 3', next: 'Not Scheduled', image: '' },
    { name: 'Game 4', next: '10/24/2020 08:00 AM EST', image: '' },
    { name: 'Game 5', next: 'Not Scheduled', image: '' },
    { name: 'Game 6', next: 'Not Scheduled', image: '' },
    { name: 'Game 7', next: '10/24/2020 08:00 AM EST', image: '' },
    { name: 'Game 8', next: '10/24/2020 08:00 AM EST', image: '' },
    { name: 'Game 9', next: 'Not Scheduled', image: '' },
    { name: 'Game 10', next: '10/24/2020 08:00 AM EST', image: '' },
    { name: 'Game 11', next: '10/24/2020 08:00 AM EST', image: '' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
