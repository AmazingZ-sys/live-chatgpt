type MessageType = []
export const useMessage = defineStore('messageStore', {
  state: () => ({
    currentMessageList: [],
  }),
  getters: {

  },
  actions: {
    updateCurrentMessage(list: MessageType) {
      this.currentMessageList = list
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMessage, import.meta.hot))
}
