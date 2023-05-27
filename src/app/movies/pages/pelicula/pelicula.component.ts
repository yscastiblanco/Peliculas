import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any = {};
  actores: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.getParameterByName('idPelicula');
    this.getPelicula(id);
    this.getActores(id);
  }

  getParameterByName(name: string): string {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  getPelicula(id: string): void {
    this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=a2206509622d57a6ed7e5526a8bcef32&language=es-MX')
      .subscribe((result: any) => {
        this.pelicula = result;
      });
  }

  getActores(id: string): void {
    this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=a2206509622d57a6ed7e5526a8bcef32')
      .subscribe((result: any) => {
        this.actores = result.cast;
      });
  }
}
