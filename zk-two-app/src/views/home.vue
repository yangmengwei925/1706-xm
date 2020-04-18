<template>
  <div class="home">
    <!-- 头 -->
    <div>
      <p class="header_p">
        网易
        <span class="f-r" @click="$router.push('/login')" v-show="!isShow">登录</span>
      </p>
     <h2>话题:习近平举行欢迎仪式欢迎郭宝兴</h2>
     <p>查看原文</p>
     <van-field v-model="textareaText" rows="2" autosize label="状态" type="textarea" maxlength="50" :placeholder="textareaText" show-word-limit/>
     <div v-show="isShow">
       <span>{{username}}</span>
       <van-button @click="loginOut">退出</van-button>
       <van-button class="f-r" @click="send">发布</van-button>
     </div>
    </div>
    <!-- 评论区 -->
      <div >
       <div v-for="item in comments" :key="item.commentId" class="talk">
        <h5>{{item.content}}</h5>
        <h5>{{item.user.nickname}}</h5>
        <h5>{{item.createTime}}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      comments:[],
      textareaText:'登录后发表态度',
      username:'',
      isShow:false
    }
  },
  created(){
      if(localStorage.getItem('username')!==null){
        console.log(localStorage.getItem('username'))
        this.textareaText = '请输入要发布的内容';
        this.username     = localStorage.getItem('username');
        this.isShow       = true
    }
  },
  mounted(){
    //初始化请求数据
    this.$Mockurl('/list/data').then(data=>this.comments = data)
  },
  methods:{
    //点击退出
    loginOut(){
      localStorage.clear()
      this.$router.push('/login')
    },
    //点击发送
    send(){
      //模拟一个数据对象
      let obj = {
          content:this.textareaText,
          createTime:'2019-11-11 08:08:08',
          user:{
            nickname:'宋晨晨',
          },
          commentId:'1234567890'
      }
      this.$Mockurl('/add/list',obj).then(data=>{
          alert(data.msg)
          this.comments = data.data
        }
      )
    }
  }
}
</script>
<style>
.home{
  background: #d8d8d8;
  padding: 10px;
}
.talk{
  border-bottom: 1px solid orange;
}
.header_p{
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.f-r{
  float: right;
}
</style>

