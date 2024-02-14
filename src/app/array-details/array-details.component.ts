import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-array-details',
  templateUrl: './array-details.component.html',
  styleUrls: ['./array-details.component.css']
})
export class ArrayDetailsComponent {
  constructor(private route : ActivatedRoute)
  {
 
  }
  ngOnInit() : void {
    // this.route.paramMap.subscribe(value => {
    //   // let id=value.get('id');
    //   // let name = value.get('title');
    //   // console.log(id);
    //   // console.log(name);
    //   console.log(value);
    //   let page = value.get('kk');
    //   console.log( value.get('kk'));
      
    // })
    this.route.queryParamMap.subscribe(value => {
      console.log(value);
      let page = value.get('page');
      console.log(page);
    })
  }
}
