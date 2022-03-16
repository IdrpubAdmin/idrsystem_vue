<template>

	    <!-- marketing_box -->
	    <section class="marketing_box">

		    <!-- sub_bg_wrap -->
		    <div class="sub_bg_wrap">
			    <img src="../images/service/srvc_sub_bg_02.png" alt="AI-Marketing Curator">
		    </div>
		    <!-- //sub_bg_wrap -->

		    <div class="inner">

                <div class="blk_item_wrap" v-for="blkItem in list" :key="blkItem">
                    <p class="blk_label">{{ blkItem.label }}</p>
                    <div class="blk_tit_con">
                        <div class="blk_tit" v-html="blkItem.tit"></div>
                        <div class="blk_con">
                            <div v-html="blkItem.con"></div>
                            <ul class="dot_ul">
                                <li v-for="dotListData in blkItem.dotList" :key="dotListData" v-html="dotListData.li" :class="dotListData.c"></li>
                            </ul>
                        </div>
                    </div>
                </div>

		    </div>
	    </section>
	    <!-- //marketing_box -->
        
</template>

<script>

const blkItemData = [
    {
        label : 'AI Marketing Curator - 개념',
        tit : '고객의 구매 전환률 극대화, <br class="only_pc">비용의 최소화 등 마케팅 <br class="only_pc">목적에 맞게 활용가능',
        con : 'AI Marketing Curator 인공 지능을 적용해 설계된100여개 <br class="only_pc">Customer Cube를 전문가의 도움없이 <span class="point_clr">고객의 구매 전환률 극대화, 비용의 최소화 등 마케팅 목적에 맞게 캠페인</span>을 <br class="only_pc">실행할 수 있는 솔루션입니다.',
        dotList : [
            { li: '고객의 기본적인 정보를 바탕으로 통계가공     >    AI모델링을 통해  선호도분석     >     고객의 활동특성을 파악 후 이벤트 및 마케팅적용'},
        ]
    },
        {
        label : 'AI Marketing Curator – 최신 모델링 방법 적용',
        tit : '최신의 AI 적용기법 <br class="only_pc">및 모델링 방법을 적용',
        con : '패션 산업에 최적화된 고객 통합 정보 체계를 설계하기위해 <span class="point_clr">최신의 AI 적용기법 및 모델링 방법을 적용</span>하였습니다.',
        dotList : [
            { li: 'AI 기술구분영역 - Image Classifier , Client2vec  ,  AI /ML모델링' },
            { c: 'no_dot', li: '<span class="point_label">AI 기술력으로 고객의 구매 주기와 선호 브랜드 선호 상품가격까지 예측하여 적극적으로 활용하여 구매력을 높인다.</span>'}
        ]
    }
];

module.exports = {
    data() {
        return {
            list: blkItemData
        }
    },
}
</script>