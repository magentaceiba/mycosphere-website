<script lang="ts">
  import { onMount } from 'svelte';
  
  let heroElement: HTMLElement;
  
  onMount(() => {
    const handleScroll = () => {
      if (heroElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroElement.style.transform = `translateY(${rate}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
  <!-- Parallax Background -->
  <div 
    bind:this={heroElement}
    class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style="background-image: url('/img/pexels-adis-rekic-3455823-13730514.jpg');"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-forest-green/80 to-earth-brown/80"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <div class="mb-8">
      <div class="mb-6">
        <img src="/img/mycosphereLogoMark.png" alt="Mycosphere Partners Logo" class="mx-auto w-48" />
      </div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Mycosphere Partners
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-soft-cream max-w-3xl mx-auto leading-relaxed">
        Regenerating the living contract between land, food, and people through cooperative structures, regenerative finance, and cultural transformation.
      </p>
    </div>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="btn-primary text-lg px-8 py-4">
        Schedule a Discovery Call
      </a>
      <a href="/about" class="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-forest-green">
        Learn More
      </a>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>
