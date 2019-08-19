import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.scss']
})
export class ProductentryComponent implements OnInit {

  constructor(private dataser:DataService) { }

  add(emp){
  this.dataser.postdata(emp);
  }

  ngOnInit() {
  }

}
