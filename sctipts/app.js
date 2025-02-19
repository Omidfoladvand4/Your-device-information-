const $ = document
const win = window
const browserDataElm = $.querySelector('.device-data');
const connectionDataElm = $.querySelector('.connection');
const appVersionElm = $.querySelector('.app-version');
const tecNetworkElm = $.querySelector('.tec-network');
const deviceMemoryElm = $.querySelector('.device-memory');
const hardwareConcurrencyElm = $.querySelector('.hardware-concurrency');
const platformElm = $.querySelector('.platform');
const languesElm = $.querySelector('.languages');
const getChargeElm = $.querySelector('.get-charge');

console.log(win.navigator);

async function getBatteryCharge() {
    const battery = await navigator.getBattery();
    return battery.level * 100;
}

win.addEventListener('load', async () => {
    browserDataElm.innerHTML = win.navigator.appCodeName + "   " + win.navigator.appName + ' -  ' +  win.navigator.userAgentData.brands[1].brand;
    connectionDataElm.innerHTML = win.navigator.onLine;
    appVersionElm.innerHTML = win.navigator.appVersion;
    tecNetworkElm.innerHTML = win.navigator.connection.effectiveType;
    deviceMemoryElm.innerHTML = win.navigator.deviceMemory + 'GB';
    hardwareConcurrencyElm.innerHTML = win.navigator.hardwareConcurrency;
    platformElm.innerHTML = win.navigator.platform + ' -  ' +  win.navigator.userAgentData.platform;
    languesElm.innerHTML = win.navigator.language;
    
    const charge = await getBatteryCharge();
    getChargeElm.innerHTML = Math.floor(charge) + ' %';
});
