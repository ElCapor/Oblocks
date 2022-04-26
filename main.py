from flask import Flask, render_template
app = Flask(__name__)

@app.route("/catalog")
def catalog():
    return render_template("Catalog.html")

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
    return render_template("uplaoditem.html", assets=[asset1])
if __name__ == "__main__":
    app.run()