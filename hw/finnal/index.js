const movies2 = {
    data() {
        return {
            movies: [],
            list: [],
            checkList:false,
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
            if (x > 100) {
                return
                document.querySelector('.cards').style.left = "100px";
            }
            else if (x < -1500) {
                return
                document.querySelector('.cards').style.left = "-1500px";
            }
            else {

                TweenMax.to(".cards", 1, {
                    left: "+=" + evt.deltaY * 2 + "px"
                })
            }

        },
        add2list(movie) {
            let isExist =true;
            for (let i of this.list) {
                if(movie.name == i.name){
                    i.number = parseInt(movie.number);
                    i.inventory = parseInt(movie.inventory);
                    i.cover = movie.cover;
                    isExist = !isExist;
                }
            }
            if(isExist){
                this.list.push({
                    "name":movie.name,
                    "number":parseInt(movie.number),
                    "inventory":parseInt(movie.inventory),
                    "cover" : movie.cover,
                });
            }
            console.log(this.list.length)
            console.log(this.list);
        }


    },

}



Vue.createApp(movies2).mount('#movies')