import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
isShown = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar(): void{
    this.isShown = !this.isShown;
  }
}
