import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog.jsx';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const endpoint = isRegister ? '/api/register' : '/api/login';
    const body = isRegister ? { username, email, password } : { username, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data.user);
      } else {
        setError(data.error || 'Ocorreu um erro.');
      }
    } catch (err) {
      setError('Não foi possível conectar ao servidor.');
      console.error('Erro de rede:', err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-chocolate-dark text-center">
            {isRegister ? 'Criar Conta' : 'Entrar na Conta'}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {isRegister ? 'Preencha seus dados para criar uma nova conta.' : 'Entre com seu nome de usuário e senha.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Nome de Usuário</Label>
            <Input
              id="username"
              type="text"
              placeholder="Seu nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-input focus:ring-chocolate-dark focus:border-chocolate-dark"
            />
          </div>
          {isRegister && (
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-input focus:ring-chocolate-dark focus:border-chocolate-dark"
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-input focus:ring-chocolate-dark focus:border-chocolate-dark"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit" className="w-full bg-chocolate-dark hover:bg-chocolate-dark/90 text-white">
            {isRegister ? 'Registrar' : 'Entrar'}
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {isRegister ? (
            <>Já tem uma conta?{' '}
              <Button variant="link" onClick={() => setIsRegister(false)} className="p-0 h-auto text-chocolate-dark hover:text-chocolate-dark/80">
                Faça login
              </Button>
            </>
          ) : (
            <>Não tem uma conta?{' '}
              <Button variant="link" onClick={() => setIsRegister(true)} className="p-0 h-auto text-chocolate-dark hover:text-chocolate-dark/80">
                Cadastre-se
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;

