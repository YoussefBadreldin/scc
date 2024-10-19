<template>
  <div class="pdf-container" ref="scrollContainer">
    <div ref="pdfViewer" class="pdf-viewer"></div>
    <div v-if="error" class="error-message">Unable to load the PDF. Please check the file path or the PDF itself.</div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'PortfolioView',
  setup() {
    const pdfViewer = ref(null);
    const scrollContainer = ref(null);
    const error = ref(false);
    const pdfUrl = '/images/rules.pdf'; // Path to your PDF file
    let pdf = null;
    let renderedPages = new Set();
    let observer = null;

    onMounted(() => {
      if (!pdfViewer.value) return;

      // Load PDF.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';
      script.onload = () => {
        const pdfjsLib = window.pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then(
          loadedPdf => {
            pdf = loadedPdf;
            initializeObserver(); // Initialize lazy loading
          },
          reason => {
            console.error(reason);
            error.value = true;
          }
        );
      };
      document.head.appendChild(script);
    });

    const renderPage = (pageNumber) => {
      if (!pdf || renderedPages.has(pageNumber)) return;

      pdf.getPage(pageNumber).then(page => {
        const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale as needed
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const devicePixelRatio = window.devicePixelRatio || 1;

        // Set canvas dimensions for high quality
        canvas.width = viewport.width * devicePixelRatio;
        canvas.height = viewport.height * devicePixelRatio;
        context.scale(devicePixelRatio, devicePixelRatio);

        // Append canvas to viewer
        pdfViewer.value.appendChild(canvas);

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext).promise.then(() => {
          console.log(`Page ${pageNumber} rendered`);
          renderedPages.add(pageNumber); // Mark page as rendered
        }).catch(renderError => {
          console.error(`Error rendering page ${pageNumber}:`, renderError);
          error.value = true;
        });
      }).catch(pageError => {
        console.error(`Error fetching page ${pageNumber}:`, pageError);
        error.value = true;
      });
    };

    const initializeObserver = () => {
      observer = new IntersectionObserver(handleIntersection, {
        root: scrollContainer.value,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this threshold to balance performance
      });

      // Add observer to each page placeholder (initially invisible)
      for (let i = 1; i <= pdf.numPages; i++) {
        const pagePlaceholder = document.createElement('div');
        pagePlaceholder.setAttribute('data-page-number', i);
        pagePlaceholder.style.height = '800px'; // Adjust based on page height
        pagePlaceholder.style.width = '100%';
        pdfViewer.value.appendChild(pagePlaceholder);
        observer.observe(pagePlaceholder); // Observe each placeholder
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNumber = parseInt(entry.target.getAttribute('data-page-number'));
          renderPage(pageNumber); // Render page when it is in view
          observer.unobserve(entry.target); // Stop observing once the page is rendered
          entry.target.remove(); // Remove placeholder after rendering
        }
      });
    };

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect(); // Clean up observer when the component is destroyed
      }
    });

    return {
      pdfViewer,
      scrollContainer,
      error
    };
  },
};
</script>

<style scoped>
.pdf-container {
  height: 100vh; /* Full height to take up the screen */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to start to allow scrolling */
  position: relative;
  overflow: auto; /* Allow scrolling if content exceeds viewport */
}

.pdf-viewer {
  display: flex;
  flex-direction: column; /* Stack pages vertically */
  width: 100%;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8); /* Slight background to improve readability */
  border-radius: 5px; /* Optional: add rounded corners for better look */
}
</style>
