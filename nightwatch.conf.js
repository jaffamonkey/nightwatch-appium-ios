const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

module.exports = {
    src_folders: './tests',
    output_folder: './reports',
    custom_commands_path: './commands',
    page_objects_path: './page-objects',
    custom_assertions_path : '',
    globals_path : '',
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost:8111',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            screenshots : {
                enabled : true,
                on_failure : true,
                path: './reports/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions : {
                //  binary: electron,
                    args: ['--headless', '--window-size=1280,1280'],
                  },
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
    }
}