<template>
  <div class="home">
    <div class="main">
      <div v-for="category in categories" :key="category.name">
        {{category.name}}
        ${{category.totalSpendings}}
      </div>
    </div>
    <div v-if="addingSpendings">
      <select v-model="chosenCategory" name="categories" id="">
        <option v-for="category in categories" :key="category.name" :value="category.name">
          {{category.name}}
        </option>
      </select>
      <input v-model="spendingsAmount" type="text" placeholder="amount">
      <button @click="addSpendings">Sumbit</button>
    </div>
    <div v-if="creatingCategory">
      <input v-model="categoryInput" id="categoryInput" name="categoryInput" type="text">
      <button @click="addCategory">Submit</button>
    </div>
    <div class="bottom">
      <button @click="creatingCategory = !creatingCategory">Add Category</button>
      <button @click="addingSpendings = !addingSpendings">Add Spendings</button>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WelcomeCard from '@/components/WelcomeCard.vue'; // @ is an alias to /src

type Spending = {
  amount: number;
  date: Date;
}

type Category = {
  name: string;
  spendings: Spending[];
  totalSpendings: number;
}

@Options({
  components: {
    WelcomeCard,
  },
})
export default class Home extends Vue {
  categories: Category[] = [];

  categoryInput = '';

  creatingCategory = false;

  addingSpendings = false;

  chosenCategory = '';

  spendingsAmount = '0';

  logout(): void {
    this.$router.push('/');
  }

  addSpendings(): void {
    this.categories.forEach((el, index) => {
      if (el.name === this.chosenCategory) {
        const newSpending: Spending = {
          amount: parseFloat(this.spendingsAmount),
          date: new Date(),
        };
        el.spendings.push(newSpending);
        this.categories[index].totalSpendings += parseFloat(this.spendingsAmount);
      }
    });
    this.chosenCategory = '';
    this.spendingsAmount = '0';
    this.addingSpendings = false;
  }

  addCategory(): void {
    const newCategory: Category = { name: '', spendings: [], totalSpendings: 0 };
    newCategory.name = this.categoryInput;
    this.categories.push(newCategory);
    this.categoryInput = '';
    this.creatingCategory = false;
  }
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
