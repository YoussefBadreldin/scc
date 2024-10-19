<template>
    <div>
        <HeaderComponent />

        <!-- Slider -->
        <div class="slider">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../images/slider/slider-1.jpg" class="d-block w-100" alt="Slider Image 1">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- Optional Caption Here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="About-Us" dir="rtl">
            <div class="inner-lay">
                <div class="container">
                    <div class="row session-title">
                        <h2>الخدمات</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-4 mb-3">
                            <button class="custom-btn btn-lg btn-block" @click="navigateToPage('/about')">معلومات عن الإتحاد</button>
                        </div>
                        <div class="col-lg-6 col-md-4 mb-3">
                            <button class="custom-btn btn-lg btn-block" @click="navigateToPage('/rules')">لائحة الاتحاد</button>
                        </div>
                        <div class="col-lg-6 col-md-4 mb-3">
                            <button class="custom-btn btn-lg btn-block" @click="navigateToPage('/members')">اعضاء الاتحاد</button>
                        </div>
                        <div class="col-lg-6 col-md-4 mb-3">
                            <button class="custom-btn btn-lg btn-block" @click="redirectToLink">الاشتراك في انشطة الاتحاد</button>
                        </div>
                        <div class="col-lg-6 col-md-4 mb-3">
                            <button class="custom-btn btn-lg btn-block" @click="navigateToPage('/join')">الانضمام الي الاتحاد</button>
                        </div>
                        <div class="col-lg-6 col-md-4 mb-3">
                            <button class="custom-btn btn-lg btn-block" @click="navigateToPage('/elections')">معرفة لجنتك الانتخابية</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        const redirectToLink = () => {
            window.location.href = 'https://linktr.ee/aiustudentunion';
        };

        return {
            navigateToPage,
            redirectToLink, // Ensure redirectToLink is returned
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

/* About Us Styles */
.About-Us .inner-lay {
    padding: 20px;
}

.About-Us .session-title {
    text-align: center;
}

/* Custom Button Styles */
.custom-btn {
    background-color: #c42326 !important; /* Button color */
    color: white !important; /* Text color */
    border: none; /* Remove border */
    transition: background-color 0.3s; /* Smooth transition */
}

.custom-btn:hover {
    background-color: #b11d22 !important; /* Darker shade on hover */
}

/* Spacing for Mobile */
@media (max-width: 768px) {
    .About-Us .row > div {
        margin-bottom: 15px; /* Adjust spacing for mobile devices */
    }
}

/* Responsive Styles */
@media (max-width: 768px) {
    .carousel-item img {
        height: 40vh; /* Set height as a percentage of the viewport height */
        object-fit: cover; /* Ensure image covers the area without distortion */
    }
}
</style>
