import { Account } from "./../models/Account";

const url = "https://localhost:44341/api/graphql";

const getAccountList = (minAccount: string, maxAccount: string) => {
  // tslint:disable-next-line:max-line-length
  return fetchRequest(JSON.stringify({ "Query": "{ entries { id, bankName, accountHolderName, employeeName, branchName, accountType, accountNumber, employeeNumber, lastUpdate } }" }));
};

const getBanks = () => {
  return fetchRequest(JSON.stringify({ "Query": `{ banks }` }));
};

const getBranches = (bank: string) => {
  return fetchRequest(JSON.stringify({ "Query": `{ branches(bankName: \"${bank}\") }` }));
};

const deleteAccount = (accountId: number) => {
  return fetchRequest(JSON.stringify({"Query": `mutation { remove(id: ${accountId}) }`}));
};

const updateAccount = (account: Account) => {
  // tslint:disable-next-line:max-line-length
  return fetchRequest(JSON.stringify({"Query": `mutation { addOrUpdateEntry(entry: { id: ${account.id}, accountHolderName: \"${account.accountHolderName}\", employeeName: \"${account.employeeName}\", bankName : \"${account.bankName}\", branchName: \"${account.branchName}\", accountType: ${account.accountType}, accountNumber: ${account.accountNumber}, employeeNumber: \"${account.employeeNumber}\" }) { id } }`}));
};

function fetchRequest(body: string) {
  return fetch(url,  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body
    })
    .then(response => response.json());
}

export {
  getAccountList,
  deleteAccount,
  updateAccount,
  getBranches,
  getBanks
};
