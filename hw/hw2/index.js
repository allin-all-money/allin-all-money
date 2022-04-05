let blockData = [
    { selector: ".row:nth-child(1)>.block:nth-child(1)", name: "1" },
    { selector: ".row:nth-child(2)>.block:nth-child(1)", name: "2" },
    { selector: ".row:nth-child(1)>.block:nth-child(2)", name: "3" },
    { selector: ".row:nth-child(2)>.block:nth-child(2)", name: "4" },
]
let cardSet=[];


class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;

    }
}
class Color {
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
class Card {
    constructor(point = new Point(), pair = 0, color = new Color()) {
        this.point = point;
        this.pair = pair;
        this.color = color;

    }
}

function Init(hard = 0, num = 4) {
    cardSet = new Array(num*num);
    let index=0;
    for(let i = 0 ; i < num ; i++){
        for( let j = 0 ; j < num ; j ++){
            cardSet[index]=new Card(new Point(i+1,j+1));
            index++;
        }
    }
    console.log(cardSet)
}


let rangeH = document.querySelector('input.range-hard');
let rangeN = document.querySelector('input.range-num');
let startBtn = document.querySelector('form');
document.addEventListener('DOMContentLoaded', e => {

    let hard = ["簡單", "普通", "困難", "艱難", "鬼畜"]
    let h = document.querySelector('span.range-hard');
    let n = document.querySelector('span.range-num');

    n.textContent = rangeN.value;
    h.textContent = hard[rangeH.value];
    rangeH.addEventListener("input", e => {
        h.textContent = hard[rangeH.value];
    });
    rangeN.addEventListener("input", e => {
        n.textContent = e.target.value;
    });
    startBtn.addEventListener('submit', e => {
        e.preventDefault();
        //startBtn.classList.add('hide');
        Init(rangeH.value, rangeN.value);
    });

});




class Block {
    constructor(blockNum) {
        this.On = false;
        this.block = blockNum.map((data, index) => ({
            name: data.name,
            el: $(data.selector)
        }));
    }
    on(num) {
        let block = this.block.find(data => data.name == num);
        if (block) {
            block.el.addClass('active');
            setTimeout(() => {
                block.el.removeClass('active');
            }, 800);
        }
    }
    allon() {
        this.On = true;
        this.block.forEach(block => {
            block.el.addClass('active');
        });
    }
    alloff() {
        this.On = false;
        this.block.forEach(block => {
            block.el.removeClass('active');
        });
    }
    getAudio(pitch) {
        return new Audio(``);
    }
}




let b = new Block(blockData);



