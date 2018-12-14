import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  catName = this.ngOnInit();
  constructor(private route: ActivatedRoute) { 
    
  }
  
  ngOnInit() {
    let catName = this.getCatName();
    return catName;
  }
  
  
  getCatName() : string {
    return this.route.snapshot.paramMap.get('catName');
  }

}
