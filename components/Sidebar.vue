<template>
  <div class="sidebar w-60 h-screen bg-gray-100 flex flex-col p-3 transition relative" :class="{'w-0': sidebarState, 'p-0': sidebarState}">
    <div class="aside-target flex items-center absolute top-1/2 -right-5 w-6 h-6 cursor-pointer text-center z-10" @click="sidebarChange">
      <el-icon v-if="!sidebarState"><ElIconDArrowLeft /></el-icon>
      <el-icon v-else><ElIconDArrowRight /></el-icon>
    </div>
    <el-button type="primary" v-show="!sidebarState" @click="newTopic">+ {{ $t('newChat') }}</el-button>
    <el-button
      :type="item.id === topicStore.activeTopicId ? 'primary' : ''"
      class="w-full margin-none"
      v-for="(item, index) in topicStore.topicList"
      :key="item.topicId"
      @click="topicChangeHandle(item)">
      {{ item.name }}
    </el-button>
<!--    <div class="topic-item w-full p-3 rounded-lg" v-for="(item, index) in topicStore.topicList" :class="{'bg-purple-700': item.id === topicStore.activeTopicId}" :key="item.topicId">-->
<!--      {{ item.name }}-->
<!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import { ChatService } from '~/db'
import type { TopicItem } from "~/@type";

const { sidebarState, sidebarChange } = useSidebar();

const topicStore = useTopic()

const messageStore = useMessage()

let chatDB: ChatService | null = null

const historyTopicList = ref<{id: string, name: string}[]>([])

onMounted(() => {
  chatDB = new ChatService()
  getTopicList()
})

watch(() => topicStore.topicList, ([val, old]) => {
  console.log(val, "================>val")
})

const topicChangeHandle = async (obj: TopicItem) => {
  const { id, name, createdAt } = obj
  topicStore.updateActiveTopicId(id)
  const messageList = await chatDB.getConversationsByTopicId(id)
  console.log(messageList, "=============>message")
  messageStore.updateCurrentMessage(messageList)
}

const getTopicList = async () => {
  let topicList = await chatDB.getTopics()
  console.log(topicList, "==============>topic")
  if (!topicList.length) {
    newTopic()
    return
  }

  topicStore.updateTopicList(topicList)
  topicStore.updateActiveTopicId(topicList[0].id)
  const messageList = await chatDB.getConversationsByTopicId(topicList[0].id)
  console.log(messageList, "=============>message")
  messageStore.updateCurrentMessage(messageList)
}

const newTopic = () => {
  const topicId = uuid();

  const topicName = `Chat ${topicId.slice(0, 6)}`;

  const topic = {
    id: topicId,
    name: topicName,
    createdAt: Date.now(),
  };

  chatDB.addTopic(topic);
  topicStore.updateTopicList([topic, ...topicStore.topicList])
  // historyTopicList.value = [topic, ...historyTopicList.value]
  // changeActiveTopicId(topicId);
  topicStore.updateActiveTopicId(topicId)
  // updateCurrentMessageList([]);
  messageStore.updateCurrentMessage([])
};


</script>

<style>

</style>
