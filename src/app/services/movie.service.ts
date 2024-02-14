import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  array : Movie[] = [
    {id : 1, name : 'nil',designation : 'student'},
    {id : 2, name : 'mam',designation : 'employee'},
    {id : 3, name : 'rohit',designation : 'good boy'}
  ];

  addElement(data:any){
    this.array.push(data);
  }

}
