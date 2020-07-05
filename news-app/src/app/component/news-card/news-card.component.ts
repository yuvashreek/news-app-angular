import { Component, OnInit, Input } from '@angular/core';
import { Headline } from 'src/app/model/headline';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() headline: Headline;
  constructor() { }

  ngOnInit(): void {
    //console.log("printing testheadline in news card component");
    //console.log(this.headline);
  }

}
