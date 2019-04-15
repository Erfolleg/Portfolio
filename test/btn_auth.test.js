const fs = require('fs');
const webdriverio = require('webdriverio'); 
const options = require('../wdio.conf.js');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin#/login');
});

test('на странице есть кнопка "Авторизоваться"', () => {
    return client
    .isExisting('.btn_auth')
    .then(browsers => {
        for (const browserName in browsers) {
            expect (browsers[browserName]).toBe(true);
        }
    })
    .screenshot()
    .then(browsers => {
        for (const browserName in browsers) {
            fs.writeFileSync(`./screenshots/button_auth_${browserName}_has_open.png`, browsers[browserName].value, "base64");
        }
    })
});

test('при нажатии на "Авторизация" появляется форма для  авторизации', () => {
    return client
        .click('.btn_auth')
        .isVisible('.login__form')
        .then(browsers => {
            for (const browserName in browsers) {
                expect (browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/login__form_${browserName}_has_open.png`, browsers[browserName].value, "base64");
            }
        })
});


afterAll (() => {
    return client.end();
});