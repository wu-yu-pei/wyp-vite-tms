export default {
  mounted(el, binding) {
    console.log(binding.value)
    if (binding.value == 0) {
      el.parentNode.removeChild(el)
    }
  },
}
