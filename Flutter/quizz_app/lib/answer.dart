import 'package:flutter/material.dart';

class Answer extends StatelessWidget {
  final Color _backgroundColor;
  final Function _answerHandler;
  final Map<String, Object> _answer;

  Answer(this._answer, this._answerHandler, this._backgroundColor);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: RaisedButton(
        child: Text(this._answer['answer'], style: TextStyle(fontSize: 16)),
        onPressed: this._answerHandler,
        textColor: Colors.blueGrey[50],
        color: this._backgroundColor,
      ),
      height: 75,
      margin: EdgeInsets.only(left: 20, right: 20, bottom: 20),
      width: double.infinity,
    );
  }
}
