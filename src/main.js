import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 setImmediate（如果您的应用需要）
import setimmediate from 'setimmediate'

// 引入 AWS AppSync 和 Vue Apollo
import AWSAppSyncClient from 'aws-appsync'
import VueApollo from 'vue-apollo'
import appSyncConfig from './AppSync'

// 首先安装 VueApollo 插件
Vue.use(VueApollo)

// 配置 AWS AppSync
const config = {
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey,
  }
}

// 配置 Apollo Client 的默认选项
const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    }
  }
}

// 创建 AWS AppSync 客户端
const client = new AWSAppSyncClient(config, options)

// 创建 VueApollo 提供者
const appsyncProvider = new VueApollo({
  defaultClient: client
})

// 创建 Vue 实例
new Vue({
  el: '#app',
  router,
  components: { App },
  apolloProvider: appsyncProvider, // 提供 Apollo 客户端给所有子组件
  template: '<App/>'
})

Vue.config.productionTip = false

