var vm = new Vue({
    el: "#app",
    data:{
        movies:[],
        cart: [],
        
    },
    //取得電影的資料
    created(){
        let apiUrl ="movie.json"
        axios.get(apiUrl).then(res=>{
            this.movies=res.data
        })
    },
    methods: {
        bgcss(url){
            return{
                'background-image':'url('+ url +')',
                'background-position':'center center',
                'background-size':"cover"  
            }
        },
        wheel(evt){
            TweenMax.to(".cards",0.8,{
                left:"+="+evt.deltaY*2+"px"
            })

        },
        addCart(movie){
            this.cart.push(movie)
            
        }
    }
})