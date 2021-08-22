from flask import Flask, render_template, request,redirect

app = Flask(__name__)

Kitablar = []

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        ad = request.form['ad']
        shair = request.form['shair']
        tarix = request.form['tarix']
        sehife = request.form['sehife']
        metn = request.form['metn']
        kitab = {
            'id': Kitablar.__len__(),
            'ad': ad,
            'shair': shair,
            'tarix': tarix,
            'sehife': sehife,
            'metn': metn
        }
        Kitablar.append(kitab)

    return render_template('create.html')


@app.route('/show')
def show():
    return render_template('show.html', Kitablar=Kitablar)


@app.route('/single/<id>')
def single(id):
    id = int(id)
    kitab = {}

    for k in Kitablar:
        if id == k['id']:
            kitab=k
        return render_template('single.html', kitab=kitab)


@app.route('/admin')
def admin():
    return render_template('admin.html', Kitablar=Kitablar)


@app.route('/delete/<int:id>')
def delete(id):
    for kitab in Kitablar:
        if id == kitab['id']:
            Kitablar.remove(kitab)
    return redirect('/admin')




app.run()