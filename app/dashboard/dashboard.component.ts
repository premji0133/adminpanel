import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parsea } from './mocks';
import { Parse } from './mocks';
import { DataService } from './data.service';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  parsedata : Object[]= [new Parse(0,'','',true,new Date() ,'','','','','',0,'',0)];

 
   progress: number = 0;
 // parsedata = [new Parse(0,'','',true,new Date() ,'','','','','',0,'',0)];
 
 // todo = new this.parsedata(0,'','',true,new Date() ,'','','','','',0,'',0);
  constructor( private router: Router, private Ds : DataService ) { }

  getdata() : void{
      this.Ds.getparsedata().then(parsedata=> this.parsedata = parsedata )
      console.log('data****',this.parsedata);
  }
booknow() 
{
  console.log('data****',this.parsedata);
 
}
   ngOnInit()  {
     this.getdata()
      setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
    
  }
}