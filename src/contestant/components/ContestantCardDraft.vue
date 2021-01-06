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
      <button
        v-if="isDrafting && !isContestantDrafted"
        class="btn btn-primary form-control"
        @click="draftContestant(contestant)"
      >
        Draft
      </button>
      <div v-if="!contestant.active" class="notActive"></div>
    </b-card>
  </a>
</template>

<script>
export default {
  name: "ContestantCardDraft",
  props: {
    contestant: Object,
    isDrafting: Boolean,
  },
  data() {
      return {
          isContestantDrafted: false
      }
  },
  methods: {
    handleClick() {
      this.$emit("oContestantClicked", this.contestant);
    },
    draftContestant(contestant) {
        this.isContestantDrafted = true;
      this.$emit("onDraftContestant", contestant);
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
