from flask import Flask, render_template
app = Flask(__name__)

@app.route("catalog"):
def catalog():
    return render_template("Catalog.html")

if __name__ == "__main__":
    app.run()