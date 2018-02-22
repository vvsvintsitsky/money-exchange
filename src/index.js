// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency <= 0) {
        return {};
    }

    /*
    Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively.
    They'll be represented by the strings H, Q, D, N and P.

    The argument passed in will be an integer representing the value in cents.
    The return value should be an object with the symbols as keys, and the numbers of coins as values.
    Coins that are not used should not be included in the object.

    makeExchange(1)  --> {"P":1}
    makeExchange(43) --> {"Q":1,"D":1,"N":1,"P":3}
    makeExchange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
    */

    var currenyAfterHalfDollars = currency % 50;
    var halfDollars = (currency - currenyAfterHalfDollars) / 50;
    var currecyAfterQuarters = currenyAfterHalfDollars % 25;
    var quarters = (currenyAfterHalfDollars - currecyAfterQuarters) / 25;
    var currencyAfterDimes = currecyAfterQuarters % 10;
    var dimes = (currecyAfterQuarters - currencyAfterDimes) / 10;
    var currencyAfterNickels = currencyAfterDimes % 5;
    var nickels = (currencyAfterDimes - currencyAfterNickels) / 5;
    var pennies = currencyAfterNickels;

    var resultArray = {};
    if(halfDollars != 0) {
        resultArray.H = halfDollars;
    }
    if(quarters != 0) {
        resultArray.Q = quarters;
    }
    if(dimes != 0) {
        resultArray.D = dimes;
    }
    if(nickels != 0) {
        resultArray.N = nickels;
    }
    if(pennies != 0) {
        resultArray.P = pennies;
    }

    return resultArray;
}
