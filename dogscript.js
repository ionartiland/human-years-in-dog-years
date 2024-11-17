function ageFunction() {
    let myAge = prompt("Your age in human years:");
    let earlyYears = 2;
    earlyYears *= 10.5;
    let laterYears = myAge - 2;
    laterYears *= 4;
    //create human years in dog years variable
    let myAgeInDogYears = earlyYears + laterYears;
       
    document.getElementById("myAge").innerHTML = `Your age in human years is: ${myAge}`;
    document.getElementById("myAgeInDogYears").innerHTML = `Your age in dog years is: ${myAgeInDogYears}`;
    document.getElementById("explain").innerHTML = `Explanation: Dogs mature at a faster rate than human beings. It is a common belief that 1 human year is equal to 7 dog years, but dogs reach adulthood within the first couple of years. <br/>
    The correct formula is: 10.5 dog years per human year for the first 2 years, then 4 dog years per human year for each year after. 8 years in a human’s life equates to 45 years in a dog’s life`;
}