<template>
  <div class="sidebar w-60 h-screen bg-gray-100 flex flex-col p-3 transition relative" :class="{'w-0': sidebarState, 'p-0': sidebarState}">
    <div class="aside-target flex items-center absolute top-1/2 -right-5 w-6 h-6 cursor-pointer text-center" @click="sidebarChange">
      <el-icon v-if="!sidebarState"><ElIconDArrowLeft /></el-icon>
      <el-icon v-else><ElIconDArrowRight /></el-icon>
    </div>
    <el-button type="primary" v-show="!sidebarState">+ {{ $t('newChat') }}</el-button>
  </div>
</template>

<script lang="ts" setup>

const { sidebarState, sidebarChange } = useSidebar();

</script>

<style>
.w-0 {
  width: 0;
}
.p-0 {
  padding: 0;
}
</style>
