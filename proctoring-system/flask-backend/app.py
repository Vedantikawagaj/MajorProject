from flask import Flask, request, render_template, flash, redirect, url_for,session, logging, send_file, jsonify, Response, render_template_string
from flask_session import Session
from flask_cors import CORS, cross_origin
import camera

app = Flask(__name__)

sess = Session()
sess.init_app(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key= 'sem6project'
YOUR_DOMAIN = 'http://localhost:5000'
@app.before_request
def make_session_permanent():
	session.permanent = True

@app.route('/video_feed', methods=['GET','POST'])
def video_feed():
	if request.method == "POST":
		imgData = request.form['data[imgData]']
		testid = request.form['data[testid]']
		voice_db = request.form['data[voice_db]']
		proctorData = camera.get_frame(imgData)
		jpg_as_text = proctorData['jpg_as_text']
		mob_status =proctorData['mob_status']
		person_status = proctorData['person_status']
		user_move1 = proctorData['user_move1']
		user_move2 = proctorData['user_move2']
		eye_movements = proctorData['eye_movements']
		print(testid)
		print(voice_db)
		# cur = mysql.connection.cursor()
		# results = cur.execute('INSERT INTO proctoring_log (email, name, test_id, voice_db, img_log, user_movements_updown, user_movements_lr, user_movements_eyes, phone_detection, person_status, uid) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',
		# 	(dict(session)['email'], dict(session)['name'], testid, voice_db, jpg_as_text, user_move1, user_move2, eye_movements, mob_status, person_status,dict(session)['uid']))
		# mysql.connection.commit()
		# cur.close()
		# if(results > 0):
		# 	return "recorded image of video"
		# else:
		# 	return "error in video" 
@app.route('/verify-image', methods=['GET','POST'])
def verifyImage():
	if request.method == 'POST':
		imgdata1 = request.get_json();
		print(imgdata1);
		return imgdata1;
	# 	form['image_hidden']
	# 	cur = mysql.connection.cursor()
	# 	results1 = cur.execute('SELECT uid, name, email, password, user_type, user_image from users where email = %s and user_type = %s and user_login = 0' , (email,user_type))
	# 	if results1 > 0:
	# 		cresults = cur.fetchone()
	# 		imgdata2 = cresults['user_image']
	# 		password = cresults['password']
	# 		name = cresults['name']
	# 		uid = cresults['uid']
	# 		nparr1 = np.frombuffer(base64.b64decode(imgdata1), np.uint8)
	# 		nparr2 = np.frombuffer(base64.b64decode(imgdata2), np.uint8)
	# 		image1 = cv2.imdecode(nparr1, cv2.COLOR_BGR2GRAY)
	# 		image2 = cv2.imdecode(nparr2, cv2.COLOR_BGR2GRAY)
	# 		img_result  = DeepFace.verify(image1, image2, enforce_detection = False)
	# 		if img_result["verified"] == True and password == password_candidate:
	# 			results2 = cur.execute('UPDATE users set user_login = 1 where email = %s' , [email])
	# 			mysql.connection.commit()
	# 			if results2 > 0:
	# 				session['logged_in'] = True
	# 				session['email'] = email
	# 				session['name'] = name
	# 				session['user_role'] = user_type
	# 				session['uid'] = uid
	# 				if user_type == "student":
	# 					return redirect(url_for('student_index'))
	# 				else:
	# 					return redirect(url_for('professor_index'))
	# 			else:
	# 				error = 'Error Occurred!'
	# 				return render_template('login.html', error=error)	
	# 		else:
	# 			error = 'Either Image not Verified or you have entered Invalid password or Already login'
	# 			return render_template('login.html', error=error)
	# 		cur.close()
	# 	else:
	# 		error = 'Already Login or Email was not found!'
	# 		return render_template('login.html', error=error)
	# return render_template('login.html')          

if __name__ == "__main__":
	app.run(host = "0.0.0.0",debug=False)        