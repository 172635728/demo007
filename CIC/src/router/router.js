import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/index',
        icon: 'ios-home',
        name: 'index',
        component: Main,
        title: '首页',
        children: [
            {
                path: 'entrance',
                icon: 'compose',
                name: 'entrance',
                title: '工作入口',
                component: () => import('@/views/cic/index/entrance/index.vue'),
            },
            {
                path: 'sharedInformation',
                icon: 'compose',
                name: 'sharedInformation',
                title: '共享信息',
                component: () => import('@/views/cic/index/sharedInformation/index.vue'),
            },
            {
                path: 'sharedFile',
                icon: 'compose',
                name: 'sharedFile',
                title: '共享文件',
                component: () => import('@/views/cic/index/sharedFile/index.vue'),
            },
            {
                path: 'workLog',
                icon: 'compose',
                name: 'workLog',
                title: '工作日志',
                component: () => import('@/views/cic/index/workLog/index.vue'),
            },
            {
                path: 'myPerformance',
                icon: 'compose',
                name: 'myPerformance',
                title: '我的业绩',
                component: () => import('@/views/cic/index/myPerformance/index.vue'),
            },
        ]
    },
    {
        path: '/expert',
        icon: 'social-buffer',
        name: 'expert',
        title: '专家',
        component: Main,
        children: [
            {
                path: 'expertList',
                icon: 'compose',
                name: 'expertList',
                title: '专家列表',
                component: () => import('@/views/cic/expert/expertList/index.vue'),
            },
            {
                path: 'expertFollowUp',
                icon: 'compose',
                name: 'expertFollowUp',
                title: '专家跟进',
                component: () => import('@/views/cic/expert/expertFollowUp/index.vue'),
            },
            {
                path: 'applyExperts',
                icon: 'compose',
                name: 'applyExperts',
                title: '申请注册专家',
                component: () => import('@/views/cic/expert/applyExperts/index.vue'),
            },
            {
                path: 'temporaryExpert',
                icon: 'compose',
                name: 'temporaryExpert',
                title: '临时专家管理',
                component: () => import('@/views/cic/expert/temporaryExpert/index.vue'),
            },
            {
                path: 'enterpriseData',
                icon: 'compose',
                name: 'enterpriseData',
                title: '企业数据列表',
                component: () => import('@/views/cic/expert/enterpriseData/index.vue'),
            },
            {
                path: 'addEnterpriseData',
                icon: 'compose',
                name: 'addEnterpriseData',
                title: '添加企业数据',
                component: () => import('@/views/cic/expert/addEnterpriseData/index.vue'),
            },
            {
                path: 'recycleBin',
                icon: 'compose',
                name: 'recycleBin',
                title: '回收站',
                component: () => import('@/views/cic/expert/recycleBin/index.vue'),
            }
        ]
    },
    {
        path: '/customer',
        icon: 'social-buffer',
        name: 'customer',
        title: '客户',
        component: Main,
        children: [
            {
                path: 'customerList',
                icon: 'compose',
                name: 'customerList',
                title: '客户列表',
                component: () => import('@/views/cic/customer/customerList/index.vue'),
            },
            {
                path: 'addCustomer',
                icon: 'compose',
                name: 'addCustomer',
                title: '添加客户',
                component: () => import('@/views/cic/customer/addCustomer/index.vue'),
            },
            {
                path: 'CuserList',
                icon: 'compose',
                name: 'CuserList',
                title: '用户列表',
                component: () => import('@/views/cic/customer/CuserList/index.vue'),
            },
            {
                path: 'customerFollowUp',
                icon: 'compose',
                name: 'customerFollowUp',
                title: '客户跟进',
                component: () => import('@/views/cic/customer/customerFollowUp/index.vue'),
            },
            {
                path: 'registeredCustomerList',
                icon: 'compose',
                name: 'registeredCustomerList',
                title: '注册客户列表',
                component: () => import('@/views/cic/customer/registeredCustomerList/index.vue'),
            },
        ]
    },
    {
        path: '/project',
        icon: 'social-buffer',
        name: 'project',
        title: '项目',
        component: Main,
        children: [
            {
                path: 'ongoingProject',
                icon: 'compose',
                name: 'ongoingProject',
                title: '进行中项目',
                component: () => import('@/views/cic/project/ongoingProject/index.vue'),
            },
            {
                path: 'shelvingProject',
                icon: 'compose',
                name: 'shelvingProject',
                title: '搁置项目',
                component: () => import('@/views/cic/project/shelvingProject/index.vue'),
            },
            {
                path: 'completedProject',
                icon: 'compose',
                name: 'completedProject',
                title: '已完成项目',
                component: () => import('@/views/cic/project/completedProject/index.vue'),
            },
            {
                path: 'allProject',
                icon: 'compose',
                name: 'allProject',
                title: '所有项目',
                component: () => import('@/views/cic/project/allProject/index.vue'),
            },
            {
                path: 'unfinishedInterview',
                icon: 'compose',
                name: 'unfinishedInterview',
                title: '未完成访谈',
                component: () => import('@/views/cic/project/unfinishedInterview/index.vue'),
            },
            {
                path: 'completedInterview',
                icon: 'compose',
                name: 'completedInterview',
                title: '已完成访谈',
                component: () => import('@/views/cic/project/completedInterview/index.vue'),
            },
            {
                path: 'failureInterview',
                icon: 'compose',
                name: 'failureInterview',
                title: '失败访谈确认',
                component: () => import('@/views/cic/project/failureInterview/index.vue'),
            }
        ]
    },
    {
        path: '/account',
        icon: 'social-buffer',
        name: 'account',
        title: '账目',
        component: Main,
        children: [
            {
                path: 'paymentList',
                icon: 'compose',
                name: 'paymentList',
                title: '付款列表',
                component: () => import('@/views/cic/account/paymentList/index.vue'),
            },
            {
                path: 'outstandingAccount',
                icon: 'compose',
                name: 'outstandingAccount',
                title: '应收账目',
                component: () => import('@/views/cic/account/outstandingAccount/index.vue'),
            }
        ]
    },
    {
        path: '/webManagement',
        icon: 'social-buffer',
        name: 'webManagement',
        title: '网站管理',
        component: Main,
        children: [
            {
                path: 'informationList',
                icon: 'compose',
                name: 'informationList',
                title: '信息列表',
                component: () => import('@/views/cic/webManagement/informationList/index.vue'),
            },
            {
                path: 'informationDelivery',
                icon: 'compose',
                name: 'informationDelivery',
                title: '信息发布',
                component: () => import('@/views/cic/webManagement/informationDelivery/index.vue'),
            },
            {
                path: 'onlineApplication',
                icon: 'compose',
                name: 'onlineApplication',
                title: '在线申请管理',
                component: () => import('@/views/cic/webManagement/onlineApplication/index.vue'),
            },
            {
                path: 'projectApplication',
                icon: 'compose',
                name: 'projectApplication',
                title: '项目申请管理',
                component: () => import('@/views/cic/webManagement/projectApplication/index.vue'),
            },
            {
                path: 'projectRecommendation',
                icon: 'compose',
                name: 'projectRecommendation',
                title: '项目推荐管理',
                component: () => import('@/views/cic/webManagement/projectRecommendation/index.vue'),
            },
            {
                path: 'customerDemand',
                icon: 'compose',
                name: 'customerDemand',
                title: '客户需求管理',
                component: () => import('@/views/cic/webManagement/customerDemand/index.vue'),
            },
            {
                path: 'customerInterview',
                icon: 'compose',
                name: 'customerInterview',
                title: '客户约访管理',
                component: () => import('@/views/cic/webManagement/customerInterview/index.vue'),
            },
        ]
    },
    {
        path: '/weChat',
        icon: 'social-buffer',
        name: 'weChat',
        title: '微信',
        component: Main,
        children: [
            {
                path: 'expertIndexList',
                icon: 'compose',
                name: 'expertIndexList',
                title: '专家首页列表',
                component: () => import('@/views/cic/weChat/expertIndexList/index.vue'),
            },
            {
                path: 'expertIndexRelease',
                icon: 'compose',
                name: 'expertIndexRelease',
                title: '专家首页发布',
                component: () => import('@/views/cic/weChat/expertIndexRelease/index.vue'),
            },{
                path: 'meetingList',
                icon: 'compose',
                name: 'meetingList',
                title: '行业会议列表',
                component: () => import('@/views/cic/weChat/meetingList/index.vue'),
            },
            {
                path: 'enterMeeting',
                icon: 'compose',
                name: 'enterMeeting',
                title: '发布行业会议',
                component: () => import('@/views/cic/weChat/enterMeeting/index.vue'),
            },

        ]
    },
    {
        path: '/statistics',
        icon: 'social-buffer',
        name: 'statistics',
        title: '统计',
        component: Main,
        children: [
            {
                path: 'expertStatistics',
                icon: 'compose',
                name: 'expertStatistics',
                title: '专家统计',
                component: () => import('@/views/cic/statistics/expertStatistics/index.vue'),
            },
            {
                path: 'customerStatistics',
                icon: 'compose',
                name: 'customerStatistics',
                title: '客户统计',
                component: () => import('@/views/cic/statistics/customerStatistics/index.vue'),
            },
            {
                path: 'projectStatistics',
                icon: 'compose',
                name: 'projectStatistics',
                title: '项目统计',
                component: () => import('@/views/cic/statistics/projectStatistics/index.vue'),
            },
            {
                path: 'interviewStatistics',
                icon: 'compose',
                name: 'interviewStatistics',
                title: '访谈统计',
                component: () => import('@/views/cic/statistics/interviewStatistics/index.vue'),
            },
            {
                path: 'accountStatistics',
                icon: 'compose',
                name: 'accountStatistics',
                title: '账目统计',
                component: () => import('@/views/cic/statistics/accountStatistics/index.vue'),
            },
            {
                path: 'staffStatistics',
                icon: 'compose',
                name: 'staffStatistics',
                title: '员工统计',
                component: () => import('@/views/cic/statistics/staffStatistics/index.vue'),
            },
            {
                path: 'achievementStatistics',
                icon: 'compose',
                name: 'achievementStatistics',
                title: '业绩统计',
                component: () => import('@/views/cic/statistics/achievementStatistics/index.vue'),
            },
            {
                path: 'temporaryCustomerStatistics',
                icon: 'compose',
                name: 'temporaryCustomerStatistics',
                title: '临时专家统计',
                component: () => import('@/views/cic/statistics/temporaryCustomerStatistics/index.vue'),
            },
            {
                path: 'workLogStatistics',
                icon: 'compose',
                name: 'workLogStatistics',
                title: '工作日志统计',
                component: () => import('@/views/cic/statistics/workLogStatistics/index.vue'),
            },
            {
                path: 'weChatInquiries',
                icon: 'compose',
                name: 'weChatInquiries',
                title: '微信凭证查询',
                component: () => import('@/views/cic/statistics/weChatInquiries/index.vue'),
            },
        ]
    },
    {
        path: '/system',
        icon: 'social-buffer',
        name: 'system',
        title: '系统',
        component: Main,
        children: [
            {
                path: 'systemParams',
                icon: 'compose',
                name: 'systemParams',
                title: '微信凭证查询',
                component: () => import('@/views/cic/system/systemParams/index.vue'),
            },
            {
                path: 'businessParams',
                icon: 'compose',
                name: 'businessParams',
                title: '业务参数',
                component: () => import('@/views/cic/system/businessParams/index.vue'),
            },
            {
                path: 'industyrClassification',
                icon: 'compose',
                name: 'industyrClassification',
                title: '行业分类',
                component: () => import('@/views/cic/system/industyrClassification/index.vue'),
            },
            {
                path: 'weChatMenu',
                icon: 'compose',
                name: 'weChatMenu',
                title: '微信菜单',
                component: () => import('@/views/cic/system/weChatMenu/index.vue'),
            },
            {
                path: 'operationLog',
                icon: 'compose',
                name: 'operationLog',
                title: '操作日志',
                component: () => import('@/views/cic/system/operationLog/index.vue'),
            },
            {
                path: 'mailLog',
                icon: 'compose',
                name: 'mailLog',
                title: '邮件日志',
                component: () => import('@/views/cic/system/mailLog/index.vue'),
            },
            {
                path: 'mailTemplate',
                icon: 'compose',
                name: 'mailTemplate',
                title: '邮件模板',
                component: () => import('@/views/cic/system/mailTemplate/index.vue'),
            },
            {
                path: 'permissionsSettings',
                icon: 'compose',
                name: 'permissionsSettings',
                title: '权限设置',
                component: () => import('@/views/cic/system/permissionsSettings/index.vue'),
            },
            {
                path: 'exchangeRateMaintenance',
                icon: 'compose',
                name: 'exchangeRateMaintenance',
                title: '汇率维护',
                component: () => import('@/views/cic/system/exchangeRateMaintenance/index.vue'),
            },
        ]
    },
    {
        path: '/user',
        icon: 'social-buffer',
        name: 'user',
        title: '用户',
        component: Main,
        children: [
            {
                path: 'userList',
                icon: 'compose',
                name: 'userList',
                title: '用户列表',
                component: () => import('@/views/cic/user/userList/index.vue'),
            },
            {
                path: 'addUser',
                icon: 'compose',
                name: 'addUser',
                title: '添加用户',
                component: () => import('@/views/cic/user/addUser/index.vue'),
            },
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
