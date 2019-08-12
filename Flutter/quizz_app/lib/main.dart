import 'package:flutter/material.dart';

import './constants.dart';
import './quiz.dart';
import './score.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  double _score = 0;
  int _questionIndex = 0;

  void _resetHandler() {
    setState(() {
      _questionIndex = 0;
      _score = 0;
    });
  }

  void _answerQuestionHandler(int score) {
    if (this._questionIndex <= questionsList.length - 1) {
      setState(() {
        this._questionIndex += 1;
        this._score += score;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: this._questionIndex <= questionsList.length - 1
            ? Quiz(this._questionIndex, this._answerQuestionHandler)
            : Score(this._score, this._resetHandler),
      ),
    );
  }
}
