<template>
  <div class="textarea-wrapper h-20 border border-1 border-blue p-4 flex justify-center items-center">
    <el-input
      v-model="textarea"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    />
  </div>
</template>

<script lang="ts" setup>
const textarea = ref('')
</script>
