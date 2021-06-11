/**
 * Function to calculate the mean
 */
const calcMean = ( ) => {
    let n = parseFloat(document.getElementById("m1").value);
    let n1 = parseFloat(document.getElementById("m2").value);
    let n2 = parseFloat(document.getElementById("m3").value);
    let n3 = parseFloat(document.getElementById("m4").value);
    let n4 = parseFloat(document.getElementById("m5").value);
    let n5 = parseFloat(document.getElementById("m6").value);
    let n6 = parseFloat(document.getElementById("m7").value);;
    let n7 = parseFloat(document.getElementById("m8").value);

    let count = 0;
    let mean1 = 0;
    let mean2 = 0;
    let mean3 = 0;
    let mean4 = 0;

    if (n1 != 0) {
        mean1 = ((n) / (n1));
        count++;
    }
    if (n3 != 0) {
        mean2= ((n2) / (n3));
        count++;
    }
    if (n5 != 0) {
        mean3 =((n4) / (n5));
        count++;
    }
    if (n7 != 0) {
        mean4= ((n6) / (n7));
        count++;
    }
     
    console.log(mean1)
    console.log(mean2)
    console.log(mean3)
    console.log(mean4)

    let totalmean = (mean1 + mean2 + mean3 + mean4) / count;
    document.getElementById('finalResult').innerHTML = "Result: " +  totalmean
    console.log(totalmean);
}

/**
 * Function to calculate the Weight
 */
const calcWeight = () => {
    let n = parseFloat(document.getElementById("m1").value);
    let n1 = parseFloat(document.getElementById("m2").value);
    let n2 = parseFloat(document.getElementById("m3").value);
    let n3 = parseFloat(document.getElementById("m4").value);
    let n4 = parseFloat(document.getElementById("m5").value);
    let n5 = parseFloat(document.getElementById("m6").value);
    let n6 = parseFloat(document.getElementById("m7").value);
    let n7 = parseFloat(document.getElementById("m8").value);

    let w1 = parseFloat(document.getElementById("w1").value);
    let w2 = parseFloat(document.getElementById("w2").value);
    let w3 = parseFloat(document.getElementById("w3").value);
    let w4 = parseFloat(document.getElementById("w4").value);

    totalWeight = (w1) + (w2) + (w3) + (w4);
    if (n1 == 0) {
        weight =  ((((n2) / (n3)) * (w2)) + (((n4) / (n5)) * (w3)) + (((n6) / (n7)) * (w4))) / totalWeight;
        newWeight = weight.toFixed(3) * 100 
        document.getElementById('finalResult').innerHTML = "Result: " + newWeight + "/100"
    }
    else if (n3 == 0) {
        weight =  ((((n) / (n1)) * (w1)) + (((n4) / (n5)) * (w3)) + (((n6) / (n7)) * (w4))) / totalWeight;
        newWeight = weight.toFixed(3) * 100 
        document.getElementById('finalResult').innerHTML = "Result: " + newWeight + "/100"
    }
    else if (n5 == 0) {
        weight =  ((((n) / (n1)) * (w1)) + (((n2) / (n3)) * (w2)) + (((n6) / (n7)) * (w4))) / totalWeight;
        newWeight = weight.toFixed(3) * 100 
        document.getElementById('finalResult').innerHTML = "Result: " + newWeight + "/100"
    }
    else if (n7 == 0) {
        weight =  ((((n) / (n1)) * (w1)) + (((n2) / (n3)) * (w2)) + (((n4) / (n5)) * (w3))) / totalWeight;
        newWeight = weight.toFixed(3) * 100 
        document.getElementById('finalResult').innerHTML = "Result: " + newWeight + "/100"

    } else {
        weight =  ((((n2) / (n3)) * (w2)) + (((n) / (n1)) * (w1)) +  (((n4) / (n5)) * (w3)) + (((n6) / (n7)) * (w4))) / totalWeight;
        newWeight = weight.toFixed(3) * 100 
        document.getElementById('finalResult').innerHTML = "Result: " + newWeight + "/100"
    }


   

    
}

/**
 * Calculate the percentage
 */
const toPercentage = () => {
    let n = parseFloat(document.getElementById("m1").value);
    let n1 = parseFloat(document.getElementById("m2").value);
    let n2 = parseFloat(document.getElementById("m3").value);
    let n3 = parseFloat(document.getElementById("m4").value);
    let n4 = parseFloat(document.getElementById("m5").value);
    let n5 = parseFloat(document.getElementById("m6").value);
    let n6 = parseFloat(document.getElementById("m7").value);
    let n7 = parseFloat(document.getElementById("m8").value);

    document.getElementById('percentOne').innerHTML = ((n/n1) * 100).toFixed(4) + "%"
    document.getElementById('percentTwo').innerHTML = ((n2/n3) * 100).toFixed(4) + "%"
    document.getElementById('percentThree').innerHTML = ((n4/n5) * 100).toFixed(4) + "%"
    document.getElementById('percentFour').innerHTML = ((n6/n7) * 100).toFixed(4) + "%"
}
