<template>
      <div class="button">{{text}}</div>
</template>

<script>
  export default {
    name: "BaseBotton",
    props: {
      text: {
        type: String,
        default: "按钮",
      }
    },
    data() {
      return {
      };
    },

  };
</script>
<style lang="scss" scoped>
  @import "~style";
  .button {
    padding: rem(19) 0;
    margin-bottom: rem(40);
    text-align: center;
    @include font-size(36);
    color: #fff;
    background-image: linear-gradient(44deg, #222cc3 0%, #2b7cd6 100%);
    border-radius: rem(12);
  }

</style>
