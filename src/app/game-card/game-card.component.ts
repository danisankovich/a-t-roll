import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game;
  defaultImage = '/assets/placeholder-game.png';
  constructor() { }

  ngOnInit(): void {
  }

}
