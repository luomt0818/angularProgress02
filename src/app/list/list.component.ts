import { Component, OnInit } from '@angular/core';
import { MeisaiService } from './../meisai.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public meisaiList:any[]=[];
  constructor(private meisaiService:MeisaiService) {

    this.meisaiService.getAll().subscribe((data:any) => {
      this.meisaiList=data;
      console.log(data);
    }, () => {
        console.log('network error');
    });

   }

  ngOnInit() {
    
  }

  datadel(key:any){
    this.meisaiList.splice(key,1);
    console.log(this.meisaiList);
  }
}
