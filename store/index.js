import axios from 'axios'
import XXP from '../utils/config'
export const strict = false
export const state = () => ({
  // 1040 form data that should pass all others forms
  f1040name: '',
  f1040ssn: '',
  // W-2 form data that should pass to 1040
  WagesAmt: 0,
  WithholdingAmt: 0,
  firstName: '',
  lastName: '',
  ssn: '',
  attachments: {},
  loading: true,
  deductionsTable: {
    Single: 12200,
    'Married filing jointly': 24400,
    'Married filing separately': 12200,
    'Head of household': 18350,
    'Qualifying widow(er)': 24400
  },
  activeStep: 1,
  formUploaderVisible: false,
  schema: {},
  uiSchema: [],
  model: {},
  // Login
  token: null,
  app: {
    sidebar: {
      opened: true,
      withoutAnimation: false
    },
    device: 'desktop'
  },
  settings: {
    showSettings: false,
    fixedHeader: false,
    sidebarLogo: true
  },
  user: {
    token: '',
    name: 'admin',
    avatar: ''
  }
})
// Dashboard layout
export const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  // App base URL
  baseURL: (state) => {
    return 'https://forms-server.rdtechlab.com'
  }
}

export const mutations = {
  setBaseSchema(state, baseSchema) {
    const { schema, uiSchema } = baseSchema
    state.schema = schema
    state.uiSchema = uiSchema
    state.model = {
      TotalDeductionsAmt: 12200,
      IndividualReturnFilingStatusCd: ['Single']
    }
  },
  updateModel(state, model) {
    if (model.IndividualReturnFilingStatusCd.length > 1) {
      model.IndividualReturnFilingStatusCd.shift()
    }

    const TotalDeductionsAmt =
      state.deductionsTable[model.IndividualReturnFilingStatusCd[0]]

    model = { ...model, TotalDeductionsAmt }

    state.model = model
  },
  documentLoaded(state) {
    state.loading = false
  },
  toggleFormUploader(state) {
    state.formUploaderVisible = !state.formUploaderVisible
  },

  // Dashboard layout
  SET_TOKEN(state, data) {
    if (typeof data === 'string') {
      state.token = data
    } else {
      state.token = data.token
    }
  },
  CLEAR_TOKEN(state) {
    state.token = null
  },
  TOGGLE_SIDEBAR: (state) => {
    state.app.sidebar.opened = !state.app.sidebar.opened
    state.app.sidebar.withoutAnimation = false
    if (state.app.sidebar.opened) {
      this.$cookie.set('sidebarStatus', 1)
    } else {
      this.$cookie.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    this.$cookie.set('sidebarStatus', 0)
    state.app.sidebar.opened = false
    state.app.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  UPDATE_1040_DATA: (state, data) => {
    const firstName = data.firstName ?? ''
    const lastName = data.lastName ?? ''
    state.f1040name = firstName.toUpperCase() + ' ' + lastName.toUpperCase()
    state.f1040ssn = data.ssn ?? ''
  },
  UPDATE_W2_DATA: (state, data) => {
    state.WagesAmt = data.WagesAmt
    state.WithholdingAmt = data.WithholdingAmt
    // if (data.Employee) {
    //   // eslint-disable-next-line no-console
    //   console.log(data.Employee)
    //   state.firstName = data.Employee.firstName
    //   state.lastName = data.Employee.lastName
    // } else {
    //   state.firstName = ''
    //   state.lastName = ''
    // }
    const firstName = data.firstName ?? ''
    const lastName = data.lastName ?? ''
    state.firstName = firstName.toUpperCase()
    state.lastName = lastName.toUpperCase()
    state.ssn = data.EmployeeSSN
  },
  UPDATE_ATTACHEMENTS: (state, data) => {
    state.attachments = data
  }
}

// Action Submitting mutation, not directly changing state
// Action Can contain any asynchronous operation
export const actions = {
  // nuxt The server initialization method has a higher priority than routing middleware. The request sent by the front end of the ssr to the node will go through this method
  // eslint-disable-next-line require-await
  async nuxtServerInit({ dispatch, commit, state }, { req, res }) {
    // refresh page cookie Lost and reacquired
    let token = ''
    if (req && req.headers && req.headers.cookie) {
      let cookie = req.headers.cookie
      // eslint-disable-next-line no-console
      console.log('COOKIE', cookie)
      const cookieObj = {}
      let cookieArr = []
      let key = ''
      let value = ''
      cookie = cookie.split(';')
      for (let i = 0; i < cookie.length; i++) {
        cookieArr = cookie[i].trim().split('=')
        key = cookieArr[0]
        value = cookieArr[1]
        cookieObj[key] = value
      }
      // Prevent F5 refresh, store in session Lost
      if (cookieObj.token && req.url !== '/login') {
        commit('SET_TOKEN', cookieObj.token)
        token = cookieObj.token
      }
    }
    // Reacquire permissions
    axios.defaults.headers[XXP.jwt.headerName] =
      XXP.jwt.headerNamePrefix + token
  },
  // Dashboard layout
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}
