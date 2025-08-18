<script lang="ts">
  import { onMount } from 'svelte';
  
  let aboutElement: HTMLElement;
  let sections: HTMLElement[];
  
  onMount(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      if (aboutElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        aboutElement.style.transform = `translateY(${rate}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:head>
  <title>About - Mycosphere Partners</title>
  <meta name="description" content="Learn about Mycosphere Partners' expertise in regenerating the living contract between land, food, and people through cooperative structures and regenerative finance." />
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 flex items-center justify-center overflow-hidden">
  <div 
    bind:this={aboutElement}
    class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style="background-image: url('/img/pexels-lucianphotography-4761281.jpg');"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-forest-green/90 to-earth-brown/90"></div>
  </div>
  <div class="relative z-10 text-center text-white px-4">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
    <p class="text-xl text-soft-cream max-w-2xl mx-auto">
      We're not just building infrastructure. We're building the next operating system for regional wealth.
    </p>
  </div>
</section>

<!-- Our Story -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-forest-green mb-6">Our Story</h2>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          Between 2019 and 2023, the Northeast Healthy Soil Network gathered to advance pathways of farmer financial security in our region through alignment to state soil health policy. Action Plans resulted from our series of conversations, but no formal organization was established to advance them.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          Today, we've evolved into a consultancy that partners with communities, organizations, and regions to regenerate the living contract between land, food, and people. Rooted in kinship, ecological governance, and solidarity economics, we help you catalyze cooperative structures, regenerative finance, and cultural transformation.
        </p>
      </div>
      
      <div class="bg-soft-cream p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 belief-card">
        <h3 class="text-2xl font-semibold text-forest-green mb-6">What We Believe</h3>
        <ul class="space-y-4">
          <li class="flex items-start space-x-3 belief-item">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0 belief-dot"></div>
            <span class="text-gray-700">The forest can feed us.</span>
          </li>
          <li class="flex items-start space-x-3 belief-item">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0 belief-dot"></div>
            <span class="text-gray-700">Farmers hold irreplaceable ecological knowledge.</span>
          </li>
          <li class="flex items-start space-x-3 belief-item">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0 belief-dot"></div>
            <span class="text-gray-700">Cooperatives are the constitutional rewrite of rural power.</span>
          </li>
          <li class="flex items-start space-x-3 belief-item">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0 belief-dot"></div>
            <span class="text-gray-700">Finance must become a function of care, not control.</span>
          </li>
          <li class="flex items-start space-x-3 belief-item">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0 belief-dot"></div>
            <span class="text-gray-700">Data sovereignty and land sovereignty are kin.</span>
          </li>
          <li class="flex items-start space-x-3 belief-item">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0 belief-dot"></div>
            <span class="text-gray-700">Culture change begins in the soil.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Our Approach -->
<section class="section-padding bg-soft-cream">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-forest-green mb-6">Our Approach</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        We partner with you to shift power from extractive supply chains to land stewards, community hubs, and local economies—through legal scaffolding, story, and systems design that honors ancestral wisdom and prepares for futures of shared belonging.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 approach-card">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto approach-icon">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-4 text-center">Kinship-Based</h3>
        <p class="text-gray-700 text-center">
          We build relationships first, recognizing that trust and mutual understanding are the foundation of lasting change in your community.
        </p>
      </div>
      
      <div class="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 approach-card">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto approach-icon">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-4 text-center">Systems Thinking</h3>
        <p class="text-gray-700 text-center">
          We analyze and design for your whole system, understanding that change in one area affects all others in your organization or community.
        </p>
      </div>
      
      <div class="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 approach-card">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto approach-icon">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-4 text-center">Cooperative Design</h3>
        <p class="text-gray-700 text-center">
          We help you create structures that distribute power and wealth equitably, building resilience through collective ownership in your community.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- How We Work With You -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-forest-green mb-6">How We Work With You</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Our engagement process is designed to understand your unique context and co-create solutions that honor local wisdom while building lasting capacity.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="text-center process-step">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto process-number">
          <span class="text-2xl font-bold text-white">1</span>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-3">Discovery</h3>
        <p class="text-gray-600 text-sm">
          We start by understanding your unique context, challenges, and aspirations through deep listening and stakeholder engagement.
        </p>
      </div>
      
      <div class="text-center process-step">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto process-number">
          <span class="text-2xl font-bold text-white">2</span>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-3">Co-Design</h3>
        <p class="text-gray-600 text-sm">
          We work alongside you to design solutions that honor local wisdom and ecological principles while meeting your specific needs.
        </p>
      </div>
      
      <div class="text-center process-step">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto process-number">
          <span class="text-2xl font-bold text-white">3</span>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-3">Implementation</h3>
        <p class="text-gray-600 text-sm">
          We support you through the implementation process, building capacity and ensuring sustainable, scalable systems.
        </p>
      </div>
      
      <div class="text-center process-step">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto process-number">
          <span class="text-2xl font-bold text-white">4</span>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-3">Capacity Building</h3>
        <p class="text-gray-600 text-sm">
          We leave you with the knowledge, tools, and systems needed to continue growing and thriving independently.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Our Vision -->
<section class="section-padding bg-forest-green text-white">
  <div class="container-custom text-center">
    <div>
      <h2 class="text-4xl font-bold mb-6">Our Vision</h2>
      <p class="text-xl text-soft-cream mb-8 max-w-4xl mx-auto leading-relaxed">
        We're not building a traditional firm. We're growing a mycelial alliance for food system transformation that serves the sacred, the pragmatic, and the next seven generations. We seek aligned collaborators and funders to help root this work in soil and community—and to build legal, financial, and narrative infrastructure that liberates, not dominates.
      </p>
    </div>
    
    <div class="mt-12">
      <a href="/contact" class="inline-block bg-lime-green hover:bg-lime-green-light text-forest-green font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-soft hover:shadow-medium group">
        <span class="flex items-center justify-center gap-2">
          Let's Work Together
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </a>
    </div>
  </div>
</section>

<style>
  /* Enhanced hover effects for belief card */
  .belief-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .belief-item {
    transition: all 0.2s ease;
  }
  
  .belief-item:hover {
    transform: translateX(8px);
  }
  
  .belief-dot {
    transition: all 0.2s ease;
  }
  
  .belief-item:hover .belief-dot {
    transform: scale(1.2);
    box-shadow: 0 0 8px rgba(132, 204, 22, 0.4);
  }
  
  /* Enhanced hover effects for approach cards */
  .approach-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .approach-icon {
    transition: all 0.3s ease;
  }
  
  .approach-card:hover .approach-icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  /* Process step animations */
  .process-step {
    transition: all 0.3s ease;
  }
  
  .process-step:hover {
    transform: translateY(-5px);
  }
  
  .process-number {
    transition: all 0.3s ease;
  }
  
  .process-step:hover .process-number {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3);
  }
  
  /* Shadow utilities */
  .shadow-soft {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .shadow-medium {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
  
  /* Fix button display issues */
  a[href="/contact"] {
    display: inline-block;
    min-width: fit-content;
    text-decoration: none;
  }
  
  /* Enhanced hover effects for belief card */
  .belief-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .belief-item {
    transition: all 0.2s ease;
  }
  
  .belief-item:hover {
    transform: translateX(8px);
  }
  
  .belief-dot {
    transition: all 0.2s ease;
  }
  
  .belief-item:hover .belief-dot {
    transform: scale(1.2);
    box-shadow: 0 0 8px rgba(132, 204, 22, 0.4);
  }
  
  /* Enhanced hover effects for approach cards */
  .approach-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .approach-icon {
    transition: all 0.3s ease;
  }
  
  .approach-card:hover .approach-icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  /* Process step animations */
  .process-step {
    transition: all 0.3s ease;
  }
  
  .process-step:hover {
    transform: translateY(-5px);
  }
  
  .process-number {
    transition: all 0.3s ease;
  }
  
  .process-step:hover .process-number {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3);
  }
  
  /* Shadow utilities */
  .shadow-soft {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .shadow-medium {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
</style>
