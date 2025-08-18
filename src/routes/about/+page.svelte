<script lang="ts">
  import { onMount } from 'svelte';
  
  let aboutElement: HTMLElement;
  
  onMount(() => {
    const handleScroll = () => {
      if (aboutElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        aboutElement.style.transform = `translateY(${rate}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:head>
  <title>About - Mycosphere Partners</title>
  <meta name="description" content="Learn about Mycosphere Partners' mission to regenerate the living contract between land, food, and people through cooperative structures and regenerative finance." />
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

<!-- Mission Deep Dive -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-forest-green mb-6">Our Origins</h2>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          Between 2019 and 2023, the Northeast Healthy Soil Network gathered to advance pathways of farmer financial security in our region through alignment to state soil health policy. Action Plans resulted from our series of conversations, but no formal organization was established to advance them.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          Our mission is expanding to regenerating the living contract between land, food, and people. Rooted in kinship, ecological governance, and solidarity economics, we catalyze cooperative structures, regenerative finance, and cultural transformation to reweave the Northeast foodshed as a tapestry of mutual thriving.
        </p>
      </div>
      
      <div class="bg-soft-cream p-8 rounded-2xl">
        <h3 class="text-2xl font-semibold text-forest-green mb-6">What We Believe</h3>
        <ul class="space-y-4">
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span class="text-gray-700">The forest can feed us.</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span class="text-gray-700">Farmers hold irreplaceable ecological knowledge.</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span class="text-gray-700">Cooperatives are the constitutional rewrite of rural power.</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span class="text-gray-700">Finance must become a function of care, not control.</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span class="text-gray-700">Data sovereignty and land sovereignty are kin.</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
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
        We exist to shift power from extractive supply chains to land stewards, community hubs, and local economies—through legal scaffolding, story, and systems design that honors ancestral wisdom and prepares for futures of shared belonging.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-4 text-center">Kinship-Based</h3>
        <p class="text-gray-700 text-center">
          We build relationships first, recognizing that trust and mutual understanding are the foundation of lasting change.
        </p>
      </div>
      
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-4 text-center">Systems Thinking</h3>
        <p class="text-gray-700 text-center">
          We analyze and design for the whole system, understanding that change in one area affects all others.
        </p>
      </div>
      
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-4 text-center">Cooperative Design</h3>
        <p class="text-gray-700 text-center">
          We create structures that distribute power and wealth equitably, building resilience through collective ownership.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Seed Vision -->
<section class="section-padding bg-forest-green text-white">
  <div class="container-custom text-center">
    <h2 class="text-4xl font-bold mb-6">Our Seed Vision</h2>
    <p class="text-xl text-soft-cream mb-8 max-w-4xl mx-auto leading-relaxed">
      We're not building a firm. We're growing a mycelial alliance for food system transformation that serves the sacred, the pragmatic, and the next seven generations. We seek aligned collaborators and funders to help root this work in soil and community—and to build legal, financial, and narrative infrastructure that liberates, not dominates.
    </p>
    
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div class="bg-white/10 p-6 rounded-2xl">
        <h3 class="text-xl font-semibold mb-4 text-lime-green">Our Strengths</h3>
        <ul class="space-y-2 text-soft-cream">
          <li>• One degree removed from funders like Kat Taylor, Chris Lindstrom, John Roulac</li>
          <li>• Connection to Bloom Network platform, innovative financial ecosystem</li>
          <li>• Deep relationships with Northeast farmers and food hubs</li>
        </ul>
      </div>
      
      <div class="bg-white/10 p-6 rounded-2xl">
        <h3 class="text-xl font-semibold mb-4 text-lime-green">Areas for Growth</h3>
        <ul class="space-y-2 text-soft-cream">
          <li>• BIPOC leadership is weak – Black & Indigenous food systems are cornerstone!</li>
          <li>• How to weave with existing activists and organizations</li>
          <li>• Building more diverse partnerships and perspectives</li>
        </ul>
      </div>
    </div> -->
  </div>
</section>
