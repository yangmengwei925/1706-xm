<template>
  <div class="home">
    <div>
        <router-view></router-view>
    </div>
    <div>
      <router-link to="/home/main">首页</router-link>
      <router-link to="">想法</router-link>
      <router-link to="">大学</router-link>
      <router-link to="/home/my">我的</router-link>
      <router-link to="">消息</router-link>
    </div>
  </div>
</template>
