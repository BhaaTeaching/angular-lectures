import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input() coach : string = '';
  @Input() flag : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
