<App data={data} />

<script lang="ts">
import App from "@/components/board/App.svelte";
import type { PageLoadData } from "./+page.server";

export const ssr = true;
export const csr = false;
export let data: PageLoadData;
</script>
