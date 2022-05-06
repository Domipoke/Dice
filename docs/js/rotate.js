function rand(min,max) {
    return Math.floor(Math.random()*max)+min
}
function roll() {
    document.getElementById("roll").disabled=true
    Array.from(document.getElementsByClassName("cube")).forEach(e=>e.style.transform="rotateX(0deg) rotateY(0deg) rotateZ(0deg);")
    var ngiri = rand(Number.parseInt(document.getElementById("nmingiri").value),Number.parseInt(document.getElementById("nmaxgiri").value))
    var rotation = {
      X:rand(1,359)*ngiri,
      Y:rand(1,359)*ngiri,
      Z:rand(1,359)*ngiri
    }
    //console.log(rotation)
    //document.getElementsByClassName("cube")[diceindex].style.transform='rotateX('+rotation.X+'deg) rotateY('+rotation.Y+'deg) rotateZ('+rotation.Z+'deg)'
    //*
    Array.from(document.getElementsByClassName("cube")).forEach((e)=>{
        anime({
            targets: e,
            duration: 1000,
            rotateX: rand(1,359)*ngiri,
            rotateY: rand(1,359)*ngiri,
            rotateZ: rand(1,359)*ngiri,
            complete: function (anim) {
                fix(e)
            }
        })
    })
    //*/
}
function btn(n,min,max) {if (min<=n&&n<=max) {return true} else {return false}}
function oldfix() {
    for (var diceindex=0;diceindex<document.getElementsByClassName("cube").length;diceindex++) {
        var spl = Array.from(document.getElementsByClassName("cube")[diceindex].style.transform.split("(")).map(e=>e.split(")"))
        var n = spl.filter(e=>e[0].indexOf("deg")>-1).map(e=>e[0].split("deg")[0]).map(e=>{
        var n=Number.parseInt(e)
        if (n<0) {
            var d = n/360
            return n+(Math.ceil(Math.abs(d))*360)
        } else {
            return n
        }
        })
        var cleared = n.map(e=>e=e%360)
        //console.log(spl)
        //console.log(n)
        
        
        
        //console.log('rotateX('+cleared[0]+'deg) rotateY('+cleared[1]+'deg) rotateZ('+cleared[2]+'deg)')
        var endrotation = {
        X: cleared[0],
        Y: cleared[1],
        Z: cleared[2]
        }
        document.getElementsByClassName("cube")[diceindex].style.transform='rotateX('+endrotation.X+'deg) rotateY('+endrotation.Y+'deg) rotateZ('+endrotation.Z+'deg)'
        var coord = rotate(endrotation)
        console.log(coord)
        document.getElementsByClassName("cube")[diceindex].style.transform='rotateX('+
        coord.Z+'deg) rotateY('+coord.Y+'deg) rotateZ('+coord.Z+'deg)'
    
        document.getElementById("roll").disabled=false
        console.log("------")
    }
    }
function fix(el) {
        var spl = el.style.transform.split("(").map(e=>e.split(")"))
        var n = spl.filter(e=>e[0].indexOf("deg")>-1).map(e=>e[0].split("deg")[0]).map(e=>{
        var n=Number.parseInt(e)
        if (n<0) {
            var d = n/360
            return n+(Math.ceil(Math.abs(d))*360)
        } else {
            return n
        }
        })
        var cleared = n.map(e=>e=e%360)
        //console.log(spl)
        //console.log(n)
        
        
        
        //console.log('rotateX('+cleared[0]+'deg) rotateY('+cleared[1]+'deg) rotateZ('+cleared[2]+'deg)')
        var endrotation = {
            X: cleared[0],
            Y: cleared[1],
            Z: cleared[2]
        }
        el.style.transform='rotateX('+endrotation.X+'deg) rotateY('+endrotation.Y+'deg) rotateZ('+endrotation.Z+'deg)'
        var coord = rotate(endrotation)
        console.log(coord)
        el.style.transform='rotateX('+
        coord.Z+'deg) rotateY('+coord.Y+'deg) rotateZ('+coord.Z+'deg)'
        
        
        console.log("------")
        document.getElementById("roll").disabled=false
    }
