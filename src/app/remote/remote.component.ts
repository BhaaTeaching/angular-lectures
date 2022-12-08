import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css'],
})
export class RemoteComponent implements OnInit {

  @Output() showTeams = new EventEmitter<boolean>();
  @Output() skip = new EventEmitter<string>();
  @Input() test: string = '';

  disableButton : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCheck(event: Event) {
    const target = event.target as HTMLInputElement;
    this.showTeams.emit(target.checked);
  }

  skipText() {
    this.disableButton = true;
    this.skip.emit('skip')
  }
}
