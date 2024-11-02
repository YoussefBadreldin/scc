<template>
  <div>
    <HeaderComponent />

    <!-- Committees Section -->
    <section id="committees" class="committees-section">
      <div class="container">
        <h2 class="text-center">Committees</h2>
        <p class="text-center">Learn more about the committees within the Student Climate Community and their contributions.</p>

        <div class="row">
          <!-- Example of committee item, repeat as needed or loop through committee data -->
          <div class="col-md-6" v-for="committee in committees" :key="committee.id">
            <div class="card committee-card">
              <div class="card-body">
                <h5 class="card-title">{{ committee.name }}</h5>
                <p class="card-text">{{ committee.description }}</p>
                <button @click="navigateToCommittee(committee.id)" class="btn btn-primary">Learn More</button>
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
  name: 'CommitteesPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const router = useRouter();

    // Example committees data
    const committees = [
      { id: 1, name: 'Outreach Committee', description: 'Handles community outreach and partnership initiatives.' },
      { id: 2, name: 'Research Committee', description: 'Conducts climate-related research and provides insights for projects.' },
      { id: 3, name: 'Event Planning Committee', description: 'Organizes events and workshops to raise climate awareness.' },
      { id: 4, name: 'Media Committee', description: 'Manages media and promotional content for the community.' },
    ];

    const navigateToCommittee = (id) => {
      router.push(`/committees/${id}`); // Navigate to detailed view for the committee
    };

    return {
      committees,
      navigateToCommittee,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.committees-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c42326;
}

.card.committee-card {
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
  .committees-section {
    padding: 20px 0;
  }
}
</style>
