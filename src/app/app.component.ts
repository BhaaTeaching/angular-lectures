import { Component } from '@angular/core';
// import {TeamService} from "./team.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTeams : boolean = false;
  skip : boolean = false;
  // constructor(private teamService : TeamService) {
  //   this.teamService.skip.subscribe((skip : string) => this.skip = skip === 'skip')
  // }
  setShowTeams = (showTeams : boolean) => {
    this.showTeams = showTeams;
  }

  skipText(skip: string) {
    this.skip = skip ==='skip'
  }
}
