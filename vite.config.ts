import { defineConfig } from "vite";

// No GitHub Pages o site fica em /<nome-do-repositorio>/.
// O workflow define VITE_BASE automaticamente; localmente o padrão é "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
});
