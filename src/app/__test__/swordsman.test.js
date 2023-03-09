import Swordsman from '../swordsman';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Swordsman',
  attack: 40,
  defence: 10,
};

test('Swordsman has the right name', () => {
  const result = new Swordsman('Ivan', 'Swordsman');

  expect(result).toEqual(standard);
});

test('Swordsman has the wrong name', () => {
  expect(() => {
    const result = new Swordsman('I', 'Swordsman');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Swordsman has the wrong character', () => {
  expect(() => {
    const result = new Swordsman('Ivan', 'Swodsman');
  }).toThrow(new Error('a non-existent game character'));
});
