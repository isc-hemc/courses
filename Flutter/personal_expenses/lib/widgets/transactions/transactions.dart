import 'package:flutter/material.dart';

import './create_transaction.dart';
import './list_transactions.dart';
import './../../models/transaction.dart';

class Transactions extends StatefulWidget {
  @override
  _TransactionsState createState() => _TransactionsState();
}

class _TransactionsState extends State<Transactions> {
  final List<Transaction> _userTransactions = [
    Transaction(id: "1", title: "Jeans", date: DateTime.now(), amount: 9.99),
    Transaction(id: "2", title: "Shoes", date: DateTime.now(), amount: 29.99)
  ];

  void _handleNewTransaction(String title, double amount) {
    final Transaction newTransaction =
        Transaction.titleAmount(title: title, amount: amount);
    setState(() {
      _userTransactions.add(newTransaction);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        CreateTransaction(_handleNewTransaction),
        ListTransactions(_userTransactions)
      ],
    );
  }
}
