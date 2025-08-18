<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Mycosphere Partners - Regenerating the Living Contract Between Land, Food, and People</title>
  <meta name="description" content="Mycosphere Partners is a Northeast-based alliance of organizers, lawyers, and mappers dedicated to helping farmers take back power from extractive supply chains." />
</svelte:head>

<div class="min-h-screen bg-soft-cream">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>
