import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, 
  Menu, X, ChefHat, BookOpen, Calculator, FileText, Settings, BarChart3, AlertCircle, Box
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Estados dos módulos
  const [insumos, setInsumos] = useState([
    { id: 1, nome: 'Leite Moça (Nestlé)', estoque: 18, unidade: 'un', custo: 8.50, min: 5 },
    { id: 2, nome: 'Chocolate Belga 50%', estoque: 3.5, unidade: 'kg', custo: 65.00, min: 2 }
  ]);

  const [fornecedores, setFornecedores] = useState([
    { id: 1, nome: 'Atacadão Itapevi', contato: '(11) 4002-8922', categoria: 'Embalagens' }
  ]);

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Bolo no Pote de Ninho', preco: 15.00, categoria: 'Bolos no Pote' }
  ]);

  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Mariana Silva', telefone: '(11) 98888-7777', cidade: 'Itapevi/SP' }
  ]);

  // Estados dos formulários individuais
  const [novoInsumo, setNovoInsumo] = useState({ nome: '', estoque: '', unidade: 'un', custo: '' });
  const [novoFornecedor, setNovoFornecedor] = useState({ nome: '', contato: '', categoria: '' });
  const [novoProduto, setNovoProduto] = useState({ nome: '', preco: '', categoria: 'Bolos no Pote' });
  const [novoCliente, setNovoCliente] = useState({ nome: '', telefone: '', cidade: 'Itapevi/SP' });

  const adicionarInsumo = (e) => {
    e.preventDefault();
    if (!novoInsumo.nome || !novoInsumo.estoque || !novoInsumo.custo) return;
    setInsumos([...insumos, { id: Date.now(), ...novoInsumo, estoque: Number(novoInsumo.estoque), custo: Number(novoInsumo.custo) }]);
    setNovoInsumo({ nome: '', estoque: '', unidade: 'un', custo: '' });
  };

  const adicionarFornecedor = (e) => {
    e.preventDefault();
    if (!novoFornecedor.nome) return;
    setFornecedores([...fornecedores, { id: Date.now(), ...novoFornecedor }]);
    setNovoFornecedor({ nome: '', contato: '', categoria: '' });
  };

  const adicionarProduto = (e) => {
    e.preventDefault();
    if (!novoProduto.nome || !novoProduto.preco) return;
    setProdutos([...produtos, { id: Date.now(), ...novoProduto, preco: Number(novoProduto.preco) }]);
    setNovoProduto({ nome: '', preco: '', categoria: 'Bolos no Pote' });
  };

  const adicionarCliente = (e) => {
    e.preventDefault();
    if (!novoCliente.nome) return;
    setClientes([...clientes, { id: Date.now(), ...novoCliente }]);
    setNovoCliente({ nome: '', telefone: '', cidade: 'Itapevi/SP' });
  };

  const menuItems = [
    { id: 'dashboard', label: '1. Dashboard', icon: LayoutDashboard },
    { id: 'insumos', label: '2. Insumos', icon: Package },
    { id: 'fornecedores', label: '3. Fornecedores', icon: Truck },
    { id: 'produtos', label: '10. Produtos', icon: Sparkles },
    { id: 'clientes', label: '14. Clientes', icon: Users },
    { id: 'vendas', label: '15. Vendas', icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 flex flex-col font-sans">
      
      {/* Cabeçalho */}
      <header className="bg-[#2D1810] text-[#FDFBF7] shadow-lg sticky top-0 z-30 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 transition-colors flex items-center gap-2"
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs font-semibold tracking-wide hidden sm:inline">MENU</span>
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-md border border-amber-500/30">
                <span className="font-bold text-white text-xs tracking-wider">CA</span>
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-wider uppercase text-amber-100">
                  Akali Confeitaria Artesanal
                </h1>
                <p className="text-[10px] text-amber-300/80">Itapevi • SP • 2026</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('vendas')}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> Nova Venda
          </button>
        </div>
      </header>

      {/* Menu Lateral */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex" onClick={() => setMenuOpen(false)}>
          <div className="w-80 bg-[#FDFBF7] h-full shadow-2xl overflow-y-auto p-4 flex flex-col border-r border-stone-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-stone-200">
              <h2 className="font-bold text-stone-900 text-sm">MÓDULOS DO SISTEMA</h2>
              <button onClick={() => setMenuOpen(false)} className="p-1 rounded-lg hover:bg-stone-200 text-stone-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-1.5 flex-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                      isActive ? 'bg-[#2D1810] text-amber-100 shadow-sm font-bold' : 'text-stone-700 hover:bg-amber-100/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#2D1810] to-[#4A2E1B] text-[#FDFBF7] rounded-2xl p-6 shadow-xl border border-amber-900/20">
              <span className="text-[10px] uppercase tracking-widest bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full font-semibold">
                Painel Ativo
              </span>
              <h2 className="text-xl font-bold mt-3 text-amber-100">Akali Confeitaria Artesanal</h2>
              <p className="text-xs text-amber-200/80 mt-1">Gestão completa de insumos, fornecedores, produtos e clientes.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5">
                <button onClick={() => setActiveTab('insumos')} className="bg-amber-600 hover:bg-amber-700 text-white text-xs py-2.5 px-3 rounded-xl font-semibold shadow">
                  Insumos
                </button>
                <button onClick={() => setActiveTab('fornecedores')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">
                  Fornecedores
                </button>
                <button onClick={() => setActiveTab('produtos')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">
                  Produtos
                </button>
                <button onClick={() => setActiveTab('clientes')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">
                  Clientes
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Insumos</p>
                <p className="text-xl font-bold text-stone-900 mt-1">{insumos.length} Itens</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Fornecedores</p>
                <p className="text-xl font-bold text-stone-900 mt-1">{fornecedores.length} Cadastrados</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Produtos</p>
                <p className="text-xl font-bold text-stone-900 mt-1">{produtos.length} Itens</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Clientes</p>
                <p className="text-xl font-bold text-stone-900 mt-1">{clientes.length} Cadastrados</p>
              </div>
            </div>
          </div>
        )}

        {/* INSUMOS */}
        {activeTab === 'insumos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Adicionar Insumo</h2>
              <form onSubmit={adicionarInsumo} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Nome" value={novoInsumo.nome} onChange={e => setNovoInsumo({...novoInsumo, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Estoque" value={novoInsumo.estoque} onChange={e => setNovoInsumo({...novoInsumo, estoque: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Custo (R$)" value={novoInsumo.custo} onChange={e => setNovoInsumo({...novoInsumo, custo: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Insumo</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 border-b text-stone-500">
                  <tr><th className="px-6 py-3">Insumo</th><th className="px-6 py-3">Estoque</th><th className="px-6 py-3">Custo</th></tr>
                </thead>
                <tbody className="divide-y">
                  {insumos.map(i => (
                    <tr key={i.id}><td className="px-6 py-3 font-medium">{i.nome}</td><td className="px-6 py-3">{i.estoque} {i.unidade}</td><td className="px-6 py-3">R$ {i.custo.toFixed(2)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FORNECEDORES */}
        {activeTab === 'fornecedores' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Cadastrar Fornecedor</h2>
              <form onSubmit={adicionarFornecedor} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Nome do Fornecedor" value={novoFornecedor.nome} onChange={e => setNovoFornecedor({...novoFornecedor, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Contato / Telefone" value={novoFornecedor.contato} onChange={e => setNovoFornecedor({...novoFornecedor, contato: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Categoria" value={novoFornecedor.categoria} onChange={e => setNovoFornecedor({...novoFornecedor, categoria: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Fornecedor</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 border-b text-stone-500">
                  <tr><th className="px-6 py-3">Fornecedor</th><th className="px-6 py-3">Contato</th><th className="px-6 py-3">Categoria</th></tr>
                </thead>
                <tbody className="divide-y">
                  {fornecedores.map(f => (
                    <tr key={f.id}><td className="px-6 py-3 font-medium">{f.nome}</td><td className="px-6 py-3">{f.contato}</td><td className="px-6 py-3">{f.categoria}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PRODUTOS */}
        {activeTab === 'produtos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Cadastrar Produto</h2>
              <form onSubmit={adicionarProduto} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Nome do Produto" value={novoProduto.nome} onChange={e => setNovoProduto({...novoProduto, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Preço (R$)" value={novoProduto.preco} onChange={e => setNovoProduto({...novoProduto, preco: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Produto</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 border-b text-stone-500">
                  <tr><th className="px-6 py-3">Produto</th><th className="px-6 py-3">Categoria</th><th className="px-6 py-3">Preço</th></tr>
                </thead>
                <tbody className="divide-y">
                  {produtos.map(p => (
                    <tr key={p.id}><td className="px-6 py-3 font-medium">{p.nome}</td><td className="px-6 py-3">{p.categoria}</td><td className="px-6 py-3 font-semibold text-amber-800">R$ {p.preco.toFixed(2)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CLIENTES */}
        {activeTab === 'clientes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Cadastrar Cliente</h2>
              <form onSubmit={adicionarCliente} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Nome do Cliente" value={novoCliente.nome} onChange={e => setNovoCliente({...novoCliente, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Telefone / WhatsApp" value={novoCliente.telefone} onChange={e => setNovoCliente({...novoCliente, telefone: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Cliente</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 border-b text-stone-500">
                  <tr><th className="px-6 py-3">Cliente</th><th className="px-6 py-3">Telefone</th><th className="px-6 py-3">Cidade</th></tr>
                </thead>
                <tbody className="divide-y">
                  {clientes.map(c => (
                    <tr key={c.id}><td className="px-6 py-3 font-medium">{c.nome}</td><td className="px-6 py-3">{c.telefone}</td><td className="px-6 py-3">{c.cidade}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'vendas' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-stone-900">Registar Nova Venda</h2>
            <p className="text-xs text-stone-500">Módulo de registo de pedidos e faturamento diário.</p>
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500 mt-auto">
        Akali Confeitaria Artesanal • Sistema Completo de Gestão
      </footer>
    </div>
  );
}
