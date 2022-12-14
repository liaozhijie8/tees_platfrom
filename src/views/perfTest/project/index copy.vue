<template>
  <iframe sandbox="allow-forms allow-same-origin allow-scripts allow-same-origin allow-top-navigation allow-popups allow-pointer-lock" :src="URL" :height="contentStyleObj.height" :width="contentStyleObj.width" id="iframe1" scrolling="no"></iframe>
  <!-- <iframe :src="URL" height=100% width=100% frameborder=0></iframe>  -->

</template>
<script>
  export default {
    data() {
      return {
        contentStyleObj:{
            height:'',
            width:''
        },
        URL:'http://localhost:8094/case/caseList/1'
      }
    },
    methods:{
    getHeight(){
        // 获取浏览器高度，减去顶部导航栏的值，70该值也可以动态获取
        this.contentStyleObj.height=window.innerHeight+'px';
        this.contentStyleObj.width=window.innerWidth -210+'px';
    }
  },
  created(){
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
    console.log(this.contentStyleObj);
  },

  destroyed(){
    window.removeEventListener('resize', this.getHeight)
  }
  };
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>


<!-- // statis -->
<!-- <script src="/static/urls/index.js"></script> -->
<!-- // public -->
<!-- <script src="./urls/index.js"></script> -->


