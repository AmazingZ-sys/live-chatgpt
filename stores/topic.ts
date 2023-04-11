type TopicType = []
const useTopic = defineStore('topic', {
  state: () => ({
    topicList: [],
    activeTopicId: ''
  }),
  getters: {

  },
  actions: {
    updateActiveTopicId(id: string) {
      this.activeTopicId = id;
    },
    updateTopicList(list: TopicType) {
      this.topicList = list
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTopic, import.meta.hot))
}
