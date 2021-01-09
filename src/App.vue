<template>
  <div>
    <NavBar></NavBar>
    <router-view class="app"></router-view>
    <div class="footer">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <a href="https://njbrunner.com" target="_blank">BRÜ Development</a>
        </div>
        <div class="col-md-4">
          <div class="footer-right">
            <img src="@/assets/rose.png" height="20px" />
            made by
            <a
              href="https://www.flaticon.com/free-icon/rose_803106?related_item_id=803106&term=rose&related_item_id=803106"
              title="Those Icons"
              target="_blank"
              >Those Icons</a
            >
            from
            <a href="https://www.flaticon.com/" target="_blank" title="Flaticon"
              >Flaticon</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./layout/components/NavBar";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./assets/bachelorTheme.scss";

.app {
  margin-top: 80px;
}

.fancy-script {
  font-family: "Great Vibes", cursive;
}

.footer {
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
  text-align: center;
  padding: 8px;
}

.footer-right {
  text-align: right;
  padding-right: 16px;
}
</style>
