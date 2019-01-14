import Vue from 'vue';
import Hero from '../models/hero';

Vue.component('hero-update', {
  template: '#hero-update',
  props: {
    selectedHero: Hero
  },
  data: function() {
    return { power: '' };
  },
  methods: {
    isValid: function() {
      return this.selectedHero !== undefined;
    },
    update: function() {
      if (this.selectedHero !== undefined) {
        this.selectedHero.Power = this.power;
        Vue.nextTick(function() {
          var heroPower = $('#hero-power').text();
          $('#current-power').text(heroPower);
        });
      }
    }
  }
});
