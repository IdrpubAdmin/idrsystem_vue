<template>
	<section class="intro_box">
		<div class="inner">

			<!-- left_bx -->
			<div class="left_bx">
				<!-- numbers_wrap -->
				<ul class="numbers_wrap">
					<li v-for="(time, i) in list" :key="i">
						<span class="nmb_num">{{ time.num }}</span>
						<span class="nmb_txt">{{ time.txt }}</span>
					</li>
				</ul>
				<!-- //numbers_wrap -->

				<div class="txt_wrap">
					<p class="tw_1">그냥 만들어진 숫자가 아닙니다.<br>
						그만큼 많은 직원들과 함께 전문성을 키우고 <br class="only_pc">가치를 높였기에 가능한 숫자가 되었습니다.</p>
					<p class="tw_2">시스템 통합구축에 대한 최고의 전문성과 기술력을 바탕으로 Omni Channel기반의
						온.오프라인 고객DB통합 및 옴니채널 커머스 시스템 구축 등 스마트샵 전문기업으로써
						끊임없는 기술개발 노력을 진행중입니다.</p>
				</div>
			</div>
			<!-- //left_bx -->

			<!-- right_bx -->
			<div class="right_bx">
				<!-- visual_table -->
				<table cellpadding="0" cellspacing="0" class="visual_table">
					<colgroub>
						<col width="50%">
					</colgroub>
					<tbody>
					<tr>
						<td colspan="2" class="td_img">
							<img class="wif_logo" src="../images/contact/cntc_img_01.png" alt="모래시계 이미지">
						</td>
					</tr>
					<tr>
						<td class="td_bg_1 t_lg">
							전문성과 기술력을<br>바탕으로 다양한<br>전문기술력
						</td>
						<td class="td_bg_2 fs13x taC" style="height:212px;">
							시스템 구축 등 스마트샵 전문기업으로써 끊임없는<br>기술개발 노력을 진행중입니다.
						</td>
					</tr>
					<tr>
						<td class="td_bg_1 t_sm va_b">
							IDR은 단지 이윤과 효율을 추구하기<br>
							보다는 임직원 들의 행복, 자기 실현,<br>
							삶의 가치를 더 우선시하고 있습 니다.
						</td>
						<td class="td_img">
							<img class="wif_logo" src="../images/contact/cntc_img_02.png" alt="하늘 이미지">
						</td>
					</tr>
					</tbody>
				</table>
				<!-- //visual_table -->
			</div>
			<!-- //right_bx -->

		</div>
	</section>
</template>

<script>

var time = [
	{ num: '10', txt: '년' },
	{ num: '3,650', txt: '일' },
	{ num: '87,600', txt: '시간' },
	{ num: '315,360,000', txt: '초' },
]

module.exports = {
    data() {
        return {
			list : time,
        }
    },
}
</script>