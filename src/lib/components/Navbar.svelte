<script lang="ts">
  import { page } from '$app/stores';
  
  let isMenuOpen = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="bg-white shadow-lg sticky top-0 z-50">
  <div class="container-custom">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="/img/mycosphereLogo.png" alt="Mycosphere Partners Logo" class="w-52" />
        <!-- <div class="text-xl font-bold text-forest-green">
          Mycosphere Partners
        </div> -->
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="text-forest-green hover:text-lime-green transition-colors duration-200">Home</a>
        <a href="/about" class="text-forest-green hover:text-lime-green transition-colors duration-200">About</a>
        <a href="/services" class="text-forest-green hover:text-lime-green transition-colors duration-200">Services</a>
        <a href="/team" class="text-forest-green hover:text-lime-green transition-colors duration-200">Team</a>
        <a href="/partners" class="text-forest-green hover:text-lime-green transition-colors duration-200">Partners</a>
        <a href="/case-studies" class="text-forest-green hover:text-lime-green transition-colors duration-200">Case Studies</a>
        <a href="/institutional-food" class="text-forest-green hover:text-lime-green transition-colors duration-200">Institutional Food</a>
        <a href="/contact" class="btn-primary">Contact Us</a>
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden p-2 text-forest-green"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4">
          <a href="/" class="text-forest-green hover:text-lime-green transition-colors duration-200">Home</a>
          <a href="/about" class="text-forest-green hover:text-lime-green transition-colors duration-200">About</a>
          <a href="/services" class="text-forest-green hover:text-lime-green transition-colors duration-200">Services</a>
          <a href="/team" class="text-forest-green hover:text-lime-green transition-colors duration-200">Team</a>
          <a href="/partners" class="text-forest-green hover:text-lime-green transition-colors duration-200">Partners</a>
          <a href="/case-studies" class="text-forest-green hover:text-lime-green transition-colors duration-200">Case Studies</a>
          <a href="/institutional-food" class="text-forest-green hover:text-lime-green transition-colors duration-200">Institutional Food</a>
          <a href="/contact" class="btn-primary inline-block text-center">Contact Us</a>
        </div>
      </div>
    {/if}
  </div>
</nav>
