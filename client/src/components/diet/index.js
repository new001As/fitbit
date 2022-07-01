import React from 'react';
import { Balance } from './transactions/Balance';
import { IncomeExpenses } from './transactions/IncomeExpenses';
import { TransactionList } from './transactions/TransactionList';
import { AddTransaction } from './transactions/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './diet.css';

const diet = () => {
 return(
    <GlobalProvider>
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
 );   
}

export default diet;