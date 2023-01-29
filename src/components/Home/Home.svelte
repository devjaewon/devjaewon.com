<div class="home">
    <div class="area-profile">
        <Profile />
    </div>
    <div class="area-about-me">
        <AboutMe />
    </div>
    <div class="section">
        <WorkExperience />
    </div>
</div>

<script lang="ts">
import AboutMe from "./AboutMe.svelte";
import Profile from "./Profile.svelte";
import WorkExperience from "./WorkExperience.svelte";
</script>

<style lang="scss">
.area-profile {
    margin-top: 24px;
}
.area-about-me {
    margin-top: 28px;
}
.section {
    margin-top: 60px;
}
</style>
