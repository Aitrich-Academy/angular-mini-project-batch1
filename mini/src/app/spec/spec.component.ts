import { Component, OnInit } from '@angular/core';
import { doctor } from 'src/model/doctor';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show:boolean=false;
  datas:doctor[]= [
    {
      image:'assets/images/d1.jpg',
      name:'ABIRAM SHENOY',
      depart:'Cardiology'
    },
    {
      image:'assets/images/D2.jpg',
      name:'HARIPRIYA S NAIR',
      depart:'Pediatrician'
    },
    {
      image:'assets/images/D3.jpg',
      name:'JOTHIKA PAVI',
      depart:'Dietician'
    },
    {
      image:'assets/images/D5.jpg',
      name:'ABDUL MUHAMMED',
      depart:'Endocrinology'
    }
  ]

  data:doctor[]=[
    {
      image:'assets/images/D4.jpg',
      name:'ANJALI MENON TS',
      depart:'Endocrinology'
    },
    {
      image:'assets/images/D6.jpg',
      name:'SHALINI CHERIAN',
      depart:'Dietician'
    },
    {
      image:'assets/images/D7.jpg',
      name:'RAVI THARAKAN ON',
      depart:'Endocrinology'
    },
    {
      image:'assets/images/D8.jpg',
      name:'GEORGR MATHEW KURIEN',
      depart:'Endocrinology'
    }
    
  ]
  store:doctor= new doctor;

  doctorDep(item:any){
    this.show=true;
    this.store=item;
  }

}

