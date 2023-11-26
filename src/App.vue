<template>
  <div id="app" v-if="hydrated">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    hydrated: false
  }),
  async mounted() {
    try {
      // 确保 Apollo Client 已经定义
      if (this.$apollo && this.$apollo.provider && this.$apollo.provider.defaultClient) {
        // 如果 hydrated() 是一个存在的方法并返回 Promise
        await this.$apollo.provider.defaultClient.hydrated();
      }
      this.hydrated = true;
    } catch (error) {
      console.error('Error in mounted hook:', error);
      // 在这里处理错误或设置备用逻辑
      // 例如，如果 hydrated 方法失败，你可以选择设置 hydrated 为 true 或进行其他处理
      this.hydrated = true; // 可以根据实际情况调整
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
