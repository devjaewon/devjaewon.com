<Header />
<Main>
    <div class="home" slot="content">
        <div class="area-profile">
            <Profile />
        </div>
        <div class="sections">
            <div class="section">
                <AboutMe />
            </div>
            <div class="section">
                <WorkExperiences />
            </div>
        </div>
    </div>
</Main>

<script lang="ts">
import Header from '@/components/common/Header.svelte';
import Main from '@/components/common/Main.svelte';
import AboutMe from "./AboutMe.svelte";
import Profile from "./Profile.svelte";
import WorkExperiences from "./WorkExperiences.svelte";
</script>

<style lang="scss">
.area-profile {
    margin-top: 24px;
}
.section {
    margin-top: 80px;
    &:first-child {
        margin-top: 40px;
    }
}
</style>
