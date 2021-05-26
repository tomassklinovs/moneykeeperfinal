<template>
  <div class="stats">
    stats
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WelcomeCard from '@/components/WelcomeCard.vue'; // @ is an alias to /src

@Options({
  components: {
    WelcomeCard,
  },
})
export default class Statistics extends Vue {
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
