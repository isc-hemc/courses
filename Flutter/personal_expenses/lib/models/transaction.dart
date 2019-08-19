import 'package:flutter/foundation.dart';
import 'package:uuid/uuid_util.dart';
import 'package:uuid/uuid.dart';

class Transaction {
  final Uuid _uuid = new Uuid();
  String id;
  String title;
  DateTime date;
  double amount;

  Transaction({
    @required this.id,
    @required this.title,
    @required this.date,
    @required this.amount
  });

  Transaction.titleAmount({String title, double amount}) {
    this.id = this._uuid.v4(options: {'rng': UuidUtil.cryptoRNG});
    this.date = DateTime.now();
    this.title = title;
    this.amount = amount;
  }
}