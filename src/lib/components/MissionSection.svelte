<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  let cards: HTMLElement[];
  
  onMount(() => {
    // Trigger entrance animation
    setTimeout(() => {
      isVisible = true;
    }, 200);
  });
</script>

<section class="section-padding bg-gradient-to-br from-white via-soft-cream/30 to-white relative overflow-hidden">
  <!-- Background decorative elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 right-10 w-64 h-64 bg-gradient-radial from-sage/10 to-transparent rounded-full"></div>
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-lime-green/10 to-transparent rounded-full"></div>
  </div>
  
  <div class="container-custom relative z-10">
    <!-- Section Header with entrance animation -->
    <div class="text-center mb-20 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <div class="inline-block mb-6">
        <span class="text-sm font-semibold text-forest-green bg-lime-green/20 px-4 py-2 rounded-full">Our Purpose</span>
      </div>
      <h2 class="text-display font-black text-forest-green mb-6 leading-tight">
        We're not just building infrastructure.
        <span class="block text-forest-green-light">We're building the next operating system</span>
        <span class="block gradient-text">for regional wealth.</span>
      </h2>
      <p class="text-lead text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Rooted in kinship, ecological governance, and solidarity economics, we catalyze cooperative structures, regenerative finance, and cultural transformation.
      </p>
    </div>
    
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 transform transition-all duration-1000 delay-200 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <div class="glass-card p-6 text-center group hover:bg-white/90 transition-all duration-300">
        <div class="text-3xl font-bold text-forest-green mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
        <div class="text-gray-600 font-medium">Farmers Supported</div>
      </div>
      <div class="glass-card p-6 text-center group hover:bg-white/90 transition-all duration-300">
        <div class="text-3xl font-bold text-forest-green mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
        <div class="text-gray-600 font-medium">Years Experience</div>
      </div>
      <div class="glass-card p-6 text-center group hover:bg-white/90 transition-all duration-300">
        <div class="text-3xl font-bold text-forest-green mb-2 group-hover:scale-110 transition-transform duration-300">$2M+</div>
        <div class="text-gray-600 font-medium">Capital Deployed</div>
      </div>
    </div>
    
    <!-- Mission Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
      <!-- Mission Statement Card -->
      <div class="transform transition-all duration-1000 delay-200 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <div class="floating-card p-8 h-full">
          <!-- <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-forest-green to-sage rounded-2xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-forest-green">The Northeast Mycosphere Initiative</h3>
          </div> -->
          
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="text-lg">
              We partner with communities, organizations, and regions to design and implement regenerative systems that honor the land and empower local economies.
            </p>
            <p class="text-lg">
              Our expertise spans cooperative development, regenerative finance, legal frameworks, and cultural transformation—helping you shift from extractive models to systems of mutual thriving.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Our Approach Section -->
      <div class="transform transition-all duration-1000 delay-400 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <h4 class="text-xl font-bold text-forest-green mb-8 text-center">Our Approach</h4>
        <div class="space-y-4">
          {#each [
            "We start by understanding your unique context and challenges",
            "We co-design solutions that honor local wisdom and ecological principles",
            "We build capacity and leave you with sustainable, scalable systems",
            "We work alongside you to implement lasting change",
            "We focus on systems that create wealth for all stakeholders",
            "We honor ancestral knowledge while preparing for future resilience"
          ] as approach, index}
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-forest-green rounded-full"></div>
              <span class="text-gray-700 font-medium">
                {approach}
              </span>
            </div>
          {/each}
          <!-- {#each [
            { text: "The forest can feed us.", icon: "🌲", color: "from-lime-green to-sage" },
            { text: "Farmers hold irreplaceable ecological knowledge.", icon: "👨‍🌾", color: "from-sage to-forest-green" },
            { text: "Cooperatives are the constitutional rewrite of rural power.", icon: "🤝", color: "from-forest-green to-accent-teal" },
            { text: "Finance must become a function of care, not control.", icon: "💚", color: "from-accent-teal to-lime-green" },
            { text: "Data sovereignty and land sovereignty are kin.", icon: "🔐", color: "from-lime-green to-accent-purple" },
            { text: "Culture change begins in the soil.", icon: "🌱", color: "from-accent-purple to-warm-yellow" }
          ] as belief, index}
            <div class="group transform transition-all duration-300 hover:scale-105">
              <div class="glass-card p-4 hover:bg-white/90 transition-all duration-300">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-gradient-to-r {belief.color} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {belief.icon}
                  </div>
                  <span class="text-gray-700 font-medium group-hover:text-forest-green transition-colors duration-300">
                    {belief.text}
                  </span>
                </div>
              </div>
            </div>
          {/each} -->
        </div>
      </div>
    </div>
    
    <!-- Call to Action Section -->
    <div class="text-center transform transition-all duration-1000 delay-600 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <div class="floating-card p-12 max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-forest-green mb-4">Ready to Transform Your Region?</h3>
        <p class="text-gray-600 mb-8 text-lg">
          Let's discuss how we can help you design and implement regenerative systems that honor your community and create lasting wealth.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="btn-primary">
            Schedule a Consultation
          </a>
          <a href="/services" class="btn-secondary">
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
