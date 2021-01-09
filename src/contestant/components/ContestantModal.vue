<template>
  <transition name="modal">
    <div class="modal-mask" @click="closeModal">
      <div class="modal" style="display: block" role="dialog">
        <div
          class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body">
              <div class="row">
                <div class="col-10">
                  <h3 class="header">{{ contestant.name }}</h3>
                </div>
                <div class="col-2">
                  <button type="button" class="close" @click="closeModal">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <hr class="styled-hr" />
              <div class="row">
                <div class="col-md-6">
                  <img class="styled-image" :src="contestant.image" />
                </div>
                <div class="col-md-6">
                  <div class="facts-container">
                    <h5 class="header">Facts</h5>
                    <ul class="list-group">
                      <li
                        class="list-group-item"
                        v-for="(fact, index) in contestant.facts"
                        :key="index"
                      >
                        {{ fact }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="styled-bio">
                <h5 class="header">Bio</h5>
                <p class="styled-paragraph">{{ contestant.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ContestantModal",
  props: {
    contestant: Object,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-active {
  transition: opacity 0.5s ease;
}

.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.styled-image {
  width: 400px;
  border: solid 1px var(--primary) !important;
}

.header {
  color: var(--primary);
}

.styled-hr {
  height: 0px;
  border-bottom: 1px solid var(--primary);
}

.facts-container {
  margin: 16px;
}

.list-group-item {
  border: none;
}

.styled-bio {
  margin-top: 16px;
}

.styled-paragraph {
  border: solid 1px var(--primary) !important;
  padding: 8px;
}
</style>
