import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Calorie formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]+' Calories'
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4 style={{marginLeft: "12%",marginBottom:  "20px",marginTop: "15%"}}>Effective Calorie Count</h4>
    <h1 style={{marginLeft: "12%"}}>{moneyFormatter(total)}</h1>
    </>
  )
}