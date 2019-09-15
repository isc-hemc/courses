import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import './widgets/transactions/create_transaction.dart';
import './widgets/transactions/list_transactions.dart';
import './widgets/chart/chart.dart';
import './models/transaction.dart';

void main() {
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final String _title = 'Personal Expenses';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: HomePage(),
      theme: ThemeData(
        fontFamily: 'Quicksand',
        primarySwatch: Colors.purple,
        appBarTheme: AppBarTheme(
          textTheme: ThemeData.light().textTheme.copyWith(
                title: TextStyle(
                  fontFamily: 'OpenSans',
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
        ),
        textTheme: ThemeData.light().textTheme.copyWith(
              title: TextStyle(
                fontFamily: 'OpenSans',
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
              body2: TextStyle(
                fontFamily: 'Quicksand',
                fontWeight: FontWeight.w300,
                color: Colors.grey[600],
              ),
            ),
      ),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final String _title = 'Personal Expenses';
  final List<Transaction> _userTransactions = <Transaction>[];
  List<Transaction> get _recentTransactions {
    return this._userTransactions.where((transaction) {
      return transaction.date
          .isAfter(DateTime.now().subtract(Duration(days: 7)));
    }).toList();
  }

  void _handleNewTransaction(String title, double amount) {
    final Transaction newTransaction =
        Transaction.titleAmount(title: title, amount: amount);
    setState(() {
      _userTransactions.add(newTransaction);
    });
  }

  void _handleDeleteTransaction(Transaction transaction) {
    setState(() {
      this._userTransactions.remove(transaction);
    });
  }

  void _startCreateTransactionProcess(BuildContext context) {
    showModalBottomSheet(
      context: context,
      builder: (_) {
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          child: CreateTransaction(_handleNewTransaction),
          onTap: () {},
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final MediaQueryData mediaQuery = MediaQuery.of(context);
    final AppBar appBar = AppBar(
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.add, color: Colors.white),
          onPressed: () => _startCreateTransactionProcess(context),
        ),
      ],
      title: Text(_title),
    );
    return Scaffold(
      appBar: appBar,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              Container(
                child: Chart(this._recentTransactions),
                height: mediaQuery.size.height * 0.30 -
                    appBar.preferredSize.height -
                    mediaQuery.padding.top,
              ),
              Container(
                child: ListTransactions(
                    this._userTransactions, this._handleDeleteTransaction),
                height: mediaQuery.size.height * 0.70 -
                    appBar.preferredSize.height -
                    mediaQuery.padding.top,
              ),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => _startCreateTransactionProcess(context),
      ),
    );
  }
}
