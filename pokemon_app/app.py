# NONE OF THIS WORKS RIGHT NOW. JUST OPEN LIVE SERVER

import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()