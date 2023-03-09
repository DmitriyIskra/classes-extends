import Magician from '../magician';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Magician',
  attack: 10,
  defence: 40,
};

test('Magician has the right name', () => {
  const result = new Magician('Ivan', 'Magician');

  expect(result).toEqual(standard);
});

test('Magician has the wrong name', () => {
  expect(() => {
    const result = new Magician('I', 'Magician');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Magician has the wrong character', () => {
  expect(() => {
    const result = new Magician('Ivan', 'Mgician');
  }).toThrow(new Error('a non-existent game character'));
});
