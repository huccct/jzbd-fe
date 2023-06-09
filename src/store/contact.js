import { reqUploadAllInfo } from '@/api/modules/contact';

const state = {
  part1Form: {},
  part2Form: {},
  part3Form: [],
  part4Form: [],
  part5Form: {},
  part6Form: {},
  companyCond: {},
  successPageOptions: {
    isSuccess: false,
    count: 3
  }
};

const mutations = {
  setForm1(state, data) {
    state.part1Form = data;
    console.log('res1', state.part1Form);
  },
  setForm2(state, data) {
    state.part2Form = data;
    console.log('res2', state.part2Form);
  },
  setForm3(state, data) {
    state.part3Form = data;
    console.log('res3', state.part3Form);
  },
  setForm4(state, data) {
    state.part4Form = data;
    console.log('res4', state.part4Form);
  },
  setForm5(state, data) {
    state.part5Form = data;
    console.log('res5', state.part5Form);
  },
  setForm6(state, data) {
    state.part6Form = data;
    console.log('res6', state.part6Form);
  },
  setEstablished(state, data) {
    state.companyCond = data;
    console.log('res7', state.companyCond);
  }
};

const actions = {
  async uploadAllInfo({ commit }) {
    let {
      companyName,
      establishmentDate,
      legalRepresentative,
      registeredAddress,
      contactNumber,
      email,
      moveInDate,
      registeredCapital,
      previousYearSales,
      totalAssets,
      nextYearTaxAmount,
      developmentStage1,
      honorsAndProjectFunding
    } = state.part1Form;
    let { developmentStage2, area, otherRequirements } = state.part5Form;
    let idx1 = '';
    let idx2 = '';
    developmentStage1.forEach((item, index) => {
      if (item.checked === true) {
        idx1 = index + 1;
      }
    });
    developmentStage2.forEach((item, index) => {
      if (item.checked === true) {
        idx2 = index + 1;
      }
    });
    var date = new Date(establishmentDate);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');

    // 拼接成 yyyy-mm-dd 格式
    var formattedDate = year + '-' + month + '-' + day;

    var date1 = new Date(moveInDate);
    var year1 = date1.getFullYear();
    var month1 = (date1.getMonth() + 1).toString().padStart(2, '0');
    var day1 = date1.getDate().toString().padStart(2, '0');

    // 拼接成 yyyy-mm-dd 格式
    var formattedDate1 = year1 + '-' + month1 + '-' + day1;
    const data = {
      company: {
        companyName,
        establishmentDate: formattedDate,
        legalRepresentative,
        registeredAddress,
        contactNumber,
        email,
        moveInDate: formattedDate1,
        registeredCapital,
        previousYearSales,
        totalAssets,
        nextYearTaxAmount,
        developmentStage1: idx1,
        developmentStage2: idx2,
        honorsAndProjectFunding,
        ...state.part2Form,
        ownershipStructureList: state.part3Form,
        highLevelTalentsList: state.part4Form,
        area,
        otherRequirements,
        ...state.companyCond
      },
      fujian: {
        ...state.part6Form
      }
    };
    console.log(data);
    let res = await reqUploadAllInfo(data);
    console.log(res);
    if (res.code === 200) {
      this._vm.$message.success('提交成功');
      state.successPageOptions.isSuccess = true;
      const timer = setInterval(() => {
        state.successPageOptions.count--;
        if (state.successPageOptions.count <= 0) {
          clearInterval(timer);
          window.location.reload();
        }
      }, 1000);
    }
  }
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
