<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    // Trigger entrance animation
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<section class="relative overflow-hidden bg-gradient-to-br from-forest-green via-forest-green-light to-sage">
  <!-- Animated Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Floating organic shapes -->
    <!-- <div class="absolute top-20 left-10 w-32 h-32 bg-accent-teal/20 rounded-full animate-float blur-sm"></div>
    <div class="absolute top-40 right-20 w-24 h-24 bg-accent-purple/20 rounded-full animate-float-slow blur-sm"></div>
    <div class="absolute bottom-40 left-20 w-40 h-40 bg-warm-yellow/20 rounded-full animate-float-fast blur-sm"></div>
    <div class="absolute bottom-20 right-10 w-28 h-28 bg-accent-orange/20 rounded-full animate-float blur-sm"></div> -->
    
    <!-- Mesh gradient overlay -->
    <div class="absolute inset-0 bg-gradient-mesh opacity-10"></div>
  </div>
  
  <!-- Background Image -->
  <div 
    class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style="background-image: url('/img/pexels-adis-rekic-3455823-1373051-1920px.jpg');"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-forest-green/80 to-earth-brown/80"></div>
  </div>
  
  <!-- Main Content -->
  <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-32">
    <!-- Logo with entrance animation -->
    <div class="mb-6">
      <div class="relative inline-block">
        <img src="/img/mycosphereLogoMark.png" alt="Mycosphere Partners Logo" class="w-32 md:w-48" />
      </div>
    </div>
    
    <!-- Main Heading with staggered animation -->
    <div class="mb-8 transform transition-all duration-1000 ease-out delay-200 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Mycosphere Partners
      </h1>
    </div>
    
    <!-- Subtitle with entrance animation -->
    <div class="mb-12 transform transition-all duration-1000 ease-out delay-400 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
      <p class="text-xl md:text-2xl mb-8 text-soft-cream max-w-3xl  mx-auto leading-relaxed text-shadow">
        Regenerating the living contract between land, food, and people through cooperative structures, regenerative finance, and cultural transformation.
      </p>
    </div>
    
    <!-- CTA Buttons with staggered entrance -->
    <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8 transform transition-all duration-1000 ease-out delay-600 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
             <a href="/contact" class="btn-primary group flex items-center justify-center">
         <span class="flex items-center justify-center gap-2">
           Schedule a Discovery Call
           <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
           </svg>
         </span>
       </a>
      <a href="/about" class="text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-forest-green font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-soft hover:shadow-medium group">
        <span class="flex items-center justify-center gap-2">
          Learn More
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>
    
    <!-- Scroll indicator -->
    <div class="mt-16 transform transition-all duration-1000 ease-out delay-700 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm text-soft-cream/80 font-medium">Scroll to explore</span>
        <svg class="w-6 h-6 text-soft-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
</section>
