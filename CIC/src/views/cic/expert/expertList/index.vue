<template>
    <div class="expertList-main">
       <div class="header">
           <div class="header-top">
               <Input class="fl ml50" v-model="keyValue" placeholder="请输入关键词" style="width: 100px"></Input>
               <Checkbox class="fl ml30 mt8" v-model="isNowCompany">现任公司</Checkbox>
               <Checkbox class="fl ml30 mt8" v-model="isResume">基本简历</Checkbox>
               <Checkbox class="fl ml30 mt8" v-model="isKetwork">搜索关键词</Checkbox>
               <div class="fl ml30">
                   <p class="fl mt8">是否激活</p>
                   <Select v-model="isActive" style="width:70px">
                       <Option v-for="item in isActiveList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </div>
               <div class="fl ml30">
                   <p class="fl mt8">激活方式</p>
                   <Select v-model="activationModed" style="width:70px">
                       <Option v-for="item in activationModeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </div>
               <div class="fl ml30">
                   <p class="fl mt8">附件类型</p>
                   <Select v-model="appendageType" style="width:70px">
                       <Option v-for="item in appendageTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </div>
               <div class="fl ml30">
                   <p class="fl mt8">是否上市</p>
                   <Select v-model="isList" style="width:70px">
                       <Option v-for="item in isListList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </div>
               <div class="fl ml30">
                   <p class="fl mt8">是否国企</p>
                   <Select v-model="isGuoqi" style="width:70px">
                       <Option v-for="item in isGuoqiList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </div>
           </div>
           <div class="header-down">
               <Input class="fl ml50" v-model="expertName" placeholder="请输入专家姓名" style="width: 100px"></Input>
               <Input class="fl ml50 ml30" v-model="expertPhone" placeholder="请输入专家电话" style="width: 100px"></Input>
               <Input class="fl ml50 ml30" v-model="expertEmail" placeholder="请输入专家邮箱" style="width: 100px"></Input>
               <div class="fl ml30">
                   <p class="fl mt8">所属行业</p>
                   <Select v-model="industryOf" style="width:200px">
                       <Option v-for="item in industryOfList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'expertList',
        data (){
            return{
                keyValue:'',
                isNowCompany:false,
                isResume:false,
                isKetwork:false,
                isActive: '',
                isActiveList:[
                    {
                        value:'不选择',
                        label:'不选择'
                    },
                    {
                        value:'是',
                        label:'是'
                    },
                    {
                        value:'否',
                        label:'否'
                    }
                ],
                activationModed:'',
                activationModeList:[
                    {
                        value:'不选择',
                        label:'不选择'
                    },
                    {
                        value:'微信',
                        label:'微信'
                    },
                    {
                        value:'邮件',
                        label:'邮件'
                    },
                    {
                        value:'电话',
                        label:'电话'
                    },
                ],
                appendageType:'',
                appendageTypeList:[
                    {
                        value:'不选择',
                        label:'不选择'
                    },
                    {
                        value:'邮件',
                        label:'邮件'
                    },
                    {
                        value:'语音',
                        label:'语音'
                    },
                ],
                isList:'',
                isListList:[
                    {
                        value:'不选择',
                        label:'不选择'
                    },
                    {
                        value:'是',
                        label:'是'
                    },
                    {
                        value:'否',
                        label:'否'
                    }
                ],
                isGuoqi:'',
                isGuoqiList:[
                    {
                        value:'不选择',
                        label:'不选择'
                    },
                    {
                        value:'是',
                        label:'是'
                    },
                    {
                        value:'否',
                        label:'否'
                    }
                ],
                expertName:'',
                expertPhone:'',
                expertEmail:'',
                industryOf:'',
                industryOfList:[
                    {
                        value:'所有行业',
                        label:'所有行业'
                    },
                    {
                        value:'145',
                        label:'金融'
                    },
                    {
                        value:'148',
                        label:'咨询公司'
                    },
                    {
                        value:'149',
                        label:'国企'
                    },
                    {
                        value:'150',
                        label:'外企'
                    },
                    {
                        value:'151',
                        label:'其他'
                    },
                    {
                        value:'152',
                        label:'冶金、矿山'
                    },
                    {
                        value:'153',
                        label:'化工'
                    },
                    {
                        value:'154',
                        label:'工程与材料'
                    },
                    {
                        value:'156',
                        label:'机械设备'
                    },
                    {
                        value:'157',
                        label:'汽车与零部件'
                    },
                    {
                        value:'161',
                        label:'能源'
                    },
                    {
                        value:'200',
                        label:'包装与容器'
                    },
                    {
                        value:'214',
                        label:'电信，软件和服务'
                    },
                    {
                        value:'222',
                        label:'技术硬件和设备'
                    },
                    {
                        value:'232',
                        label:'休闲娱乐及消费者服务'
                    },
                    {
                        value:'238',
                        label:'互联网服务'
                    },
                    {
                        value:'244',
                        label:'服务业'
                    },
                    {
                        value:'249',
                        label:'物流运输'
                    },
                    {
                        value:'258',
                        label:'媒体'
                    },
                    {
                        value:'264',
                        label:'零售批发业'
                    },
                    {
                        value:'270',
                        label:'耐用消费品'
                    },
                    {
                        value:'276',
                        label:'食品、饮料、烟草、消费品'
                    },
                    {
                        value:'284',
                        label:'医疗器械'
                    },
                    {
                        value:'294',
                        label:'医疗服务'
                    },
                    {
                        value:'303',
                        label:'制药，生物技术和生命科学的'
                    },
                    {
                        value:'312',
                        label:'银行，金融服务和保险'
                    },
                    {
                        value:'335',
                        label:'环保与公共事业'
                    },
                    {
                        value:'342',
                        label:'农、林、牧、渔业'
                    },
                    {
                        value:'352',
                        label:'工业'
                    },
                    {
                        value:'360',
                        label:'个人消费品'
                    },
                    {
                        value:'374',
                        label:'测试哟'
                    }
                ]
            }
        },
        computed: {
            ...mapState('expert', [
                'inputValue'
            ])
        },
        activated (){

        }
    };
</script>

<style lang="less">
    .fl{
        float: left;
    }
    .ml30{
        margin-left: 30px;
    }
    .mt8{
        margin-top: 8px;
    }
    .single-page{
          width: 100%;
          min-height: 100%
    }
    .expertList-main{
        width: 100%;
        background: #fff;
        padding:20px 50px;
        overflow: hidden;
        .header-top{
            overflow: hidden;
        }
        .header-down{
            margin-top: 20px;
        }
    }
</style>
