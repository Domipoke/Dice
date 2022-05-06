class Cube2 extends HTMLElement {
    constructor (props) {
        super(props)
        this.addEventListener("init",()=>{this.init()})
    }
    init() {
        var dim = 100
        var divcube = document.createElement("div")
        var scene = document.createElement("div")
        
        scene.style.width=dim+"px";
        scene.style.height=dim+"px";
        scene.style.border="1px solid #CCC";
        scene.style.margin=dim+"px";
        scene.style.perspective=(dim*2)+"px";
        scene.style.boxSizing="border-box"

        divcube.classList.add("cube")
        divcube.style.transform="rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
        
        
    
        divcube.style.width=dim+"px";
        divcube.style.height=dim+"px";
        divcube.style.position="relative";
        divcube.style.transformStyle="preserve-3d";
        divcube.style.transform="translateZ("+dim/-2+"px)"
        divcube.style.transition= "transform 1s";
        divcube.style.boxSizing="border-box"
        var faces = [
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
        ]
        faces.map((e,i)=>{
            e.style.position="absolute"
            e.style.width= dim+"px"
            e.style.height= dim+"px"
            e.style.border= "2px solid black"
            e.style.lineHeight= dim+"px"
            e.style.fontSize= "40px"
            e.style.fontWeight="bold"
            e.style.color="white"
            e.style.textAlign="center"
            e.style.boxSizing="border-box"
            switch (i+1) {
                case 1:
                    //cube__face--front
                    e.style.backgroundImage='url("./dice/face/152.jpg")'
                    e.style.backgroundRepeat="no-repeat"
                    e.style.backgroundPosition="center"
                    e.style.backgroundSize="cover"
                    e.style.borderColor="hsla(  0, 100%, 50%, 0.7)"; /*1 - t*/ 
                    e.style.transform="rotateY(  0deg) translateZ("+dim/2+"px)"
                case 2:
                    //cube__face--bottom
                    e.style.backgroundImage='("./dice/face/152.jpg")'
                    e.style.backgroundRepeat="no-repeat"
                    e.style.backgroundPosition="center"
                    e.style.backgroundSize="cover"
                    e.style.borderColor='hsla(300, 100%, 50%, 0.7)' /*6 - t*/ 
                    e.style.transform="rotateX(-90deg) translateZ("+dim/2+"px)"
                case 3:
                    //cube__face--right
                    e.style.backgroundImage='url("./dice/face/36.jpg")'
                    e.style.backgroundRepeat="no-repeat"
                    e.style.backgroundPosition="center"
                    e.style.backgroundSize="cover"
                    e.style.borderColor='hsla( 60, 100%, 50%, 0.7)' /*2 - f*/ 
                    e.style.transform="rotateY( 90deg) translateZ("+dim/2+"px)"
                case 4:
                    //cube__face--left
                    e.style.backgroundImage='url("./dice/face/4.jpg")'
                    e.style.backgroundRepeat="no-repeat"
                    e.style.backgroundPosition="center"
                    e.style.backgroundSize="cover"
                    e.style.borderColor='hsla(180, 100%, 50%, 0.7)' /*4 - t*/ 
                    e.style.transform="rotateY(-90deg) translateZ("+dim/2+"px)"
                case 5:
                    //cube__face--top
                    e.style.backgroundImage='url("./dice/face/152.jpg")'
                    e.style.backgroundRepeat="no-repeat"
                    e.style.backgroundPosition="center"
                    e.style.backgroundSize="cover"
                    e.style.borderColor='hsla(240, 100%, 50%, 0.7)' /*5 - t*/ 
                    e.style.transform="rotateX( 90deg) translateZ("+dim/2+"px)"
                case 6:
                    //cube__face--back
                    e.style.backgroundImage='url("./dice/face/36.jpg")'
                    e.style.backgroundRepeat="no-repeat"
                    e.style.backgroundPosition="center"
                    e.style.backgroundSize="cover"
                    e.style.borderColor='hsla(120, 100%, 50%, 0.7)' /*3 - t*/ 
                    e.style.transform="rotateY(180deg) translateZ("+dim/2+"px)"
            }
        })
        faces.forEach(e=>divcube.appendChild(e))
        scene.append(divcube)
        this.append(scene)
    }
    
    
}
class Cube extends HTMLElement {
    constructor (props){
        super(props)
        this.addEventListener("init",()=>{this.init()})
    }
    init() {
        this.innerHTML=""
        var InnerStyle =' * {box-sizing: border-box;}:root {--dim: 50px }body {font-family: sans-serif;}.scene {width: var(--dim);height: var(--dim);border: 1px solid #CCC;margin: var(--dim);perspective: calc(var(--dim)*2);}.cube {width: var(--dim);height: var(--dim);position: relative;transform-style: preserve-3d;transform: translateZ(calc(var(--dim)/-2));transition: transform 1s;}.cube.show-front {transform: translateZ(calc(var(--dim)/-2)) rotateY( 0deg);}.cube.show-right {transform: translateZ(calc(var(--dim)/-2)) rotateY( -90deg);}.cube.show-back {transform: translateZ(calc(var(--dim)/-2)) rotateY(-180deg);}.cube.show-left {transform: translateZ(calc(var(--dim)/-2)) rotateY( 90deg);}.cube.show-top {transform: translateZ(calc(var(--dim)/-2)) rotateX( -90deg);}.cube.show-bottom {transform: translateZ(calc(var(--dim)/-2)) rotateX( 90deg);}.cube__face {position: absolute;width: var(--dim);height: var(--dim);border: 2px solid black;line-height: var(--dim);font-size: 40px;font-weight: bold;color: white;text-align: center;}.cube__face--front {background-image: url("./dice/face/152.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;border-color: hsla( 0, 100%, 50%, 0.7);}.cube__face--bottom {background-image: url("./dice/face/152.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;border-color: hsla(300, 100%, 50%, 0.7);}.cube__face--right {background-image: url("./dice/face/36.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;border-color: hsla( 60, 100%, 50%, 0.7);}.cube__face--left {background-image: url("./dice/face/4.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;border-color: hsla(180, 100%, 50%, 0.7);}.cube__face--top {background-image: url("./dice/face/152.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;border-color: hsla(240, 100%, 50%, 0.7);}.cube__face--back {background-image: url("./dice/face/36.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;border-color: hsla(120, 100%, 50%, 0.7);}.cube__face--front {transform: rotateY( 0deg) translateZ(calc(var(--dim)/2));}.cube__face--bottom {transform: rotateX(-90deg) translateZ(calc(var(--dim)/2));}.cube__face--right {transform: rotateY( 90deg) translateZ(calc(var(--dim)/2));}.cube__face--left {transform: rotateY(-90deg) translateZ(calc(var(--dim)/2));}.cube__face--top {transform: rotateX( 90deg) translateZ(calc(var(--dim)/2));}.cube__face--back {transform: rotateY(180deg) translateZ(calc(var(--dim)/2));} '
        var divcube = document.createElement("div")
        var scene = document.createElement("div")
        var styleblock = document.createElement("style")
        styleblock.innerHTML=InnerStyle
        var faces = [
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
        ]
        
        faces[0].classList.add("cube__face")
        faces[0].classList.add("cube__face--front")
        faces[1].classList.add("cube__face")
        faces[1].classList.add("cube__face--bottom")
        faces[2].classList.add("cube__face")
        faces[2].classList.add("cube__face--right")
        faces[3].classList.add("cube__face")
        faces[3].classList.add("cube__face--left")
        faces[4].classList.add("cube__face")
        faces[4].classList.add("cube__face--top")
        faces[5].classList.add("cube__face")
        faces[5].classList.add("cube__face--back")
        
        divcube.appendChild(faces[0])
        divcube.appendChild(faces[1])
        divcube.appendChild(faces[2])
        divcube.appendChild(faces[3])
        divcube.appendChild(faces[4])
        divcube.appendChild(faces[5])
        

        scene.classList.add("scene")
        divcube.classList.add("cube")
        divcube.style.transform="rotateX(0deg) rotateY(0deg) rotateZ(0deg)"

        scene.appendChild(divcube)
        this.appendChild(styleblock)
        this.appendChild(scene)
        
    }
    
}
customElements.define("heroquest-dice",Cube)