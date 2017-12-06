import json
import os
import random
from flask import render_template

NUMBER = 305

basepath = os.path.abspath(".")

def Questions(template, number=NUMBER):
  # Load questions
  questions = json.load(open(basepath + '/rel-test/static/data.json'))

  # Generate random sequence
  sequence = random.sample(range(1, NUMBER + 1), number)
  
  # Create a list of questions
  new_questions = []
  
  for x in sequence:
    new_questions.append(questions[x - 1])
    
  return render_template(template, questions=new_questions)
