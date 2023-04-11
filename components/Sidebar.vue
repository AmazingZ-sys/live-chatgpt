<template>
  <div class="sidebar w-60 h-screen bg-gray-100 flex flex-col p-3 transition relative" :class="{'w-0': sidebarState, 'p-0': sidebarState}">
    <div class="aside-target flex items-center absolute top-1/2 -right-5 w-6 h-6 cursor-pointer text-center z-10" @click="sidebarChange">
      <el-icon v-if="!sidebarState"><ElIconDArrowLeft /></el-icon>
      <el-icon v-else><ElIconDArrowRight /></el-icon>
    </div>
    <el-button type="primary" v-show="!sidebarState" @click="">+ {{ $t('newChat') }}</el-button>

  </div>
</template>

<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import { ChatService } from '~/db'

const { sidebarState, sidebarChange } = useSidebar();

const chatDB = new ChatService()

const historyTopicList = ref<{id: string, name: string}[]>([])

const newChat = () => {
  const topicId = uuid();

  const topicName = `Chat ${topicId.slice(0, 6)}`;

  const topic = {
    id: topicId,
    name: topicName,
    createdAt: Date.now(),
  };

  chatDB.addTopic(topic);
  historyTopicList.value = [topic, ...historyTopicList.value]
  changeActiveTopicId(topicId);
  updateCurrentMessageList([]);
};


</script>

<style>
.w-0 {
  width: 0;
}
.p-0 {
  padding: 0;
}
</style>
