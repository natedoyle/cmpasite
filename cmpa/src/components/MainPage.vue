<template>
  <div>
    <NavBar />
    <div class="column left"><InfoBar /></div>
    <div class="column middle">This is some text</div>
    <div class="column right"><Splide /></div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import InfoBar from '@/components/InfoBar.vue'
import { Splide, SplideSlide } from '@/components/PhotoGallery.vue'
export default {
  components: {
    NavBar,
    InfoBar,
    Splide
    // SplideSlide
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
  .column {
    float: left;
  }

  .left,
  .right {
    width: 25%;
  }

  .middle {
    width: 50%;
  }
}
</style>
