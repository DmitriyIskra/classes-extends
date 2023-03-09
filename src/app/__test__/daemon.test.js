import Daemon from '../daemon';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Daemon',
  attack: 10,
  defence: 40,
};

test('Daemon has the right name', () => {
  const result = new Daemon('Ivan', 'Daemon');

  expect(result).toEqual(standard);
});

test('Daemon has the wrong name', () => {
  expect(() => {
    new Daemon('I', 'Daemon');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Daemon has the wrong character', () => {
  expect(() => {
    new Daemon('Ivan', 'Demon');
  }).toThrow(new Error('a non-existent game character'));
});
