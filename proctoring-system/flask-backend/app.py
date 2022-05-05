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
		imgData = request.form['data[imgData]']
		# testid = request.form['data[testid]']
		# voice_db = request.form['data[voice_db]']
		proctorData = camera.get_frame(imgData)
		jpg_as_text = proctorData['jpg_as_text']
		mob_status =proctorData['mob_status']
		person_status = proctorData['person_status']
		user_move1 = proctorData['user_move1']
		user_move2 = proctorData['user_move2']
		eye_movements = proctorData['eye_movements']
		# cur = mysql.connection.cursor()
		# results = cur.execute('INSERT INTO proctoring_log (email, name, test_id, voice_db, img_log, user_movements_updown, user_movements_lr, user_movements_eyes, phone_detection, person_status, uid) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',
		# 	(dict(session)['email'], dict(session)['name'], testid, voice_db, jpg_as_text, user_move1, user_move2, eye_movements, mob_status, person_status,dict(session)['uid']))
		# mysql.connection.commit()
		# cur.close()
		# if(results > 0):
		# 	return "recorded image of video"
		# else:
		# 	return "error in video"
		return proctorData

if __name__ == "__main__":
	app.run(host = "0.0.0.0",debug=False)        