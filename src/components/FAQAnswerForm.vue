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
            <quill-editor data-v-3fc1e8b2="" :options="editorOptions" @blur="onEditorBlur($event)"  @ready="onEditorReady($event)" @focus="onEditorFocus($event)" id="answer" rows="8" class="field" v-model="updatedAnswer"></quill-editor>
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
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
    components: {
      quillEditor
    },
    props: ['faqInfo'],
    data() {
      return {
        updatedAnswer: '', // 存储更新后的答案
        editorOptions: {
          // options for the quill editor
          placeholder: 'Type your text here...'
        },
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
        this.$emit("close");
      },
      async submitForm() {
        try {
          const input = {
            id: this.faqInfo.id.substring(3),
            answer: this.updatedAnswer,
            createtime: this.faqInfo.createtime
          };

          console.log("Mutation input data:", input);
          // 调用 GraphQL mutation 更新数据
          await this.$apollo.mutate({
            mutation: UpdateFAQ,
            variables: { input },
          });

          this.closeForm(); // 关闭表单
          this.$emit('faqSubmitted');
        } catch (error) {
          console.error('Error submitting FAQ:', error);
        }
      },
    },
};
</script>

<style scoped>

</style>
