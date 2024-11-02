<template>
  <div>
    <HeaderComponent />

    <!-- Clubs Section -->
    <section id="clubs" class="clubs-section">
      <div class="container">
        <h2 class="text-center">Clubs</h2>
        <p class="text-center">Discover the various clubs within our community and the activities they offer.</p>

        <div class="row">
          <!-- Example of a club item, repeat as needed or loop through club data -->
          <div class="col-md-6" v-for="club in clubs" :key="club.id">
            <div class="card club-card">
              <div class="card-body">
                <h5 class="card-title">{{ club.name }}</h5>
                <p class="card-text">{{ club.description }}</p>
                <button @click="navigateToClub(club.id)" class="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../../public/global/headerComponent.vue';
import FooterComponent from '../../public/global/footerComponent.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ClubsPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const router = useRouter();

    // Example clubs data
    const clubs = [
      { id: 1, name: 'Environmental Club', description: 'Focuses on environmental initiatives and awareness activities.' },
      { id: 2, name: 'Tech Club', description: 'Engages members in tech projects and coding workshops.' },
      { id: 3, name: 'Arts Club', description: 'Promotes creative expression through art events and exhibitions.' },
      { id: 4, name: 'Sports Club', description: 'Organizes sports events and encourages an active lifestyle.' },
    ];

    const navigateToClub = (id) => {
      router.push(`/clubs/${id}`); // Navigate to detailed view for the club
    };

    return {
      clubs,
      navigateToClub,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.clubs-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c42326;
}

.card.club-card {
  margin: 15px 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
  color: #333;
}

.card-text {
  font-size: 1rem;
  color: #666;
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
  .clubs-section {
    padding: 20px 0;
  }
}
</style>
