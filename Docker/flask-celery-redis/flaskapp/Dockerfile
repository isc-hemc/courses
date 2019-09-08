FROM python:3.7

COPY . /app

WORKDIR /app


RUN pip install pipenv
RUN pipenv install

CMD ["pipenv", "run", "celery", "-A", "tasks", "worker", "-l", "info", "-P", "solo"]