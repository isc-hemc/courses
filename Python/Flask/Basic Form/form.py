from flask import render_template
from flask import redirect
from flask import request
from flask import url_for
from flask import Flask
import os


app = Flask(__name__)


def valid_login(username, password):
    if(username == password):
        return True
    return False


@app.route("/login", methods=["GET", "POST"])
def login():
    message = None
    flag = True
    if request.method == "POST":
        flag = valid_login(username=request.form["username"],
                           password=request.form["password"])
        if flag:
            return redirect(url_for(endpoint="welcome",
                                    username=request.form["username"]))
        else:
            message = "Incorrect username or password."
    return render_template("login.html", flag=flag, message=message)


@app.route("/user/<username>")
def welcome(username):
    return render_template("user.html", username=username)


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    host = os.getenv("HOST", "0.0.0.0")
    app.debug = True
    app.run(host=host, port=port)
