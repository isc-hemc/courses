import 'package:flutter/material.dart';

import './widgets/home/home.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.add, color: Colors.white),
              onPressed: () {},
            ),
          ],
          backgroundColor: Colors.purple,
          title: Text('Personal Expenses'),
        ),
        body: Home()
      ),
    );
  }
}
