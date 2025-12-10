const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <span className="text-xl font-serif font-bold text-gradient-gold">
              Fator Essencial
            </span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Suporte
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Fator Essencial. Todos os direitos reservados.
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Não somos afiliados ou vinculados a nenhuma rede social.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
