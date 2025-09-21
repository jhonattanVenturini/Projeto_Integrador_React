from flask import Blueprint, jsonify, request, session
from src.models.cart import CartItem, db
from src.models.product import Product

cart_bp = Blueprint('cart', __name__)

def require_auth():
    if 'user_id' not in session:
        return jsonify({'error': 'Usuário não autenticado'}), 401
    return None

@cart_bp.route('/cart', methods=['GET'])
def get_cart():
    auth_error = require_auth()
    if auth_error:
        return auth_error
    
    user_id = session['user_id']
    cart_items = CartItem.query.filter_by(user_id=user_id).all()
    
    total = 0
    items = []
    for item in cart_items:
        item_dict = item.to_dict()
        if item.product:
            total += item.product.price * item.quantity
        items.append(item_dict)
    
    return jsonify({
        'items': items,
        'total': total,
        'count': len(items)
    })

@cart_bp.route('/cart/add', methods=['POST'])
def add_to_cart():
    auth_error = require_auth()
    if auth_error:
        return auth_error
    
    try:
        data = request.json
        user_id = session['user_id']
        product_id = data['product_id']
        quantity = data.get('quantity', 1)
        
        # Verificar se o produto existe
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Produto não encontrado'}), 404
        
        # Verificar se o item já está no carrinho
        existing_item = CartItem.query.filter_by(
            user_id=user_id, 
            product_id=product_id
        ).first()
        
        if existing_item:
            existing_item.quantity += quantity
        else:
            cart_item = CartItem(
                user_id=user_id,
                product_id=product_id,
                quantity=quantity
            )
            db.session.add(cart_item)
        
        db.session.commit()
        
        return jsonify({'message': 'Produto adicionado ao carrinho'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@cart_bp.route('/cart/remove/<int:item_id>', methods=['DELETE'])
def remove_from_cart(item_id):
    auth_error = require_auth()
    if auth_error:
        return auth_error
    
    try:
        user_id = session['user_id']
        cart_item = CartItem.query.filter_by(id=item_id, user_id=user_id).first()
        
        if not cart_item:
            return jsonify({'error': 'Item não encontrado no carrinho'}), 404
        
        db.session.delete(cart_item)
        db.session.commit()
        
        return jsonify({'message': 'Item removido do carrinho'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@cart_bp.route('/cart/clear', methods=['DELETE'])
def clear_cart():
    auth_error = require_auth()
    if auth_error:
        return auth_error
    
    try:
        user_id = session['user_id']
        CartItem.query.filter_by(user_id=user_id).delete()
        db.session.commit()
        
        return jsonify({'message': 'Carrinho limpo'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

