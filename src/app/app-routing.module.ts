import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './movies/pages/pelicula/pelicula.component';
import { ContactoComponent } from './movies/pages/contacto/contacto.component';




const routes: Routes = [
{
  path: '',
  //incluimos el componente en el módulo principal
  loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
},
{
  path: 'pelicula',
  component: PeliculaComponent 
  
},
{
  path: 'contacto',
  component: ContactoComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
