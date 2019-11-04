function getSome (num1: number, num2: number):number{
    return num1 + num2;
}
console.log(getSome(1, 2));

let mySum = function(num1: number, num2: string) {
    if(typeof num1 == 'string') {
        num1 = parseInt(num1);
    } 
    if(typeof num2 == 'string') {
        num2 = parseInt(num2);
    }

    return num1 + num2;
}
console.log(mySum(1, "2"));

function getName(firstName:string, lastName:string):string{
    return firstName+' '+lastName;
}
console.log(getName('erik', 'gardea'))

function myVoid():void{
    return 3;
}
console.log(myVoid());