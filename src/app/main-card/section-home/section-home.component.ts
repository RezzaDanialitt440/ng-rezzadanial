import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {

  ageText: string;
  constructor() { }

  ngOnInit(): void {
    let now = new Date();
    let age = now.getFullYear() - 1995;
    this.ageText = `${age} Years Old`;

  }

}
