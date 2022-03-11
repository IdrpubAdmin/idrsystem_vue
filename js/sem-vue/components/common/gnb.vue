<template>
  <div class="gnb_wrap on" v-show="gnbModal">
    <ul class="gnb_menu" :class="{ has_wnd_nav : lnbOn }">
      <li v-for="gnbMenu in list" :key="gnbMenu">
        <a :href="gnbMenu.href" :data-menu-id="gnbMenu.data"><span>{{gnbMenu.title}}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
const reqUrl = window.location.pathname;
const gnbData = [
	{class : 'serviceOn', href : 'service.html', data : 'gnb_01', title : 'service'},
	{class : 'workOn', href : 'works_2021_01.html', data : 'gnb_02', title : 'work'},
	{class : 'contactOn', href : 'contact.html', data : 'gnb_03', title : 'contact'}
];
module.exports = {
  data() {
    return {
      list : gnbData,
      gnbModal : false,
      lnbOn : reqUrl.includes('/service') || reqUrl.includes('/contact') || reqUrl.includes('_vue'),
    }
  },
  created: function() {
    eventBus.$on('clickGnb', function(){
      const lineX = document.querySelector('.gnb_btn');
      const body = document.body;
      const header = document.querySelector('header');
      if(this.gnbModal == false){
      this.gnbModal = true;
      lineX.classList.add('on');
      body.classList.add('hidden');
      header.classList.add('gnb_on');
      } else {
        this.gnbModal = false;
        lineX.classList.remove('on');
        body.classList.remove('hidden');
        header.classList.remove('gnb_on');
      }
    }.bind(this));
  },
}
</script>
