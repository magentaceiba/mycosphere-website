<svelte:head>
  <title>Our Team - Mycosphere Partners</title>
  <meta name="description" content="Meet the Mycosphere Partners team - a Northeast-based alliance of organizers, lawyers, and mappers dedicated to transforming food systems." />
</svelte:head>

<script lang="ts">
  let selectedMember: string | null = null;
  let modalOpen = false;

  function openModal(member: string) {
    selectedMember = member;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    selectedMember = null;
    modalOpen = false;
    document.body.style.overflow = 'auto';
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  // Close modal on escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && modalOpen) {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Hero Section -->
<section class="relative h-96 flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style="background-image: url('/img/pexels-lucianphotography-4761281 (2).jpg');">
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-forest-green/90 to-earth-brown/90"></div>
  </div>
  <div class="relative z-10 text-center text-white px-4">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
    <p class="text-xl text-soft-cream max-w-3xl mx-auto">
      A Northeast-based alliance of organizers, lawyers, and mappers dedicated to helping farmers take back power from extractive supply chains.
    </p>
  </div>
</section>

<!-- Team Introduction -->
<section class="section-padding bg-white">
  <div class="container-custom text-center">
    <h2 class="text-4xl font-bold text-forest-green mb-6">Who We Are</h2>
    <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
      Our team brings together decades of collective experience in agricultural policy, cooperative development, legal innovation, and participatory research. We're united by a shared vision of regenerative food systems that prioritize people and planet over profit.
    </p>
  </div>
</section>

<!-- Core Team -->
<section class="section-padding bg-soft-cream">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-forest-green mb-6">Core Team</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Meet the dedicated professionals driving our mission forward.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Julie Davenson -->
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-2 text-center">Julie Davenson</h3>
        <p class="text-lime-green font-medium mb-4 text-center">Strategic Director & PhD Fellow</p>
        
                 <!-- Preview Bio -->
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           Julie D. brings over two decades of experience leading strategic initiatives in regenerative agriculture, policy advocacy, and systems change work across sectors including affordable housing. She holds a master's degree from Antioch New England where she studied systems change and organizational management, and is currently a PhD fellow at the University of Vermont in the Sustainable Policy Development, Economics and Governance program focusing on food system governance.
         </div>
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           Most recently, as Director of Program Integration with the Soil and Climate Initiative, she led internal and external strategy and coordination across various programs including regenerative transitions, verification systems, and supply chain collaborations across the network.
         </div>
        
                 <!-- Read Full Bio Button -->
         <button 
           on:click={() => openModal('julieDavenson')}
           class="text-lime-green hover:text-forest-green font-medium text-sm mb-4 transition-colors"
         >
           Read Full Bio
         </button>
        
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Strategic Planning</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Policy Advocacy</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Systems Change</span>
        </div>
      </div>
      
      <!-- Julie Snorek -->
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-2 text-center">Julie Snorek, PhD</h3>
        <p class="text-lime-green font-medium mb-4 text-center">Co-founder & Research Director</p>
        
                 <!-- Preview Bio -->
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           With 15-years of field research experience with Indigenous peoples and farmers in the Sahel, S. Africa, and the United States, Julie Snorek is a highly-skilled researcher and instructor on agricultural futures and systems transitions. She uses methodologies based in systems thinking to uncover and analyze power dynamics in climate adaptation, map communications flows and influence in broad-scale watershed management.
         </div>
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           Her doctoral work in Environmental Science and Technology focused on conflict and climate change adaptation in farming and rangeland systems in Niger. She currently serves as an AAAS Science and Technology Policy Fellow at the USDA Office of the Chief Scientists.
         </div>
        
                 <!-- Read Full Bio Button -->
         <button 
           on:click={() => openModal('julieSnorek')}
           class="text-lime-green hover:text-forest-green font-medium text-sm mb-4 transition-colors"
         >
           Read Full Bio
         </button>
        
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Participatory Research</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Climate Adaptation</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Systems Thinking</span>
        </div>
      </div>
      
      <!-- Magenta Light -->
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-2 text-center">Magenta Light</h3>
        <p class="text-lime-green font-medium mb-4 text-center">Fullstack Developer & Tech Architect</p>
        
                 <!-- Preview Bio -->
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           Magenta is a fullstack developer, project manager, and organizational development specialist with 25 years of experience building globally networked bioregional economies. She brings different movement leaders together to strategize and share resources for community-led development and food security.
         </div>
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           As the founder of BloomNetwork.earth, she leads teams in marketing, finance, community, tech and administration to build movement coherence and generous resource sharing among stakeholders. She was the systems architect for their regenerative economic protocol, which uses state-of-the-art blockchain technology. She has built applications for financial collaboration across regional stakeholders, stakeholder and local food business maps, searchable indexes for investors, philanthropists, and volunteers, and is currently exploring data unions for farmers so they can self-own their data for corporate partnerships.
         </div>
         
                  <!-- Read Full Bio Button -->
         <button 
           on:click={() => openModal('magentaLight')}
           class="text-lime-green hover:text-forest-green font-medium text-sm mb-4 transition-colors"
         >
           Read Full Bio
         </button>
        
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Fullstack Development</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Tech Architecture</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Coalition Building</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Regenerative Finance</span>
        </div>
      </div>
      
      <!-- Josie Watson -->
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-forest-green mb-2 text-center">Josephine Watson</h3>
        <p class="text-lime-green font-medium mb-4 text-center">Earth Law Architect & Strategic Legal Designer</p>
        
                 <!-- Preview Bio -->
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           Josie is an Earth Law attorney with training in property reform, conservation finance, and bioregional policy; she holds the deep structure. Her work braids land trust innovation, commons-aligned legal frameworks, storytelling, and non-extractive finance strategy into social ecosystems.
         </div>
         <div class="text-gray-700 text-sm leading-relaxed mb-4">
           She designs cooperative and trust-based legal templates for hubs, flow funds, and food sovereignty projects, supports funder engagement and regulatory alignment, and leads storytelling, cultural mapping, and earth-centered governance design.
         </div>
        
                 <!-- Read Full Bio Button -->
         <button 
           on:click={() => openModal('josieWatson')}
           class="text-lime-green hover:text-forest-green font-medium text-sm mb-4 transition-colors"
         >
           Read Full Bio
         </button>
        
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Earth Law</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Legal Innovation</span>
          <span class="px-3 py-1 bg-soft-cream text-forest-green text-xs rounded-full">Governance Design</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Advisory Network -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-forest-green mb-6">Advisory Network</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        We're connected to a broader network of experts, funders, and practitioners who inform our work and expand our impact.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Advisor 1 -->
      <div class="bg-soft-cream p-6 rounded-xl text-center">
        <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h4 class="font-semibold text-forest-green mb-2">Kat Taylor</h4>
        <p class="text-gray-600 text-sm">Regenerative Finance</p>
      </div>
      
      <!-- Advisor 2 -->
      <div class="bg-soft-cream p-6 rounded-xl text-center">
        <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h4 class="font-semibold text-forest-green mb-2">Chris Lindstrom</h4>
        <p class="text-gray-600 text-sm">Food System Policy</p>
      </div>
      
      <!-- Advisor 3 -->
      <div class="bg-soft-cream p-6 rounded-xl text-center">
        <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h4 class="font-semibold text-forest-green mb-2">John Roulac</h4>
        <p class="text-gray-600 text-sm">Regenerative Agriculture</p>
      </div>
      
      <!-- Advisor 4 -->
      <div class="bg-soft-cream p-6 rounded-xl text-center">
        <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h4 class="font-semibold text-forest-green mb-2">Bloom Network</h4>
        <p class="text-gray-600 text-sm">Financial Ecosystem</p>
      </div>
    </div>
  </div>
</section>

<!-- Our Approach to Team Building -->
<section class="section-padding bg-soft-cream">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-forest-green mb-6">Our Approach to Team Building</h2>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          We believe that the most effective teams are built on principles of mutual respect, shared values, and complementary skills. Our team structure reflects our commitment to cooperative principles and regenerative practices.
        </p>
        <ul class="space-y-4 text-gray-700">
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span>Collaborative decision-making and shared leadership</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span>Diverse perspectives and lived experiences</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span>Continuous learning and skill development</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-3 h-3 bg-lime-green rounded-full mt-2 flex-shrink-0"></div>
            <span>Commitment to equity and inclusion</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-8 rounded-2xl">
        <h3 class="text-2xl font-semibold text-forest-green mb-6">Core Values</h3>
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-lime-green rounded-full"></div>
            <span class="text-gray-700">Kinship and relationship-building</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-lime-green rounded-full"></div>
            <span class="text-gray-700">Systems thinking and complexity</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-lime-green rounded-full"></div>
            <span class="text-gray-700">Cooperative ownership and governance</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 bg-lime-green rounded-full"></div>
            <span class="text-gray-700">Regenerative practices and outcomes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Join Our Team -->
<section class="section-padding bg-forest-green text-white">
  <div class="container-custom text-center">
    <h2 class="text-4xl font-bold mb-6">Join Our Team</h2>
    <p class="text-xl text-soft-cream mb-8 max-w-3xl mx-auto">
      We're always looking for aligned collaborators who share our vision of regenerative food systems. Whether you're interested in joining our core team, becoming an advisor, or collaborating on specific projects, we'd love to hear from you.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="btn-primary text-lg px-8 py-4 bg-white text-forest-green hover:bg-gray-100">
        Get in Touch
      </a>
      <a href="/services" class="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-forest-green">
        View Our Services
      </a>
    </div>
  </div>
</section>

<!-- Team Member Modal -->
{#if modalOpen && selectedMember}
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    on:click={handleBackdropClick}
  >
    <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
      <!-- Close Button -->
      <button 
        on:click={closeModal}
        class="absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <!-- Modal Content -->
      <div class="p-8">
        {#if selectedMember === 'julieDavenson'}
          <div class="text-center mb-8">
            <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-forest-green mb-2">Julie Davenson</h2>
            <p class="text-xl text-lime-green font-medium">Strategic Director & PhD Fellow</p>
          </div>
          
          <div class="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>Julie D. brings over two decades of experience leading strategic initiatives in regenerative agriculture, policy advocacy, and systems change work across sectors including affordable housing. She holds a master's degree from Antioch New England where she studied systems change and organizational management, and is currently a PhD fellow at the University of Vermont in the Sustainable Policy Development, Economics and Governance program focusing on food system governance.</p>
            <p>Her current research with the Institute for Agroecology examines regional food system governance structures.</p>
            <p>Most recently, as Director of Program Integration with the Soil and Climate Initiative, she led internal and external strategy and coordination across various programs including regenerative transitions, verification systems, and supply chain collaborations across the network. She has also led an innovative agriculture education center and Savory HUB, catalyzing regenerative work in the Northeast, including collaboration with Stonyfield Organics as a member of their Open Team Farm Hub. She has extensive experience implementing organic and regenerative transition programs, including market and finance sector sustainability standards.</p>
            <p>Julie served as CEO for the venture capital-launched Regenerative Food Network, a vertically integrated meat company in Vermont, and has led strategic planning and business development for numerous organizations including the Keene Housing Authority and the Northeast Organic Farming Association of NH. She has consulted with Walden Local and the Dairy Grazing Alliance, conducting landscape analysis, stakeholder interviews, and planning launch events for the alliance.</p>
            <p>She holds several leadership roles including the leadership team for the Northeast Healthy Soil Network, Board President of the Northeast Organic Farming Association, and organizing team member for the North Woodland Bioregional Collective. She is also an accredited Educator with the Savory Institute.</p>
          </div>
        {:else if selectedMember === 'julieSnorek'}
          <div class="text-center mb-8">
            <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-forest-green mb-2">Julie Snorek, PhD</h2>
            <p class="text-xl text-lime-green font-medium">Co-founder & Research Director</p>
          </div>
          
          <div class="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>With 15-years of field research experience with Indigenous peoples and farmers in the Sahel, S. Africa, and the United States, Julie Snorek is a highly-skilled researcher and instructor on agricultural futures and systems transitions. She uses methodologies based in systems thinking to uncover and analyze power dynamics in climate adaptation, map communications flows and influence in broad-scale watershed management, and uncover what people are imagining about the future of regenerative agriculture and has led research programs for Dartmouth College, the United Nations University (UNU), the U.S. Agency for International Development, and multiple non-governmental organizations. She served as a resilience advisor to Mercy Corps North, Central, and West Africa programs, has led participatory development planning processes in Alaska, Niger, and Namibia for Indigenous community organizations, and is highly skilled at presenting complex ideas in ways that practitioners can understand and swiftly adapt to their needs. All of her academic and facilitation work is based in climate adaptation and regenerative transitions for rural food systems.</p>
            <p>Her doctoral work in Environmental Science and Technology from the Institut de Ciència i Tecnologia Ambientals at the Autonomous University of Barcelona focused on conflict and climate change adaptation in farming and rangeland systems in Niger. Her postdoctoral work examined transboundary water management and environmental justice in rural communities in the drylands of Namibia and South Africa. During the pandemic, she served as a core member of the Northeast Healthy Soils Network, where she orchestrated four virtual and one live symposia, taught at Dartmouth College, and carried out transdisciplinary research on just transitions in agriculture in New England. This research expanded to the U.S. Great Plains with a Science and Technology Studies grant from the National Science Foundation. Over the course of 2 years, Julie learned why farmers, agribusiness leaders, nonprofit leaders, investors, and soil health advocates are coming to the table together to re-imagine how "regenerative" farming futures might shift global supply chains, market development, investment schemes, and policy.</p>
            <p>For the past two years, she has supported strategic planning as an American Association for the Advancement of Science (AAAS) Science and Technology Policy Fellow at the Office of the Chief Scientists at the US Department of Agriculture (USDA). As a skilled facilitator, qualitative researcher, and servant leader, Julie has brought together the scientific agencies of the USDA, the National Science Foundation, and the Department of Energy to design a strategy for regenerative agriculture. She supported the planning and implementation of the Science and Research Strategy under Secretary Vilsack and more recently carried out a landscape analysis for the new USDA science strategy under Secretary Rollins. Along with this recent work, she loves being a stepmom, hiking/camping, gardening, and talking as often as possible with farmers and land stewards. Having lived in Europe and West Africa for 10 years, she speaks French with fluency and Spanish and German with basic proficiency. She also picked up Tamashaq and Hausa when serving as a Peace Corps Volunteer in Niger.</p>
            <p>She is a co-founder of Mycosphere Partners and was part of the core group of Northeast Healthy Soils Network weavers. Her past contracts have been with the U.S. Department of Agriculture, Nebraska Soil Health Coalition, Dartmouth College, USAID, DfID, United Nation University, and University College London.</p>
          </div>
        {:else if selectedMember === 'magentaLight'}
          <div class="text-center mb-8">
            <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-forest-green mb-2">Magenta Light</h2>
            <p class="text-xl text-lime-green font-medium">Fullstack Developer & Tech Architect</p>
          </div>
          
          <div class="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>Magenta is a fullstack developer, project manager, and organizational development specialist with 25 years of experience building globally networked bioregional economies. She brings different movement leaders together to strategize and share resources for community-led development and food security.</p>
            <p>As the founder of BloomNetwork.earth, she leads teams in marketing, finance, community, tech and administration to build movement coherence and generous resource sharing among stakeholders. She was the systems architect for their regenerative economic protocol, which uses state-of-the-art blockchain technology and Bloom's 18-year history of exploring new economic models, to align funders and actors to mobilize solutions around regional food systems, watershed management, and bioregional economies. These efforts are fundamentally shifting global power dynamics, from cooperatively owned global permaculture supply-chains and distribution centers, to Indigenous entrepreneurship, to local food policy transformation, farmland trusts and methods of governing resources together.</p>
            <p>As a fullstack developer and project manager with dOrg.tech, Magenta leads design and developer teams to help startups build cutting-edge solutions for decentralized coordination of financial resources. She consults for movement ecosystems within local and bioregional coalitions, as well as innovative justice-oriented startup ecosystems, to help them design organizational structures and collaborative models, as well as accessible public messaging that help them achieve their goals. Clients include The Ethereum Foundation, Tabula Rasa Ventures, Femtheogen, Tezos Foundation, Giveth, and Local Bloom business networks. She trained for 3 years with Radical Women, which teaches women to be leaders in social movements. She holds certifications in Ecosystem Value Flows, Platform Cooperatives from the New School, and Deep Work's Hypersprint methodology, and presents as a guest lecturer at Harvard and Yale universities on collaborative financial management.</p>
            <p>From 2011-2019, she developed Pollination Labs: Bioregional Hackathon, which leads diverse stakeholders in a region to identify gaps and opportunities, prototype effective solutions together through design sprints, and build them for place-based well-being. This approach builds lasting relationships across sectors such as government, corporations, farmers, finance professionals, and grassroots leaders in a region, with strong infrastructure supporting follow-through and realization. She grew up working on a family farm in Northeastern Montana.</p>
          </div>
        {:else if selectedMember === 'josieWatson'}
          <div class="text-center mb-8">
            <div class="w-32 h-32 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-forest-green mb-2">Josephine Watson</h2>
            <p class="text-xl text-lime-green font-medium">Earth Law Architect & Strategic Legal Designer</p>
          </div>
          
          <div class="text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>Josie is a Gaian myth weaver, Earth Lawyer, Bioregional Strategist, Herbalist & Midwife of Parallel Governance Evolution. She was born and raised in the woods of Pequot territory - just outside Greenwich, Connecticut - where her tree kin taught her the codes of earth listening, in and through the body, getting high off the aromas of dark, rich soil.</p>
            <p>Her family moved to Switzerland during her high school years, where she witnessed direct democratic processes at Town Meetings and their beautiful impact on social cohesion and community vitality. Soils, forests, Bucky Fuller and vital farm ecosystems taught her to be a student of ecological principles - and by way of that a passionate synergy-spotter, a network weaver, and a believer in law's capacity to build infrastructure of collective intelligence and generate abundance. She is working to apply legal methods to support and manifest the needs of various initiatives reharmonizing human and ecological lifeways. Josie passed the Bar Exam with a high enough score to be licensed in any state. She is licensed in Vermont.</p>
            <p><strong>Scholar:</strong> Supported publications with the Stockholm Environment Institute (on Communitarian Commons Resource Governance), Global Development and Environment Institute (on policy to support regenerative agriculture), and the UN Food and Agriculture Organization (on governing the soil-water quality nexus).</p>
            <p><strong>Network Weaver:</strong> Founded a brain trust advocacy network for public sector investment in regenerative agriculture in the Northeast.</p>
            <p><strong>Legal advocate:</strong> Paralegaled / authored a brief on the Rights of Manoomin case, a pathfinding Rights of Nature case led by the White Earth Band of the Ojibwe in Minnesota, with the Center for Democracy and Environmental Rights.</p>
            <p><strong>Legal researcher for Regenerative Startup:</strong> Worked as Regen Network's only in-house legal mind, facilitating research to develop the contract set of their product; a cryptoeconomic payment system supporting regenerative farmers, financed by carbon markets.</p>
            <p><strong>Core Role:</strong> She designs cooperative and trust-based legal templates for hubs, flow funds, and food sovereignty projects, supports funder engagement and regulatory alignment (e.g., USDA, green bonds, soil programs), leads storytelling, cultural mapping, and earth-centered governance design, and develops software for cross-community knowledge sharing and cooperative financial management.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
