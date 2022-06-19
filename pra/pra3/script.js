var vm = new Vue({
  el: "#app",
  data: {
    show:true,
    basePrice: 100,
    serviceFee: 5,
    min:0,
    max:1000,
    keyword:"",
    cards: [
      {
        title: "梅好旺萊",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202204251303191.JPG",
        price: 75,
        soldOut: true,
        visible:true
      },
      {
        title: "提拉米蘇2.0",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202112041324371.JPEG",
        price: 100,
        soldOut: true,
        visible:true
      },
      {
        title: "芝芝草莓果粒",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202005151423331.JPG",
        price: 90,
        soldOut:true,
        visible:true
      },
      {
        title: "多多綠茶",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202005151438221.JPG",
        price: 50,
        soldOut:false,
        visible:true
      },
      {
        title: "香橙果粒茶",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202005151516441.JPG",
        price: 65,
        soldOut:false,
        visible:true
      },
      {
        title: "咖啡凍奶茶",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202106171755421.JPG",
        price: 70,
        soldOut:false,
        visible:true
      }
    ]
  },
  watch: {
    keyword:function(val,oldVal){
      let card = this.cards;
      if(this.keyword!=""){

        for(let i of card){
          if(!String(i.title).includes(this.keyword)) i.visible=false;
        }
      }
      else{
        for(let i of card){
          i.visible=true;
        }
      }
    }
  },
  

});
