from colorama import Cursor
from flask import Flask, render_template
import sqlite3
app = Flask(__name__)



def getAllAssets():
    cursor = sqlite3.connect("catalog.db").cursor()
    cursor.row_factory = sqlite3.Row
    results = cursor.execute("Select * from catalog").fetchall()
    result = [dict(row) for row in results]
    return result
@app.route("/admin")
def admin_catalog():
    asset1 = {
        "id":"1",
        "name":"Pluton Cap",
        "description" : "Wonder how i got this",
        "sales" : 100,
        "thumbnail" : "",
        "type":"hat",
        "creator":"pluton"
    }
    print(getAllAssets())
    return render_template("uplaoditem.html", assets=[asset1, asset1, asset1, asset1, asset1])
@app.route("/catalog")
def catalog():
    item = {
        "name" : "Naval Brigade",
        "price" : "900",
        "sales" : "190",
        "favorites" : "9,000",
        "creator" : "LEgo",
        "id" : "1"
    }
    user = {
        "name" : "ProPlayer22",
        "Balance" : 9004,
        "thumb" : ""
    }
    return render_template("Catalog.html", items=[item, item, item, item, item, item], loggedin=user)
if __name__ == "__main__":
    app.run()