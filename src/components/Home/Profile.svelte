<section class="profile">
    <div class="area-img">
        <div class="figure">
            <img
                class="img"
                src="/images/profile.jpg"
                width=150
                height=150
                alt="프로필"
            >
        </div>
    </div>
    <div class="area-desc">
        <h2 class="name">김재원</h2>
        <em class="role"><span class="text">소프트웨어 엔지니어</span></em>
        <div class="role-subs">
            <em class="role-sub"><span class="text">#</span><span class="text">Front-end focused</span></em>
            <em class="role-sub"><span class="text">#</span><span class="text">Broad knowledge oriented</span></em>
        </div>
    </div>
</section>

<style lang="scss">
.profile {
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
.area-img {
    float: left;
    padding-top: 1px;
    .figure {
        overflow: hidden;
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.area-desc {
    overflow: hidden;
    padding-left: 24px;
    font-size: 0;
    .name {
        display: block;
        margin-bottom: 4px;
        font-weight: 700;
        font-size: 52px;
        color: #fffefd;
    }
}
.role {
    display: block;
    margin-top: 8px;
    padding-left: 2px;
    .text {
        display: inline-block;
        font-weight: 700;
        font-size: 28px;
        color: #bababa;
        vertical-align: top;
    }
}
.role-subs {
    margin-top: 6px;
}
.role-sub {
    display: block;
    padding-left: 2px;
    .text {
        display: inline-block;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.4;
        color: #8a8a8a;
        vertical-align: top;
    }
    .text + .text {
        margin-left: 4px;
    }
}
</style>