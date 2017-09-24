import Store from '../Store/Store'
import AllTypes from '../Store/AllTypes'

const tableID = 'testOutput';
const openBracket = '&#10094;';
const closeBracket = '&#10095;';
const passTick = '&#9989;';
const failCross = '&#10060;';
const openQuote = '&#10077;';
const closeQuote = '&#10078;';

var failCount = 0;
var passCount = 0;

const addCount = (passed)=> {
    if (passed)
        passCount++;
    else
        failCount++;
}

const resetStoreSetLogin = ()=> {
    Store.dispatch(AllTypes.getType(AllTypes.RESET_STORE, true));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));
}

const createTitleRow = (moduleName)=>{
    var table = document.getElementById(tableID);
    var length = table.rows.length;
    var row = table.insertRow(length);
    var cell0 = row.insertCell(0);
    cell0.setAttribute('colspan', 2);
    cell0.innerHTML = openBracket+'<b>'+moduleName+'</b>'+closeBracket;
    cell0.style.borderTop = '1px solid black';
}

const createTestResultRow =(testName, outcome)=>{
    var table = document.getElementById(tableID);
    var length = table.rows.length;
    var row = table.insertRow(length);
    
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var color = true == outcome ? 'green' : 'red';

    cell0.innerHTML = true == outcome ? passTick+' Pass' : ''+failCross+' Fail';
    cell0.style.color = color;
    cell1.innerHTML = openQuote+' ' + testName + ' '+closeQuote;
    cell1.style.color = color;
}

const esModuleTestRunner = (moduleName, module)=>{
    createTitleRow(moduleName);
    Object.keys(module).forEach((key)=> {
        var testName = module[key].name;
        if (null !== testName && undefined !== testName) {
            testName = testName.replace(/_/g, ' ');
            var passed = false;
            resetStoreSetLogin();
            try {
                passed = module[key]();
            } catch(e) { /*if failed passed is still false*/ }

            addCount(passed);
            createTestResultRow(testName, passed);
        }
    });
}
export { esModuleTestRunner }

const sumResults = ()=>{
    var table = document.getElementById(tableID);
    var row = table.insertRow(length);
    var cell = row.insertCell(0);
    cell.setAttribute('colspan', 2);
    cell.innerHTML = openBracket+' Total : ' + (passCount + failCount) + closeBracket;

    row = table.insertRow(0);
    cell = row.insertCell(0);
    cell.setAttribute('colspan', 2);
    cell.innerHTML = passTick+' Pass total : ' + passCount;
    cell.style.color = 'green';
    
    row = table.insertRow(0);
    cell = row.insertCell(0);
    cell.setAttribute('colspan', 2);
    cell.innerHTML = failCross+' Fail total : ' + failCount;
    cell.style.color = 'red';
}
export { sumResults }