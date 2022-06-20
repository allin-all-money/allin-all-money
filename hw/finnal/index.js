const movies2 = {
    data() {
        return {
            movies: [],
            list: [],
            checkList: false,
            checkout: false,
            total: 0,
            searchValue: "",
            show: false,
            set:false,
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
                    left: "+=" + evt.deltaY * 3 + "px"
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
                    i.number = parseInt(movie.number) == 1 ? ((parseInt(i.number) + 1) > parseInt(movie.inventory) ? parseInt(i.number) : parseInt(i.number) + 1) : parseInt(movie.number);
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
            let tmp = 0;
            for (let i of this.list) {
                tmp += i.price * i.number
            }
            this.total = tmp;
            return tmp;
        },
        clearList() {
            this.list = [];
        },
        search() {
            let search = document.querySelector('.search');
            this.searchValue = search.value;
            let cards = document.querySelector('.cards');
            cards.setAttribute("style", "left:0px;")
            console.log(search.value)

            if (search.value == "") {
                this.show = false;
                return false;
            }

            for (let i of this.movies) {
                if (i.name.includes(this.searchValue)) {
                    this.show = false
                    return false

                }
            }

            this.show = true;
            return true
        },
        movieNum_input(movie) {
            if(!movie.number) movie.number=1;
            movie.number = parseInt(movie.number);
            if (movie.number > movie.inventory) {
                movie.number = movie.inventory;
            }
            if( movie.number <= 0){
                movie.number = 1 ;
            }
            for(let i of this.movies){
                if(i.name == movie.name){
                    i.number = movie.number;
                }
            }
        },
        setting(movie){
            if(!movie.inventory) movie.inventory=1;
            movie.inventory = parseInt(movie.inventory);
            if( movie.inventory < 1 ){
                movie.inventory = 1 ;
            }
            for(let i of this.list){
                if(i.name == movie.name){
                    i.inventory = movie.inventory;
                }
            }

        }


    },

}



Vue.createApp(movies2).mount('#movies')