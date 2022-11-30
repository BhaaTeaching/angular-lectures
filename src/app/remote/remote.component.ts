import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  @Output() showTeams = new EventEmitter<boolean>();
  @Input() test: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCheck(event: Event) {
    const target = event.target as HTMLInputElement;
    this.showTeams.emit(target.checked);
  }
}
