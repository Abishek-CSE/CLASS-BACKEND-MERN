
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5));

//plaindrome
let str = "madam";
let isPalindrome = true;

for (let j = 0; j < str.length / 2; j++) {
    if (str[j] !== str[str.length - 1 - j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

