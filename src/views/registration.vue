<template>
  <div>
    <HeaderComponent />

    <!-- Registration Section -->
    <section id="registration" class="registration-section">
      <div class="container">
        <h2 class="text-center">Register</h2>
        <p class="text-center">Join us by filling out the registration form below.</p>

        <form @submit.prevent="submitRegistration" class="registration-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="formData.name" required class="form-control" placeholder="Enter your full name">
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="formData.email" required class="form-control" placeholder="Enter your email">
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="formData.phone" required class="form-control" placeholder="Enter your phone number">
          </div>

          <div class="form-group">
            <label for="club">Preferred Club</label>
            <select id="club" v-model="formData.club" required class="form-control">
              <option value="" disabled>Select a club</option>
              <option v-for="club in clubs" :key="club.id" :value="club.name">{{ club.name }}</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">Submit Registration</button>
        </form>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../../public/global/headerComponent.vue';
import FooterComponent from '../../public/global/footerComponent.vue';

export default {
  name: 'RegistrationPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        club: '',
      },
      clubs: [
        { id: 1, name: 'Environmental Club' },
        { id: 2, name: 'Tech Club' },
        { id: 3, name: 'Arts Club' },
        { id: 4, name: 'Sports Club' },
      ],
    };
  },
  methods: {
    submitRegistration() {
      // Handle form submission logic here
      alert(`Thank you for registering, ${this.formData.name}!`);
      // You may also want to reset the form
      this.formData = { name: '', email: '', phone: '', club: '' };
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.registration-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c42326;
}

.registration-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  padding: 10px;
  font-size: 1rem;
}

.btn-primary {
  background-color: #c42326;
  border: none;
}

.btn-primary:hover {
  background-color: #a91e22;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .registration-section {
    padding: 20px 0;
  }
}
</style>
