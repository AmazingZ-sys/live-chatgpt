<template>
  <div class="textarea-wrapper h-30 p-4 flex justify-center items-center flex-col">
    <div class="input-wrapper flex items-center w-full">
      <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        :disabled="loading"
        :placeholder="$t('inputPlaceholder')"
        @keydown="keyDown"
      >
        <template #prefix v-if="loading">
          <el-icon class="el-input__icon"><ElIconSearch /></el-icon>
        </template>
      </el-input>
<!--      <el-button type="primary" :disabled="loading" @click="submit">{{ $t('submit') }}</el-button>-->
    </div>
    <div class="supplement flex items-center justify-between w-full">
      <el-icon><ElIconStamp /></el-icon>
      <div class="flex items-center justify-end w-full">
        <span>{{ $t('recent') }}  </span>
        <div class="w-10">
          <el-input v-model="useContextNum" placeholder="Please input" clearable />
        </div>
        <span>  {{ $t('context') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { useContextNum } = useContext()
const messageStore = useMessage()
const textarea = ref('')
const loading = ref(false)
const submit = (e?: MouseEvent) => {
  console.log("lalalaalalaal")
}
const keyDown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.keyCode === 13) {
    submit()
  }
}

</script>
<style>
.textarea-wrapper,
.input-wrapper {
  gap:15px;
}
</style>
