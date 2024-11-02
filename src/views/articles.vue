<template>
  <div>
    <HeaderComponent />

    <!-- Articles Section -->
    <section id="articles" class="articles-section">
      <div class="container">
        <h2 class="text-center">Articles</h2>
        <p class="text-center">Read the latest articles and updates from the Student Climate Community.</p>

        <div class="row">
          <!-- Example of article item, repeat as needed or loop through article data -->
          <div class="col-md-4" v-for="article in articles" :key="article.id">
            <div class="card article-card">
              <img :src="article.image" class="card-img-top" :alt="article.title">
              <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
                <p class="card-text">{{ article.excerpt }}</p>
                <button @click="navigateToArticle(article.id)" class="btn btn-primary">Read More</button>
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
  name: 'ArticlesPage',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const router = useRouter();

    // Example articles data
    const articles = [
      { id: 1, title: 'Climate Change 101', image: '../../images/articles/article-1.jpg', excerpt: 'An introduction to climate change and its effects.' },
      { id: 2, title: 'Sustainable Living Tips', image: '../../images/articles/article-2.jpg', excerpt: 'Practical tips for a more sustainable lifestyle.' },
      { id: 3, title: 'Student Activism for the Environment', image: '../../images/articles/article-3.jpg', excerpt: 'How students are making a difference for our planet.' },
    ];

    const navigateToArticle = (id) => {
      router.push(`/articles/${id}`); // Navigate to article details page
    };

    return {
      articles,
      navigateToArticle,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.articles-section {
  padding: 40px 0;
  background-color: #f8f9fa;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #c42326;
}

.card.article-card {
  margin: 15px 0;
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
  .articles-section {
    padding: 20px 0;
  }
}
</style>
