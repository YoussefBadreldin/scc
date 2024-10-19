<template>
  <div>
    <HeaderComponent />

    <!-- Slider -->
    <div class="slider">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../images/slider/slider-1.jpg" class="d-block w-100 slider-img" alt="Slider Image 1">
            <div class="carousel-caption d-none d-md-block">
              <!-- Optional Caption Here -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="text-center">About</h2>
        <p class="text-center">Information about the Student Climate Community (SCC).</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="mission-section">
      <div class="container">
        <h2 class="text-center">Mission</h2>
        <p class="text-center">Our mission is to advocate for climate awareness and environmental sustainability.</p>
      </div>
    </section>

    <!-- Vision Section -->
    <section id="vision" class="vision-section">
      <div class="container">
        <h2 class="text-center">Vision</h2>
        <p class="text-center">Our vision is to create a sustainable world through active student involvement.</p>
      </div>
    </section>

    <!-- Founder Section -->
    <section id="founder" class="founder-section">
      <div class="container">
        <h2 class="text-center">Founder</h2>
        <p class="text-center">Details about the founder and their contributions to the SCC.</p>
      </div>
    </section>

    <!-- Supervisor Section -->
    <section id="supervisor" class="supervisor-section">
      <div class="container">
        <h2 class="text-center">Supervisor</h2>
        <p class="text-center">Information about the project supervisor and their background.</p>
      </div>
    </section>

    <!-- Board Section -->
    <section id="board" class="board-section">
      <div class="container">
        <h2 class="text-center">Board</h2>
        <p class="text-center">Meet the board members and their roles in the Student Climate Community.</p>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'; // Import useRouter
import HeaderComponent from '../../public/global/headerComponent.vue';
import FooterComponent from '../../public/global/footerComponent.vue';

export default {
  name: 'MainComponent',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const router = useRouter(); // Initialize router

    const navigateToPage = (path) => {
      router.push(path); // Use router to navigate
    };

    return {
      navigateToPage,
    };
  },
  mounted() {
    window.scrollTo(0, 0); // Scroll to top on mount
  },
};
</script>

<style scoped>
/* Slider Styles */
.slider {
  padding-top: 0;
}

.slider .carousel-item img {
  height: 75vh; /* Set slider height to the original size */
  object-fit: cover;
}

/* Section Styles */
.about-section, .mission-section, .vision-section, .founder-section, .supervisor-section, .board-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c42326;
}

p {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .about-section, .mission-section, .vision-section, .founder-section, .supervisor-section, .board-section {
    padding: 20px 0;
  }

  .slider .carousel-item img {
    height: 40vh; /* Reduce slider height on mobile for better display */
  }
}
</style>
