<template>
  <div class="textarea-wrapper h-30 p-4 flex justify-center items-center flex-col">
    <div class="input-wrapper flex items-center w-full">
      <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        :disabled="loading"
        placeholder="Please input"
        @keydown.enter="keyDown"
      />
      <el-button type="primary" :disabled="loading" @click="submit">{{ $t('submit') }}</el-button>
    </div>
    <div class="supplement flex items-center justify-between w-full">
      <el-icon><ElIconStamp /></el-icon>
      <div class="flex items-center justify-end w-full">
        <span>{{ $t('recent') }}</span>
        <div class="w-20">
          <el-input v-model="useContextNum" placeholder="Please input" clearable />
        </div>
        <span>{{ $t('context') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { useContextNum } = useContext()
const textarea = ref('')
const loading = ref(false)
const submit = (e: MouseEvent | string) => {
  console.log("lalalaalalaal")
}
const keyDown = (e: KeyboardEvent) => {
  console.log(e.ctrlKey, "keydown")
  console.log(e.keyCode, "keyCode")
  if (e.ctrlKey && e.keyCode === 13) {
    textarea.value += '\n'
  } else {
    submit('')
  }
}

</script>
<style>
.textarea-wrapper,
.input-wrapper {
  gap:15px;
}
</style>
