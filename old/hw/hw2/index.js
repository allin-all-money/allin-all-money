let blockData = [
    { selector: ".row:nth-child(1)>.block:nth-child(1)", name: "1" },
    { selector: ".row:nth-child(2)>.block:nth-child(1)", name: "2" },
    { selector: ".row:nth-child(1)>.block:nth-child(2)", name: "3" },
    { selector: ".row:nth-child(2)>.block:nth-child(2)", name: "4" },
]
let gamePass = 0;
let cardSet = [];
let cardSeq = [];
let colorSet = [];
let cardPair = [[], []];
let playGround = document.querySelector('.playground');

class Point {
    constructor(x = 0, y = 0) {
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
    compare(point = new Point()) {
        if (this.x == point.x && this.y == point.y) {
            return true;
        }
        return false;
    }
    show() {
        console.log(`(${this.x},${this.y})`);
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
    showPoint() {
        console.log(this.point.x, this.point.y);
    }
}

class Game {
    constructor(level = 1, cardNum = 4) {
        this.level = level;
        this.cardNum = cardNum;
        this.game = this;
        this.Init();
        this.time = parseInt(1000 * (1 - (this.level - 1) * 0.1));
        document.querySelector('.level').innerHTML = `Level : ${this.level} <br> Time : ${this.time / 1000} sec <br/> 輸入crack可作弊 `;
        console.log("Time : ", this.time);
        console.log("Level : ", this.level);
    }
    Init() {

        colorSet = [];
        cardSeq = [];
        cardSet = new Array(this.cardNum * this.cardNum);
        let index = 0;
        for (let j = 1; j <= (this.cardNum * this.cardNum) / 2; j++) {
            let r, g, b;
            r = parseInt(Math.random() * 1000 % 255);
            g = parseInt(Math.random() * 1000 % 255);
            b = parseInt(Math.random() * 1000 % 255);
            for (let i = 0; i < 2; i++) {
                cardSeq.push(j);
                colorSet.push(new Color(r, g, b));
            }
        }
        swap(cardSeq, colorSet);
        for (let i = 0; i < this.cardNum; i++) {
            for (let j = 0; j < this.cardNum; j++) {
                cardSet[index] = new Card(new Point(j + 1, i + 1), cardSeq[index], colorSet[index]);
                index++;
            }
        }

        this.start();
        this.front();
    }

    start() {
        playGround.innerHTML = "";
        let card = "";
        let cardQuery;
        let index = 0;
        for (let y = 1; y <= this.cardNum; y++) {
            card += `<div class="row">
            `;
            for (let x = 1; x <= this.cardNum; x++) {
                card += `<div class="card back" style="background-color:rgb(${cardSet[index].color.r},${cardSet[index].color.g},${cardSet[index].color.b})" data-pair = false data-x=${x} data-y=${y}>
                <span class="cheat">${cardSet[index].pair}</span>
                </div>
                `;
                index++;
            }
            card += `</div>`;
        }
        playGround.insertAdjacentHTML("beforeend", card);
        cardQuery = document.querySelectorAll('.card');
        for (let i = 0; i < cardQuery.length; i++) {
            cardQuery[i].addEventListener('click', e => {
                if (cardQuery[i].classList.contains("back")) {
                    return;
                }
                let count = 0;
                cardQuery[i].classList.add("back");
                let point = new Point(cardQuery[i].dataset.x, cardQuery[i].dataset.y);
                for (let i = 0; i < cardSet.length; i++) {

                    if (point.compare(cardSet[i].point)) {
                        cardQuery[i].style.backgroundColor = `rgb(${cardSet[i].color.r},${cardSet[i].color.g},${cardSet[i].color.b})`
                        cardPair.push([cardSet[i].pair, i]);
                        let result = this.check();
                        if (result.result) {
                            cardQuery[result.returnSet[0]].dataset.pair = true;
                            cardQuery[result.returnSet[1]].dataset.pair = true;
                        }

                    }

                }

            });
        }
    }

    check() {
        let result = {
            "returnSet": [],
            "result": false
        }

        if (cardPair.length != 2) {
            return result;
        }

        if (cardPair[0][0] == cardPair[1][0]) {
            gamePass++;
            result.returnSet.push(cardPair[0][1], cardPair[1][1]);
            result.result = true;
            //console.log("pass");
            new Audio('https://awiclass.monoame.com/pianosound/set/5.wav').play();
        }
        else {
            let b = document.querySelectorAll('.back')
            setTimeout(() => {
                for (let i = 0; i < b.length; i++) {

                    if (b[i].dataset.pair == "false") {
                        b[i].classList.remove("back");
                        b[i].style.backgroundColor = "aliceblue";
                    }
                }
                new Audio('https://awiclass.monoame.com/pianosound/set/5.5.wav').play();
            }, this.time);
            console.log("fail");
            cardPair = [];
            return result;
        }

        if (gamePass == (this.cardNum * this.cardNum) / 2) {
            console.log("All pass");
            gamePass = 0;
            setTimeout(() => {
                this.level++;
                this.game = new Game(this.level, this.cardNum);
            }, 1000)
        }

        cardPair = [];
        return result;
    }
    front() {
        let b = document.querySelectorAll('.back');
        setTimeout(() => {
            for (let i = 0; i < b.length; i++) {
                b[i].classList.remove("back");
                b[i].style.backgroundColor = "aliceblue";
            }
            cardPair = [];
        }, 1000);
    }
}


function swap(pair = [], color = []) {
    let len = pair.length;
    let a = 0, b = 0;
    for (let i = 0; i < len; i++) {
        let temp;
        a = parseInt(Math.random() * 100 % len);
        b = parseInt(Math.random() * 100 % len);
        temp = pair[b];
        pair[b] = pair[a];
        pair[a] = temp;
        temp = color[b];
        color[b] = color[a];
        color[a] = temp;
    }
}


let rangeH = document.querySelector('input.range-hard');
let rangeN = document.querySelector('input.range-num');
let startBtn = document.querySelector('form');
document.addEventListener('DOMContentLoaded', e => {

    //let hard = ["簡單", "普通", "困難", "艱難", "鬼畜"]
    //let h = document.querySelector('span.range-hard');
    //h.textContent = hard[rangeH.value];
    //rangeH.addEventListener("input", e => {
    //    h.textContent = hard[rangeH.value];
    //});
    let n = document.querySelector('span.range-num');

    n.textContent = rangeN.value;
    rangeN.addEventListener("input", e => {
        n.textContent = e.target.value;
    });
    startBtn.addEventListener('submit', e => {
        e.preventDefault();
        let game = new Game(1, rangeN.value);

        startBtn.classList.add('hide');
    });
    let str = "";
    document.addEventListener('keypress', e => {
        e.preventDefault()
        str += e.key;
        if (str == "crack") {
            console.log("It's crack");
            let cad = document.querySelectorAll('.cheat');
            for (let i = 0; i < cad.length; i++) {
                cad[i].style.opacity = 1;

            }
        }

        if (str.length >= 5) {
            console.log(str);
            str = "";
        }
    })

});



