import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  usernm:any;
  allList:any[]=[];
  constructor(private searchService:SearchService) {
   }

  ngOnInit() {
  }

  search(){
    this.searchService.getAll().subscribe((data:any) => {
      this.allList=data;    
    }, () => {
        console.log('network error');
    });
  }

}
