import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../../models/transaction.dart';

class ListTransactions extends StatelessWidget {
  final List<Transaction> _userTransactions;
  final Function _handleDeleteTransaction;

  ListTransactions(this._userTransactions, this._handleDeleteTransaction);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (_, constraints) {
        return Container(
          width: double.infinity,
          height: constraints.maxHeight,
          child: LayoutBuilder(
            builder: (_, nestedConstraints) {
              return this._userTransactions.isEmpty
                  ? Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Container(
                            child: Text(
                              'No transactions added yet!',
                              style: Theme.of(context).textTheme.title,
                            ),
                            height: nestedConstraints.maxHeight * 0.20),
                        Container(
                          height: nestedConstraints.maxHeight * 0.80,
                          child: Image.asset(
                            'assets/images/waiting.png',
                            fit: BoxFit.contain,
                          ),
                        ),
                      ],
                    )
                  : ListView.builder(
                      itemCount: _userTransactions.length,
                      itemBuilder: (BuildContext context, int index) {
                        return Card(
                          elevation: 5,
                          margin:
                              EdgeInsets.symmetric(vertical: 8, horizontal: 5),
                          child: ListTile(
                            leading: CircleAvatar(
                              radius: 30,
                              child: Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: FittedBox(
                                  child: Text(
                                    "\$${_userTransactions[index].amount.toStringAsFixed(2)}",
                                    style: TextStyle(
                                      color:
                                          Theme.of(context).primaryColorLight,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            title: Text(
                              _userTransactions[index].title,
                              style: Theme.of(context).textTheme.title,
                            ),
                            subtitle: Text(
                              DateFormat.yMMMd()
                                  .format(_userTransactions[index].date),
                              style: Theme.of(context).textTheme.body2,
                            ),
                            trailing: Container(
                              child: IconButton(
                                icon: Icon(Icons.delete, color: Colors.red),
                                onPressed: () => _handleDeleteTransaction(
                                    _userTransactions[index]),
                              ),
                            ),
                          ),
                        );
                      },
                    );
            },
          ),
        );
      },
    );
  }
}
