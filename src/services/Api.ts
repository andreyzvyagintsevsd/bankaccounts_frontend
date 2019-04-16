import { Account } from './../models/Account'

const url = "https://localhost:44341/api/graphql";

const getAccountList = (minAccount: string, maxAccount: string) => {
  return fetch(url,  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: `{ entries: { minAccount: ${minAccount}, maxAccount: ${maxAccount} } }` }),
    })
    .then(response => response.json());
};


const deleteAccount = (accountId: number) => {
  return fetch(url, {
      method: "post",
      body: JSON.stringify({accountId})
    })
    .then(response => response.json());
};

const updateAccount = (account: Account) => {
  return fetch(url,  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: `{ entries: { minAccount: , maxAccount: } }` }),
    })
    .then(response => response.json());
};

export {
  getAccountList,
  deleteAccount,
  updateAccount
};
