import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/Pokemon.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  CatalogoPokemon: Pokemon[];
    responseView: any;
    listaPokemon: any;
    abilityPokemon: any;
    characteristicPokemon: any;
    typePokemon: any;

  constructor(private pokemonService: PokemonService) {
      this.CargarHabilidadPokemon();
   }

  ngOnInit(): void {
  }

    CargarHabilidadPokemon () {
      this.pokemonService.habilidadPokemon().subscribe(
        (ability) => {
          console.log ('ability: ', ability);
          this.abilityPokemon = ability['results'];
                      });
  }

ngOnDestroy () {
    console.log('OnDestroy ON')
    this.responseView.unsuscribe();
    this.listaPokemon.unsuscribe();
    this.abilityPokemon.unsuscribe();
    this.characteristicPokemon.unsuscribe();
    this.typePokemon.unsuscribe();
  }
}
