export const useGlobal = defineStore('globalStore', {
  state: () => ({
    apiKey: ''
  }),
  getters: {

  },
  actions: {
    updateApikey(apiKey: string) {
      this.apiKey = apiKey
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobal, import.meta.hot))
}
