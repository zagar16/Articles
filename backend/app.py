from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/articlesflask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app) 


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self,title, body):
        self.title = title
        self.body = body

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id','title','body','date')

article_shema = ArticleSchema()
articles_shema = ArticleSchema(many=True)



@app.route('/get', methods= ['GET'])
def get_articles():
    #return jsonify({"Hello":"World"})
    all_articles = Articles.query.all()
    results = articles_shema.dump(all_articles)
    return jsonify(results)


@app.route('/get/<id>/', methods= ['GET'])
def post_details(id):
    article = Articles.query.get(id)
    return article_shema.jsonify(article)
     



@app.route('/add', methods= ['POST'])
def add_article():
    title = request.json['title']
    body = request.json['body']

    articles = Articles(title, body)
    db.session.add(articles)
    db.session.commit()

    return article_shema.jsonify(articles)


@app.route('/update/<id>/', methods= ['PUT'])
def update_article(id):
    article = Articles.query.get(id)

    title= request.json['title']
    body= request.json['body']

    article.title = title
    article.body = body

    db.session.commit()
    return article_shema.jsonify(article)


@app.route('/delete/<id>/', methods= ['DELETE'])
def article_delete(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()
    
    return article_shema.jsonify(article)




# Add the following block to create tables within the Flask application context
with app.app_context():
    # Create the database tables
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)