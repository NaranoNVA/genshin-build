import { element } from 'protractor';
import { WeaponService } from './../services/weapon.service';
import { Weapon } from './../models/build/weapon';
import { Character } from '../models/build/character';
import { CharacterService } from '../services/character.service';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Renderer2, } from '@angular/core';
import { MenuChar } from '../models/utils/menuChar';
import * as genshindb from 'genshin-db';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  private currentTheme = 'theme-default';
  menuChars?: Array<MenuChar>;
  characterSeleted?: Character;
  weaponSeleted?: any;
  weapon?: Weapon;
  checkAsc = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private charService: CharacterService,
              private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'theme-default';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  selectCharacter(event: any): void {
    let characterInfo = new Character();
    characterInfo.name = event.target.attributes.id.value;
    characterInfo = this.charService.selectCharacter(characterInfo);
    characterInfo = this.charService.selectStats(characterInfo);
    this.characterSeleted = characterInfo;
    console.log(characterInfo);
  }

  selectWeapon(){

  }

//#region Menu
  selectElement(event: any): void{
    const element = event.target.attributes.id.value;
    this.changeColor(element);
    this.selectCharacters(element);
  }

  selectCharacters(element: string): void{
    const characterNames = this.charService.selectAllCharacterNames(element);
    const menuChar = new Array<MenuChar>();

    if (characterNames instanceof Array){
      const service = new CharacterService;
      characterNames.forEach( function(name) {
        let characterInfo = new Character();
        characterInfo.name = name;
        characterInfo = service.selectCharacter(characterInfo);
        const menuItem = {
          name: characterInfo.name,
          icon: characterInfo.icon,
          description: characterInfo.description
        };
        menuChar.push(menuItem);
      });
    }

    this.menuChars = menuChar;
  }

  changeColor(elemento: string): void {
    const coresAtuais = document.querySelector(':root');
    const novaCor = getComputedStyle(coresAtuais!).getPropertyValue('--' + elemento);
    document.documentElement.style.setProperty('--color-active', novaCor);
    this.trocarTema(elemento);
  }

  trocarTema(elemento: string): void {
    this.currentTheme = 'theme-' + elemento;
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeTheme', this.currentTheme);
  }
//#endregion

}
