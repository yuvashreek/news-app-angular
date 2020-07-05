import { Component, OnInit } from '@angular/core';
import { TopHeadlinesService } from 'src/app/service/top-headlines.service';
import { Headline } from 'src/app/model/headline';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  TopHeadlinesService: any;
  total: number;
  headlinesResponse: any[];
  // KEY_AUTHOR = "author";
  // KEY_TITLE = title;
  // KEY_DESCRIPTION = "description";
  // KEY_URL = "url";
  // KEY_URLTOIMAGE = "urlToImage";
  // KEY_PUBLISHEDAT = "publishedAt";
  // KEY_CONTENT = "content";
  headlinesArray = [];
  testHeadline: Headline;

  constructor(
    private topHeadlinesService: TopHeadlinesService
  ) {
    this.getTopHeadlines();
  }

  ngOnInit(): void {
    //this.getTopHeadlinesTotalResults();

    this.onRefresh();
  }

  onRefresh() {

  }

  getTopHeadlinesTotalResults() {
    this.topHeadlinesService.getTopHeadlines().subscribe(
      response => {
        this.total = response.totalResults;
        console.log(this.total);
      },
      error => console.log(error)
    )
  }

  getTopHeadlines() {
    this.topHeadlinesService.getTopHeadlines().subscribe(
      response => {
        this.headlinesResponse = response.articles;

        this.headlinesResponse.map(val => {

          //this.headlines.push(new Headline().deserialize(val));
          //val = new Headline().deserialize(val);
          //deserialize
          let obj = new Headline();
          obj.title = val.title;
          obj.description = val.description;
          obj.content = val.content;
          obj.urlToImage = val.urlToImage;
          obj.url = val.url;
          obj.time = val.publishedAt;

          this.headlinesArray.push(obj)
          //this.testHeadline = obj;

        })
        console.log(this.headlinesArray);

      }
    )
  }

  makeNewsArray() {

  }



}
