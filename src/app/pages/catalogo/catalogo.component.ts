import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/Pokemon.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  CatalogoPokemon: Pokemon[];
    responseView: any;
    listaPokemon: any;
    abilityPokemon: any;
    characteristicPokemon: any;
    typePokemon: any;

  constructor(private pokemonService: PokemonService) {
      this.CargarCatalogoPokemon();
      this.CargarHabilidadPokemon();
      this.CargarCaracteristicaPokemon();
      this.CargarTipoPokemon();
   }

  ngOnInit(): void {
  }

  CargarCatalogoPokemon () {
      this.pokemonService.cargarPokemon().subscribe(
      (response) => {
        console.log ('Respuesta: ', response);
        this.listaPokemon = response['results'];
                  });
    }

    CargarHabilidadPokemon () {
      this.pokemonService.habilidadPokemon().subscribe(
        (ability) => {
          console.log ('ability: ', ability);
          this.abilityPokemon = ability['results'];
                      });
  }

  CargarCaracteristicaPokemon () {
    this.pokemonService.caracteristicaPokemon().subscribe(
      (characteristic) => {
        console.log ('charactristic: ', characteristic);
        this.characteristicPokemon = characteristic['results'];
                    });
  }

  CargarTipoPokemon () {
    this.pokemonService.tipoPokemon().subscribe(
      (type) => {
        console.log ('type: ', type);
        this.typePokemon = type['results'];
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

