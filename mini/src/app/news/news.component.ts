import { Component, OnInit } from '@angular/core';
import { news } from 'src/model/news';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  News:news[]=[
    {
      images:"./assets/images/docure_news1 1.png",
      dis:"Docure General Hospital Sucessfully Completes NABH re-accreditation",
    },
    {
      images:"./assets/images/download 1.png",
      dis:"Covid 19,  Omricon The New Varient Rapidly spreads In India",
    },
    {
      images:"./assets/images/images 1.png",
      dis:"Doccure at the forefront of Digital Heart Failure Management System",
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
