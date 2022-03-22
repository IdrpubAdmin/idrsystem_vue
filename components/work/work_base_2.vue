<template>
<div>
	<!-- works_box -->
    <section v-for="worksBox in list" :key="worksBox" class="works_box" :class="worksBox.num" :id="worksBox.id">

        <!-- works_img_wrap -->
        <div class="works_img_wrap">
            <div class="img_box">
				<img :src=" '../images/works/' + worksBox.pc" alt="사이트이미지">
                <div class="text_box">
                    <p class="title">삼성전자 한국총괄 멤버십</p>
                    <p class="sub_title">
                        삼성전자 한국총괄의 CRM, Marketing 시스템 구축 경험을 바탕으로<br class="only_pc">
                        삼성전자 Global CRM 구축 프로젝트에 참여하였으며, 타 해외법인의<br class="only_pc">
                        확산 프로젝트에도 계속적으로 참여하고 있습니다.
                    </p>
                </div>
            </div>
        </div>
        <!-- //works_img_wrap -->

        <!-- works_info_wrap -->
        <div class="works_info_wrap">
            <p class="wif_date">{{worksBox.date}}</p>
            <img class="wif_logo" :src=" '../images/works/' + worksBox.logo" alt="로고">
            <p class="wif_subject" v-html="worksBox.title"></p>
            <div class="wif_detail">
                <p class="wifd_tit" v-html="worksBox.txt"></p>
                <template v-for="contentData in worksBox.content" >
                    <p class="wifd_con" :key="contentData">{{contentData.subTxt}}</p>
                    <ul class="wifd_con" :key="contentData">
                        <li v-for="listData in contentData.list" :key="listData" v-html="listData.li"></li>
                    </ul>
                </template>
            </div>
        </div>
         <!-- //works_info_wrap -->

    </section>
    <!-- works_box -->
</div>
</template>

<script>

module.exports = {

    data() {
        return {
             list : worksData2
        }
    },
}
</script>