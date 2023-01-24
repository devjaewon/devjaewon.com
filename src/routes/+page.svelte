<Header />
<div class="profile">
    <Profile />
</div>

<script>
import Header from './Header.svelte';
import Profile from './Profile.svelte';
</script>

<style>
:global(body) {
    background-color: #fdfeff;
}
.profile {
    margin-top: 24px;
}
</style>