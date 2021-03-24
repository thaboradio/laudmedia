import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Laud';

  constructor(private spinner: NgxSpinnerService, private router: Router){}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

  gotoContact(): void{
    this.router.navigate(['/contact-us']);
  }

}
