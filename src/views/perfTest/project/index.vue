<template>
  <div class="iframe-container">
    <iframe
      :src="URL"
      :height="contentStyleObj.height"
      width="100%"
      id="iframe"
    ></iframe>
  </div>

  <!-- <iframe :src="URL" height=100% width=100% frameborder=0></iframe>  -->
</template>
<script>
export default {
  name: "inframe-box",
  data() {
    return {
      contentStyleObj: {
        height: "",
        width: "",
      },
      userName:'',
      // URL: "http://localhost:8000/login?jumpto=http://localhost:8000/case/caseList/1",
      URL:'http://localhost:8000/login'

      // URL:"http://mqjc.littlehee.com/login?jumpto=http://mqjc.littlehee.com/case/caseList/1",
    };
  },
  methods: {
    getHeight() {
      // 获取浏览器高度，减去顶部导航栏的值，70该值也可以动态获取
      this.contentStyleObj.height = window.innerHeight + "px";
      this.contentStyleObj.width = window.innerWidth - 210 + "px";
    },
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.userName = localStorage.getItem("userName")
    this.URL = `${this.URL}?${this.userName}`
    this.getHeight();
  },
  mounted(){
    console.log(this.userName);
    console.log(this.URL)
  },
  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  },
};
</script>





