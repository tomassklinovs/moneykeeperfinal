<template>
  <div class="home">
    <WelcomeCard msg="Welcome to Your Vue.js + TypeScript App"/>
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
export default class Home extends Vue {
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
