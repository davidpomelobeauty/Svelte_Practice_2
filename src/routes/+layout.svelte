<script lang="ts">
  import '../app.css';
  import type { LayoutProps } from './$types';
  import { Toaster } from '#lib';
  import Header from './Header.svelte';

  let { children }: LayoutProps = $props();
</script>

<div class="app-container">
  <Header />
  <main class="content">
    <div class="bg-surface-50-950 transition-colors duration-200">
      {@render children?.()}
    </div>
  </main>
</div>
