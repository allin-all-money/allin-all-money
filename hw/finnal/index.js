const movies2 = {
    data() {
        return {
            movies: [],
            list: [],
            checkList: true,
            checkout:false,
            total:0,
        }
    },
    async created() {
        this.movies = (await axios.get('movie.json')).data;
        for (let i of this.movies) {
            i.number = 1;
        }
    },
    methods: {
        wheel: (evt) => {
            let x = parseInt(document.querySelector('.cards').style.left) + evt.deltaY * 2
            //console.log(x)
            if (x > 100) {
                return
                document.querySelector('.cards').style.left = "100px";
            }
            else if (x < -2000) {
                return
                document.querySelector('.cards').style.left = "-1500px";
            }
            else {

                TweenMax.to(".cards", 1, {
                    left: "+=" + evt.deltaY * 2 + "px"
                })
            }

        },
        deleteMv(item) {
            console.log("Delete")
            console.log("Item : ", item)
            let tmp = [];
            for (let i of this.list) {
                if (i.name != item.name) {
                    tmp.push(i);
                }
            }
            this.list = tmp;
            console.log(this.list);
        },
        add2list(movie) {
            let isExist = true;

            for (let i of this.list) {
                if (movie.name == i.name) {
                    i.number = parseInt(movie.number);
                    i.inventory = parseInt(movie.inventory);
                    i.cover = movie.cover;
                    i.price = parseInt(movie.price);
                    isExist = !isExist;
                }
            }
            if (isExist) {
                this.list.push({
                    "name": movie.name,
                    "number": parseInt(movie.number),
                    "inventory": parseInt(movie.inventory),
                    "cover": movie.cover,
                    "price": parseInt(movie.price),
                });
            }
        },
        getTotal() {
            let tmp =0;
            for (let i of this.list) {
                tmp += i.price*i.number
            }
            this.total = tmp;
            return tmp;
        },
        clearList(){
            this.list=[];
        },
        closeList(){
            this.checkList = !this.checkList;
        }

    },

}



Vue.createApp(movies2).mount('#movies')