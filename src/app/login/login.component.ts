import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public peopleInfo:any={

    username:'',
    sex:'2',
    cityList:['北京','上海','深圳'],
    city:'北京',
    hobby:[{
        title:'吃饭',
        checked:false
      },{
        title:'睡觉',
        checked:false
      },{
        title:'打豆豆',
        checked:false
      }],
      mark:''
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doSubmit(){
    console.log(this.peopleInfo);
    //alert("登录完了，明细跳转");
    this.router.navigateByUrl('/list');
  }
}
