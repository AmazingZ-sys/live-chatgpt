<template>
  <el-dialog
    width="30%"
    :align-center="true"
    :draggable="true"
    v-model="useDialogState">
        <div
          class="flex items-center"
          v-if="useDialogType === 'enterApiKey'">
          <el-form :model="formData">
            <el-form-item label="apiKey" :label-width="formLabelWidth">
              <el-input v-model="formData.apiKey" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click.stop="stateChangeHandler(!useDialogState)">Cancel</el-button>
            <el-button type="primary" @click.stop="dialogConfirm">
              Confirm
            </el-button>
          </span>
        </template>
  </el-dialog>
</template>
<script lang="ts" setup>
const { useDialogState, useDialogType, typeChangeHandler, stateChangeHandler } = useDialog()

const formLabelWidth = '140px'

const formData = reactive({
  apiKey: ''
})

// confirm fn
const dialogConfirm = (e: MouseEvent) => {
  switch (useDialogType.value) {
    case 'enterApiKey': saveApiKey(); break
  }
}

// apiKey confirm
const saveApiKey = () => {
  localStorage.setItem('openaiApiKey', formData.apiKey)
}

</script>
<style>

</style>
