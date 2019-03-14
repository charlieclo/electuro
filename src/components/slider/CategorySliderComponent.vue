<template>
  <!-- Categories -->
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <!-- Category Title -->
          <div class="category-title d-flex flex-column align-items-start justify-content-start">
            <a><i class="fas fa-shopping-bag"></i> CATEGORIES</a>
          </div>
        </div>

        <!-- Category Slider Navigator -->
        <div class="col-lg-9">
          <div class="category-slider-navigator text-right">
            <!-- Category Slider Previous Button -->
            <div class="category-previous-btn category-navigator">
              <i class="fas fa-angle-left ml-auto"></i>
            </div>

            <!-- Category Slider Next Button -->
            <div class="category-next-btn category-navigator">
              <i class="fas fa-angle-right ml-auto"></i>
            </div>
          </div>
        </div>

        <div class="col-lg-12">
          <!-- Category Slider -->
          <div class="category-slider-container">
            <carousel 
              :perPage="4" 
              :loop="true" 
              :navigationEnabled="false" 
              :paginationEnabled="false">
              <!-- Category Smartphone -->
              <slide v-for="c in categories" :key="c.id" class="category-item d-flex flex-column align-items-center justify-content-center">
                <div class="category-content">
                  <a href="#">
                    <i :class="c.icon"></i> <br>
                    {{c.name}}
                  </a>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios'
export default {
  name: "CategorySlider",
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      categories: []
    }
  },
  created () {
    axios.get('/categories').then((resp) => {
      this.categories = resp.data
      console.log(resp.data)
    })
  },
}
</script>

