import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss']
})
export class SectionFooterComponent implements OnInit {

  currentYear: Number;
  footerText: String;

  constructor() { }

  ngOnInit(): void {
    let now = new Date();
    this.currentYear = now.getFullYear();
    // this.footerText = `Copyright &copy; ${this.currentYear} REZZADANIAL.COM`
    document.getElementById("footer").innerHTML = `Copyright &copy; ${this.currentYear} REZZADANIAL.COM`;
  }

}
