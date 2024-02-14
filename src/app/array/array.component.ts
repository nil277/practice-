import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
  providers: [MovieService]
})
export class ArrayComponent {
  list : any;
  constructor(private movies: MovieService ,private router: Router){
    this.list = movies.array;
    this.add();
  }

  add(){
    let newPost : Movie = {
      id : 7,
      name : "Shankha",
      designation : "Employee"
    }
    this.movies.addElement(newPost);
  }

  ngOnInit(){
  }
  arr=[{
    moviename:"Jack Reacher",
    moviegenre:"Action",
    rating:9
  },
  {
    moviename:"Tomb Raider",
    moviegenre:"Adventure",
    rating:8
  },
  {
    moviename:"Terminator",
    moviegenre:"Sci-Fi",
    rating:10
  }];
  onSubmit(){
    this.router.navigate(['/moviebutton', 0,"Terminator"],{queryParams :{page:1,order:'mobile'}})
  }
}



