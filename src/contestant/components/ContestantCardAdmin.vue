<template>
  <a @click="handleClick">
    <b-card
      :title="contestant.name"
      :img-src="contestant.image"
      img-top
      tag="article"
      style="width: 300px;"
      class="mb-2 styled-card"
    >
      <b-card-text>
        {{ contestant.age }}
        <br />
        {{ contestant.occupation }}
        <br />
        {{ contestant.location }}
      </b-card-text>
      <button class="btn btn-primary form-control" @click="noRose">
        No Rose
      </button>
      <div v-if="!contestant.active" class="notActive"></div>
    </b-card>
  </a>
</template>

<script>
export default {
  name: "ContestantCardAdmin",
  props: {
    contestant: Object,
  },
  methods: {
    handleClick() {
      // this.$emit("contestantClicked", this.contestant);
    },
    noRose() {
      this.$store.dispatch("disableContestant", this.contestant._id);
    },
  },
};
</script>

<style>
.styled-card {
  margin-left: 10px;
  margin-right: 10px;
}

.notActive {
  background: lightgrey;
  height: 100%;
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  left: 0;
  bottom: 0;
  opacity: 0.75;
  border-radius: 1px;
}
</style>
