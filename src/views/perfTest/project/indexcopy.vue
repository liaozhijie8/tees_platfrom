<template>
    <div class="iframe-container">
      <iframe :src="URL" :height="contentStyleObj.height" width="100%" id="iframe" scrolling="no"></iframe>
    </div>
    
    <!-- <iframe :src="URL" height=100% width=100% frameborder=0></iframe>  -->
  
  </template>
  <script>
  import store from '@/store';
    export default {
      data() {
        return {
          contentStyleObj:{
              height:'',
              width:''
          },
          userName:'',
          URL:'http://localhost:8094/login?jumpto=http://localhost:8094/case/caseList/1'
          // URL:"http://localhost:8023/#/caseManage/project"
  
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
      const temp = localStorage.getItem('userName');
      this.userName
  
    },
  
    mounted(){
      console.log(this.userName);
    },
  
    destroyed(){
      window.removeEventListener('resize', this.getHeight)
    }
    };
  
  
  </script>
  <style scoped>
    .iframe-container{
      
    }
  </style>
  
  
  <!-- // statis -->
  <!-- <script src="/static/urls/index.js"></script> -->
  <!-- // public -->
  <!-- <script src="./urls/index.js"></script> -->
  
  
  