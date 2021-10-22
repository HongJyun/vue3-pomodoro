const useFallbackImg = (el:any) => {
  el.src = require('@/assets/logo.png')
}

export default {
  created (el:HTMLImageElement):void {
    console.log('add directive')
    el.addEventListener('error', () => { useFallbackImg(el) })
  },
  beforeUnmount (el:HTMLImageElement):void {
    console.log('beforeUnmount directive')
    el.removeEventListener('error', useFallbackImg)
  }
}
