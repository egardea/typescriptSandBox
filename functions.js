function getSome(num1, num2) {
    return num1 + num2;
}
console.log(getSome(1, 2));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(1, "2"));
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getName('erik', 'gardea'));
function myVoid() {
    return 3;
}
console.log(myVoid());
