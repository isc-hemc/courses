import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import './bar.dart';
import './../../models/transaction.dart';

class Chart extends StatelessWidget {
  final List<Transaction> _recentTransactions;
  List<Map<String, Object>> get _groupedTransactions {
    return List.generate(7, (index) {
      final DateTime weekDay = DateTime.now().subtract(Duration(days: index));
      double amount = 0.0;
      for (int i = 0; i < this._recentTransactions.length; i++) {
        if (this._recentTransactions[i].date.day == weekDay.day &&
            this._recentTransactions[i].date.month == weekDay.month &&
            this._recentTransactions[i].date.year == weekDay.year) {
          amount += this._recentTransactions[i].amount;
        }
      }
      return {'day': DateFormat.E().format(weekDay), 'amount': amount};
    }).reversed.toList();
  }

  double get _totalSpending {
    return this._groupedTransactions.fold(0.0, (sum, transaction) {
      return sum += transaction['amount'];
    });
  }

  Chart(this._recentTransactions);

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: EdgeInsets.all(20),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: this._groupedTransactions.map((data) {
            double spendingPercent = this._totalSpending == 0.0
                ? 0.0
                : (data['amount'] as double) / this._totalSpending;
            return Flexible(
              fit: FlexFit.tight,
              child: Bar(data['day'], data['amount'], spendingPercent),
            );
          }).toList(),
        ),
      ),
    );
  }
}
