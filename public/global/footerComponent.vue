<template>
  <div class="copy" style="text-align: center;">
    <div class="CopyRights">
<div class="social-icons" style="display: inline-flex; align-items: center; margin-left: 5px;"> <!-- Align icons on the same line -->
    <a href="mailto:studentunion@aiu.edu.eg" style="margin: 0 10px; display: flex; align-items: center;">
        <i class="fas fa-envelope" aria-hidden="true"></i> <!-- Email icon -->
        <span style="margin-left: 5px;">studentunion@aiu.edu.eg</span> <!-- Email text -->
    </a>
    <a href="https://www.facebook.com/AIUSU.Official" target="_blank" style="margin: 0 10px; display: flex; align-items: center;" aria-label="Facebook">
        <i class="fab fa-facebook-f" aria-hidden="true"></i>
        <span style="margin-left: 5px;">Facebook</span> <!-- Add Facebook text -->
    </a>
    <a href="https://www.instagram.com/aiustudentunion" target="_blank" style="margin: 0 10px; display: flex; align-items: center;" aria-label="Instagram">
        <i class="fab fa-instagram" aria-hidden="true"></i>
        <span style="margin-left: 5px;">Instagram</span> <!-- Add Instagram text -->
    </a>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped>
footer {
  color: #fff;
}

footer a {
  color: #fff;
}

footer i {
  color: #fff;
}

footer .icon {
  color: #fff;
}

footer .copy {
  color: #fff;
}

ul[dir="rtl"] {
  text-align: right;
}

ul[dir="rtl"] i {
  margin-left: 10px;
  margin-right: 0;
}

.social-icons {
  display: inline-flex; /* Ensures the icons and text are on the same line */
  align-items: center; /* Align items vertically */
}

.social-icons a {
  margin: 0 10px; /* Space between social icons */
  display: flex; /* Ensures icon and text are aligned */
  align-items: center; /* Align items vertically */
}

.foot-address,
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.foot-address .icon,
.foot-address .addet {
  margin: 0 10px;
}

.visitor-counter {
  margin-top: 20px;
  padding: 15px;
  background-color: #ffbf00;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  color: #001d3d;
  display: inline-block;
}

.visitor-counter p {
  margin: 0;
}
</style>
