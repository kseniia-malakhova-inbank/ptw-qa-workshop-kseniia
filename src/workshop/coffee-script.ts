let myMilkAmount: number = 50;
let myCoffeeName: string = "Cappuccino";
const MY_NAME: string = "Kseniia";

console.log(`Hello ${MY_NAME}! Your coffee is ${myCoffeeName} and it has ${myMilkAmount} ml of milk`)

function isTooMuchMilk() {
    return myMilkAmount > 50 && myCoffeeName !== "Latte";
}

function muchMilkString(): string{
    return 'too much milk'
}

function muchMilkResult(isNotRealCoffee: boolean): string{
    if(isNotRealCoffee){
        return 'is not coffee';
    }
    return 'for other coffee types';
}

function muchMilkResultTernary(isNotRealCoffee: boolean) : string{
    return isNotRealCoffee ? 'is not coffee' : 'for other coffee types'
}

if (isTooMuchMilk()){
    console.log(muchMilkString() + muchMilkResult(false));
} else if (myMilkAmount > 100) {
    console.log(muchMilkString() + muchMilkResult(true));
} else if (myCoffeeName === "Cappuccino"){
    console.log('perfect choice');
} else {
    console.log('preparing your coffee')
}

