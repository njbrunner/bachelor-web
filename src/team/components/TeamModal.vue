<template>
  <transition name="modal">
    <div class="modal-mask" @click="closeModal">
      <div class="modal" style="display: block" role="dialog">
        <div
          class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body">
              <div class="row">
                <div class="col-10">
                  <h5 class="header">{{ team.name }}</h5>
                </div>
                <div class="col-2">
                  <button type="button" class="close" @click="closeModal">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <hr class="styled-hr" />

              <div class="stats">
                <h6 class="header">
                  Total Roses:
                  <span class="badge badge-danger">{{
                    this.getTotalRoses()
                  }}</span>
                </h6>
                <h6 class="header">
                  Remaining Contestants:
                  <span class="badge badge-danger">{{
                    this.getTeamPoints()
                  }}</span>
                </h6>
              </div>

              <div class="row">
                <contestant-card
                  v-for="(contestant, index) in team.team_members"
                  :key="index"
                  :contestant="contestant"
                ></contestant-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ContestantCard from "../../contestant/components/ContestantCard";

export default {
  name: "TeamModal",
  components: {
    ContestantCard,
  },
  props: {
    team: Object,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    getTeamPoints() {
      var activeMembers = 0;
      for (const member of this.team.team_members) {
        if (member.active) {
          activeMembers += 1;
        }
      }
      return activeMembers;
    },
    getTotalRoses() {
      let totalRoses = 0;
      for (const member of this.team.team_members) {
        totalRoses += member.roses;
      }
      return totalRoses;
    },
  },
};
</script>

<style scoped>
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

.header {
  color: var(--primary);
}

.styled-hr {
  height: 0px;
  border-bottom: 1px solid var(--primary);
}

.stats {
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--primary);
  width: auto;
}
</style>
