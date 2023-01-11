const environment = {};

const pageUrls = {
  login: '/',
  dashboard: '/dashboard',
  userDetails: '/userDetails',
  guarantors: '/guarantors',
  loans: '/loans',
  decisionModel: '/decisionModel',
  savings: '/savings',
  loanRequest: '/loanRequest',
  whitelist: '/whitelist',
  karma: '/karma',
  organization: '/organization',
  loanProduts: '/loanProducts',
  savingsProducts: '/savingsProducts',
  feesAndCharges: '/feesAndCharges',
  transactions: '/transactions',
  services: '/services',
  servicesAccount: '/servicesAccount',
  settlement: '/settlement',
  reports: '/reports',
  preference: '/preference',
  feesAndPricing: '/feesAndPricing',
  auditLogs: '/auditLogs'
}

environment.development = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
   frontendHost: "http://localhost:3000/",
  appName: "LENDSQR FE TEST",
  pageUrls,
}

export default environment[process.env.REACT_APP_NODE_ENV || 'development']