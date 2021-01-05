<template>
    <transition name="modal">
        <div class="modal-mask" @click="closeModal">
            <div class="modal" style="display: block" role="dialog">
                <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>{{team.name}}</h5>
                            <button type="button" class="close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button> 
                        </div>
                        <div class="modal-body">
                            <h5>Team</h5>
                            <hr>
                            <div class="row">
                                <contestant-card
                                    v-for="(contestant, index) in team.team"
                                    :key="index"
                                    :contestant="contestant"></contestant-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ContestantCard from './ContestantCard.vue';

export default {
    name: "TeamModal",
    components: {
        ContestantCard
    },
    props: {
        team: Object
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    },
    created() {
        console.log(this.team); //eslint-disable-line no-console
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-active {
    transition: opacity .5s ease;
}

.modal-leave-active {
    transition: opacity .5s ease;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}
</style>