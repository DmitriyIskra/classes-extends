import { characters } from './app';
import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(health, level);
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('the name must contain from 2 to 10 characters');
    }

    if (characters.some((item) => item === type.toLowerCase())) {
      this.type = type;
    } else {
      throw new Error('a non-existent game character');
    }

    this.attack = 25;
    this.defence = 25;
  }
}
