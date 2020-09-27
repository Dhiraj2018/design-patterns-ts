import { IGameCharacter } from "./gameCharacter";

export class GameCharactersFactory {
  public static getWarrior(level: number): IGameCharacter {
    let warrior: IGameCharacter;
    if (level < 10) {
      warrior = {
        strength: 18,
        dexterity: 12,
        health: 20,
        magic: 0,
      };
    } else {
      warrior = {
        strength: 30,
        dexterity: 25,
        health: 32,
        magic: 0,
      };
    }
    return warrior;
  }
  public static getMaze(level: number): IGameCharacter {
    let maze: IGameCharacter;
    if (level < 10) {
      maze = {
        strength: 12,
        dexterity: 22,
        health: 10,
        magic: 32,
      };
    } else {
      maze = {
        strength: 30,
        dexterity: 35,
        health: 32,
        magic: 92,
      };
    }
    return maze;
  }
}
