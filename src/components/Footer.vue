<template>
  <footer>
    <div class="footer container">
      <div class="footer__left">
        <div class="footer__contacts">
          <span>+7(983) 314-49-36,</span>
          <span> krai54rus@gmail.com</span>
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__project-name">
          <span>"Тестовое задание"</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: #5aab9c71;
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    & span {
      font-weight: bold;
    }
  }
}
</style>
