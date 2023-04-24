<template>
  <div class="content-wrapper flex-1 border-b border-b border-gray-400 flex flex-col relative p-t-4 px-4 overflow-auto">
<!--    <Message />-->
<!--    <Message />-->
<!--    <Message />-->
    <template v-for="(item, index) in messageStore.currentMessageList" :key="`message_list_${index}`">
      <Message :id="item.id" :role="item.role" :message="item.content" />
    </template>
    <div class="none-apikey w-full h-full flex flex-col items-center justify-center" v-if="!hasApiKey">
      <span class="text-3xl">{{ $t('apikeyRequired') }}</span>
      <span class="text-lg">{{ $t('apikeyTip') }}</span>
      <span class="text-lg">{{ $t('getApikey') }} <a href="https://www.openai.com" target="_blank">{{ $t('openaiLink') }}</a></span>
    </div>
    <template v-else>

    </template>
  </div>
</template>

<script lang="ts" setup>


const hasApiKey = ref(false)

const globalStore = useGlobal()

const messageStore = useMessage()

onMounted(() => {
  console.log("onMounted")
  const openaiApiKey = localStorage.getItem('openaiApiKey');
  console.log(openaiApiKey, "==============>openaiApiKey")
  if (openaiApiKey) {
    hasApiKey.value = true
    globalStore.updateApikey(openaiApiKey)
  }
})
</script>

<style>
.content-wrapper {
  gap: 15px;
}
</style>
