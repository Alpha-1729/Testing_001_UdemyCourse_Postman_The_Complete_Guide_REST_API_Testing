// Clear the previous results in console.
console.clear();

var companies = pm.environment.get("companies");
var iterationData = pm.environment.get("iterationData");

if (!companies) {
    companies = ["Gooooooogle", "Yahoo!", "Facebook", "Amazon"];
    pm.environment.set("companies", companies);
}

if (!iterationData) {
    iterationData = JSON.parse(JSON.stringify(companies)); // clone array
}

var currentCompany = iterationData.shift();
pm.environment.set("company", currentCompany);
pm.environment.set("iterationData", iterationData);
