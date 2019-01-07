import Vue from 'vue'

Vue.component('hero-list', {
  template: '#hero-list',
  props: {
    heroList: Array
  },
  data: function() {
    return {
      selectedHero: this.selectedHero
    };
  },
  methods: {
    onSelectedHero: function(hero) {
      if (hero !== undefined) {
        this.selectedHero = hero;
        this.$emit('hero-selected', hero);
      }
    }
  }
});
