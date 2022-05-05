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
		# proctorData = camera.get_frame(image['signinimage'])
		# print(proctorData)
		# hello = "hello"
		img_result  = DeepFace.verify(image['signinimage'], image['registeredimage'], enforce_detection = False)
		return img_result

@app.route('/video_feed', methods=['GET','POST'])
def video_feed():
	if request.method == "POST":
	
		image = request.get_json()
		# print(image)
		proctorData = camera.get_frame(image['ssimage'])
		# jpg_as_text = proctorData['jpg_as_text']
		mob_status =proctorData['mob_status']
		person_status = proctorData['person_status']
		user_move1 = proctorData['user_move1']
		user_move2 = proctorData['user_move2']
		eye_movements = proctorData['eye_movements']
		print(mob_status,person_status,user_move1,user_move2,eye_movements)
		log={
			"mob" : mob_status,
			"person":person_status,
			"head_move_1":user_move1,
			"head_move_2":user_move2,
			"eye":eye_movements
		}
		return log

if __name__ == "__main__":
	app.run(host = "0.0.0.0",debug=False)        