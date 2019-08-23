import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Datatype } from '../Datatype.model';


@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ManageproductComponent implements OnInit, OnDestroy {

  constructor(private dataser:DataService) {
      console.log("Data " + this.data) 
   }

  
  data:Datatype[] = [];

  //data table code
  temp:Datatype[] = [];
  //data table code

  subscribe;

  fetchdata(){  
    this.subscribe = this.dataser.getdata().subscribe( 
       res => {  
         this.data = res.map(e => {
           return {
           id: e.payload.doc.id,
           ...e.payload.doc.data()
          } as Datatype;
         })
         //data table code
         this.temp = [...this.data];
         //data table code
       });  
     }
 
     delete(id){
       this.dataser.deletedata(id);
     }



   //data table code
   columns = [
    {prop: 'productname' },
    {prop: 'productdescription' },
    {prop: 'id' }
  ];

  
  updateFilter(ser) {
    console.log(ser);
     this.temp = (ser) ?
     this.data.filter(res => res.productname.toLowerCase().includes(ser)) : this.data;
  }
  
//data table code







  ngOnInit() {
    this.fetchdata();
  

  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
    }
















}
