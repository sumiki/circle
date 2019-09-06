<template>
    <g>
        <circle r="3"
                :cx="center_x"
                :cy="center_y"
                :style="'stroke: transparent; fill:' + color"
                v-for="index in 8" :key="index"
        >
            <animate attributeName="cx"
                     :calcMode="calc_mode"
                     :values="position_cx(22.5 * index)"
                     :keySplines="key_splines"
                     :keyTimes="key_times"
                     :dur="loop_sec"
                     repeatCount="indefinite"
                     :begin="index * base_speed"
            />
            <animate attributeName="cy"
                     :calcMode="calc_mode"
                     :values="position_cy(22.5 * index)"
                     :keySplines="key_splines"
                     :keyTimes="key_times"
                     :dur="loop_sec"
                     repeatCount="indefinite"
                     :begin="index * base_speed"
            />
        </circle>
    </g>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                r: 50,
                base_speed: 0.25,
                loop_sec: '4s',
                calc_mode: 'spline',
                key_splines: '0.42 0.0 0.58 1.0;0.42 0.0 0.58 1.0',
                key_times: '0;0.5;1',
            }
        },
        props: {
            color: String,
            center_x: Number,
            center_y: Number,
        },
        mounted: function () {
        },
        methods: {
            position_cx: function (degree) {
                var bigining = this.center_x - Math.cos(degree * Math.PI / 180.0) * 50
                var middle = this.center_x + Math.cos(degree * Math.PI / 180.0) * 50
                return Math.round(bigining).toString() + ';' + Math.round(middle).toString() + ';' + Math.round(bigining).toString() + ';'
            },
            position_cy: function(degree){
                var bigining = this.center_y - Math.sin(degree * Math.PI / 180.0) * 50
                var middle = this.center_y + Math.sin(degree * Math.PI / 180.0) * 50
                return Math.round(bigining).toString() + ';' + Math.round(middle).toString() + ';' + Math.round(bigining).toString() + ';'
            },
        },
    }
</script>

<style scoped>
    div.animation-wrapper{
        text-align: center;
    }
    svg{
        margin-top: 0px;
        width: 180px;
    }
</style>
