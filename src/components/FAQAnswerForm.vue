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
            <textarea data-v-3fc1e8b2="" type="text" id="answer" rows="8" class="field" v-model="answer" placeholder=""></textarea>
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
  data() {
    return {
      title: '',
      category: '',
      tags: '',
      content: '',
    };
  },
  methods: {
    closeForm() {
      // Trigger the close event to notify the parent component to close the form
      this.$emit("close");
    },

    generateRandomId() {
      return Math.floor(Math.random() * 9000000000) + 1000000000; // 生成一个十位数的随机数
    },

    getCurrentISOTime() {
      return new Date().toISOString(); // 获取当前时间的 ISO 格式字符串
    },

    async submitForm() {
      try {
        const input = {
          id: this.generateRandomId(),
          answer: this.content,
        };
        console.log(input);

        await this.$apollo.mutate({
          mutation: UpdateFAQ,
          variables: {
            createnrifqainput: input,
          },
        });

        this.closeForm();
        this.$emit('faqSubmitted'); // 发出事件
      } catch (error) {
        console.error('Error submitting FAQ:', error);
        // 处理错误
      }
    },
  },
};
</script>

<style scoped>

</style>
