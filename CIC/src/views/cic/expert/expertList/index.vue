<template>
    <div>
        专家列表
        {{ inputValue }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'expertList',
        computed: {
            ...mapState('expert', [
                'inputValue'
            ])
        }
    };
</script>

<style scoped>

</style>
