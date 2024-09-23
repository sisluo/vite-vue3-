<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 自定义左侧组件 -->
      <common-aside />
      <!-- 右侧内容 -->
      <el-container>
        <el-header class="el-header">
          <common-header></common-header>
        </el-header>
        <CommonTab />
        <el-main class="right-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTab from '@/components/CommonTab.vue';
</script>

<style scoped>
.common-layout.lay-container {
  height: 100%;
}

.el-header {
  background-color: #333;
}
</style>
