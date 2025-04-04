exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'nadzruladzizi_mVxHNn',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'yM6TuxFqK2vpBn4DszXd',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        app: 'bs://sample.app',
        buildIdentifier: "${BUILD_NUMBER}",
        browserstackLocal: true
      },
    ]
  ],
  capabilities: [{
    'bstack:options': {
      deviceName: 'iPhone 14 Pro Max',
      platformVersion: '16',
      platformName: 'ios',
    }
  }, {
    'bstack:options': {
      deviceName: 'iPhone XS',
      platformVersion: '15',
      platformName: 'ios',
    } }, {
    'bstack:options': {
      deviceName: 'iPhone 11',
      platformVersion: '14',
      platformName: 'ios',
    }
  }],
  commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true
    }
  },
  maxInstances: 10,
...
