import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoteComponent } from './remote/remote.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { WinsComponent } from './wins/wins.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoteComponent,
    TeamComponent,
    TeamDetailsComponent,
    WinsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
