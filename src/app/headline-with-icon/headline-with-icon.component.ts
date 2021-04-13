import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-with-icon',
  templateUrl: './headline-with-icon.component.html',
  styleUrls: ['./headline-with-icon.component.css']
})
export class HeadlineWithIconComponent implements OnInit {

  public title: string;

  constructor() { 
    this.title = "Headline"
  }

  ngOnInit(): void {
  }

}
