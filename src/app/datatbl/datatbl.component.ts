import { Component, OnInit } from '@angular/core';

import { trigger,state, style, transition, animate, keyframes } from '@angular/animations';




@Component({
  selector: 'app-datatbl',
  templateUrl: './datatbl.component.html',
  styleUrls: ['./datatbl.component.scss'],



  styles: [`
  button { font-size:1.8em; }
  #content { padding:30px; background:#eeeeee; }
`],
animations: [

  trigger('focusPanel', [
      state('inactive', style({
          transform: 'scale(1)',
          backgroundColor: '#eee'
      })),
      state('active', style({
          transform: 'scale(1.1)',
          backgroundColor: '#cfd8dc'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
  ]),

  trigger('movePanel', [
      
      transition('void => *', [
          animate(600, keyframes([
              style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
              style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
      ])

  ])


]

})



export class DatatblComponent implements OnInit {

constructor() {}




temp:any[];

rows = [
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
];



columns = [
  { prop: 'name' },
  { name: 'Gender' },
  { name: 'Company' }
];


updateFilter(ser) {
  console.log(ser);
   this.temp = (ser) ?
   this.rows.filter(res => res.name.toLowerCase().includes(ser)) : this.rows;
}


ngOnInit() {
this.temp = [...this.rows];
}




state: string = 'inactive';

toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
}





}
