// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Hero from './models/hero';
import './components/hero-list';
import './components/hero-detail';

require('./content/main.css');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    selectedHero: new Hero(),
    heroList: [
      new Hero('Captain America', 'Super Soldier'),
      new Hero('Iron Man', 'Armor & Millionare'),
      new Hero('Thor', 'God with Thunder'),
      new Hero('Hulk', 'Smash everything'),
      new Hero('Halk Eye', 'Arrow Sniper'),
      new Hero('Black Widow', 'Expert of fighting & interrogating')
    ]
  },
  methods: {
    onSelectedHero: function(event) {
      this.selectedHero = event;
      console.log(this.selectedHero.Name);
    },
    isValid: function() {
      return this.selectedHero !== undefined && this.selectedHero.Name !== '';
    }
  }
});
