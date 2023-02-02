<App />

<script>
import App from "@/components/home/App.svelte";

export const ssr = true;
export const csr = false;
</script>

<style>
:global(body) {
    background-color: #fdfeff;
}
</style>