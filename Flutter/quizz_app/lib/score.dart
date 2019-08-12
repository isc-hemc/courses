import 'package:flutter/material.dart';

import './constants.dart';

class Score extends StatelessWidget {
  final Function _resetHandler;
  final double _score;

  Score(this._score, this._resetHandler);

  String get result {
    String totalScore = (this._score / questionsList.length).toStringAsFixed(1);
    return "Your score is $totalScore";
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          Container(
            child: Center(
              child: Text(
                this.result,
                style: TextStyle(
                  fontSize: 32,
                ),
              ),
            ),
            height: MediaQuery.of(context).size.height * 0.50,
          ),
          Container(
            child: Center(
              child: Container(
                child: RaisedButton(
                  child: Text(
                    "Try again!",
                    style: TextStyle(
                      fontSize: 22,
                    ),
                  ),
                  color: Colors.red,
                  onPressed: this._resetHandler,
                  textColor: Colors.blueGrey[50],
                ),
                height: 75,
                width: MediaQuery.of(context).size.width * 0.50,
              ),
            ),
            height: MediaQuery.of(context).size.height * 0.25,
          ),
        ],
      ),
      color: Colors.blueGrey[100],
    );
  }
}
