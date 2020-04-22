"""user.py

This model references a db table named User.

"""

from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from marshmallow import fields

ma = Marshmallow()
db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    terms = db.Column(db.String(10), nullable=False)

    def __init__(self, data):
        self.set_attributes(data)

    def set_attributes(self, data):
        for key, value in data.items():
            setattr(self, key, value)


class UserSchema(ma.Schema):
    id = fields.Integer()
    email = fields.String(required=True)
    password = fields.String(required=True)
    terms = fields.String(required=True)
