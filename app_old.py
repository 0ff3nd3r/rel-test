from flask import Flask, render_template
from data import Questions

import logging
from logging.handlers import RotatingFileHandler

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('home.html')

@app.route('/test/<int:questNum>/')  
def create_test(questNum):
  return Questions('test.html', number=questNum)
  
if __name__ == '__main__':
  # initialize the log handler

  app.run(debug=True)
