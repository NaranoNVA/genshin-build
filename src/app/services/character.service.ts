import { element } from 'protractor';
import { Injectable } from '@angular/core';
import * as genshindb from 'genshin-db';
import { Character } from '../models/build/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  selectAllCharacterNames(category?: string): any{

    if (category !== undefined){
      return genshindb.characters(category, { matchCategories: true });
    }
    else {
      return genshindb.characters('names', { matchCategories: true });
    }

  }

  selectCharacter(character: Character): Character{
    let returnChar: any;
    returnChar = genshindb.characters(character.name)!;
    if (returnChar !== undefined){
      character.name = returnChar.name;
      character.icon = returnChar.images.icon;
      character.description = returnChar.description;
    }
    return character;
  }

  selectStats(character: Character): Character {
    let returnChar: any;
    if (character.ascension) {
      returnChar = genshindb.characters(character.name)!.stats(character.level, '+');
    }
    else {
      returnChar = genshindb.characters(character.name)!.stats(character.level);
    }
    if (returnChar !== undefined){
      character.level = returnChar.level;
      character.stats.hp = returnChar.hp;
      character.stats.attack = returnChar.attack;
      character.stats.defense = returnChar.defense;
      character.specialized = returnChar.specialized;
    }
    return character;
  }
}
