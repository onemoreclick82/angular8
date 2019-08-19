import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Datatype } from '../Datatype.model';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy  {

  constructor(private dataser:DataService) { }

  data:Datatype[];

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
      });  
    }

    delete(id){
      this.dataser.deletedata(id);
    }

  ngOnInit() {
    this.fetchdata();
  }

  ngOnDestroy(){
  this.subscribe.unsubscribe();
  }

}
