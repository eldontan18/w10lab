import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addactor2movie',
  templateUrl: './addactor2movie.component.html',
  styleUrls: ['./addactor2movie.component.css']
})
export class Addactor2movieComponent implements OnInit {

  //actor attributes
  actorsDB: any[] =[];
  selectedActor = null;
  fullName = "";
  bYear = 0;
  actorId: string = "";

  //movie attributes
  moviesDB: any[] = [];
  selectedMovie = null;
  title = "";
  year = 0;
  movieId: string = "";

  constructor(private db: DatabaseService, private router:Router) { }

  ngOnInit(): void {
    this.getActors();
    this.getMovies();
  }

  getActors(){
    this.db.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  getMovies(){
    this.db.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  selectActor(actor){
    this.fullName = actor.name;
    this.bYear = actor.bYear;
    this.actorId = actor._id;
    this.selectedActor = actor;
  }

  selectMovie(movie){
    this.title = movie.title;
    this.year = movie.year;
    this.movieId = movie._id;
    this.selectedMovie = movie;
  }

  onInsertActor(){
    let obj = {name: this.fullName , bYear:this.bYear};
    this.db.addMovieActor(this.movieId,this.actorId,obj).subscribe(result => {
      this.getMovies();
      this.router.navigate(["/listmovies"]);
    });
  }

}
