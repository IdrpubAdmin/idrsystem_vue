<template>
  <div>

    <h1>
      외부 vue component를 불러오자
    </h1>
    <h1>
      {{text}}
    </h1>
  </div>
</template>

<script>
module.exports = {
  name: 'Page1',
  props: ['text'],
  data: () => ({
  })
}
</script>
