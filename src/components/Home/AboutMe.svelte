<section class="root">
    <h2 class="title">@About me</h2>
    <div class="box">
        <p class="desc">책과 기술을 좋아하며, 아침 운동 후 커피 한잔과 함께 책을 읽거나 일을 시작하며 즐거운 하루를 시작합니다.</p>
        <strong class="sub-title"># 엔지니어로서</strong>
        <ul class="list">
            <li class="item"><span class="desc">기술 그 자체보다 고객과 효용을 바라보려 합니다</span></li>
            <li class="item"><span class="desc">필요한 모든 것을 우선순위에 따라 학습하고 실행합니다</span></li>
            <li class="item"><span class="desc">지표 기반의 의사결정과 지속적 개선을 고민합니다</span></li>
            <li class="item"><span class="desc">제품의 성장과 함께 팀의 유대와 개개인의 성장을 모두 추구합니다</span></li>
        </ul>
    </div>
</section>

<style lang="scss">
.root {
    padding: 0 14px;
}
.title {
    padding-left: 2px;
    font-family: 'GowunDodum', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000;
}
.box {
    margin-top: 4px;
    padding: 12px 14px;
    border-radius: 2px;
    background-color: #f3f3f3;
}
.desc {
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 21px;
    color: #555;
}
.sub-title {
    display: block;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
}
.list {
    margin-top: 8px;
    .item {
        &::before {
            content: '';
            float: left;
            width: 4px;
            height: 4px;
            margin-top: 9px;
            border-radius: 50%;
            background-color: #555;
            vertical-align: top;
        }
        &::after {
            content: '';
            display: block;
            clear: both;
        }
        .desc {
            display: block;
            overflow: hidden;
            padding-left: 8px;
        }
    }
    .item + .item {
        margin-top: 2px;
    }
}
</style>