import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-how-we-do-it',
  templateUrl: './how-we-do-it.component.html',
  styleUrls: ['./how-we-do-it.component.css']
})
export class HowWeDoItComponent implements OnInit {
autoplay = true;
darkTheme = 'dark';

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

}
