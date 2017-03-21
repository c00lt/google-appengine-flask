# coding: utf-8
from flask import Flask

app = Flask(__name__, static_url_path='')


# Note: no need to call run() since the application is embedded within
# the App Engine WSGI application server


@app.route('/')
def hello():
    return u"Hello World"
