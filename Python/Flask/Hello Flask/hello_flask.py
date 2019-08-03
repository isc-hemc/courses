from flask import render_template
from flask import Flask
import os


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hello")
@app.route("/hello/<name>")
def hello_flask(name=None):
    return render_template("hello.html", name=name)


if __name__ == "__main__":
    host = os.getenv("IP", "0.0.0.0")
    port = int(os.getenv("PORT", 5000))
    app.debug = True
    app.run(host=host, port=port)
