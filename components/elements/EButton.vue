<script>
export default {
  render(h) {
    const tag = this.$attrs.href ? 'a' : 'div';
    const options = {
      class: this.buttonClasses,
      attrs: { ...this.$attrs },
      style: this.buttonSize,
      on: {
        click: this.onClick,
      },
    };
    return h(tag, options, this.$slots.default);
  },
  name: 'Button',
  props: {
    size: String,
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '2.5rem',
    },
    active: Boolean,
    disabled: Boolean,
  },
  computed: {
    buttonClasses() {
      return [
        'btn',
        {
          'btn-disabled': this.disabled,
          'btn-active': this.active,
        },
      ];
    },
    buttonSize() {
      return {
        width: this.size || this.width,
        height: this.size || this.height,
        lineHeight: this.size || this.height,
      };
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style>
.btn {
  color: var(--color-font);
  background-color: transparent;
  text-align: center;
  user-select: none;
  border-radius: var(--size-radius);
  /* icon support */
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  cursor: pointer;
  background-color: var(--color-hover);
}

.btn.btn-active {
  color: var(--color-primary);
}

.btn.btn-disabled:hover {
  cursor: not-allowed;
  background-color: transparent;
}
</style>
