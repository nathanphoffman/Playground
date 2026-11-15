from flask import Flask, jsonify

app = Flask(__name__)


@app.get("/")
def hello():
    return jsonify(message="Hello, Flask")


if __name__ == "__main__":
    app.run(port=5000)
