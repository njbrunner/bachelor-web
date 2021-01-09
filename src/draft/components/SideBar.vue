<template>
  <div class="sidebar">
    <div class="draft-control">
      <div class="row">
        <div class="col-md-4">
          <button
            :disabled="isDrafting"
            class="btn btn-outline-primary draft-control-button"
            @click="addTeamClicked"
          >
            Add Team
          </button>
        </div>
        <div class="col-md-4">
          <button
            :disabled="isDrafting"
            class="btn btn-outline-primary draft-control-button"
            @click="shuffleTeams"
          >
            Shuffle Teams
          </button>
        </div>
        <div class="col-md-4">
          <button
            v-if="!isDrafting"
            class="btn btn-primary draft-control-button"
            @click="startDraft"
          >
            Start Draft
          </button>
          <button
            v-if="isDrafting"
            class="btn btn-primary draft-control-button"
            @click="endDraft"
          >
            End Draft
          </button>
        </div>
      </div>
    </div>
    <button v-if="!isDrafting" class="btn btn-secondary" @click="resetDraft">
      Reset Draft
    </button>
    <br />
    <h3>Teams</h3>
    <hr />
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ active: isActive(index) }"
        v-for="(player, index) in players"
        :key="index"
      >
        <div class="flex-container">
          <h4 style="flex-grow: 8">{{ player.name }}</h4>
          <button class="btn btn-primary" @click="viewTeam(player)">
            View Team
          </button>
          <button
            class="btn btn-outline-primary"
            v-if="!isDrafting"
            @click="removePlayer(player)"
          >
            <i class="material-icons">delete_outline</i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  components: {},
  props: ["drafting", "currentDraftPosition", "players", "isDrafting"],
  computed: {
    sortedPlayers() {
      const players = this.players.slice();
      return players.sort(this.compare);
    },
  },
  methods: {
    addTeamClicked() {
      this.$emit("onAddTeamClicked");
    },
    viewTeam(player) {
      this.$emit("onViewTeam", player);
    },
    isActive(index) {
      if (this.isDrafting) {
        if (this.currentDraftPosition == index) {
          return true;
        }
      }
      return false;
    },
    removePlayer(player) {
      this.$emit("onRemoveTeam", player._id);
    },
    shuffleTeams() {
      this.$store.dispatch("shuffleTeams");
    },
    startDraft() {
      this.$emit("onStartDraft");
    },
    endDraft() {
      this.$emit("onEndDraft");
    },
    resetDraft() {
      this.$emit("onResetDraft");
      this.$store.dispatch("resetDraft");
    },
  },
};
</script>
<style>
.sidebar {
  position: fixed;
}
.draft-control {
  background-color: lightgrey;
  padding: 16px;
  border: 1px solid var(--primary);
  border-radius: 10px;
}
.draft-control-button {
  height: 100%;
  width: 100%;
}

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>
