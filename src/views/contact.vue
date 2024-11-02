<template>
  <div>
    <HeaderComponent />

    <!-- Contact Us Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="text-center">Contact Us</h2>
        <p class="text-center">Feel free to reach out to us with any questions or inquiries.</p>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" required class="form-control" placeholder="Your Name">
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required class="form-control" placeholder="Your Email">
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" required class="form-control" placeholder="Your Message" rows="5"></textarea>
          </div>

          <button type="submit" class="btn btn-primary mt-3">Send Message</button>
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
  name: 'ContactUsPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Add your form submission logic here
      console.log("Form data submitted:", this.formData);
      alert("Thank you for contacting us!");
      this.formData = { name: '', email: '', message: '' }; // Reset form
    }
  },
  mounted() {
    window.scrollTo(0, 0); // Scroll to top on mount
  },
};
</script>

<style scoped>
.contact-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c42326;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
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

@media (max-width: 768px) {
  .contact-section {
    padding: 20px 0;
  }
}
</style>
