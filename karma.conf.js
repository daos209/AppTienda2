// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      mocha: {
        // you can add configuration options for Mocha here
        // the possible options are listed at https://mochajs.org/#configuring-mocha-nodejs
        // for example, you can set a specific timeout with `timeout: 5000`
      },
      clearContext: false // leave Mocha Spec Runner output visible in browser
    },
    mochaReporter: {
      showDiff: true // show diff in reporter output
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
