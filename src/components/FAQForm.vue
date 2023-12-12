<template>
  <div data-v-13c3bc48="" data-v-688a1315="" class="sai-modal">
    <div data-v-13c3bc48="" class="inner">
      <div data-v-3fc1e8b2="" data-v-688a1315="" class="sai-enquete">
        <form data-v-3fc1e8b2="" class="content input">
          <div data-v-3fc1e8b2="" class="heading">
            <div data-v-3fc1e8b2="" class="title">
              <div data-v-3fc1e8b2="">ご質問を入力してください：</div>
              <div data-v-3fc1e8b2=""><span style="color: #ff0000">※個人情報を含む情報は返信できませんので、ご了承ください。</span></div>
            </div>
            <div data-v-3fc1e8b2="" class="close" @click="closeForm"> <!-- Attach click event handler -->
              <a data-v-3fc1e8b2="" class="icon">
                <div data-v-3fc1e8b2="" class="img"></div>
              </a>
            </div>
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="title">タイトル:</label>
            <input data-v-3fc1e8b2="" type="text" id="title" class="field" placeholder="">
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="category">カテゴリ:</label>
            <select data-v-3fc1e8b2="" id="category" class="field">
              <option value="分类1">カテゴリ1</option>
              <option value="分类2">カテゴリ2</option>
              <option value="分类3">カテゴリ3</option>
            </select>
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="tags">タグ:</label>
            <input data-v-3fc1e8b2="" type="text" id="tags" class="field" placeholder="">
          </div>
          <div data-v-3fc1e8b2="" class="input">
            <label for="content">内容:</label>
            <textarea data-v-3fc1e8b2="" type="text" id="content" rows="8" class="field" placeholder=""></textarea>
          </div>
          <div data-v-3fc1e8b2="" class="submit">
            <a data-v-3fc1e8b2="" class="send">問題の提出</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/FAQstyle.css';
export default {
  methods: {
    closeForm() {
      // Trigger the close event to notify the parent component to close the form
      this.$emit("close");
    },
  },
};
</script>

<style scoped>

</style>
