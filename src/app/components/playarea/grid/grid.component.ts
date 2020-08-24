import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridOptions = {
    cellsize: 70,
    width: 40,
    height: 25,
    gridBackgroundColor: '#000000',
    gridLineColor: '#FFFFFF',
    zoomLevel: 10,
  }
  gridWidth;
  gridHeight;

  constructor() { }

  get cellSize() {
    return this.gridOptions.cellsize * (this.gridOptions.zoomLevel * .1);
  }

  get border() {
    return `1px solid ${this.gridOptions.gridLineColor}`
  }

  ngOnInit(): void {
    this.gridWidth = Array(this.gridOptions.width);
    this.gridHeight = Array(this.gridOptions.height);
  }
  changeZoom(direction) {
    if (direction === '+' && this.gridOptions.zoomLevel === 20) {
      return;
    }
    if (direction === '-' && this.gridOptions.zoomLevel <= 3) {
      return;
    }
    this.gridOptions.zoomLevel = direction === '+' ? this.gridOptions.zoomLevel + 1 : this.gridOptions.zoomLevel - 1;
  }
}
