<template>
  <div>
    <head>
      <!-- Meta and CSS Preload Links -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AIUSU - اتحاد طلاب جامعة العلمين الدولية</title>

      <!-- Favicon and Touch Icons -->
      <link rel="apple-touch-icon" sizes="180x180" href="/images/Fav/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/images/Fav/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/images/Fav/favicon-16x16.png">
      <link rel="manifest" href="/images/Fav/site.webmanifest">
      <link rel="mask-icon" href="/images/Fav/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">

      <!-- SEO Meta Tags -->
      <meta name="description" content="AIUSU يوفر معلومات شاملة للطلاب في جامعة العلمين الدولية. تعرف على اللجان، كيفية الانضمام، والانتخابات الطلابية.">
      <meta name="keywords" content="اتحاد طلاب جامعة العلمين الدولية, AIUSU, لجان الطلاب, انتخابات الطلاب, الانضمام للاتحاد, الدراسة في مصر, الحياة الجامعية, فرص العمل, المنح الدراسية, التواصل الطلابي">

      <!-- Open Graph Meta Tags for Social Sharing -->
      <meta property="og:title" content="AIUSU - اتحاد طلاب جامعة العلمين الدولية">
      <meta property="og:description" content="اكتشف المزيد حول اتحاد طلاب جامعة العلمين الدولية. معلومات عن اللجان، الانضمام، والانتخابات.">
      <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg"> <!-- Ensure this is the correct image path -->
      <meta property="og:url" content="https://yourdomain.com">
      <meta property="og:type" content="website">

      <!-- Twitter Card Meta Tags -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="AIUSU - اتحاد طلاب جامعة العلمين الدولية">
      <meta name="twitter:description" content="استكشف اتحاد طلاب جامعة العلمين الدولية. تعرف على كيفية الانضمام، الانتخابات، والمزيد.">
      <meta name="twitter:image" content="https://yourdomain.com/images/twitter-card.jpg"> <!-- Ensure this is the correct image path -->

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
    <nav class="navbar">
      <div class="logo-container">
        <router-link to="/">
          <img :src="logoSrc" alt="AIUSU Logo" class="logo" />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      logoSrc: require('../../images/logo.png'), // Correct path to your logo image
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0; /* Adjust padding as needed */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: -40px;
}

.logo {
  max-height: 200px; /* Adjust the max height to make the logo larger */
  max-width: 100%; /* Keep the logo responsive */
}
</style>
