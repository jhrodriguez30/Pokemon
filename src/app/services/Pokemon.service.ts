import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  cargarPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  }

  habilidadPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/ability?offset=0&limit=10');
  }

  caracteristicaPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/characteristic?offset=0&limit=10');
  }

  tipoPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/type?offset=0&limit=10');
  }
}
