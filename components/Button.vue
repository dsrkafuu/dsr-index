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
    rmRadius: {
      type: String,
      validator: (val) => {
        return ['top', 'bottom'].includes(val);
      },
    },
  },
  computed: {
    buttonClasses() {
      return [
        'btn',
        {
          'btn-disabled': this.disabled,
          'btn-active': this.active,
        },
        this.rmRadius && `btn-rm-${this.rmRadius}`,
      ];
    },
    buttonSize() {
      return {
        width: this.size || this.width,
        height: this.size || this.height,
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
  flex-direction: column;
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

.btn.btn-rm-bottom {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.btn.btn-rm-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
