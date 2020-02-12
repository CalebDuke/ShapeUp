

// shapeInputs
let recHeightInput = document.getElementById('recHeight');
let recWidthInput = document.getElementById('recWidth');
let sqrSideInput = document.getElementById('sqrSide');
let circleRadiusInput = document.getElementById('circleRadius');
let triHeightInput = document.getElementById('triHeight');
// sidebarInputs
let widthSideBar = document.getElementById('width');
let heightSideBar = document.getElementById('height');
let radiusSideBar = document.getElementById('radius');
let areaSideBar = document.getElementById('area');
let perimeterSideBar = document.getElementById('perimeter');
// BUTTONS
let recBtn = document.getElementsByClassName('recBtn')
let sqrBtn = document.getElementsByClassName('sqrBtn')
let circleButton = document.getElementsByClassName('circleButton')
let trBtn = document.getElementsByClassName('trBtn')
//container
let container = document.getElementById('container')
document.body.appendChild(container)

let sumArray = []
let a = sumArray.valueOf()
console.log(sumArray)

class Shape {
    constructor() {
        this.shape = document.createElement('div')
    }
    
}

class Rec extends Shape {
    constructor(height, width) {
        super();
        this.height = height
        this.width = width
        this.render()
        this.shape.className = 'rectangle'
    }
    
    render() {
        // let recHeight = 
        this.shape.style.top = `${Math.floor(Math.random() * (600 - recHeightInput.value))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - recWidthInput.value))}px`;
        this.shape.style.height = `${recHeightInput.value}px`;
        this.shape.style.width = `${recWidthInput.value}px`;
        this.shape.style.backgroundColor = 'green';
        container.appendChild(this.shape)
        this.shape.addEventListener('dblclick', () => {
        this.shape.remove('rectangle')
        this.remove(`$`)
        })
    }
    
    
    
}

recBtn[0].addEventListener('click', () => {
    new Rec()
})


class Sq extends Shape {
    constructor(height, width) {
        super();
        this.height = height
        this.width = width
        this.render()
        this.shape.className = 'square'
    }
    
    render() {
        // let sqrHeight = 
        this.shape.style.top = `${Math.floor(Math.random() * (600 - sqrSideInput.value))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - sqrSideInput.value))}px`;
        this.shape.style.height = `${sqrSideInput.value}px`;
        this.shape.style.width = `${sqrSideInput.value}px`;
        this.shape.style.backgroundColor = 'red';
        container.appendChild(this.shape)
        this.shape.addEventListener('dblclick', () => {
            this.shape.remove('square')
        })
    }
}

sqrBtn[0].addEventListener('click', () => {
    new Sq()
})



// Print values in side bar
    // rectangle
recBtn[0].addEventListener('click', function () {
    let rHE = recHeightInput.value;
    let rWI = recWidthInput.value;
    heightSideBar.value = recHeightInput.value;
    widthSideBar.value = recWidthInput.value;
    areaSideBar.value = rHE * rWI;
    perimeterSideBar.value = parseInt(rHE) * 2 + parseInt(rWI) * 2
 })

 













