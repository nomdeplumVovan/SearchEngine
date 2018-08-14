import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

          searchQuery:any = "" ;

          searchEngine :any;

          url:any;
  
      onChange(searchEngine) {

          this.url = searchEngine + this.searchQuery;
 
  }
  
     redirectAndSearch() {
    
    window.open(this.url);
      
  }
}
   
  
