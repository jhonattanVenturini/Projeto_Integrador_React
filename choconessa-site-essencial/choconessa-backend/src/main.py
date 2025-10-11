import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.models.product import Product
from src.models.cart import CartItem
from src.routes.user import user_bp
from src.routes.product import product_bp
from src.routes.cart import cart_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Habilitar CORS para comunicação com frontend
CORS(app, supports_credentials=True)

# Registrar blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(product_bp, url_prefix='/api')
app.register_blueprint(cart_bp, url_prefix='/api')

# Configuração do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Criar tabelas e dados iniciais
with app.app_context():
    db.create_all()
    
    # Adicionar produtos de exemplo se não existirem
    if Product.query.count() == 0:
        # Bolos
        bolos = [
            Product(name="Bolo de Chocolate", description="Delicioso bolo de chocolate com cobertura", price=45.00, category="bolos"),
            Product(name="Bolo de Morango", description="Bolo com recheio de morango e chantilly", price=50.00, category="bolos"),
            Product(name="Bolo de Cenoura", description="Tradicional bolo de cenoura com cobertura de chocolate", price=40.00, category="bolos"),
        ]
        
        # Trufas
        trufas = [
            Product(name="Trufa de Chocolate Belga", description="Trufa artesanal com chocolate belga", price=8.00, category="trufas"),
            Product(name="Trufa de Morango", description="Trufa com recheio de morango", price=8.50, category="trufas"),
            Product(name="Trufa de Café", description="Trufa com sabor intenso de café", price=9.00, category="trufas"),
        ]
        
        for produto in bolos + trufas:
            db.session.add(produto)
        
        db.session.commit()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
