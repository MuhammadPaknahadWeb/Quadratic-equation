//==================quadraticEquation===================
function quadraticEquation(){
    //alert();
    let a = Number(document.getElementById("A").value);
    let b = Number(document.getElementById("B").value);
    let c = Number(document.getElementById("C").value);
    let Xone = Number(document.getElementById("Xone").value);
    let Xtwo = Number(document.getElementById("Xtwo").value);
    let nb = -1 * b;
    let aa = 2 * a;
    let text1;
    let text2;
    //console.log(typeof a);
    if(Xone === 0 && Xtwo === 0){
        text1 = (nb + Math.sqrt(b ** 2 - 4 * a * c)) / aa;
        text2 = (nb - Math.sqrt(b ** 2 - 4 * a * c)) / aa;
    }
    else if(a === 0){
        text1 = (nb * Xone - c) / Xone ** 2;
        text2 = " ";
    }
    else if(b === 0){
        text1 = (-a * Xone ** 2 - c) / Xone;
        text2 = " ";
    }
    else if(c === 0){
        text1 = -a * Xone ** 2 -b * Xone;
        text2 = " ";
    }
    document.getElementById("present").value = text1;
    document.getElementById("present2").value = text2;

}

//================================================
let idInput ={
    //key : value
    slope: ["Xone", "Yone" , "Xtwo" , "Ytwo" , "A"],
    quadz: ["A" , "B" , "C" , "Xone" , "Xtwo"],
    dis: ["Xone" , "Xtwo" , "Yone" , "Ytwo" , "dis"],
    pyth: ["A" , "B" , "C"],
    mid: ["X" , "Y" , "Xone" , "Xtwo" , "Yone" , "Ytwo"],
    convert: ["Me" , "Km"],
    vt: ["Vone" , "Vtwo" , "acc" , "ΔT"],
    dquad: ["Vone" , "acc" , "ΔT" , "ΔD"],
    vd: ["Vtwo" , "Vone", "acc" , "ΔD"],
    gra: ["F" , "M" , "G"],
    fcircle: ["F" , "M" , "Vone" , "r"],
    incline: ["F", "M" , "G" , "θ"],
    IGL: ["V" , "P" , "R" , "n" , "Tf"],
    hc: ["Mc" , "Cchem" , "Tf" , "Ti" , "Q"],
    boyle: ["P" , "V" , "P2" , "V2"],
    square: ["Area" , "side"],
    rect: ["Area" , "length" , "width"],
    triangle: ["bigb" , "height" , "Area"],
    trap: ["bigb" , "smallb" , "height", "Area"],
    circle: ["Area" , "radius"],
    para: ["Area" , "bigb" , "height"],
    cube: ["Volume" , "side"],
    rectpm: ["Volume" , "height" , "length" , "width"],
    sphere: ["Volume" , "radius"],
    cyl: ["Volume" , "radius" , "height"],
    cone: ["Volume" , "height" , "radius"],
    pyramid: ["Volume" , "Area" , "height"],
};
function click() {
    let buttons = document.getElementsByTagName("button");
   //console.log(buttons);
    for (let i = 0 ; i < buttons.length ;i++){
        let btn = buttons[i];
        //console.log(btn);
        btn.addEventListener("click",function () {
            let values =idInput[this.id];
            console.log(values);
             //let idTag = this.id;
             //console.log(`button id : ${idTag}`);
            for (let x = 0 ; x < values.length ;x++){
                document.getElementById(values[x]).style.backgroundColor = "#eee";
            }
        });
    }
}
