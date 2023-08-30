import {SumController} from '../src/controller/sum.controller';


describe('Test Sum From SumController', () => 
{
    const sumController = new SumController();
    test('testing when given value is 12', () => 
    {
        const numberList = [1, 9, 7, 5, 0, 20, -4, 12, 16, 7];
        const sum = 12;
        const expected = [[0, 12], [-4, 16], [7, 5]];
        const result = sumController.getSum(numberList, sum);

        expect(result).toEqual(expect.arrayContaining(expected));
    });
    test('testing when given value is 10', () => 
    {
        const numberList = [1, 9, 7, 5, 0, 10, -2, 12, 16, 7];
        const sum = 10;
        const expected = [[1, 9], [0, 10], [-2, 12]];
        const result = sumController.getSum(numberList, sum);

        expect(result).toEqual(expect.arrayContaining(expected));
    });
    test('testing when given value is 15', () => 
    {
        const numberList = [1, 9, 7, 5, 0, 10, -2, 12, 16, 3];
        const sum = 15;
        const expected = [[5, 10], [12, 3]];
        const result = sumController.getSum(numberList, sum);

        expect(result).toEqual(expect.arrayContaining(expected));
    });
    test('testing when given value is 100', () =>
    {
        const numberList = [10, 20, 30, 50, 70, 90];
        const sum = 100;
        const expected = [[10, 90], [30, 70]];
        const result = sumController.getSum(numberList, sum);

        expect(result).toEqual(expect.arrayContaining(expected));
    });
});