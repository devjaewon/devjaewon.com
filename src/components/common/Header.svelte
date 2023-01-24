<div class="root">
    <div class="logo">
        <img
            class="img"
            src="/images/logo_black_transparent.png"
            width=24
            height=24
            alt="로고"
        >
        <span class="text">DEVJAEWON</span>
    </div>
    <div class="link-wrap">
        <ul class="link-list">
            <li class="link-item">
                <a class="link" href="/notes">노트</a>
            </li>
            <li class="link-item">
                <a class="link" href="/articles">글</a>
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
.root {
    padding: 10px;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
.logo {
    float: left;
    padding: 4px 0;
    font-size: 0;
    .img {
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: top;
    }
    .text {
        display: inline-block;
        margin-left: 4px;
        font-size: 18px;
        line-height: 24px;
        vertical-align: top;
    }
}
.link-wrap {
    float: right;
    .link-list {
        white-space: nowrap;
        font-size: 0;
    }
    .link-item {
        display: inline-block;
        vertical-align: top;
        &:nth-child(n+1) {
            margin-left: 8px;
        }
    }
    .link {
        display: block;
        padding: 0 14px;
        border-radius: 2px;
        background-color: #e3e3e3;
        font-size: 15px;
        line-height: 32px;
    }
}
</style>