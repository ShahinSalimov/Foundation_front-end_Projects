from flask import Flask,render_template,request,redirect,url_for
app=Flask(__name__)

kitablar=[]
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create',methods=['GET','POST'])
def create():
    if request.method=='POST':
        yazar=request.form['muellif']
        name=request.form['ad']
        history=request.form['tarix']
        page=request.form['sehife']
        title=request.form['xulase']
        kitab={
            'muellif':yazar,
            'ad':name,
            'tarix':history,
            'sehife':page,
            'xulase':title,
        }
        kitablar.append(kitab)
    return render_template('create.html')

@app.route('/show')
def show():
    return render_template('show.html',kitablarin_siyahisi=kitablar)

@app.route('/single')
def single():
    return render_template('single.html')



app.run()