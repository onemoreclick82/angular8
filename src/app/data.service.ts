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
  
}
