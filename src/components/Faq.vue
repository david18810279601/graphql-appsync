<template>
  <div class="faq">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="author" content="NRI FAQ">
      <meta name="robots" content="index,follow,noodp,noydir">
      <meta name="keywords" content="NRI FAQ">
      <meta name="description" content="NRI FAQ">
      <meta name="copyright" content="NRI, Inc. All Rights Reserved.">
      <title>NRI FAQ</title>
      <meta property="og:title" content="NRI FAQ">
      <meta property="og:description" content="NRI FAQ">
    </head>

    <body>

    <!-- ============ヘッダ============ -->
    <header class="header header--visitor">
      <div class="header-inner">

        <div class="header-logo">
          <a class="header-logo__link" href="./" previewlistener="true">
            <img class="image" src="../assets/logo.jpg" alt="Nomura Research Institute">
          </a>
          <div class="text">Nomura Research Institute</div>
        </div>


        <div class="header-link">
          <ul class="header-nav">
            <li class="header-nav__list">
              <a class="header-nav__link" href="#" @click.prevent="showFAQForm">よくあるご質問トップ</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- /.header -->
    <!-- ============/ヘッダ============ -->


    <div class="hdg-lv1 hdg-lv1--visitor">
      <h1 class="hdg-lv1__element" xt-marked="ok">よくあるご質問</h1>
    </div>


    <div id="str-contents">
      <div id="str-contents-inner">
        <div id="sai-tag-app" class="net">
          <div id="sai-tag-app-main">
            <div data-v-3b947974="" class="FaqClientWrapper">
              <div data-v-e1cfd5e6="" data-v-3b947974="" class="loading-wrapper"><!----> <!----> <!----> <!---->
                <div data-v-6ed57b63="" data-v-3b947974="" class="FaqClientMultiple" data-v-e1cfd5e6="">
                  <div data-v-688a1315="" data-v-6ed57b63="" class="FaqClientPage sai-pc">
                    <div data-v-688a1315="" id="sai-top" class="sai-wrap">
                      <div data-v-688a1315="" class="sai-contentBody">
                        <div data-v-688a1315="" class="sai-category">
                          <div data-v-688a1315="" class="sai-category__list">
                            <div data-v-288b08e5="" data-v-688a1315="" class="sai-resourceTree">
                              <!---->
                              <div data-v-288b08e5="" class="items">
                                <div data-v-288b08e5="" class="item talkScriptType-node">
                                  <div data-v-288b08e5="" class="sai-resourceTree">
                                    <div data-v-288b08e5="" class="content withItems"><span
                                      data-v-288b08e5="" class="title" xt-marked="ok">
      目录列表页
    </span></div> <!----></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-v-688a1315="" id="sai-tag-search-input" class="sai-content">
                          <div data-v-688a1315="" class="sai-content__wrap">
                            <div data-v-688a1315="" class="sai-content__wrap__search">
                              <div data-v-688a1315="" class="sai-input"><!---->
                                <div data-v-688a1315="" class="sai-input__title">
                                  <div data-v-688a1315="" class="icon"><img data-v-688a1315=""
                                                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMzMzO2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTYuMjg2LDE3LjQyOWE1LjE0Myw1LjE0MywwLDEsMSw1LjE0My01LjE0M0E1LjE0Myw1LjE0MywwLDAsMSw2LjI4NiwxNy40MjlaTTYuMjg2LDZhNi4yODUsNi4yODUsMCwxLDAsNi4yODUsNi4yODZBNi4yODYsNi4yODYsMCwwLDAsNi4yODYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTYpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMS45MjEsMTcuMTEzYTcuNyw3LjcsMCwwLDEtLjgwOC44MDhMMTUuMTkyLDIyLDE2LDIxLjE5MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTYpIi8+PC9zdmc+">
                                  </div>
                                  <div data-v-688a1315="" class="text" xt-marked="ok">
                                    検索する
                                  </div>
                                </div>
                                <div data-v-688a1315="" class="sai-input__field">
                                  <div data-v-688a1315="">
                                    <div data-v-5b52de44="" data-v-688a1315="">
                                      <div data-v-5b52de44="" class="sai-tagged-input">
                                        <div data-v-5b52de44=""
                                             class="sai-tagged-input__field"><input
                                          data-v-5b52de44="" type="text" size="1" v-model="searchTitle" @input="updateSearch"
                                          placeholder="キーワードを入力してください"
                                          >
                                          <div data-v-5b52de44=""
                                               class="sai-tagged-input__field__close"
                                               style="display: none;"><a
                                            data-v-5b52de44="" class="icon"><img
                                            data-v-5b52de44="" src=""></a></div>
                                        </div> <!----> <!----></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-v-688a1315="" class="sai-recommend"
                                   style="height: auto; display: none;">
                                <div data-v-688a1315="">
                                  <div data-v-57b49209="" data-v-688a1315=""
                                       class="sai-tag-list">
                                    <div data-v-57b49209="" class="sai-tag-list__head">
                                      <div data-v-57b49209=""
                                           class="sai-tag-list__head__title"><span
                                        data-v-57b49209="" class="text"
                                        xt-marked="ok">よく見られているキーワード</span></div>
                                    </div>
                                    <div data-v-57b49209=""
                                         class="sai-tag-list__tags"></div> <!----></div>
                                </div>
                              </div>
                            </div>
                            <div data-v-688a1315="" class="sai-content__wrap__faq" style="" id="ItemDetail">
                              <div data-v-688a1315="" class="sai-content__wrap__faq__content" v-if="itemFa1List">
                                <div data-v-688a1315=""
                                     class="sai-content__wrap__faq__content__header">
                                  <div data-v-688a1315=""
                                       class="sai-content__wrap__faq__content__header__title"
                                       xt-marked="ok">
                                    よくあるご質問
                                  </div>
                                </div>
                                <div data-v-d5467936="" data-v-688a1315=""
                                     class="sai-list-content">
                                  <ul data-v-d5467936="" class="sai-list-content__lists">

                                    <li v-for="faq in faqs" :key="faq.id" data-v-d5467936=""
                                        class="sai-list-content__lists__item"
                                        style="animation-delay: 0.05s;"><i
                                      data-v-d5467936=""
                                      class="sai-list-content__lists__item__top_icon"></i>
                                      <div data-v-d5467936=""
                                           class="sai-list-content__lists__item__wrapper">
                                        <div data-v-d5467936=""
                                             class="sai-list-content__lists__item__content">
                                          <div data-v-d5467936=""
                                               class="sai-list-content__lists__item__content__ancesters"><span
                                            data-v-d5467936=""
                                            class="sai-list-content__lists__item__content__ancesters__ancester"
                                            xt-marked="ok">
              NISA
              <span data-v-d5467936="" xt-marked="ok">＞</span></span><span data-v-d5467936=""
                                                                           class="sai-list-content__lists__item__content__ancesters__ancester"
                                                                           xt-marked="ok">
              つみたてNISA
                                            <!----></span></div>
                                          <div data-v-d5467936=""
                                               class="sai-list-content__lists__item__content__title">
                                            <div data-v-d5467936=""
                                                 class="sai-list-content__lists__item__content__title__text"
                                                 xt-marked="ok">
                                              {{ faq.title }}
                                            </div>
                                          </div>
                                        </div>
                                        <div data-v-d5467936=""
                                             class="sai-list-content__lists__item__category">
                                          <div data-v-d5467936=""
                                               class="sai-list-content__lists__item__category__text"
                                               xt-marked="ok">
                                            FAQ{{ faq.id }}
                                          </div>
                                        </div>
                                      </div>
                                      <div data-v-d5467936=""
                                           class="sai-list-content__lists__item__wrapper sp">
                                        <div data-v-d5467936=""
                                             class="sai-list-content__lists__item__content">
                                          <div data-v-d5467936=""
                                               class="sai-list-content__lists__item__content__ancesters"><span
                                            data-v-d5467936=""
                                            class="sai-list-content__lists__item__content__ancesters__ancester"
                                            xt-marked="ok">
              NISA
              <span data-v-d5467936="" xt-marked="ok">&gt;</span></span><span data-v-d5467936=""
                                                                              class="sai-list-content__lists__item__content__ancesters__ancester"
                                                                              xt-marked="ok">
              つみたてNISA
                                            <!----></span></div>
                                          <div data-v-d5467936=""
                                               class="sai-list-content__lists__item__category">
                                            <div data-v-d5467936=""
                                                 class="sai-list-content__lists__item__category__text"
                                                 xt-marked="ok">
                                              {{ faq.title }}
                                            </div>
                                          </div>
                                        </div>
                                        <div data-v-d5467936=""
                                             class="sai-list-content__lists__item__content__title">
                                          <div data-v-d5467936=""
                                               class="sai-list-content__lists__item__content__title__text"
                                               xt-marked="ok">
                                            FAQ{{ faq.id }}
                                          </div>
                                        </div>
                                      </div>
                                      <div data-v-d5467936=""
                                           class="sai-list-content__lists__item__icon" @click="clickOpenFaqItem(faq)">
                                        <div data-v-d5467936="" class="img"></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div v-else >
                                <div data-v-688a1315="" id="sai-faq-top" @click="clickCloseFaqItem" class="sai-content__wrap__clear" style="">
                                <a data-v-688a1315="" class="sai-content__wrap__clear__button" style="display: none;">
                                  <div data-v-688a1315="" class="sai-content__wrap__clear__button__icon chevron">
                                    <div data-v-688a1315="" class="img">
                                      
                                    </div>
                                  </div>
                                  <span data-v-688a1315="">検索結果一覧に戻る</span>
                                </a>
                                <a data-v-688a1315="" class="sai-content__wrap__clear__button">
                                  <div data-v-688a1315="" class="sai-content__wrap__clear__button__icon redo">
                                    <div data-v-688a1315="" class="img">
                                      
                                    </div>
                                  </div> 
                                  <span data-v-688a1315="">クリア</span>
                                </a>
                              </div>
                                <div data-v-688a1315="" id="sai-scenario"  class="sai-content__wrap__scenario" style="">
                              <div data-v-688a1315="" class="sai-content__wrap__scenario__inner">
                                <section data-v-688a1315="" class="sai-content__wrap__scenario__inner__section question active">
                                  <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head">
                                    <div data-v-688a1315="" class="scenario_wrap">
                                      <i data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head__icon"></i> 
                                      <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head__title">
                                        <div data-v-688a1315="" class="ancestors">
                                          <span data-v-688a1315="">
                                            NISA
                                            <span data-v-688a1315="">
                                              ＞
                                            </span>
                                          </span>
                                          <span data-v-688a1315="">
                                            つみたてNISA
                                          </span>
                                        </div> 
                                        <div data-v-688a1315="" class="question">
                                          年の途中でつみたてNISAをスタートしました。つみたてNISA枠上限の40万円を使い切る方法はありますか？
                                        </div>
                                      </div>
                                      <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head__faq">
                                        <div data-v-688a1315="" class="text">
                                          <span data-v-688a1315="">
                                            FAQ10002780
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div> 
                                  <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__content">
                                    <section data-v-688a1315="" id="sai-scenario-answer" class="sai-content__wrap__scenario__inner__section answer">
                                      <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head">
                                        <div data-v-688a1315="" class="scenario_wrap">
                                          <i data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head__icon"></i> 
                                          <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__head__title">
                                            <div data-v-688a1315="" class="question">
                                            </div>
                                          </div>
                                        </div>
                                      </div> 
                                      <div data-v-688a1315="" class="sai-content__wrap__scenario__inner__section__content">
                                        <div data-v-1581f9c6="" data-v-688a1315="" class="VerticalNavigation">
                                          <div data-v-1581f9c6="" class="navigationContentWrapper">
                                            <div data-v-1581f9c6="" class="navigationContent">
                                              <div data-v-1581f9c6="">
                                                <div data-v-1b34b87b="" data-v-1e039539="" data-v-1581f9c6="" localactive="true">
                                                  <div data-v-1e039539="" data-v-1b34b87b="" class="sai-resource-list active">
                                                    <div data-v-1e039539="" data-v-1b34b87b="" class="wrapper">
                                                      <div data-v-1e039539="" data-v-1b34b87b="" class="content">
                                                        <div data-v-1e039539="" data-v-1b34b87b="" class="icon"></div> 
                                                        <div data-v-1e039539="" data-v-1b34b87b="" class="captionWrapper">
                                                          <div data-v-1e039539="" data-v-1b34b87b="" class="caption" style="">
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div data-v-1e039539="" data-v-1b34b87b="" class="items"></div>
                                                    </div> 
                                                    <div data-v-1e039539="" data-v-1b34b87b="" class="feedbackArea">
                                                      <div data-v-d273509c="" data-v-1e039539="" class="resolveFeedback" data-v-1b34b87b="">
                                                        <div data-v-d273509c="">
                                                          <div data-v-d273509c="" class="resolveButtonArea">
                                                            <div data-v-d273509c="" class="feedbackGuide">
                                                              <div data-v-d273509c="" class="text">
                                                                解決しましたか？
                                                              </div>
                                                            </div> 
                                                            <div data-v-d273509c="" class="buttonWrapper">
                                                              <a data-v-d273509c="" class="resolveButton">
                                                                はい
                                                              </a> 
                                                              <a data-v-d273509c="" class="resolveButton">
                                                                いいえ
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div> 
                                                      </div>
                                                    </div>
                                                  </div> 
                                                  <div data-v-1b34b87b="" class="scrollGuide" style="display: none;">
                                                    <div data-v-5d9fd387="" data-v-1b34b87b="" class="arrow">
                                                      <div data-v-5d9fd387="" class="arrow__icon">
                                                        <img data-v-5d9fd387="" src="/static/img/sai-icon_scroll.d9312c8.gif">
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </section>
                              </div>
                            </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> <!----></div>
              </div>
            </div>
          </div>
          <div data-v-a20b4bf2="" class="multimodal"></div>
        </div>
      </div><!-- /#str-contents-inner -->
    </div>
    </body>
  </div>
