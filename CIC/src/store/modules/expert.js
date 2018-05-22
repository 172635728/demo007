import axios from 'axios';

const getExpertList = (data) => {
    return axios.get('https://api.github.com/repos/iview/iview-admin/releases/latest');
}

const expert = {
    namespaced: true,
    state: {
        expertList: [],
        inputValue: ''
    },
    mutations: {
        setExpertList (state, payload) {
            state.expertList = payload.list;
            console.log('调用欧冠Mu');
        },
        setInputValue (state, payload) {
            state.inputValue = payload.valuess;
            console.log(state.inputValue);
        }
    },
    actions: {
    },
    getters: {
    }
};

export default expert;
