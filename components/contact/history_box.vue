<template>
	<section class="history_box">
		<div class="inner">

			<div class="txt_wrap">
				<p class="tw_1">도전/ 전진 / 끊임없는 노력</p>
				<p class="tw_2">㈜아이디알시스템은2010년 6월에 설립되어 끊임없는 도전과 전진을<br>
					반복하며 ICT 분야에서 빠르게 성장하고 있습니다.<br>
					IDR은 현재에 안주하지 않고 더 나은 미래를 준비하는 협업과 동의 Business Platform을
					구축하고, ICT Leading Company로 성장해 나가겠습니다.</p>
			</div>
			<ul class="history_ul_wrap">			

				<li v-for="hisList in list" :key="hisList" :class="hisList.c">
					<div class="hist_item">
						<span class="year">{{ hisList.year }}</span>
						<p class="desc_line" v-for="monList in hisList.monList" :key="monList">
							<b>{{ monList.month + '월 /' }}</b>{{ monList.con }}
						</p>
					</div>
				</li>
			</ul>

		</div>
	</section>

</template>

<script>

const hisListData = [
	{
		c : 'side_r',
		year : '2018',
		monList : [
			{ month: '05', con: ' 본점 이전(서울 영등포구 양평로21길 26, 8층 (아이에스비즈타워1차)' }
		]
	},
	{
		c : 'side_l',
		year : '2017',
		monList : [
			{ month: '03', con: ' 현대홈쇼핑 상시개발업체 선정' }
		]
	},
	{
		c : 'side_r',
		year : '2015',
		monList : [
			{ month: '08', con: ' 기술혁신형 중소기업(INNO-BIZ) 인증 (제150103-01098호)' },
			{ month: '05', con: ' 삼성SDS 2015년도 Certified partner(협력사)로 선정' },
			{ month: '05', con: ' 본점 이전(서울 성동구 아차산로 67-16, 9층 (성수동2가,세종빌딩3)' }
		]
	},
	{
		c : 'side_l',
		year : '2014',
		monList : [
			{ month: '12', con: ' 기업부설연구소로 연구소 승격 (IDR 옴니채널 연구소 – 제2014115962호)' },
			{ month: '05', con: ' 삼성SDS 2014년도 Certified partner(협력사)로 선정' }
		]
	},
	{
		c : 'side_r',
		year : '2013',
		monList : [
			{ month: '12', con: ' 독일 e-commerce solution 업체인 Hybris software와 partnership 계약' },
			{ month: '11', con: ' 상호변경 ㈜쓰리에이파트너스 ->  ㈜아이디알시스템' },
			{ month: '07', con: ' 벤처기업등록 (제 20130107370호)' },
			{ month: '05', con: ' 연구개발전담부서 설립 ( 제 201315432호)' }
		]
	},
	{
		c : 'side_l',
		year : '2010',
		monList : [
			{ month: '11', con: ' 대표이사 정운평 사임  및  송돈섭 취임' },
			{ month: '06', con: ' ㈜쓰리에이파트너스 설립 (납입자본금: 50백만원)' }
		]
	},
]

module.exports = {
    data() {
        return {
			list : hisListData,
        }
    },

}

</script>