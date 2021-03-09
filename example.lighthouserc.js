module.exports = {
  ci: {
    collect: {
      url: ['https://www.brianperry.dev'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001',
      token: '###-###-###', // could also use LHCI_TOKEN variable instead
    },
  },
};