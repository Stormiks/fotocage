<template>
  <div class="nav__list__item nav__link flex px-2 py-5">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'DefaultNavItem'
  }
</script>

<style lang="less" scoped>
  .nav__link {
    border-bottom: 3px solid transparent;
    transition-duration: 0.5s;

    &:hover {
      background: linear-gradient(to top, #bababa, @color-white);
    }

    &.active {
      border-bottom: 3px solid darken(#ff7900, 10%);

      &, * {
        cursor: not-allowed;
      }
    }

    &:not(.active)&:hover {
      cursor: pointer;
      border-bottom: 3px solid #ff7900;
    }

    a {
      text-shadow: 1px 1px 0 #ececec;
      color: #787878;
      font-family: 'Helvetica Roman';
      font-size: 13px;

      svg {
        margin-bottom: .2rem;
      }

      &:hover {
        color: #444;
      }
    }
  }
</style>
