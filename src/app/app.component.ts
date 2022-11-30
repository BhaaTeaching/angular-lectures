import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTeams : boolean = false;

  setShowTeams = (showTeams : boolean) => {
    this.showTeams = showTeams;
  }
}
