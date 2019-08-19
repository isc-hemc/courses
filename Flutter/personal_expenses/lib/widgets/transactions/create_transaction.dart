import 'package:flutter/material.dart';

class CreateTransaction extends StatelessWidget {
  final TextEditingController amountController = TextEditingController();
  final TextEditingController titleController = TextEditingController();
  final Function _handleNewTransaction;

  CreateTransaction(this._handleNewTransaction);

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
            ),
            TextField(
              controller: amountController,
              decoration: InputDecoration(labelText: 'Amount'),
            ),
            Container(
              margin: EdgeInsets.only(top: 10),
              child: FlatButton(
                child: Text('Add Transaction'),
                textColor: Colors.purple,
                onPressed: () {
                  final double amount = double.parse(amountController.text);
                  final String title = titleController.text;
                  _handleNewTransaction(title, amount);                },
              ),
            )
          ],
        ),
      ),
    );
  }
}
