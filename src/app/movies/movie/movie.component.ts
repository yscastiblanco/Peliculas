import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  
})
export class MovieComponent implements OnInit { 
  currentPage: number = 1;
  peliculasPopulares: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.obtenerPopulares();
  }
  obtenerPopulares() {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=1c9824c7805ecfccebc172e98b454cf3&language=es-MX&region=MX&page=${this.currentPage}`;

     this.http.get(url).subscribe(
    (result: any) => {
      this.peliculasPopulares = result.results;
    },
    (error: any) => {
      console.log('Fallo la solicitud');
    }
    
  );
  
  }
  siguientePagina() {
    this.currentPage++;
    this.obtenerPopulares();
  }

  anteriorPagina() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.obtenerPopulares();
    }
  }
}
