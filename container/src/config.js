import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('app-navigation', () => SystemJS.import('app-navigation'), () => true);
setTimeout(() => {
    singleSpa.registerApplication('profile', () => SystemJS.import('profile'), () => true);
    singleSpa.registerApplication('app-details', () => SystemJS.import('app-details'), isActive.homePage);
}, 500);

singleSpa.start()
