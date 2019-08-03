<template>
<div  class='appcontainner'>
<mt-header fixed title="固定在顶部"></mt-header>
<router-view></router-view>
<mt-tabbar fixed  v-model="selected">  

  <!-- <router-link to='/index' > -->
    <mt-tab-item id="Home">
    首页 
    <img slot="icon" src="./assets/index.png">


  <!-- </router-link>   -->
  </mt-tab-item>
   
  <mt-tab-item id="Order">
     <!-- <router-link to='/order' > -->
    <img slot="icon" src="./assets/goodsShow.png">
    订单 
    <!-- </router-link> -->
  </mt-tab-item>
   
       
  <mt-tab-item id="Cart">
    <!-- <router-link to='/cart' >   -->
    购物车  
    <img slot="icon" src="./assets/shopcart.png">
 <!-- </router-link> -->
  </mt-tab-item>
  
          
  <mt-tab-item id="Vip">    
    <!-- <router-link to='/vip' > -->
    <img slot="icon" src="./assets/vip.png">
    我的
    <!-- </router-link> -->
  </mt-tab-item>
        
</mt-tabbar>
</div>
</template>

<script>
export default {
  name: 'App',data() {
    return {
      selected:''
    }
  },
  watch: {
     selected:function(newCompent,oldComment) {
     
        this.$router.push({name:this.selected})


      }
  },
}
</script>

<style >

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}a{
 text-decoration: none;}
ul{
  list-style: none  ;
}
.appcontainner{

    width: 100%;
    padding-top: 40px;
  	padding-bottom: 50px;
}
</style>

