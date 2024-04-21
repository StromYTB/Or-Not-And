const A = new Set([1, 2, 3, 4, 5]);
const B = new Set([4, 5, 6, 7, 8]);
const C = new Set([3, 4, 5]);

function AC(){
    const intersectionAC = new Set([...A].filter(x => C.has(x)));
    console.log("Průnik množiny A a C:", intersectionAC);
    document.getElementById("result").innerHTML = "Průnik množiny A a C:";
    document.getElementById("result2").innerHTML = "3";
}

function AB(){
    const unionAB = new Set([...A, ...B]);
    console.log("Sjednocení množiny A a B:", unionAB);
    document.getElementById("result").innerHTML = "Sjednocení množiny A a B:";
    document.getElementById("result2").innerHTML = "1,2,3,4,5,...";
}

function AB2(){
    const complementAWithRespectToB = new Set([...B].filter(x => !A.has(x)));
    console.log("Doplňek množiny A vzhledem k množině B:", complementAWithRespectToB);
    document.getElementById("result").innerHTML = "Doplňek množiny A vzhledem k množině B:";
    document.getElementById("result2").innerHTML = "6,7,8";
}