let blockData = [
    { selector: ".row:nth-child(1)>.block:nth-child(1)", name: "1", pitch: "1" },
    { selector: ".row:nth-child(2)>.block:nth-child(1)", name: "2", pitch: "2" },
    { selector: ".row:nth-child(1)>.block:nth-child(2)", name: "3", pitch: "3" },
    { selector: ".row:nth-child(2)>.block:nth-child(2)", name: "4", pitch: "4" },
]
let Block = function (blockNum) {
    this.On = false;
    this.block = blockNum.map( (data,index)=>({
        name:data.name,
        el:$( data.selector )
    }) )
}
Block.prototype.on = function(num){
    let block = this.block.find( data => data.name == num)
    if(block){
        block.el.addClass('active');
        setTimeout( ()=>{
            block.el.removeClass('active');
        },800)
    }
}
Block.prototype.allon =function(){
    this.On=true;
    this.block.forEach( block=>{
        block.el.addClass('active');
    });
}
Block.prototype.alloff =function(){
    this.On=false;
    this.block.forEach( block=>{
        block.el.removeClass('active');
    });
}

this.block = blockNum.map( (d,i)=>({
    name:d.name,
    el:$(s.selector),
    audio:this.getAudio(d.pitch)
}))
Block.prototype.getAudio=(pitch)=>{
    return new Audio(``)
}




let b = new Block(blockData);



