import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@deno/svelte-adapter';

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: [vitePreprocess()],
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
      },
      adapter: adapter(),
    }),
    tailwindcss(),
  ],
  server: {
    watch: {
      // ⚡ 무거운 캐시 및 노드 폴더를 감시 대상에서 완전히 제외합니다.
      ignored: ['**/node_modules/**', '**/.deno/**', '**/.svelte-kit/**'],
    },
  },
});
