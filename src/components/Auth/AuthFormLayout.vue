<template>
  <form
    @submit.prevent="submit"
    class="form form__auth p-8 relative z-0 rounded"
  >
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'AuthFormLayout',
    props: {
      errorForm: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      submit() {
        if (this.errorForm) this.$emit('auth-submit')
      }
    }
  }
</script>

<style lang="less" scoped>
  .form__auth {
    background-color: @color-white;
    background: linear-gradient(to top, @color-white, #eee);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2),
                0 1px 1px rgba(0, 0, 0, .2),
                0 3px 0 @color-white,
                0 4px 0 rgba(0, 0, 0, .2),
                0 6px 0 @color-white,
                0 7px 0 rgba(0, 0, 0, .2);

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      border: 1px dashed #ccc;
      top: 5px;
      bottom: 5px;
      left: 5px;
      right: 5px;
      box-shadow: 0 0 0 1px @color-white;
    }

    h1 {
      text-shadow: 0 1px 0 rgba(@color-white, 70%), 0 2px 0 rgba(#000, 50%);
      text-transform: uppercase;
      text-align: center;
      color: #666;
      margin: 0 0 30px 0;
      letter-spacing: 4px;
      font: normal 26px/1.2 'Helvetica';
      position: relative;
    }
  }
</style>
