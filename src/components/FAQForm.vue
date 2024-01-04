<template>
  <div data-v-13c3bc48="" data-v-688a1315="" class="sai-modal">
    <div data-v-13c3bc48="" class="inner">
      <div data-v-3fc1e8b2="" data-v-688a1315="" class="sai-enquete">
        <form data-v-3fc1e8b2="" class="content input" @submit.prevent="submitForm">
          <div data-v-3fc1e8b2="" class="heading">
            <div data-v-3fc1e8b2="" class="title">
              <div data-v-3fc1e8b2="">ご質問を入力してください：</div>
              <div data-v-3fc1e8b2=""><span style="color: #ff0000">※個人情報を含む情報は返信できませんので、ご了承ください。</span></div>
            </div>
            <div data-v-3fc1e8b2="" class="close" @click="closeForm">
              <a data-v-3fc1e8b2="" class="icon">
                <div data-v-3fc1e8b2="" class="img"></div>
              </a>
            </div>
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="title">タイトル:</label>
            <input data-v-3fc1e8b2="" type="text" id="title" class="field" v-model="title" placeholder="">
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="category">カテゴリ:</label>
            <select data-v-3fc1e8b2="" id="category" class="field" v-model="category">
              <option value="カテゴリ1">カテゴリ1</option>
              <option value="カテゴリ2">カテゴリ2</option>
              <option value="カテゴリ3">カテゴリ3</option>
            </select>
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="tags">タグ:</label>
            <input data-v-3fc1e8b2="" type="text" id="tags" class="field" v-model="tags" placeholder="">
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="content">内容:</label>
            <textarea data-v-3fc1e8b2="" type="text" id="content" rows="8" class="field" v-model="content" placeholder=""></textarea>
          </div>
          <div data-v-3fc1e8b2="" class="submit">
            <button type="submit" data-v-3fc1e8b2="" class="send">問題の提出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../assets/event-bus'
import '../assets/FAQstyle.css';
import CreateFAQ from "../mutations/CreateFAQ";
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
          title: this.title,
          category: this.category,
          tag: this.tags,
          detail: this.content,
          createtime: this.getCurrentISOTime(),
        };
        console.log(input);

        await this.$apollo.mutate({
          mutation: CreateFAQ,
          variables: {
            createnrifqainput: input,
          },
        });

        // 使用 Event Bus 触发全局事件
        EventBus.$emit('faqSubmitted');
        this.closeForm();
      } catch (error) {
        console.error('Error submitting FAQ:', error);
        // 处理错误
      }
      this.$data.itemFa1List = true;
    },
  },
};
</script>

<style scoped>

</style>
