<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Fib Calculator</h1>
          <label>Enter your index:</label>
          <input v-model="index" placeholder="index">
          <button @click="setValue">Submit</button>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Indexes I have seen:</h2>

        <v-layout justify-center>
          {{ seenIndexes }}
        </v-layout>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Calculated Values:</h2>

        <v-layout justify-center>
          {{ element }}
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data() {
    return {
      seenIndexes: [],
      index: '',
      values: {},
      element: [],
    };
  },
  async mounted() {
    const values = await axios.get('/api/values/current');
    this.values = values.data;
    const seenIndexes = await axios.get('/api/values/all');
    this.seenIndexes = seenIndexes.data.map((index) => index.number).join(', ');
    const element: string[] = [];
    for (const key in this.values) {
      if (this.values.hasOwnProperty(key)) {
        element.push(`For index ${key} I calculated ${this.values[key]}`);
      }
    }
    this.element = element.map((answer) => answer).join('\n');
  },
  methods: {
    async setValue() {
      try {
        await axios.post('/api/values', {
          index: this.index,
        });
      } catch (error) {
        throw error;
      }
    },
  },
});
</script>

<style>
</style>
