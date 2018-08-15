import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchQuery:any = '' ;
  searchEngine:any;
  url:any;
  urla:any;

  selectedSearch(){
    this.searchQuery = this.searchQuery;
  }

  onChange(searchEngine) {
    this.urla = searchEngine;
  }

  redirectAndSearch() {
    this.url = this.urla + this.searchQuery;
    window.open(this.url);
  }
}
  
  
