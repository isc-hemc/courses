import 'package:flutter/material.dart';

class CreateTransaction extends StatefulWidget {
  final Function _handleNewTransaction;

  CreateTransaction(this._handleNewTransaction);

  @override
  _CreateTransactionState createState() => _CreateTransactionState();
}

class _CreateTransactionState extends State<CreateTransaction> {
  final TextEditingController amountController = TextEditingController();

  final TextEditingController titleController = TextEditingController();

  void _onSubmited() {
    final double amount = double.parse(amountController.text);
    final String title = titleController.text;
    if (title.isEmpty || amount < 0) {
      return;
    }
    widget._handleNewTransaction(title, amount);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      child: Container(
        padding: EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            TextField(
              controller: titleController,
              decoration: InputDecoration(labelText: 'Title'),
              onSubmitted: (_) => _onSubmited(),
            ),
            TextField(
              controller: amountController,
              decoration: InputDecoration(labelText: 'Amount'),
              keyboardType: TextInputType.number,
              onSubmitted: (_) => _onSubmited(),
            ),
            Container(
              margin: EdgeInsets.only(top: 10),
              child: FlatButton(
                child: Text('Add Transaction'),
                textColor: Theme.of(context).primaryColor,
                onPressed: _onSubmited,
              ),
            )
          ],
        ),
      ),
    );
  }
}
