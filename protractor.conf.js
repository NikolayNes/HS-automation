const config = require('dotenv');
const obj = config.load({path: '.env'});
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    allScriptsTimeout: 21000,
    specs: [
        './e2e/**/*.e2e.ts'
    ],
    baseUrl: process.env.BASE_URL,
    multiCapabilities: [{
        'browserName': 'chrome'
    }
    ],
    params: {
        user_email: process.env.USER_EMAIL,
        user_pass: process.env.USER_PASSWORD,
        base_url: process.env.BASE_URL,
        locations_url: process.env.LOCATIONS_PAGE_URL,
        account_page_url: process.env.ACCOUNT_PAGE_URL,
        wrong_email: process.env.WRONG_EMAIL,
        wrong_pass: process.env.WRONG_PASS
    },
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({ savePath: 'reports/screenshots'}));
    }
};