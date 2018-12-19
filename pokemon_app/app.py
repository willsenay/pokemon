import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=true, port=5000)