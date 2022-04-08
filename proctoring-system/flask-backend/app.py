from flask import Flask, request, render_template, flash, redirect, url_for,session, logging, send_file, jsonify, Response, render_template_string
from flask_session import Session
from flask_cors import CORS, cross_origin
import camera
import numpy as np
from deepface import DeepFace
import base64
import cv2

app = Flask(__name__)

app.config['SESSION_COOKIE_SAMESITE'] = "None"

app.config['SESSION_TYPE'] = 'filesystem'

app.config["TEMPLATES_AUTO_RELOAD"] = True

sess = Session()
sess.init_app(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key= 'sem6project'
YOUR_DOMAIN = 'http://localhost:5000'
@app.before_request
def make_session_permanent():
	session.permanent = True

@app.route('/verify-image', methods=['GET','POST'])
def verifyImage():
	if request.method == 'POST':
		image = request.get_json()
	
		img_result  = DeepFace.verify(image['signinimage'], image['registeredimage'], enforce_detection = False)
		return img_result


if __name__ == "__main__":
	app.run(host = "0.0.0.0",debug=False)        