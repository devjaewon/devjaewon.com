<div class="root">
    <div class="logo">
        <img
            class="img"
            src="/images/logo_black_transparent.png"
            width=32
            height=32
            alt="로고"
        >
        <span class="text">DEVJAEWON</span>
    </div>
    <div class="link-records">
        <a class="link" href="/">기록</a>
    </div>
</div>

<style>
.root {
    height: 60px;
    padding: 14px;
}
.root::after {
    content: '';
    display: block;
    clear: both;
}
.logo {
    float: left;
    font-size: 0;
}
.logo .img {
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: top;
}
.logo .text {
    display: inline-block;
    margin-left: 4px;
    font-size: 20px;
    line-height: 32px;
    vertical-align: top;
}
.link-records {
    float: right;
}
.link-records .link {
    display: block;
    padding: 0 14px;
    border-radius: 2px;
    background-color: #e3e3e3;
    font-size: 15px;
    line-height: 32px;
}
</style>