<template>
    <div>
      <mt-button plain @click="show">plain</mt-button>
<!-- <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header> -->



<button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
       </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
data() {
  return {
    
  }},methods: {
    show(){

    Toast({
  message: '操作成功',
  iconClass: 'glyphicon glyphicon-ok',
  className:'green'
});
    }
  },
}
</script>