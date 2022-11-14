import {mult, splitIntoWords, sum} from "./01";


let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //Данные
    let a = 1;
    let b = 2;
    let c = 3;

    //Действие
    let result1 = sum(a, b);
    c = 100;
    let result2 = sum(b, c);

    //Результат
    expect(result1).toBe(3);
    expect(result2).toBe(102);

})

test('mult should be correct', () => {
    //Данные
    let a = 1;
    let b = 2;
    let c = 3;

    //Действие
    let result1 = mult(a, b);
    let result2 = mult(b, c);

    //Результат
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})


test('splitting into should be correct', () => {
    //Данные
    let sent1 = "hello my friend!";

    //Действие
    let result1 = splitIntoWords(sent1);

    //Результат
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend!');
})

