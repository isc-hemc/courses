"""Flask server.

Simple flask application with a single endpoint.

Attributes
----------
app : Flask
    Flask instance to run our service.

"""

from flask import Flask, jsonify, render_template, request

from models import UserSchema
from models import User
from models import db


app = Flask(__name__)
app.config.from_object("config")
db.init_app(app)


user_schema = UserSchema()


@app.route("/register", methods=["GET", "POST"])
def register():
    """Index endpoint.

    Returns
    -------
    HttpResponse

    """
    if request.method == "POST":
        response = dict(request.form)
        user = User(response)
        db.session.add(user)
        db.session.commit()
        data = user_schema.dump(user)
    rows = User.query.all()
    return render_template("register.html", rows=rows)
