<template>
    <div class="app-container">
      <el-form :inline="true" :model="sendgift" class="sendgift-form-inline">
      <el-form-item label="线程数" size="mini">
        <el-input v-model="sendgift.threadnum" placeholder="线程数"></el-input>
      </el-form-item>
      <el-form-item  label="循环次数" size="mini">
        <el-input v-model="sendgift.workernum" placeholder="循环次数"></el-input>
      </el-form-item>
      <el-form-item label="房间ID" size="mini">
        <el-input type="text" v-model="sendgift.roomid" placeholder="送礼的房间ID"></el-input>
      </el-form-item>
      <el-form-item label="送礼用户" size="mini">
        <el-input type="text" v-model="sendgift.senduserId" placeholder="送礼用户ID"></el-input>
      </el-form-item>
      <el-form-item label="收礼用户" size="mini">
        <el-input type="text" v-model="sendgift.acceptuserId" placeholder="收礼用户ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button 
        type="primary" 
        size="mini"
        style="display:inline-block;float: right;margin: 15px;padding-left: 15px"
        :loading="makeLoadingIsShow"
        @click.native="sendRequest()"
        >运行</el-button>
      </el-form-item>
      <el-form-item>
        <el-button 
        type="primary" 
        size="mini"
        style="display:inline-block;float: right;margin: 15px;padding-left: 15px"
        :loading="makeLoadingIsShow"
        @click.native="endThreah()"
        >停止</el-button>
      </el-form-item>
      </el-form>
    </div>
</template>
<script>

  import {sendgift} from "@/apis/tools/sendGift";
  export default {
    data() {
      return {
        sendgift: {
          threadnum: '1',
          workernum: '',
          roomid: '',
          senduserId: '',
          acceptuserId: '',
        }
      }
    },
    methods: {

      //提交
      onSubmit() {
        console.log('submit!');
      },

      // 点击确认生成
      sendRequest() {
        // 发送请求
        this.makeLoadingIsShow = true
        sendgift({'threadnum': this.threadnum, 'workernum': this.workernum,'roomid': this.roomid,'senduserId': this.senduserId,
        'acceptuserId': this.acceptuserId}).then(response => {
          this.makeLoadingIsShow = false
          console.log('正在运行!');
        })
    },

      
    }
  }
  // export default {
  // name: "sendgiftinfo",
  // data() {
  //   return {
  //     makeLoadingIsShow: false,
  //     isIndeterminate: true,
  //     // 全选状态
  //     checkAll: false,
  //     // 数量
  //     count: 1,
  //     // 用户选中的项
  //     checkedData: ["姓名", "身份证号", "手机号", "银行卡", "邮箱", "公司名", "地址"],
  //     // 所有项和对应的值
  //     allOptionsMapping: [],
  //     // 所有项的key
  //     allOptionKeys: [],
  //     // 接口返回的生成的用户信息
  //     makedUserDictList: [],
  //     // 接口返回的生成的用户信息的value
  //     makedUserValueList: [],
  //     // 获取表格能渲染的高度, 屏幕的70%
  //     autoHeight: window.innerHeight * 0.7,
  //   };
  // },
  // methods: {

  //   // 获取生成用户信息可选项映射关系
  //   getMakeUserInfoMapping() {
  //     makeUserInfoMapping().then(response => {
  //       this.allOptionsMapping = JSON.parse(response.data)
  //       this.allOptionKeys = Object.keys(this.allOptionsMapping)
  //     })
  //   },

  //   // 点击全选
  //   handleCheckAllChange(val) {
  //     this.checkedData = val ? this.allOptionKeys : [];
  //     this.isIndeterminate = false;
  //   },

  //   // 当选中选项时，全选按钮的状态变化
  //   handleCheckedCitiesChange(value) {
  //     let checkedCount = value.length;
  //     this.checkAll = checkedCount === this.allOptionKeys.length;
  //     this.isIndeterminate = checkedCount > 0 && checkedCount < this.allOptionKeys.length;
  //   },

  //   // 由于字段顺序会发生改变,所以根据用户的选中顺序解析响应对象
  //   parseObject(objList) {

  //     this.makedUserValueList = []

  //     // 循环响应对象 [{}{}] => {}
  //     for (let i = 0; i < objList.length; i++) {
  //       let obj = objList[i]

  //       // 循环用户选中的key，从循环的响应对象中获取对应的value
  //       let valueList = []
  //       for (let i = 0; i < this.checkedData.length; i++) {
  //         valueList.push(obj[this.allOptionsMapping[this.checkedData[i]]])
  //       }

  //       this.makedUserValueList.push(valueList)
  //     }
  //   },

  //   // 点击确认生成
  //   sendRequest() {

  //     // 获取选中项对应的映射key
  //     var checkedOptionList = []
  //     for (let i = 0; i < this.checkedData.length; i++) {
  //       checkedOptionList.push(this.allOptionsMapping[this.checkedData[i]])
  //     }
  //     // 发送请求
  //     this.makeLoadingIsShow = true
  //     makeUser({'count': this.count, 'options': JSON.stringify(checkedOptionList)}).then(response => {
  //       this.makeLoadingIsShow = false
  //       this.makedUserDictList = response.data
  //       this.parseObject(this.makedUserDictList)
  //     })
  //   },

  //   // 导出为excel
  //   download() {
  //     import('@/vendor/Export2Excel').then(excel => {
  //       excel.export_json_to_excel({
  //         header: this.checkedData,  // 表头 [key1, key2]
  //         data: this.makedUserValueList,  // 数据 [[value1, value2], [value1, value2]]
  //         filename: '用户信息'
  //       })
  //     })
  //   }
  // },

  // mounted() {
  //   this.getMakeUserInfoMapping()
  // }
  // }
</script>