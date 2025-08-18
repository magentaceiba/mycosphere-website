<svelte:head>
  <title>Contact Us - Mycosphere Partners</title>
  <meta name="description" content="Get in touch with Mycosphere Partners to schedule a discovery call and learn how we can help transform your food system." />
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style="background-image: url('/img/Fy5TsRmWcAE9GaZ.jpg');">
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-forest-green/90 to-earth-brown/90"></div>
  </div>
  <div class="relative z-10 text-center text-white px-4">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
    <p class="text-xl text-soft-cream max-w-2xl mx-auto">
      Ready to transform your food system? Let's connect and explore how we can work together.
    </p>
  </div>
</section>

<!-- Contact Form -->
<section class="section-padding bg-white">
  <div class="container-custom max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-forest-green mb-4">Schedule a Discovery Call</h2>
      <p class="text-lg text-gray-600">
        Tell us about your project and we'll get back to you within 24 hours to schedule a discovery call.
      </p>
    </div>
    
    <form class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
          />
        </div>
        
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
          />
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
          />
        </div>
        
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label for="organization" class="block text-sm font-medium text-gray-700 mb-2">Organization *</label>
        <input 
          type="text" 
          id="organization" 
          name="organization" 
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
        />
      </div>
      
      <div>
        <label for="organizationType" class="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
        <select 
          id="organizationType" 
          name="organizationType" 
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
        >
          <option value="">Select an option</option>
          <option value="hospital">Hospital/Healthcare System</option>
          <option value="school">School/University</option>
          <option value="government">Government Agency</option>
          <option value="corporate">Corporate/Private Company</option>
          <option value="nonprofit">Nonprofit Organization</option>
          <option value="foundation">Foundation/Philanthropic</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">What type of project are you interested in? *</label>
        <select 
          id="projectType" 
          name="projectType" 
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
        >
          <option value="">Select an option</option>
          <option value="local-food">Local Food Purchasing Agreements</option>
          <option value="strategic-planning">Strategic Planning & Consulting</option>
          <option value="regenerative-finance">Regenerative Finance & Green Bonds</option>
          <option value="legal-governance">Legal & Governance Design</option>
          <option value="network-building">Network Building & Coalition Work</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Tell us about your project *</label>
        <textarea 
          id="description" 
          name="description" 
          rows="4" 
          required
          placeholder="Describe what you're looking to accomplish, any challenges you're facing, and how you think we might be able to help..."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
        ></textarea>
      </div>
      
      <div class="text-center">
        <button 
          type="submit" 
          class="btn-primary text-lg px-8 py-4"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

<!-- Additional Contact Info -->
<section class="section-padding bg-soft-cream">
  <div class="container-custom text-center">
    <h2 class="text-3xl font-bold text-forest-green mb-8">Other Ways to Connect</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-2">Email</h3>
        <p class="text-gray-700">juliesnorek@gmail.com</p>
      </div>
      
      <div>
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-2">Location</h3>
        <p class="text-gray-700">Northeast United States</p>
      </div>
      
      <div>
        <div class="w-16 h-16 bg-lime-green rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-forest-green mb-2">Response Time</h3>
        <p class="text-gray-700">Within 24 hours</p>
      </div>
    </div>
  </div>
</section>
