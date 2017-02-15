'use strict';
const Promise = require('promise');

const debug = require('debug')('push-service');

class PushService {
    constructor() {

    }

    push(record) {
        let p = new Promise((resolve, reject) => {
            resolve(record);
        });

        return p;
    }
}

module.exports = PushService;