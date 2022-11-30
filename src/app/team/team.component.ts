import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  showDetails : boolean = false
  map = new Map();
  teams = [
    {name:'Brazil', coach: 'Adenor Leonardo Bacchi', flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'},
    {name:'Argentina', coach: 'Lionel Sebastián Scaloni', flag: 'https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg'},
    {name:'Spain', coach: 'Luis Enrique Martínez García', flag: 'https://cdn.britannica.com/36/4336-004-6BD81071/Flag-Spain.jpg'}
  ]

  constructor() {
    this.teams.map(team => this.map.set(team.name, false))
  }

  ngOnInit(): void {
  }


  onClick = (name: string) => {
    let currentStatus = this.map.get(name);
    this.map.set(name, !currentStatus)
  }
}
