import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = [
    { name: 'Game 1', next: 'Not Scheduled', image: '', id: '1' },
    { name: 'Game 2', next: '10/24/2020 08:00 AM EST', image: '', id: '2' },
    { name: 'Game 3', next: 'Not Scheduled', image: '', id: '3' },
    { name: 'Game 4', next: '10/24/2020 08:00 AM EST', image: '', id: '4' },
    { name: 'Game 5', next: 'Not Scheduled', image: '', id: '5' },
    { name: 'Game 6', next: 'Not Scheduled', image: '', id: '6' },
    { name: 'Game 7', next: '10/24/2020 08:00 AM EST', image: '', id: '7' },
    { name: 'Game 8', next: '10/24/2020 08:00 AM EST', image: '', id: '8' },
    { name: 'Game 9', next: 'Not Scheduled', image: '', id: '9' },
    { name: 'Game 10', next: '10/24/2020 08:00 AM EST', image: '', id: '10' },
    { name: 'Game 11', next: '10/24/2020 08:00 AM EST', image: '', id: '11' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
