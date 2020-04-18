<template>
    <div>
        <van-nav-bar title="个人信息" left-text="返回" right-text="编辑" left-arrow @click-left="$router.push('/home/my')" @click-right="readonly=!readonly"/>
        <van-field label="用户昵称" :class="readonly?'borders':''"  type="text" v-model="nickname" :readonly="readonly"/>
        <van-field label="用户年龄" :class="readonly?'borders':''"  type="text" v-model="age" :readonly="readonly"/>
        <van-field label="用户性别" :class="readonly?'borders':''"  type="text" v-model="sex" :readonly="readonly"/>
        <van-field label="用户电话" :class="readonly?'borders':''"  type="text" v-model="phone" :readonly="readonly"/>
        <van-button size="large" type="danger" v-show="!readonly" @click="save">保存</van-button>
    </div>
</template>
<script>
export default {
    data:function(){ 
        return {
            ...this.$route.params,
            readonly:true
        }
    },
    methods:{
        save(){ 
            let {username,sex,nickname,age,phone,uid,images,password} = this
            this.$Mockurl('/userdata/set',{username,sex,nickname,age,phone,uid,images,password}).then(data=>{
                if(data.code===204) this.readonly = true
            })
        }
    }
}
</script>
<style scoped>
.borders{
    border:1px solid #fff;
    outline: none
}
</style>