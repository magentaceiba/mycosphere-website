<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import WhoWeWorkWith from '$lib/components/WhoWeWorkWith.svelte';
  import MissionSection from '$lib/components/MissionSection.svelte';
  import CredibilitySection from '$lib/components/CredibilitySection.svelte';
  import ServicesOverview from '$lib/components/ServicesOverview.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import { onMount } from 'svelte';
  
  let sections: HTMLElement[];
  
  onMount(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Mycosphere Partners - Regenerating the Living Contract Between Land, Food, and People</title>
  <meta name="description" content="Mycosphere Partners is a Northeast-based alliance of organizers, lawyers, and mappers dedicated to helping farmers take back power from extractive supply chains." />
</svelte:head>

<HeroSection />
<WhoWeWorkWith />
<MissionSection />
<CredibilitySection />
<ServicesOverview />
<CTASection />

<style>
  /* Scroll-triggered animation styles */
  section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Stagger child animations */
  section.animate-in > * {
    animation: slideUpStagger 0.6s ease-out forwards;
  }
  
  section.animate-in > *:nth-child(1) { animation-delay: 0.1s; }
  section.animate-in > *:nth-child(2) { animation-delay: 0.2s; }
  section.animate-in > *:nth-child(3) { animation-delay: 0.3s; }
  section.animate-in > *:nth-child(4) { animation-delay: 0.4s; }
  section.animate-in > *:nth-child(5) { animation-delay: 0.5s; }
  
  @keyframes slideUpStagger {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
