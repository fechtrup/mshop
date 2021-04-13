import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  
  public title: string;

  constructor() { 
    this.title = 'Headline';
  }

  ngOnInit(): void {
  }

}
