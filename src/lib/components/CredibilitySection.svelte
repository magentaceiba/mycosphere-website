<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    // Trigger entrance animation
    setTimeout(() => {
      isVisible = true;
    }, 300);
  });
</script>

<section class="section-padding bg-gradient-to-br from-soft-cream via-white to-soft-cream relative overflow-hidden">
  <!-- Background decorative elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-10 left-20 w-96 h-96 bg-gradient-radial from-sage/5 to-transparent rounded-full"></div>
    <div class="absolute bottom-10 right-20 w-80 h-80 bg-gradient-radial from-lime-green/5 to-transparent rounded-full"></div>
  </div>
  
  <div class="container-custom relative z-10">
    <!-- Section Header with entrance animation -->
    <div class="text-center mb-20 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <div class="inline-block mb-6">
        <span class="text-sm font-semibold text-forest-green bg-lime-green/20 px-4 py-2 rounded-full">Why Choose Us</span>
      </div>
      <h2 class="text-display font-black text-forest-green mb-6 leading-tight">
        Decades of Experience in
        <span class="block gradient-text">Regenerative Systems</span>
      </h2>
      <p class="text-lead text-gray-600 max-w-4xl mx-auto leading-relaxed">
        We bring deep expertise in regenerative agriculture, policy development, and systems change to every project, with proven results.
      </p>
    </div>
    
    <!-- Expertise Grid with staggered animations -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each [
        {
          title: "High-Trust Farmer Relationships",
          description: "We have established, trusted relationships with farmers across several regions in the world, built through years of on-the-ground work and participatory research.",
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          color: "from-lime-green to-sage",
          delay: 200
        },
        {
          title: "Systems Thinking & Design",
          description: "Our collective 40+ years of experience applying systems thinking to agricultural communities enables us to design solutions that address root causes.",
          icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          color: "from-sage to-forest-green",
          delay: 400
        },
        {
          title: "Policy & Legal Innovation",
          description: "We design cooperative and trust-based legal templates, support regulatory alignment, and create innovative governance structures for food sovereignty projects.",
          icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          color: "from-forest-green to-accent-teal",
          delay: 600
        },
        {
          title: "Regenerative Finance",
          description: "We structure green bonds, catalytic capital, and blended finance solutions that align with regenerative outcomes and community needs.",
          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
          color: "from-accent-teal to-lime-green",
          delay: 800
        },
        {
          title: "Technology & Systems Building",
          description: "Our team includes fullstack developers who can create custom tech systems, from financial collaboration platforms to farmer data unions and blockchain solutions.",
          icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
          color: "from-lime-green to-accent-purple",
          delay: 1000
        },
        {
          title: "Research & Facilitation",
          description: "We conduct participatory research, facilitate strategic planning processes, and create spaces for meaningful dialogue and co-creation.",
          icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
          color: "from-accent-purple to-warm-yellow",
          delay: 1200
        }
      ] as expertise, index}
        <div class="transform transition-all duration-1000 delay-{expertise.delay} {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          <div class="floating-card p-8 h-full group">
            <!-- Icon with gradient background -->
            <div class="w-16 h-16 bg-gradient-to-br {expertise.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={expertise.icon} />
              </svg>
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-bold text-forest-green mb-4 group-hover:text-forest-green-light transition-colors duration-300">
              {expertise.title}
            </h3>
            <p class="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
              {expertise.description}
            </p>
            
            <!-- Hover indicator -->
            <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-8 h-0.5 bg-gradient-to-r {expertise.color} rounded-full"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Bottom CTA with entrance animation -->
    <div class="text-center mt-20 transform transition-all duration-1000 delay-1400 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <div class="floating-card p-12 max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-forest-green mb-4">Ready to Leverage Our Expertise?</h3>
        <p class="text-gray-600 mb-8 text-lg">
          Let's discuss how our experience can help transform your agricultural community and create lasting regenerative systems.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="btn-primary">
            Start a Conversation
          </a>
          <a href="/partners" class="btn-secondary">
            View Our Work
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
