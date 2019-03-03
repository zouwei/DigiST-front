export default {
  watch: {
    'form': {
      handler (info) {
        if(typeof info == 'object' && Object.keys(info).length) {
          //this.form = {...info};
          this.$emit('input', info);
        }

      },
      immediate: true,
      deep: true,
    }
  }
}
