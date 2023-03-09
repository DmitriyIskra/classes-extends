import Zombie from '../zombie';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Zombie',
  attack: 40,
  defence: 10,
};

test('Zombie has the right name', () => {
  const result = new Zombie('Ivan', 'Zombie');

  expect(result).toEqual(standard);
});

test('Zombie has the wrong name', () => {
  expect(() => {
    const result = new Zombie('I', 'Zombie');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Zombie has the wrong character', () => {
  expect(() => {
    const result = new Zombie('Ivan', 'Zombi');
  }).toThrow(new Error('a non-existent game character'));
});
