# SETUP ##########################################
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,
    url_for)
import pandas as pd
import json

app = Flask(__name__)

# HOME PAGE ######################################
@app.route("/")
def home():
    return render_template("index.html")

# API #############################################
@app.route("/poke-api")
def pokeapi():

    df = pd.read_csv("gen1.csv")
    df = df[["Name", "Total", "HP", "Attack", "Defense", "Sp_Atk", "Sp_Def", "Speed", "ID", "Type_1", "Type_2"]]
    dfdict = df.to_dict(orient="record")

    return jsonify(dfdict)

# TABLE ############################################
@app.route("/table")
def table():
    return render_template("table.html")

# POKE (DETAILS) - mostly likely will remove ########
@app.route("/poke")
def poke():
    return render_template("poke.html")

# RUN ############################################
if __name__ == "__main__":
    app.run(debug=True)