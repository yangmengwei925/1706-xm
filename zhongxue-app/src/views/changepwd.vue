<template>
    <div>
        <van-field v-model="password" required clearable label="旧密码" placeholder="请输入旧密码"/>
        <van-field v-model="newpwd" required clearable label="旧密码" placeholder="请输入新密码"/>
        <van-button size="large" type="primary" @click="submitPwd">提交</van-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            password:'',
            newpwd:''
        }
    },
    computed:{
        ...mapState(['username'])
    },
    methods:{

        submitPwd(){
            const {username,password,newpwd} = this
            this.$Mockurl('/change/pwd',{username,password,newpwd}).then(
                data=>console.log(data)
            )
        }
    }
}
</script>