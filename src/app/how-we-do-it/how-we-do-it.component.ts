import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-do-it',
  templateUrl: './how-we-do-it.component.html',
  styleUrls: ['./how-we-do-it.component.css']
})
export class HowWeDoItComponent implements OnInit {
autoplay = true;
darkTheme = 'dark';

  constructor() { }

  ngOnInit(): void {
  }

}
