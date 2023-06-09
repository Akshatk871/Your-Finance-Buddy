import React, {useContext} from 'react'
import TransactionContext from './transactionContext'

function TransactionState(props) {
  return (
    <TransactionContext.Provider value={{}}>
      {props.childern}
    </TransactionContext.Provider>
  )
}

export default TransactionState