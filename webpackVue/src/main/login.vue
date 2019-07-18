<template  id="temp">
    <div>
        <form action="" method="POST" role="form">
    <legend>登录</legend>

    <div class="form-group">
        <label for="">用户名</label>
        <input type="text" class="form-control" id="" placeholder="用户名">
    </div>

    
{{msg}}
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style scoped> 
div{
  color:red
}
</style>
