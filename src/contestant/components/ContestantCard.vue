<template>
  <a @click="handleClick">
    <b-card
      :img-src="contestant.image"
      img-top
      tag="article"
      style="width: 300px;"
      class="mb-2 styled-card"
    >
      <!-- :class="{'drafted': contestant['drafted'] && drafting}"
    > -->
      <div class="row">
        <div class="col-6">
          <b-card-title>{{ contestant.name }}</b-card-title>
        </div>
        <div class="col-6" style="text-align: right">
          <img src="@/assets/rose.png" height="30" />
          <span class="badge badge-danger">x {{ contestant.roses }}</span>
        </div>
      </div>

      <b-card-text>
        {{ contestant.age }}
        <br />
        {{ contestant.occupation }}
        <br />
        {{ contestant.location }}
      </b-card-text>

      <!-- <b-button
        class="form-control"
        variant="primary"
        v-if="drafting && !contestant['drafted']"
        @click="draftContestant($event, contestant, index)"
      >Draft</b-button> -->
      <div v-if="!contestant.active" class="notActive"></div>
    </b-card>
  </a>
</template>

<script>
export default {
  name: "ContestantCard",
  props: {
    contestant: Object,
  },
  methods: {
    handleClick() {
      this.$emit("contestantClicked", this.contestant);
    },
  },
};
</script>

<style>
.styled-card {
  margin-left: 10px;
  margin-right: 10px;
  color: var(--primary);
}

.contestant-card-name {
  color: var(--primary);
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
