<template>
  <div>
    <!-- Banner -->
    <div class="banner">
      <!-- Banner Background -->
      <div class="banner-background" style=""></div>
      
      <div class="banner-container">
        <div class="banner-dots"></div>

        <!-- Banner Slider -->
        <carousel 
          :loop="true"
          :perPage="1" 
          paginationPosition="bottom-overlay">
          <!-- Banner 1 -->
          <slide class="banner-item">
            <div class="container" style="height: 100%;">
              <div class="row" style="height: 100%;">
                <div class="col-lg-5">
                  <div class="banner-content">
                    <div class="banner-title">ELECTRONIC MAN SALE</div>
                    <div class="banner-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div class="banner-button">
                      <a href="#deals">See More</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-7">
                  <div class="banner-image-container">
                    <div class="banner-image adjust-top-50">
                      <img src="../assets/banner-person.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>
          
          <!-- Banner 2 -->
          <slide class="banner-item">
            <div class="container" style="height: 100%;">
              <div class="row" style="height: 100%;">
                <div class="col-lg-5">
                  <div class="banner-content">
                    <div class="banner-title">ELECTRONIC WOMAN SALE</div>
                    <div class="banner-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div class="banner-button">
                      <a href="#deals">See More</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-7">
                  <div class="banner-image-container">
                    <div class="banner-image adjust-top-65">
                      <img src="../assets/banner-person-2.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>

    <CategorySlider></CategorySlider>

    <DealSlider></DealSlider>

    <!-- Promotion -->
    <div class="promotion">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <!-- Promotion : Express Delivery -->
            <div class="promotion-item d-flex flex-row align-items-center justify-content-start">
              <div class="promotion-icon">
                <i class="fas fa-truck"></i>
              </div>

              <div class="promotion-content">
                Express Delivery
              </div>
            </div>
          </div>

          <!-- Promotion : 24 Hours Service -->
          <div class="col-lg-3">
            <div class="promotion-item d-flex flex-row align-items-center justify-content-start">
              <div class="promotion-icon">
                <i class="far fa-clock"></i>
              </div>

              <div class="promotion-content">
                24 Hours Service
              </div>
            </div>
          </div>

          <!-- Promotion : Easy Payment -->
          <div class="col-lg-3">
            <div class="promotion-item d-flex flex-row align-items-center justify-content-start">
              <div class="promotion-icon">
                <i class="far fa-credit-card"></i>
              </div>

              <div class="promotion-content">
                Easy Payment
              </div>
            </div>
          </div>

          <!-- Promotion : Cheaper Price -->
          <div class="col-lg-3">
            <div class="promotion-item d-flex flex-row align-items-center justify-content-start">
              <div class="promotion-icon">
                <i class="fas fa-tags"></i>
              </div>

              <div class="promotion-content">
                Cheaper Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand -->
    <div class="brand">
      <div class="container">
        <div class="section-title text-center">
          OUR BRANDS
        </div>

        <div class="row">
          <div class="col">
            <div class="brand-slider-container">
              <carousel 
                :loop="true" 
                :autoplay="true" 
                :autoplayTimeout="5000" 
                :perPage="6" 
                :navigationEnabled="true"
                :paginationEnabled="false"
                navigationNextLabel="<i class='fa fa-chevron-right'></i>"
                navigationPrevLabel="<i class='fa fa-chevron-left'></i>">
                <!-- Brand Apple -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-apple.png" alt=""></slide>
                
                <!-- Brand Samsung -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-samsung.png" alt=""></slide>
                
                <!-- Brand Xiaomi -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-xiaomi.png" alt=""></slide>
                
                <!-- Brand ASUS -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-asus.png" alt=""></slide>
                
                <!-- Brand Intel -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-intel.png" alt=""></slide>
                
                <!-- Brand Windows -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-windows.png" alt=""></slide>
                
                <!-- Brand JBL -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-jbl.png" alt=""></slide>
                
                <!-- Brand Sony -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-sony.png" alt=""></slide>
                
                <!-- Brand HP -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-hp.png" alt=""></slide>
                
                <!-- Brand Canon -->
                <slide class="brand-item d-flex flex-column justify-content-center"><img src="../assets/brand-canon.png" alt=""></slide>
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
import CategorySlider from '@/components/slider/CategorySliderComponent'
import DealSlider from '@/components/slider/DealSliderComponent'
export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    CategorySlider,
    DealSlider
  },
}
</script>





