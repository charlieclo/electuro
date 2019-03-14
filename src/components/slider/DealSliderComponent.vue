<template>
  <!-- Deals -->
  <div class="deals">
    <div class="container">
      <div class="row">
        <div class="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
          <div class="deals-container">
            <div class="deals-title">
              <a><i class="fas fa-search-dollar"></i> DEALS</a>
            </div>

            <div class="deals-slider-container">
              <carousel
                :perPage="3"
                :loop="true"
                :navigationEnabled="false"
                :paginationEnabled="false"
                :autoplay="true"
                :autoplayTimeout="5000"
                :spacePadding="-40">
                
                <!-- Deals 1 -->
                <slide class="deals-items">
                  <div class="deals-image">
                    <img src="../../assets/deals.png" alt="">
                  </div>

                  <div class="deals-content">
                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-category">
                        <a href="#">Audio</a>
                      </div>
                    </div>

                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-name">
                        <a href="#">Jackplay V3</a>
                      </div>
                    </div>

                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-price-after">
                        $50
                      </div>
                    </div>
                  </div>
                </slide>

                <!-- Deals 1 -->
                <slide class="deals-items">
                  <div class="deals-image">
                    <img src="../../assets/deals.png" alt="">
                  </div>

                  <div class="deals-content">
                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-category">
                        <a href="#">Audio</a>
                      </div>
                    </div>

                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-name">
                        <a href="#">Jackplay V3</a>
                      </div>
                    </div>

                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-price-after">
                        $50
                      </div>
                    </div>
                  </div>
                </slide>

                <!-- Deals 1 -->
                <slide class="deals-items">
                  <div class="deals-image">
                    <img src="../../assets/deals.png" alt="">
                  </div>

                  <div class="deals-content">
                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-category">
                        <a href="#">Audio</a>
                      </div>
                    </div>

                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-name">
                        <a href="#">Jackplay V3</a>
                      </div>
                    </div>

                    <div class="deals-info d-flex flex-row justify-content-start">
                      <div class="deals-price-after">
                        $50
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: "DealSlider",
  components: {
    Carousel,
    Slide
  }
}
</script>

