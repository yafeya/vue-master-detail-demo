import Vue from 'vue';
import Hero from '../models/hero';

Vue.component('hero-detail', {
  template: '#hero-detail',
  props: {
    selectedHero: Hero
  },
  methods: {
    isValid: function() {
      return this.selectedHero !== undefined;
    }
  }
});
