<template>
    <div class="my">
        <div>
            <!-- 个人信息username --> 
            <div class="myperson">
               <p>{{nickname}}</p>
               <p>{{age}}</p>
               <p>{{sex}}</p>
               <!-- 加载静态资源图片 -->
               <!-- <img :src="require('../assets/'+images)"/> -->
            </div>
            <p @click="$router.push({name:'mymessage',params:item})">个人信息</p>
            <p @click="$router.push('/changepwd')">更改密码</p>
            <p @click="deleteuser">注销用户</p>
            <p @click="loginOut">退出</p>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            sex:'',
            nickname:'',
            age:'',
            item:{}
        }
    },
    computed:{
      ...mapState(['username'])
    },
    created(){
        let {username} = this
        this.$Mockurl('/userdata/get',{username}).then(   
            data=>{
                this.item     = data.data[0]
                this.age      = data.data[0].age
                this.nickname = data.data[0].nickname
                this.sex      = data.data[0].sex
            }
        )    
    },
    methods:{
        ...mapMutations(['changeUser']),
        loginOut(){
            this.changeUser({username:''})
            this.$router.push('/login')
        },
        deleteuser(){

            this.$Mockurl('/delete/user',{username:this.username}).then(data=>{
                if(data.code===200){
                   this.loginOut()
                }
            })
        }
    }
}
</script>
<style scoped>
.my{
    width: 100vw;
    height: 80vh;
    }
    .myperson{
         background: #d8d8d8;
    }
</style>