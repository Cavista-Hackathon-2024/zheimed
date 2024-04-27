from flask import Flask, request, jsonify
import model

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    prediction = model.predict(data)
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)
