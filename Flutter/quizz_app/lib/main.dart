import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
          appBar: AppBar(title: Text("Quizz-App"),),
          body: Column(children: <Widget>[
            Text("Quizz!"),
            RaisedButton(child: Text("Answer 1"), onPressed: null,),
            RaisedButton(child: Text("Answer 2"), onPressed: null,),
            RaisedButton(child: Text("Answer 3"), onPressed: null,),
            RaisedButton(child: Text("Answer 4"), onPressed: null,),
          ],),
      ),
    );
  }
}