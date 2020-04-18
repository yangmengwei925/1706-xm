<template>
    <div class="cri">
        <div>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <p>{{item.nickname}}</p>
                    <p>{{item.content}}</p>
                    <p>{{item.time}}</p>
                    <p>{{item.count}}</p>
                    <van-icon name="star-o" :color="item.isSave?'orange':''"/>
                </li>
            </ul>
            <p>{{returnSex()}}</p>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'

export default {
    computed:{
        ...mapState(['list'])
    },
    methods:{
        ...mapActions(['criGetdata']),
        ...mapGetters(['returnSex'])
    },
    mounted(){
       this.criGetdata()
    }
}
</script>
<style scoped>
.cri{
     width: 100vw;
    height: 80vh;
    background:oldlace;
}
</style>