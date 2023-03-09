import Undead from '../undead';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Undead',
  attack: 25,
  defence: 25,
};

test('Undead has the right name', () => {
  const result = new Undead('Ivan', 'Undead');

  expect(result).toEqual(standard);
});

test('Undead has the wrong name', () => {
  expect(() => {
    const result = new Undead('I', 'Undead');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Undead has the wrong character', () => {
  expect(() => {
    const result = new Undead('Ivan', 'Udead');
  }).toThrow(new Error('a non-existent game character'));
});
