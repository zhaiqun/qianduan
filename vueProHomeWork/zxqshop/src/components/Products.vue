<template>
    <div>
       <ul>
           <li v-for="(item) in productList" :key="item.id">
               <router-link  :to='`/productDetail/${item.id}`'>
               <!-- <img :src="item.img_url" alt=""> -->
              <div  class="img"  :style="`background-image: url(${item.img_url})`"></div>
               <p>{{item.title|subTitle(5)}}</p>
               </router-link>
               <div> <p><span>{{item.sell_price}}</span>&nbsp;&nbsp;<del>{{item.market_price}}</del></p>
               <p class="hot"><span>热卖中</span>  <span>剩余件{{item.stock_quantity}}</span></p>
               </div></li>
              
       </ul>
    </div>
</template>

<script>
export default {
    name:'productDetail',
    data() {
        return {
            productList:[]
        }
    },
    created() {
        this.axios.get('/getProductList').then((res)=>{
            this.productList=res.data.message
        })
    },
    filters:{
        'subTitle':(str,num)=>{
            if (str.length>num) {
                return  str.substr(0,num)+'...'
            }
            return  str
        }
    }
}
</script>



<style scoped>
ul{

    display: flex;
    flex-wrap:wrap;
    padding: 8px;
     
}
ul  li{
    width: 49%;
    /* float: left; */
    border: 1px  solid  #ccc;
    margin-bottom: 8px;
    min-height: 183px;
    max-height: 350px;
}
ul  li:nth-child(2n+1){
    margin-right: 2%
}
ul  li  a{
    display: block;
    width:100%;
   
    font-size: 14px;

}
ul li>a>p:nth-of-type(1){
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    padding:5px  0
}
ul  li  a  .img{

    width: 100%;
    height: 190px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center
   
   
}
ul li>div{
   background-color: rgba(115, 134, 218, 0.2);
    font-size: 12px;
    padding: 0 10px;
}

ul li>div>p:nth-child(1){
    text-align: center
}

ul li>div>p:nth-child(1)>span:nth-child(1){

    color: red
}
.hot{

    display: flex;
    justify-content: space-between
}
</style>
