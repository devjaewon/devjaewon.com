<div class="home">
    <div class="area-profile">
        <Profile />
    </div>
    <div class="section">
        <AboutMe />
    </div>
    <div class="section">
        <WorkExperiences />
    </div>
</div>

<script lang="ts">
import AboutMe from "./AboutMe.svelte";
import Profile from "./Profile.svelte";
import WorkExperiences from "./WorkExperiences.svelte";
</script>

<style lang="scss">
.area-profile {
    margin-top: 24px;
}
.section {
    margin-top: 60px;
}
</style>
