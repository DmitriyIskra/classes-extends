import Bowerman from '../bowerman';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Bowerman',
  attack: 25,
  defence: 25,
};

test('Bowerman has the right name', () => {
  const result = new Bowerman('Ivan', 'Bowerman');

  expect(result).toEqual(standard);
});

test('Bowerman has the wrong name', () => {
  expect(() => {
    const result = new Bowerman('I', 'Bowerman');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Bowerman has the wrong character', () => {
  expect(() => {
    const result = new Bowerman('Ivan', 'Bwerman');
  }).toThrow(new Error('a non-existent game character'));
});
