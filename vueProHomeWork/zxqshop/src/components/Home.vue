<template>

    <div>

        <mt-swipe  :auto="1000" >
  <mt-swipe-item  v-for="(item, index) in bannerList" :key="index">
       <div class="imgDiv" :style="`background-image: url(${item.url})`"></div> 
  </mt-swipe-item>
  
</mt-swipe>

    <ul  class="nav">
        <li v-for="item in this.navPicList" :key="item.id">
            <router-link :to="item.router">
             <img :src="item.url" alt="">
            <p>{{item.title}}</p>
            </router-link>
           

        </li>
    </ul>

    </div>
</template>

<script>
export default {

    name:'Home',
    data() {
        return {
            navPicList:[],
            bannerList:[]
        }
    },
    created() {
        this.getNavPic()
         this.getBanner()
        
    },
    methods: {
        getNavPic(){
            this.axios.get('http://localhost:8080/static/navPic.json').then((response) => {
            this.navPicList=response.data
         })


        },
      
        getBanner(){
            this.axios.get('/getSwape').then((response) => {
            console.log(response)
            this.bannerList=response.data
         })


        },
    }

}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
}
.nav{
    list-style: none;

    font-size: 12px;
    
}
.nav li{

    float: left;
    width: 33.3%;
 
    padding-bottom: 10px
    
}

.nav li img{
        width: 60px;
    height: 59px;
}

.nav li a{
       text-align: center;
    display: block;
    text-decoration: none;
    color: #666;
 
}

.mint-swipe{
    height: 200px;
    width: 100%;
    margin-bottom: 10px;
 
}
.clearfix::after{
    clear: both;

    content: "";
    height: 0;
    display: block;
    visibility: hidden;

}
.mint-swipe-item{
    overflow: hidden;
     width: 100%;
 
}
.mint-swipe  .imgDiv{
    height: 200px;
     width: 100%;

background-repeat: no-repeat;
background-position:center;
background-size: cover
}

</style>
