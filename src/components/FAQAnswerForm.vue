<template>
  <div data-v-13c3bc48="" data-v-688a1315="" class="sai-modal">
    <div data-v-13c3bc48="" class="inner">
      <div data-v-3fc1e8b2="" data-v-688a1315="" class="sai-enquete">
        <form data-v-3fc1e8b2="" class="content input" @submit.prevent="submitForm">
          <div data-v-3fc1e8b2="" class="heading">
            <div data-v-3fc1e8b2="" class="title">
              <div data-v-3fc1e8b2="">ご回答を入力してください：</div>
              <div data-v-3fc1e8b2=""><span style="color: #ff0000">※個人情報を含む情報は返信できませんので、ご了承ください。</span></div>
            </div>
            <div data-v-3fc1e8b2="" class="close" @click="closeForm">
              <a data-v-3fc1e8b2="" class="icon">
                <div data-v-3fc1e8b2="" class="img"></div>
              </a>
            </div>
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="answer">回答内容:</label>
            <textarea data-v-3fc1e8b2="" type="text" id="answer" rows="8" class="field" v-model="updatedAnswer" placeholder=""></textarea>
          </div>
          <div data-v-3fc1e8b2="" class="submit">
            <button type="submit" data-v-3fc1e8b2="" class="send">OK</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/FAQstyle.css';
import UpdateFAQ from "../mutations/UpdateFAQ";
export default {
    props: ['faqInfo'], // 从父组件接收 faqInfo
    data() {
      return {
        updatedAnswer: '', // 存储更新后的答案
      };
    },
    mounted() {
      // 当组件加载时，用传入的答案初始化 updatedAnswer
      if (this.faqInfo && this.faqInfo.answer) {
        this.updatedAnswer = this.faqInfo.answer;
      }
    },
    methods: {
      closeForm() {
        this.$emit("close"); // 通知父组件关闭表单
      },
      async submitForm() {
        try {
          // 准备更新的数据
          const input = {
            id: this.faqInfo.id, // 使用从父组件传入的 ID
            answer: this.updatedAnswer, // 使用更新后的答案
            createtime: this.faqInfo.createtime // 使用从父组件传入的 createtime
          };
  
          // 调用 GraphQL mutation 更新数据
          await this.$apollo.mutate({
            mutation: UpdateFAQ,
            variables: { input },
          });
  
          this.closeForm(); // 关闭表单
          this.$emit('faqSubmitted'); // 发出一个自定义事件，通知父组件刷新 FAQ 列表
        } catch (error) {
          console.error('Error submitting FAQ:', error);
        }
      },
    },
};
</script>

<style scoped>

</style>
