//UC 1 - 2^n
let n=5;
for (let i = 1; i <= n; i++) 
{
    let two_power = Math.pow(2,i);
    console.log(two_power);
}
//----------------------------------------------------------

//UC 2 - Harmonic Number
n = 6;
let total = 0;
for (i = 1; i <= n; i++) 
{
    total += total + (1 / i);
}
console.log("2.Sum of Harmonic series: " + total);
//-------------------------------------------------------------

//UC 3 - Prime number
let num = 7;
let isPrime = true;
for (i = 2; i < num; i++) 
{
    let output = num % i;
    if (output == 0) 
    {
        isPrime = false;
        break;
    }
}
if (isPrime==true)
{
    console.log("3."+num + " is a prime Number");
}
else 
{
    console.log("3."+num + " is not a prime Number");
}

//---------------------------------------------------------------------------

//computes a factorial of a number
let factorial=5;
let fact=1;
for(var i=1;i<=factorial;i++){
    fact=fact*i;
}
console.log(fact);