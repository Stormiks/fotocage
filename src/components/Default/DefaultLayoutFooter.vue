<template>
  <footer>
    <div class="footer__info">
      <p
        class="copy">&copy; {{ currentYear }} Сайт сделан
        <a
          href="http://stormiks.github.io"
          target="_blank"
        >
          Skylinker
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
  import dayjs from 'dayjs'

  export default {
    name: 'DefaultLayoutFooter',
    computed: {
      currentYear() {
        return dayjs().format('YYYY')
      }
    }
  }
</script>

<style lang="less" scoped>
  footer {
    // border-top: 1px dashed #e6e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .footer__info {
    margin-left: auto;
    margin-right: 7px;
    margin-top: 7px;
    margin-bottom: 7px;
    padding: 10px;
  }

  .copy {
    color: #616060;
    font-family: 'Times New Roman', Times, Baskerville, Georgia, serif;
    text-align: right;

    a {
      &,
      &:visited {
        text-decoration: none;
        font-family: 'Exo 2 Semi Bold';
        font-size: 14pt;
        color: #adadad;
        padding: 7px;
      }

      &:hover {
        cursor: pointer;
        border-radius: 7px;
        background: #f3f3f3;
        box-shadow: 0 0 5px #ada9a9;
        padding: 7px;
        color: #02adc6;
        text-decoration: underline solid #847b7b;
      }
    }
  }
</style>
