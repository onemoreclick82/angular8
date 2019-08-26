import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Datatype } from './datatype.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFirestore) { }


  

  getdata(){
    return this.db.collection('emp').snapshotChanges();
  }
  postdata(emp:Datatype){
    return this.db.collection('emp').add(emp);
  }
  updatedata(id:string){
   return this.db.collection('emp').doc(id).get(); 
  }

  updateeditdata(updata:Datatype,id:string){
  this.db.collection('emp').doc(id).update(updata);
  }

  deletedata(id:string){
    return this.db.collection('emp').doc(id).delete();
  }



  createcart(){
     return this.db.collection('shopingcart').add({datecreated:123})
   }

  async getcartid(){
     let cartid = localStorage.getItem('CartId');
     if(!cartid){
     let result = await this.createcart();
     localStorage.setItem('CartId', result.id);
     return result.id;
     }
     else{
     return cartid;
     }
   }


  async addproductcart(product:Datatype){
   let userid = await this.getcartid();
   console.log('userid'+0);
   console.log('userid'+ userid);
   this.db.collection('shopingcart').doc(''+userid+'').collection('item').doc(product.id).set(product);
  }

  
}
