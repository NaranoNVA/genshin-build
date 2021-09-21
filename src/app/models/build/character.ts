import { Weapon } from './weapon';
import { Stats } from './stats';

export class Character {
  public name = '';
  public icon = '';
  public description = '';
  public level = 0;
  public specialized = 0;
  public ascension = false;
  public wepon = new Weapon();
  public stats = new Stats();

  constructor(){

  }

  public retornaSpecialize(): void {
    this.stats.returnSpecialize(characterSpecialize[this.name], this.specialized);
  }

}

const characterSpecialize: any = {
  'Aether': 'attack',
  'Albedo': 'attack',
  'Aloy': 'attack',
  'Amber':  'attack',
  'Barbara':  'attack',
  'Beidou': 'attack',
  'Bennett': 'attack',
  'Chongyun':  'attack',
  'Diluc':  'attack',
  'Diona':  'attack',
  'Eula': 'attack',
  'Fischl': 'attack',
  'Ganyu': 'critDamage',
  'Hu Tao': 'attack',
  'Jean': 'attack',
  'Kaedehara Kazuha': 'attack',
  'Kaeya': 'attack',
  'Kamisato Ayaka': 'attack',
  'Keqing': 'attack',
  'Klee': 'attack',
  'Kujou Sara': 'attack',
  'Lisa': 'attack',
  'Lumine':  'attack',
  'Mona': 'attack',
  'Ningguang': 'attack',
  'Noelle': 'attack',
  'Qiqi':  'attack',
  'Raiden Shogun': 'attack',
  'Razor': 'attack',
  'Rosaria': 'attack',
  'Sangonomiya Kokomi': 'attack',
  'Sayu': 'attack',
  'Sucrose': 'attack',
  'Tartaglia': 'attack',
  'Venti': 'attack',
  'Xiangling':  'attack',
  'Xiao': 'attack',
  'Xingqiu':  'attack',
  'Xinyan': 'attack',
  'Yanfei': 'attack',
  'Yoimiya': 'attack',
  'Zhongli': 'attack'
}



