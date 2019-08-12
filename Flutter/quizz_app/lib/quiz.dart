import 'package:flutter/material.dart';

import './answer.dart';
import './constants.dart';
import './question.dart';

class Quiz extends StatelessWidget {
  final List<Color> _buttonColors = [
    Colors.blue,
    Colors.orange,
    Colors.purple,
    Colors.red
  ];
  final int _questionIndex;
  final Function _answerQuestionHandler;

  Quiz(this._questionIndex, this._answerQuestionHandler);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Question(questionsList[this._questionIndex]['question']),
        ...(questionsList[this._questionIndex]['answers']
                as List<Map<String, Object>>)
            .map((_answer) {
          List<Map<String, Object>> aux =
              questionsList[this._questionIndex]['answers'];
          return Answer(_answer, () => _answerQuestionHandler(_answer['score']),
              _buttonColors[aux.indexOf(_answer)]);
        }).toList(),
      ],
    );
  }
}