function rotate(xyz) {
    console.log(xyz)
    var X=xyz.X
    var Y=xyz.Y
    var Z=xyz.Z
    if (
        (btn(X,315,360)||btn(X,0,45))&&
        (btn(Y,315,360)||btn(Y,0,45))
    ) {
        return {X:0,Y:0,Z:0}
    } else if (
        btn(X,45,135)&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:90,Y:0,Z:0}
    } else if (
        btn(X,135,225)&&
        (btn(Y,315,360)||btn(Y,0,45))
    ) {
        return {X:180,Y:0,Z:180}
    } else if (
        btn(X,225,315)&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:270,Y:0,Z:0}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,45,135)
    ) {
        return {X:0,Y:90,Z:0}
    } else if (
        btn(X,45,135)&&
        (btn(Z,45,135))
    ) {
        return {X:90,Y:270,Z:90}
    } else if (
        btn(X,45,135)&&
        btn(Z,135,225)
    ) {
        return {X:90,Y:180,Z:180}
    } else if (
        btn(X,45,135)&&
        btn(Z,225,315)
    ) {
        return {X:90,Y:270,Z:270}//
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,135,225)
    ) {
        return {X:0,Y:180,Z:0}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,225,315)&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:0,Y:90,Z:0}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,225,315)&&
        btn(Z,225,315)
    ){
        return {X:0,Y:270,Z:270}
    } else if (
        btn(X,135,225)&&
        btn(Y,135,225)&&
        btn(Z,135,225)
    ) {
        return {X:180,Y:180,Z:180}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,225,315)&&
        btn(Z,135,225)
    ) {
        return {X:0,Y:270,Z:180}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        (btn(Y,315,360)||btn(Y,0,45))&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:0,Y:0,Z:0}
    } else if (
        btn(X,225,315)&&
        btn(Y,225,315)&&
        btn(Z,225,315)
    ) {
        return {X:280,Y:280,Z:280}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,135,225)&&
        btn(Z,45,135)
    ) {
        return {X:0,Y:180,Z:90}
    } else if (
        btn(X,45,135)&&
        (btn(Y,315,360)||btn(Y,0,45))&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:90,Y:0,Z:0}
    } else if (
        btn(X,225,315)&&
        (btn(Y,315,360)||btn(Y,0,45))&&
        btn(Z,225,315)
    ) {
        return {X:270,Y:0,Z:270}
    } else if (
        btn(X,225,315)&&
        btn(Y,225,315)&&
        btn(Z,45,135)
    ) {
        return {X:270,Y:270,Z:90}
    } else if (
        btn(X,225,315)&&
        btn(Y,45,135)&&
        btn(Z,225,315)
    ) {
        return {X:270,Y:90,Z:270}
    } else if (
        btn(X,135,225)&&
        btn(Y,135,225)&&
        btn(Z,45,135)
    ) {
        return {X:180,Y:180,Z:90}
    } else if (
        btn(X,135,225)&&
        btn(Y,135,225)&&
        btn(Z,225,315)
    ) {
        return {X:180,Y:180,Z:270}
    } else if (
        (btn(X,315,360)||btn(X,0,45))&&
        btn(Y,225,315)&&
        btn(Z,45,135)
    ) {
        return {X:0,Y:270,Z:90}
    } else if (
        btn(X,135,225)&&
        btn(Y,45,135)&&
        btn(Z,45,135)
    ) {
        return {X:180,Y:90,Z:90}
    } else if (
        btn(X,135,225)&&
        btn(Y,225,315)&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:180,Y:270,Z:0}
    } else if (
        btn(X,225,315)&&
        btn(Y,45,135)&&
        btn(Z,45,135)
    ) {
        return {X:270,Y:90,Z:90}
    } else if (
        btn(X,225,315)&&
        (btn(Y,315,360)||btn(Y,0,45))&&
        btn(Z,45,135)
    ) {
        return {X:270,Y:-270,Z:90}
    } else if (
        btn(X,135,225)&&
        btn(Y,45,135)&&
        btn(Z,135,225)
    ) {
        return {X:180,Y:90,Z:180}
    } else if (
        btn(X,225,315)&&
        btn(Y,135,225)&&
        btn(Z,135,225)
    ) {
        return {X:270,Y:180,Z:180}
    } else if (
        btn(X,135,225)&&
        btn(Y,135,225)&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:180,Y:180,Z:0}
    } else if (
        btn(X,135,225)&&
        btn(Y,45,135)&&
        (btn(Z,315,360)||btn(Z,0,45))
    ) {
        return {X:180,Y:90,Z:0}
    } else if (
        btn(X,135,225)&&
        btn(Y,45,135)&&
        btn(Z,225,315)
    ) {
        return {X:180,Y:90,Z:270}
    } else if (
        btn(X,225,315)&&
        btn(Y,45,135)&&
        btn(Z,135,225)
    ) {
        return {X:270,Y:90,Z:180}
    } else if (
        btn(X,225,315)&&
        (btn(Y,315,360)||btn(Y,0,45))&&
        btn(Z,135,225)
    ) {
        return {X:270,Y:0,Z:180}
    } else if (
        btn(X,135,225)&&
        btn(Y,225,315)&&
        btn(Z,225,315)
    ) {
        return {X:180,Y:270,Z:270}
    } else if (
        btn(X,225,315)&&
        btn(Y,135,225)&&
        btn(Z,225,315)
    ) {
        return {X:270,Y:180,Z:270}
    }else if (
        btn(X,225,315)&&
        btn(Y,135,225)&&
        btn(Z,45,135)
    ) {
        return {X:270,Y:180,Z:90}
    } else if (
        btn(X,135,225)&&
        btn(Y,225,315)&&
        btn(Z,135,225)
    ) {
        return {X:180,Y:270,Z:180}
    } else if (
        btn(X,225,315)&&
        btn(Y,225,315)&&
        btn(Z,135,225)
    ) {
        return {X:270,Y:270,Z:180}
    } else if (
        btn(X,135,225)&&
        btn(Y,225,315)&&
        btn(Z,45,135)
    ) {
        return {X:180,Y:270,Z:90}
    }

}

function obj(x,y,z){return {X:x,Y:y,Z:z}}

function onload(){
    Array.from(document.getElementsByTagName("heroquest-dice")).forEach(e=>e.dispatchEvent(new Event("init")))
}

function spawnDices() {
    var dices = Number.parseInt(document.getElementsByClassName("howmanyDice")[0].value)
    document.getElementsByClassName("dices")[0].innerHTML=""
    for (var i=0;i<dices;i++){
        var x = document.createElement("heroquest-dice")
        document.getElementsByClassName("dices")[0].append(x)
        x.dispatchEvent(new Event("init"))
    }
    border()
}

function border() {
    Array.from(document.getElementsByClassName("cube__face")).forEach((e)=>{
        var cl=e.classList
        var a = "bordless"
        if (document.getElementsByClassName("coloredborderinput")[0].checked) {cl.remove(a)} else cl.add(a)
    })
}