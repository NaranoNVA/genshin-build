export class Stats{
  public hp = 0;
  public attack = 0;
  public defense = 0;
  public em = 0;
  public er = 0;
  public critRate = 5;
  public critDamage = 50;
  public hydroDMG = 0;
  public geoDMG = 0;
  public cryoDMG = 0;
  public electroDMG = 0;
  public anemoDMG = 0;
  public pyroDMG = 0;
  public dendroDMG = 0;
  public pyshicalDMG = 0;
  public shield = 0;
  public healingBonus = 0;
  public healingRec = 0;
  public cooldown = 0;
  public hydroRES = 0;
  public geoRES = 0;
  public cryoRES = 0;
  public electroRES = 0;
  public anemoRES = 0;
  public pyroRES = 0;
  public dendroRES = 0;
  public pyshicalRES = 0;
  public stamina = 0;
  public hpPercent = 0;
  public attackPercent = 0;
  public defensePercent = 0;

  public returnSpecialize(stat: string, value: number) {
    const currentValue = Object.getOwnPropertyDescriptor(this, stat)?.value;
    Object.defineProperty(this, stat, {
      value: value + currentValue,
      writable: false
    });
  }
}
