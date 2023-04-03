<template>
  <header class="header-wrapper w-full h-1/12 flex items-center box-border p-6 justify-around">
    <div class="flex items-center">
      <el-icon v-if="colorMode"><ElIconMoon /></el-icon>
      <el-icon v-else><ElIconSunny /></el-icon>
      <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large" class="m-l-2" />
    </div>
    <div class="flex items-center">
      <span>{{ $t('model') }}:</span>
      <el-select v-model="gptModels" class="m-2" placeholder="Select" @change="gptModelsHandler">
        <el-option
          v-for="item in gptModelsOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <el-button type="primary" @click.stop="settingKey">{{ $t('apiKeySetting') }}</el-button>
    <div class="flex items-center">
      <span>{{ $t('language') }}:</span>
      <el-switch v-model="language" inline-prompt active-text="en" inactive-text="zh" size="large" class="m-l-2" />
    </div>
    <NuxtLink to="https://github.com/AmazingZ-sys/live-chatgpt">
      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
      </svg>
    </NuxtLink>
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { stateChangeHandler, useDialogState } = useDialog();
const { gptModels, gptModelsOptions, gptModelsHandler } = useGptModels()
const language = computed({
  get: () => locale.value === 'en',
  set: () => (locale.value === 'en' ? locale.value = 'zh' : locale.value = 'en')
})
const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark'),
});
const settingKey = () => {
  stateChangeHandler(!useDialogState.value)
}
</script>
<style>
.header-wrapper {
  /*gap: 20px;*/
}
</style>
