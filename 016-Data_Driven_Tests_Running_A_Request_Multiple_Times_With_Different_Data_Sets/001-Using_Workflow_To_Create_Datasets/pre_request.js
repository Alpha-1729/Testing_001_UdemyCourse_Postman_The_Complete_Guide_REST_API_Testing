// Clear the previous results in console.
console.clear();

var companies = pm.environment.get("companies");

if (!companies) {
    companies = ["Gooooooogle", "Yahoo!", "Facebook", "Amazon"];
}

var currentCompany = companies.shift();
pm.environment.set("company", currentCompany);
pm.environment.set("companies", companies);