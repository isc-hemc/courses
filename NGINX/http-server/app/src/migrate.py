"""migrate.py

"""

from flask_script import Manager
from flask_migrate import Migrate
from flask_migrate import MigrateCommand
from models import db
from app import app


migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('appdb', MigrateCommand)


if __name__ == '__main__':
    manager.run()
