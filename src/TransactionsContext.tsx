import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id:number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactiosContext = createContext<Transaction[]>([]);

export function TransactionProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
         .then(response => setTransactions(response.data.transactions))
    },[]);

    return (
        <TransactiosContext.Provider value={transactions}>
            {children}
        </TransactiosContext.Provider>
    )
}
