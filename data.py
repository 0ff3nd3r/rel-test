import json
import os
import random
from flask import render_template

NUMBER_OF_QUESTIONS = 305

basepath = os.path.abspath(".")

def Questions(template, test=0, number=NUMBER_OF_QUESTIONS):
  # Check what test we are dealing with
  flag = not test

  # Load questions
  questions = json.load(open(basepath + '/rel-test/static/data.json'))

  # Create a list of questions
  new_questions = []

  # Check if it's random
  if flag:
    # Generate random sequence
    sequence = random.sample(range(1, NUMBER_OF_QUESTIONS + 1), number)

    for x in sequence:
      new_questions.append(questions[x - 1])
  else:
    i = 1
    for q in questions:
      # print(q['info'])
      print(q['test'])
      print(i)
      i += 1
      if q['test'] == test:
        new_questions.append(q)

  return render_template(template, questions=new_questions, test=test)
