"""Celery module.

Attributes
----------
app : Celery
    Instance used as the entry-point for Celery tasks.

"""


from celery import Celery

app = Celery("tasks")

app.config_from_object("tasks.celeryconfig")


@app.task
def reverse(string: str) -> str:
    return string[::-1]
