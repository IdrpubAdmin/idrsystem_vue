<template>
  <div class="gnb_wrap on" v-show="gnbModal">
    <ul class="gnb_menu">
      <li v-for="gnbMenu in list" :key="gnbMenu">
        <a :href="gnbMenu.href" :data-menu-id="gnbMenu.data"><span>{{gnbMenu.title}}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
const gnbData = [
	{href : 'commerce.html', data : 'gnb_01', title : 'service'},
	{href : 'works_2021_01.html', data : 'gnb_02', title : 'work'},
	{href : 'intro.html', data : 'gnb_03', title : 'contact'}
];
module.exports = {
  data() {
    return {
      list : gnbData,
      gnbModal : false,
    }
  },
  created: function() {
    eventBus.$on('clickGnb', function(){
      const lineX = document.querySelector('.gnb_btn');
      if(this.gnbModal == false){
      this.gnbModal = true;
      lineX.classList.add('on');
      document.body.classList.add('hidden');
      } else {
        this.gnbModal = false;
        lineX.classList.remove('on');
        document.body.classList.remove('hidden')
      }
    }.bind(this));
  },
}
</script>
