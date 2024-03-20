import { 
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    towerHanoi,
    matrixMultiplication,
    gather
} from "./js_practical_task";

describe("Function that returns a date that comes in a predetermined number of seconds after 01.06.2020", () => {
    it("31536000 -> 01.06.2021", () => {
        expect(secondsToDate(31536000)).toBe(new Date(2021, 5, 1).toLocaleDateString('en-GB'));
    });

    it("0 -> 01.06.2020", () => {
        expect(secondsToDate(0)).toBe(new Date(2020, 5, 1).toLocaleDateString('en-GB'));
    });

    it("86400 -> 02.06.2020", () => {
        expect(secondsToDate(86400)).toBe(new Date(2020, 5, 2).toLocaleDateString('en-GB'));
    })

});

describe("Function that returns a base 2 (binary) representation of a base 10 (decimal) number", () => {
    it("5 -> '101'", () => {
        expect(toBase2Converter(5)).toBe('101');
    });

    it("10 -> '1010'", () => {
        expect(toBase2Converter(10)).toBe('1010');
    });
});

describe("Function that takes two strings as arguments and returns the number of times the first string is found in the text", () => {
    it("'a', 'test it' -> 0", () => {
        expect(substringOccurrencesCounter('a', 'test it')).toBe(0);
    });

    it("'t', 'test it' -> 3", () => {
        expect(substringOccurrencesCounter('t', 'test it')).toBe(3);
    });
    
    it("'T', 'test it' -> 3", () => {
        expect(substringOccurrencesCounter('T', 'test it')).toBe(3);
    });
});

describe("Function that takes a string and returns a string in which each character is repeated once", () => {
    it("'Hello' -> HHeelloo", () => {
        expect(repeatingLitters("Hello")).toBe("HHeelloo");
    });

    it("'Hello world' -> HHeello  wworrlldd", () => {
        expect(repeatingLitters("Hello world")).toBe("HHeelloo  wwoorrlldd");
    });
});

describe("Function redundant that takes in a string str and returns a function that returns str", () => {
    it("const f1 = redundant('apple') -> f1() ➞ 'apple'", () => {
        const func = redundant('apple');

        expect(typeof func).toBe('function');
        expect(func()).toBe('apple');
    });

    it("const f1 = redundant('pear') -> f1() ➞ 'pear'", () => {
        const func = redundant('pear');

        expect(typeof func).toBe('function');
        expect(func()).toBe('pear');
    });

    it("const f1 = redundant('') -> f1() ➞ ''", () => {
        const func = redundant('');

        expect(typeof func).toBe('function');
        expect(func()).toBe('');
    });
});


describe("Function that returns the number of movements require to solve the Tower of Hanoi problem given the number of disks", () => {
    it("Number of movements for 2 disks", () => {
        expect(towerHanoi(2)).toBe(3);
    });

    it("Number of movementes for 3 disks", () => {
        expect(towerHanoi(3)).toBe(7);
    });

    it("Number of movements for 4 disks", () => {
        expect(towerHanoi(4)).toBe(15);
    })
})

describe("Function that multiplies two matricies (n x n each)", () => {
    
    it("Multiply two 2x2 matrices", () => {
        const matrix1 = [[1, 2], [3, 4]];
        const matrix2 = [[5, 6], [7, 8]];
        const expectedResult = [[19, 22], [43, 50]];

        expect(matrixMultiplication(matrix1, matrix2)).toEqual(expectedResult);
    });

    it("Multiply two 3x3 matrices", () => {
        const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expectedResult = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];

        expect(matrixMultiplication(matrix1, matrix2)).toEqual(expectedResult);
    });
});

describe(`Function that accepts a string argument and returns another function.
The function calls should support continued chaining until order is called.
order should accept a number as an argument and return another function.
The function calls should support continued chaining until get is called.
get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions`, () => {

    it("gather('a')('b')('c').order(0)(1)(2).get() ➞ 'abc'", () => {
        console.log("type gather:" + typeof gather);
        const result = gather('a')('b')('c').order(0)(1)(2).get();
        expect(result).toBe('abc');
    });

    it('gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"', () => {
        const result = gather('a')('b')('c').order(2)(1)(0).get();
        expect(result).toBe('cba');
    });

    it('gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello!"', () => {
        expect(gather('e')('l')('o')('l')('!')('h').order(5)(0)(1)(3)(2)(4).get()).toBe('hello!');
    });
});
