<Header />
<ul class="data-test">
    {#each data.tasks as task}
    <li class="item">
        <span class="id">{task.id}</span>
        <span class="title">{task.title}</span>
        <span class="content">{task.content}</span>
        <span class="at">{task.at}</span>
    </li>
    {/each}
</ul>

<script lang="ts">
import Header from "@/components/common/Header.svelte";
import type { PageLoadData } from "./+page.server";

export const ssr = true;
export const csr = false;
export let data: PageLoadData;
</script>
