<template>
  <el-dialog
    width="30%"
    :align-center="true"
    :draggable="true"
    v-model="useDialogState">
        <div
          class="flex items-center"
          v-if="useDialogType === 'enterApiKey'">
          <el-form :model="formData" class="w-full">
            <el-form-item label="apiKey" :label-width="formLabelWidth">
              <el-input v-model="formData.apiKey" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click.stop="dialogCancel">{{ $t('cancel') }}</el-button>
            <el-button type="primary" @click.stop="dialogConfirm">
              {{ $t('confirm') }}
            </el-button>
          </span>
        </template>
  </el-dialog>
</template>
<script lang="ts" setup>
const { useDialogState, useDialogType, typeChangeHandler, stateChangeHandler } = useDialog()

const formLabelWidth = '60px'

// form data
const formData = reactive({
  apiKey: ''
})

// confirm fn
const dialogConfirm = (e: MouseEvent) => {
  switch (useDialogType.value) {
    case 'enterApiKey': saveApiKey(); break
  }
}

// cancel fn
const dialogCancel = (e?: MouseEvent) => {
  stateChangeHandler(!useDialogState)
}

// get api key
watch([useDialogState, useDialogType], ([state, type], [oldState, oldType]) => {
  if (state && type === 'enterApiKey') {
    const openaiApiKey = localStorage.getItem('openaiApiKey')
    if (openaiApiKey) {
      formData.apiKey = openaiApiKey;
    }
  }
})

// apiKey confirm
const saveApiKey = () => {
  localStorage.setItem('openaiApiKey', formData.apiKey)
  dialogCancel()
}

</script>
<style>

</style>
