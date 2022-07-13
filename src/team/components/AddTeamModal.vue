<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal" style="display: block" role="dialog">
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5>Add Team</h5>
              <button type="button" class="close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="name">Team Name:</label>
                  <input type="text" class="form-control" v-model="teamName" />
                </div>
                <div class="form-group">
                  <label for="name">Team Owner(s):</label>
                  <input type="text" class="form-control" v-model="teamOwner" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" @click="saveNewTeam">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AddTeamModal",
  data() {
    return {
      teamName: undefined,
      teamOwner: undefined,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    saveNewTeam() {
      let teamData = { teamName: this.teamName, teamOwner: this.teamOwner };
      this.$emit("saveNewTeam", teamData);
    },
  },
};
</script>

<style></style>
