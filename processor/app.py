from flask import Flask, request, jsonify, Response

app = Flask(__name__)

@app.route('/process', methods = ['POST'])
def process_document():
    pass

@app.route('/process', methods = ['GET'])
def get_document():
    pass

@app.route('/process', methods = ['PUT'])
def add_document():
    pass

@app.route('/process', methods = ['DELETE'])
def remove_document():
    pass

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
