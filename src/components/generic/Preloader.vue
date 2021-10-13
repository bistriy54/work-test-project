<template>
  <div class="preloader" :style="{ height: `${height}px`, width: `${width}px` }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; display: block; shape-rendering: auto"
      :style="{
        height: `${loaderHeight}px`,
        width: `${loaderWidth}px`,
        backgroundColor: `${backgroundColorRGB}`,
      }"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        :stroke="strokeColor"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="2s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 200,
    },
    width: {
      type: Number,
      default: 200,
    },
    loaderHeight: {
      type: Number,
      default: 100,
    },
    loaderWidth: {
      type: Number,
      default: 100,
    },
    backgroundColorRGB: {
      type: String,
      default: 'transparent',
    },
    strokeColor: {
      type: String,
      default: '#006e62',
    },
  },
}
</script>

<style scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
