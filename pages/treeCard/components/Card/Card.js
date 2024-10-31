// components/Card/Card.js
Component({
  properties: {
    node: Object,
  },
  methods: {
    handleClick() {
      this.triggerEvent('select', { node: this.properties.node });
    },
  },
});
