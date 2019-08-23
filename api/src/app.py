from flask import Flask, escape, request
import os
PORT = os.getenv("PORT")

app = Flask(__name__)


@app.route('/')
def index():
    return f'App is running on port {PORT}!'

app.run(debug=True, port=PORT)
