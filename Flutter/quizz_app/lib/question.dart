import 'package:flutter/material.dart';

class Question extends StatelessWidget {
  final String _question;

  Question(this._question);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text(
          this._question,
          style: TextStyle(
            fontSize: 20,
          ),
          textAlign: TextAlign.justify,
        ),
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(10)),
        boxShadow: [
          BoxShadow(
            color: Colors.grey,
            blurRadius: 5.0,
            spreadRadius: 1.0,
            offset: Offset(
              0.0,
              2.0,
            ),
          )
        ],
        color: Colors.blueGrey[100],
      ),
      height: 250,
      margin: EdgeInsets.all(20),
      padding: EdgeInsets.all(20),
      width: double.infinity,
    );
  }
}
