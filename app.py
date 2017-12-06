from flask import Flask, render_template
from data import Questions

app = Flask(__name__)

@app.route('/')
@app.route('/t0/')
def index():
  return render_template('home.html')

@app.route('/t0/<int:questNum>/')
def create_random_test(questNum):
  return Questions('test.html', number=questNum)

@app.route('/t<int:testNum>/')
def create_test(testNum):
  return Questions('test.html', test=testNum)

if __name__ == '__main__':
  # initialize the log handler

  app.run(debug=True)
