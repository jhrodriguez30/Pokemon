import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/Pokemon.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  CatalogoPokemon: Pokemon[];
  responseView: any;
  listaPokemon: any;
  abilityPokemon: any;
  characteristicPokemon: any;
  typePokemon: any;

constructor(private pokemonService: PokemonService) {
    this.CargarTipoPokemon();
 }

ngOnInit(): void {
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
