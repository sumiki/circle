<template>
    <div class="animation-wrapper">
        <svg viewBox="0 0 300 300">
            <moving-circle
                color="#0785C2"
                :center_x="60"
                :center_y="60"
            ></moving-circle>
            <moving-circle
                    color="#000000"
                    :center_x="120"
                    :center_y="60"
            ></moving-circle>
            <moving-circle
                    color="#ED344E"
                    :center_x="180"
                    :center_y="60"
            ></moving-circle>
            <moving-circle
                    color="#FBB233"
                    :center_x="90"
                    :center_y="90"
            ></moving-circle>
            <moving-circle
                    color="#1B8B3C"
                    :center_x="150"
                    :center_y="90"
            ></moving-circle>
        </svg>
    </div>

</template>

<script>
    import MovingCircle from './Circle.vue'
    export default {
        name: 'app',
        components: {
            MovingCircle
        }
    }
</script>

<style scoped>
    div.animation-wrapper{
        text-align: center;
    }
    svg{
        margin-top: 0px;
        width: 600px;
    }
</style>
