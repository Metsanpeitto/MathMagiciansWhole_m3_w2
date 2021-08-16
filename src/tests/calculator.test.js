/**      A function for testing inputs and drag and drop events       */
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import calculate from './test_files/calculator';

describe('Functions for testing calculator', () => {
  const sume = { total: '1', next: '1', operation: '+' };
  const option = '=';
  const resultSum = calculate(sume, option);
  test('test if sums 1 + 1', () => {
    expect(resultSum.total).toBe('2');
  });
  const substraction = { total: '1', next: '1', operation: '-' };
  const resultSubstraction = calculate(substraction, option);
  test('test if substracts 1 - 1', () => {
    expect(resultSubstraction.total).toBe('0');
  });
  const multiplication = { total: '1', next: '1', operation: 'x' };
  const resultMultiplication = calculate(multiplication, option);
  test('test if multiplication 1 x 1', () => {
    expect(resultMultiplication.total).toBe('1');
  });
  const division = { total: '4', next: '2', operation: '÷' };
  const resultDivision = calculate(division, option);
  test('test if division 4 ÷ 2', () => {
    expect(resultDivision.total).toBe('2');
  });
});
