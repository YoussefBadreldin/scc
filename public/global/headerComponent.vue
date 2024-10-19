<template>
  <div>
    <head>
      <!-- Meta and CSS Preload Links -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SCC - Student Climate Community</title>

      <!-- Favicon and Touch Icons -->
      <link rel="apple-touch-icon" sizes="180x180" href="/images/Fav/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/images/Fav/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/images/Fav/favicon-16x16.png">
      <link rel="manifest" href="/images/Fav/site.webmanifest">
      <link rel="mask-icon" href="/images/Fav/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">

      <!-- SEO Meta Tags -->
      <meta name="description" content="SCC (Student Climate Community) is dedicated to environmental awareness and climate change advocacy. Join us for events, committees, and community initiatives.">
      <meta name="keywords" content="Student Climate Community, SCC, climate change, environmental awareness, sustainability">

      <!-- Open Graph Meta Tags for Social Sharing -->
      <meta property="og:title" content="SCC - Student Climate Community">
      <meta property="og:description" content="Join SCC and make a positive impact on climate change through education, advocacy, and community engagement.">
      <meta property="og:image" content="https://scc.com/images/og-image.jpg">
      <meta property="og:url" content="https://scc.com">
      <meta property="og:type" content="website">

      <!-- Twitter Card Meta Tags -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="SCC - Student Climate Community">
      <meta name="twitter:description" content="Be part of the solution with SCC. Discover events, articles, and opportunities to advocate for the environment.">

      <!-- CSS Preloading for Critical CSS -->
      <link rel="preload" href="/css/bootstrap.min.css" as="style">
      <link rel="preload" href="/css/fontawsom-all.min.css" as="style">
      <link rel="preload" href="/plugins/slider/css/owl.carousel.min.css" as="style">
      <link rel="preload" href="/plugins/slider/css/owl.theme.default.css" as="style">
      <link rel="preload" href="/css/style.css" as="style">

      <!-- Stylesheets -->
      <link rel="stylesheet" href="/css/bootstrap.min.css">
      <link rel="stylesheet" href="/css/fontawsom-all.min.css">
      <link rel="stylesheet" href="/plugins/slider/css/owl.carousel.min.css">
      <link rel="stylesheet" href="/plugins/slider/css/owl.theme.default.css">
      <link rel="stylesheet" href="/css/style.css">
    </head>

    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="/Home">
          <img src="../../images/logo.png" alt="Scc Logo" class="d-inline-block align-top logo-large" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Committees">Committees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Clubs">Clubs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Register">Registration</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Articles">Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('name');
      this.name = '';
    },
  },
  created() {
    this.name = localStorage.getItem('name');
  },
};
</script>

<style scoped>
  .navbar {
    background-color: white !important;
    border-bottom: 1px solid #e0e0e0;
  }

  .navbar-nav .nav-link {
    color: #333 !important;
    font-weight: bold;
    padding: 10px 15px;
  }

  .navbar-nav .nav-link:hover {
    color: #0056b3 !important;
  }

  .navbar-brand .logo-large {
    max-height: 80px; /* Increased logo height */
    max-width: 200px; /* Increased logo width */
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Add this to change navbar items to be stacked in mobile view */
  .navbar-nav {
    flex-direction: row;
  }

  .navbar-nav .nav-item {
    padding-left: 15px;
    padding-right: 15px;
  }

  /* Mobile-specific styles for vertical alignment of menu */
  @media (max-width: 992px) {
    .navbar-nav {
      flex-direction: column; /* Stack items vertically on small screens */
      align-items: center; /* Center align menu items */
    }

    .navbar-nav .nav-item {
      margin-bottom: 10px; /* Add space between items */
    }
  }
</style>
