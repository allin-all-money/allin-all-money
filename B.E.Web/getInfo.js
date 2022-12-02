let json = [];
let card;
card = document.querySelectorAll(".product-card.product-grid__card");
card.forEach((v,i) => {
    if(!i) json =[];
    let temp = {
        "url": '',
        "title": "",
        "price": 0
    }
    temp.url = v.querySelector("img").src;
    temp.title = v.querySelector(".product-card__title").textContent;
    temp.price = v.querySelector(".is--current-price").textContent;
    json.push(temp);
});



//<a id="downloadAnchorElem" style="display:none"></a>

function dw(obj) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();

}