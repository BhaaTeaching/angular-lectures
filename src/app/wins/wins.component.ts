import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wins',
  templateUrl: './wins.component.html',
  styleUrls: ['./wins.component.css']
})
export class WinsComponent implements OnInit {

  @Input() winsYears : number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
