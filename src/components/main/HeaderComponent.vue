<template>
  <!-- Top Navigation Bar -->
  <div class="header-container">
    <header class="header">
      <div class="top-navbar">
        <div class="container">
        <!-- Login Modal -->
        <b-modal ref="loginModal" id="loginModal" title="Login" @shown="clearFormLogin" :hide-footer=true centered>
          <form role="form" @submit.stop.prevent="handleSubmitLogin">
            <b-form-group>
              <label for="loginEmail">Email</label>
              
              <b-form-input type="text" id="loginEmail" class="form-control" placeholder="Email" v-model="formLogin.email" aria-describedby="feedback-email"/>
              <b-form-invalid-feedback id="invalid-feedback">
                Please Input Email
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group>
              <label for="loginPassword">Password</label>
          
              <b-form-input type="password" id="loginPassword" class="form-control" placeholder="Password" v-model="formLogin.password" aria-describedby="feedback-password"/>
              <b-form-invalid-feedback id="invalid-feedback">
                Please Input Password
              </b-form-invalid-feedback> 
            </b-form-group>
          </form>

          <div class="modal-footer">
            <button class="btn btn-login btn-block" @click="handleLogin">Login</button>
          </div>
        </b-modal>

        <!-- Register Modal -->
        <b-modal ref="registerModal" id="registerModal" title="Register" @shown="clearFormRegister" :hide-footer=true centered>
          <form role="form" class="form-horizontal" @submit.stop.prevent="handleSubmitRegister"></form>
        </b-modal>

        <!-- Success Modal -->
        <b-modal ref="successModal" id="successModal" size="sm" :hide-header="true" :hide-footer="true" centered>
          <div class="success-logo">
            <b-img center src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_960_720.png" alt="Success Logo"/>
          </div>
          <div class="success-message text-center"> Success </div>
        </b-modal>

          <div class="row">
            <div class="col d-flex flex-row">
              <div class="top-navbar-contact">
                <i class="fas fa-mobile-alt"></i>
                <a href="tel:+6289645678900">+6289645678900</a>
              </div>

              <div class="top-navbar-contact">
                <i class="fas fa-envelope"></i>
                <a href="mailto:electurodotcom@company.com">electurodotcom@company.com</a>
              </div>

              <div class="top-navbar-content ml-auto">
                <div class="top-navbar-user">
                  <div>
                    <i class="fas fa-user"></i>
                    <a href="#" data-toggle="modal" v-b-modal="'registerModal'">Register</a>
                  </div>

                  <div>
                    <i class="fas fa-sign-in-alt"></i>
                    <a href="#" data-toggle="modal" v-b-modal="'loginModal'">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="main-header">
        <div class="container">
          <div class="row">
            <!-- Logo -->
            <div class="col-lg-2">
              <div class="logo-container">
                <div class="logo">
                  <a href="index.html"><i class="fas fa-bolt"></i> Electuro</a>
                </div>
              </div>
            </div>

            <!-- Search Box -->
            <div class="col-lg-6">
              <div class="search-header">
                <div class="search-form-container">
                  <form action="#" method="get" class="search-form">
                    <input class="form-control search-input" type="search" name="searchbox" placeholder="Search..." required>

                    <button type="submit" class="search-button">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="wishlist-cart-container d-flex flex-row justify-content-end">
                <!-- Wishlist Button -->
                <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                  <a href="#"><i class="far fa-heart"></i> <span>Wishlist</span></a>
                </div>

                <!-- Cart Button -->
                <div class="cart d-flex flex-row align-items-center justify-content-end">
                  <a href="#"><i class="fas fa-shopping-cart"></i> <span>Cart</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Header",
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    clearFormLogin () {
      this.formLogin.email = '',
      this.formLogin.password = ''
    },

    handleLogin (evt) {
      evt.preventDefault
      if (!this.formLogin.email) {
        alert('Please Enter Your Email')
      } else if (!this.emailValidation(this.formLogin.email)) {
        alert('Please Enter Correct Email')
      } else {
        this.handleSubmitLogin(this.formLogin.email, this.formLogin.password)
      }
    },

    emailValidation (email) {
      var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      return reg.test(email)
    },

    handleSubmitLogin (email, password) {
      this.$refs.loginModal.hide();
      this.$refs.successModal.show();
    },
    
    handleSubmitRegister () {
      alert(this.email)
    },
  }
}
</script>

<style scoped>
div.modal.successModal .modal-dialog {
  width: 400px !important;
  height: 800px !important;
}

.success-logo img {
  width: 100px;
  height: 100px;
}

.success-message {
  font-size: 30px;
}
</style>


