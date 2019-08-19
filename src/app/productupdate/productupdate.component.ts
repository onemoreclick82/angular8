import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Datatype } from '../datatype.model';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.scss']
})
export class ProductupdateComponent implements OnInit {

constructor(private dataser:DataService, private actroute:ActivatedRoute) { }

paraid:string;
updatedata={};


 getupdatedata(paraid){
 this.dataser.updatedata(paraid).subscribe(
  (res)=>{
   this.updatedata = res.data() as Datatype;
  } 
 )
 }




 update(updata,paraid){
 this.dataser.updateeditdata(updata,this.paraid);
  }

  getid(){
    this.actroute.paramMap.subscribe(
    (res) =>{
     this.paraid = res.get('id'); 
    }
    )
    }



  ngOnInit() {
  this.getid();
  this.getupdatedata(this.paraid);
  }

}
