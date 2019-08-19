import 'package:flutter/material.dart';

import './../transactions/transactions.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: SingleChildScrollView(
        child: Transactions(),
      ),
    );
  }
}