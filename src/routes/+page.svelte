<Header />
<Main>
    <Home slot="content" />
</Main>

<script>
import Header from '@/components/common/Header.svelte';
import Main from '@/components/common/Main.svelte';
import Home from '@/components/Home/Home.svelte';
</script>

<style>
:global(body) {
    background-color: #fdfeff;
}
</style>