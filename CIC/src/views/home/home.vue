<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        这是首页
        <input type="text" v-model="inputValue">
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'home',
        components: {
        },
        data () {
            return {
                inputValue: ''
            };
        },
        watch: {
          inputValue: function (values) {
              this.setInputValue({valuess: values});
          }
        },
        computed: {
        },
        methods: {
            ...mapMutations('expert', {
                setExpertList: 'setExpertList',
                setInputValue: 'setInputValue'
            })
        },
        mounted () {
            this.setExpertList({list: 'dsadsadsa'});
        }
    };
</script>
