<!--
 * @Author: zplu zplu@iflytek.com
 * @Date: 2023-10-24 19:45:13
 * @LastEditors: zplu zplu@iflytek.com
 * @LastEditTime: 2023-10-25 21:04:37
 * @FilePath: \translate\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import TranslatePage from './translatePage.vue';
import NavBar from './navBar.vue';
import PageFooter from './pageFooter.vue';
</script>

<template>
  <main class="index">
    <NavBar />
    <TranslatePage />
    <PageFooter />
  </main>
</template>

<style scoped>
.index {
  background: url('../assets/images/back.bb0f134c.png') no-repeat center;
  background-size: 100% 100%;
}
</style>
