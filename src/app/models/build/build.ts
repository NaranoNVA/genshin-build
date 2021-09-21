import { Weapon } from './weapon';
import { Character } from './character';
import { Stats } from './stats';


export class Build {
  public name = '';
  public stats = new Stats();
  public character = new Character();
}
