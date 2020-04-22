FROM python:3.8

COPY src /src

WORKDIR /src

RUN pip install pipenv
RUN pipenv install

CMD [ "pipenv", "run", "uwsgi", "run.ini" ]