</template>

<script>

import ListNRIFQAS from "../queries/ListNRIFQAS";
import FAQForm from './FAQForm.vue'; // 导入FAQForm组件
import Vue from 'vue';
import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true });
import uuidV4 from 'uuid/v4'

// 在这里引入外部CSS文件
import '../assets/style.css';
export default {
  name: 'App',
  data() {
    return {
      faqs: [],
      tag: '',
      category: '',
      searchTitle: '', // 用户输入的搜索关键词
      hydrated: false,
      isFAQFormVisible: false, // 控制FAQForm.vue组件的显示状态
      itemFa1List: true,
      faqInfo: {
        detail: "",
        answer: "", 
      },
      
    };
  },
  async mounted() {
    try {
      if (this.$apollo && this.$apollo.provider && this.$apollo.provider.defaultClient) {
        await this.$apollo.provider.defaultClient.hydrated();
        this.hydrated = true;
      }
    } catch (error) {
      console.error('Error in mounted hook:', error);
      this.hydrated = true;
    }
    this.$on('faqSubmitted', this.refreshFAQs);
  },
  apollo: {
    faqs: {
      query: ListNRIFQAS,
      variables() {
        let filter = {};
        if (this.searchTitle) {
          filter.title = { eq: this.searchTitle };
        } else {
          if (this.tag) {
            filter.tag = { eq: this.tag };
          }
          if (this.category) {
            filter.category = { eq: this.category };
          }
        }
        return Object.keys(filter).length ? { filter } : {};
      },
      update: data => {
        return data.listNRIFQAS.items;
      },
      result({ data, loading, networkStatus }) {
        console.log('Result:', data, loading, networkStatus);
      }
    }
  },
  methods: {
    showFAQForm() {
      this.$modal.show(FAQForm);
    },
    refreshFAQs() {
      this.$apollo.queries.faqs.refetch();
    },
    updateSearch() {
      // 当搜索关键词改变时，重新获取 faqs
      this.$apollo.queries.faqs.refetch();
      console.log('1111');
    },
    async clickOpenFaqItem(data) {
    
      // 创建一个基于 id 的过滤器
      const filter = {
        id: { eq: data.id }
      };
        // 使用 ListNRIFQAS 查询并传入过滤器
        const response = await this.$apollo.query({
          query: ListNRIFQAS,
          variables: { filter: filter },
        });
        
          // 打印获取到的数据，用于调试
        console.log('Fetched data for ID:', data.id, response.data);

    },
    clickCloseFaqItem() {
     this.$data.itemFa1List = true;
    },
  },
  components: {
    FAQForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
