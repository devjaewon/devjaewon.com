<div class="home">
    <div class="area-profile">
        <Profile />
    </div>
    <div class="area-about-me">
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
.area-about-me {
    margin-top: 28px;
}
.section {
    margin-top: 44px;
}
</style>
