import { Component, OnInit } from '@angular/core';
import { MeisaiService } from './../meisai.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public meisaiList:any[]=[];

  name:any="";

  constructor(private meisaiService:MeisaiService,private activatedRoute: ActivatedRoute) {

    this.meisaiService.getAll().subscribe((data:any) => {
      this.meisaiList=data;
      console.log(data);
    }, () => {
        console.log('network error');
    });

    // 过滤数据未成功
    // this.meisaiList.map((item:any) =>{
    //   console.log("aaaaaa");
    //   if (item.username.includes("李四")) {
    //     console.log("bbbbbb");
    //   }
    // });
   }

  ngOnInit() {

    //第一种传值方式
    // let username = this.activatedRoute.queryParams['_value']['username'];
    // let sex = this.activatedRoute.queryParams['_value']['sex'];
    // console.log("获取后："+username+":"+sex);

    //第二种传值方式
    this.activatedRoute.queryParams.subscribe((data:any)=>{
      console.log("获取后："+ data.username+":"+data.sex);
    });

    //第三种传值方式（未成功）
    // this.name = this.activatedRoute.snapshot.params['username'];
    // this.activatedRoute.params.subscribe(data=>this.name=data.username);
    // console.log("获取后："+ name);
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.name = params['username'];
    //   console.log("获取后："+ params['username']);
    // });

  }

  datadel(key:any){
    this.meisaiList.splice(key,1);
    console.log(this.meisaiList);
  }

  update(key:any) {

    
  }
}
