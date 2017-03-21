#!/bin/sh

virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
linkenv venv/lib/python2.7/site-packages libs
npm install
