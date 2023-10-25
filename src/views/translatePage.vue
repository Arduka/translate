<script setup></script>

<template>
  <div data-v-f6317ade="" data-v-2c1ee98c="" class="translate-tab-container">
    <div data-v-8fe1da54="" data-v-f6317ade="" class="tab-header">
      <div data-v-8fe1da54="" class="tab-left">
        <div data-v-8fe1da54="" class="tab-item active color_text_1">
          <span data-v-8fe1da54="" class="color_text_1">文本</span>
        </div>
        <div data-v-8fe1da54="" class="tab-item color_text_3 gradient-item">
          <span data-v-8fe1da54="" class="color_text_1">AI翻译</span>
        </div>
        <div data-v-8fe1da54="" class="tab-item color_text_3">
          <span data-v-8fe1da54="" class="color_text_1">文档</span>
        </div>
        <div data-v-8fe1da54="" class="tab-item color_text_3">
          <span data-v-8fe1da54="" class="color_text_1">AI写作</span>
        </div>
        <div data-v-8fe1da54="" class="tab-item color_text_3">
          <span data-v-8fe1da54="" class="color_text_1">人工翻译</span>
        </div>
        <i data-v-8fe1da54="" class="ic_new_tag"></i>
      </div>
    </div>
    <div data-v-f6317ade="" class="tab-body-border-box">
      <div data-v-f6317ade="" class="tab-body color_bg_3">
        <div data-v-21ee88cf="" id="inputOriginal" class="TextTranslateContainer">
          <div id="TextTranslate" class="horizontal big-size">
            <div class="source">
              <div class="text-translate-top">
                <div class="language-selector-contianer">
                  <div data-v-0c9b47a0="" class="languageSelector languageSelector-web">
                    <div data-v-0c9b47a0="" class="lang-container lanFrom-container">
                      <div data-v-0c9b47a0="" class="lang-text color_text_1">自动选择语言</div>
                      <div data-v-0c9b47a0="" class="ic_language_arrowdown small-size"></div>
                    </div>
                    <!----><!----><!---->
                  </div>
                </div>
              </div>
              <!-- <div class="empty-placeholder color_text_5 ltr">
                <span>输入要翻译的文本或网址</span>
              </div> -->
              <div id="js_fanyi_input_outside_container" disable-keydown-focus="">
                <div
                  id="js_fanyi_input"
                  class="mod-section input color_text_1 auto"
                  contenteditable="true"
                  spellcheck="false"
                  dir="ltr"
                ></div>
              </div>
              <div class="sourceAction" disable-quci="">
                <div class="opt">
                  <div class="opt-left yd-form-container">
                    <!----><label class="checkbox color_text_3" style="display: none"
                      ><input id="keywordswitch" class="g-checkbox" type="checkbox" /><span
                        class="color_text_1"
                        >重点词汇</span
                      ></label
                    >
                  </div>
                  <!---->
                </div>
              </div>
              <!---->
            </div>
            <div class="resizer color_divider_border_5"></div>
            <div class="target">
              <div class="text-translate-top">
                <div class="domain-selector-container">
                  <div data-v-cf18bfde="" class="domainSelector domainSelector-web">
                    <div data-v-cf18bfde="" class="dialog-domain-container">
                      <div data-v-cf18bfde="" class="domain-text color_text_1">通用场景</div>
                      <div data-v-cf18bfde="" class="ic_language_arrowdown"></div>
                    </div>
                    <div data-v-cf18bfde="" class="aigc-test-invitation" style="display: none">
                      <div data-v-cf18bfde="" class="title">
                        <div data-v-cf18bfde="" class="content color_text_vip_1">
                          VIP用户内测邀请
                        </div>
                        <div data-v-cf18bfde="" class="label"></div>
                      </div>
                      <div data-v-cf18bfde="" class="desc color_text_vip_2">
                        一键解锁论文、合同、邮件等多种翻译场景
                      </div>
                      <div data-v-cf18bfde="" class="button">
                        <div data-v-cf18bfde="" class="no-prompts color_text_vip_2">不再提示</div>
                        <div
                          data-v-cf18bfde=""
                          class="participation color_label_vip_tint_1_text color_text_vip_1_background"
                        >
                          立即参与
                        </div>
                      </div>
                    </div>
                    <!----><!---->
                  </div>
                </div>
              </div>
              <div id="js_fanyi_output" class="color_text_1">
                <!----><!----><!----><!----><!---->
              </div>
              <div class="targetAction" disable-quci="">
                <div class="opt">
                  <div class="opt-left yd-form-container container_ch">
                    <!----><!----><!----><!---->
                  </div>
                  <div class="opt-right yd-form-container"></div>
                </div>
              </div>
            </div>
            <div class="fixedBottomActionBar-border-box" style="visibility: hidden">
              <div class="fixedBottomActionBar color_bg_1">
                <div class="sourceActionContainer">
                  <div class="sourceAction" disable-quci="">
                    <div class="opt">
                      <div class="opt-left yd-form-container">
                        <!----><label class="checkbox color_text_3" style="display: none"
                          ><input id="keywordswitch" class="g-checkbox" type="checkbox" /><span
                            class="color_text_1"
                            >重点词汇</span
                          ></label
                        >
                      </div>
                      <!---->
                    </div>
                  </div>
                </div>
                <div class="targetActionContainer">
                  <div class="targetAction" disable-quci="">
                    <div class="opt">
                      <div class="opt-left yd-form-container container_ch">
                        <!----><!----><!----><!---->
                      </div>
                      <div class="opt-right yd-form-container"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!----><!---->
        </div>
        <!---->
        <div data-v-21ee88cf="" class="box_ch"><!----></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
