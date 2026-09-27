import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, 
  Menu, X, ChefHat, BookOpen, Calculator, FileText, Settings, BarChart3, AlertCircle, Box
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Estados completos de todos os módulos da Akali Confeitaria
  const [insumos, setInsumos] = useState([
    { id: 1, nome: 'Leite Moça (Nestlé)', estoque: 18, unidade: 'un', custo: 8.50, min: 5 },
    { id: 2, nome: 'Chocolate Belga 50%', estoque: 3.5, unidade: 'kg', custo: 65.00, min: 2 }
  ]);

  const [fornecedores, setFornecedores] = useState([
    { id: 1, nome: 'Atacadão Itapevi', contato: '(11) 4002-8922', categoria: 'Embalagens e Leite' }
  ]);

  const [compras, setCompras] = useState([
    { id: 1, item: 'Leite Moça (Cx c/ 24)', fornecedor: 'Atacadão Itapevi', valor: 204.00, data: 'Hoje' }
  ]);

  const [lotes, setLotes] = useState([
    { id: 1, produto: 'Brigadeiro Gourmet', lote: 'LOT-001', validade: '2026-10-15', qtd: 50 }
  ]);

  const [receitas, setReceitas] = useState([
    { id: 1, nome: 'Massa de Brigadeiro Gourmet', rendimento: '50 unidades', custoEstimado: 25.00 }
  ]);

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Bolo no Pote de Ninho', preco: 15.00, categoria: 'Bolos no Pote' }
  ]);

  const [producao, setProducao] = useState([
    { id: 1, item: 'Bolo no Pote de Ninho', qtd: 20, status: 'Em Produção' }
  ]);

  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Mariana Silva', telefone: '(11) 98888-7777', cidade: 'Itapevi/SP' }
  ]);

  const [vendas, setVendas] = useState([
    { id: 1, cliente: 'Mariana Silva', item: 'Bolo no Pote de Ninho', total: 15.00, data: 'Hoje' }
  ]);

  const [despesas, setDespesas] = useState([
    { id: 1, descricao: 'Gás de Cozinha', valor: 110.00, categoria: 'Fixas' }
  ]);

  // Estados de Inputs para Cadastro
  const [novoInsumo, setNovoInsumo] = useState({ nome: '', estoque: '', unidade: 'un', custo: '' });
  const [novoFornecedor, setNovoFornecedor] = useState({ nome: '', contato: '', categoria: '' });
  const [novaCompra, setNovaCompra] = useState({ item: '', fornecedor: '', valor: '' });
  const [novoLote, setNovoLote] = useState({ produto: '', lote: '', validade: '', qtd: '' });
  const [novaReceita, setNovaReceita] = useState({ nome: '', rendimento: '', custoEstimado: '' });
  const [novoProduto, setNovoProduto] = useState({ nome: '', preco: '', categoria: 'Bolos no Pote' });
  const [novaProducao, setNovaProducao] = useState({ item: '', qtd: '' });
  const [novoCliente, setNovoCliente] = useState({ nome: '', telefone: '', cidade: 'Itapevi/SP' });
  const [novaVenda, setNovaVenda] = useState({ cliente: '', item: '', total: '' });
  const [novaDespesa, setNovaDespesa] = useState({ descricao: '', valor: '', categoria: 'Fixas' });

  // Funções de Adição
  const adicionarInsumo = (e) => { e.preventDefault(); if (!novoInsumo.nome) return; setInsumos([...insumos, { id: Date.now(), ...novoInsumo, estoque: Number(novoInsumo.estoque), custo: Number(novoInsumo.custo) }]); setNovoInsumo({ nome: '', estoque: '', unidade: 'un', custo: '' }); };
  const adicionarFornecedor = (e) => { e.preventDefault(); if (!novoFornecedor.nome) return; setFornecedores([...fornecedores, { id: Date.now(), ...novoFornecedor }]); setNovoFornecedor({ nome: '', contato: '', categoria: '' }); };
  const adicionarCompra = (e) => { e.preventDefault(); if (!novaCompra.item) return; setCompras([...compras, { id: Date.now(), ...novaCompra, valor: Number(novaCompra.valor), data: 'Hoje' }]); setNovaCompra({ item: '', fornecedor: '', valor: '' }); };
  const adicionarLote = (e) => { e.preventDefault(); if (!novoLote.produto) return; setLotes([...lotes, { id: Date.now(), ...novoLote, qtd: Number(novoLote.qtd) }]); setNovoLote({ produto: '', lote: '', validade: '', qtd: '' }); };
  const adicionarReceita = (e) => { e.preventDefault(); if (!novaReceita.nome) return; setReceitas([...receitas, { id: Date.now(), ...novaReceita, custoEstimado: Number(novaReceita.custoEstimado) }]); setNovaReceita({ nome: '', rendimento: '', custoEstimado: '' }); };
  const adicionarProduto = (e) => { e.preventDefault(); if (!novoProduto.nome) return; setProdutos([...produtos, { id: Date.now(), ...novoProduto, preco: Number(novoProduto.preco) }]); setNovoProduto({ nome: '', preco: '', categoria: 'Bolos no Pote' }); };
  const adicionarProducao = (e) => { e.preventDefault(); if (!novaProducao.item) return; setProducao([...producao, { id: Date.now(), ...novaProducao, qtd: Number(novaProducao.qtd), status: 'Em Produção' }]); setNovaProducao({ item: '', qtd: '' }); };
  const adicionarCliente = (e) => { e.preventDefault(); if (!novoCliente.nome) return; setClientes([...clientes, { id: Date.now(), ...novoCliente }]); setNovoCliente({ nome: '', telefone: '', cidade: 'Itapevi/SP' }); };
  const adicionarVenda = (e) => { e.preventDefault(); if (!novaVenda.item) return; setVendas([...vendas, { id: Date.now(), ...novaVenda, total: Number(novaVenda.total), data: 'Hoje' }]); setNovaVenda({ cliente: '', item: '', total: '' }); };
  const adicionarDespesa = (e) => { e.preventDefault(); if (!novaDespesa.descricao) return; setDespesas([...despesas, { id: Date.now(), ...novaDespesa, valor: Number(novaDespesa.valor) }]); setNovaDespesa({ descricao: '', valor: '', categoria: 'Fixas' }); };

  const menuItems = [
    { id: 'dashboard', label: '1. Dashboard', icon: LayoutDashboard },
    { id: 'insumos', label: '2. Insumos', icon: Package },
    { id: 'fornecedores', label: '3. Fornecedores', icon: Truck },
    { id: 'compras', label: '4. Compras', icon: ShoppingCart },
    { id: 'lotes', label: '5. Lotes (PVPS/FEFO)', icon: Layers },
    { id: 'receitas', label: '9. Receitas', icon: BookOpen },
    { id: 'produtos', label: '10. Produtos', icon: Sparkles },
    { id: 'producao', label: '12. Produção', icon: ChefHat },
    { id: 'clientes', label: '14. Clientes', icon: Users },
    { id: 'vendas', label: '15. Vendas', icon: DollarSign },
    { id: 'custos', label: '17. Custos & Precificação', icon: Calculator },
    { id: 'despesas', label: '19. Despesas', icon: FileText },
    { id: 'relatorios', label: '21. Relatórios', icon: BarChart3 },
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
              <span className="text-xs font-semibold tracking-wide hidden sm:inline">MENU COMPLETO</span>
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

      {/* Menu Lateral com todos os módulos */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex" onClick={() => setMenuOpen(false)}>
          <div className="w-80 bg-[#FDFBF7] h-full shadow-2xl overflow-y-auto p-4 flex flex-col border-r border-stone-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-stone-200">
              <h2 className="font-bold text-stone-900 text-sm">TODOS OS MÓDULOS</h2>
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

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#2D1810] to-[#4A2E1B] text-[#FDFBF7] rounded-2xl p-6 shadow-xl border border-amber-900/20">
              <span className="text-[10px] uppercase tracking-widest bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full font-semibold">
                Painel Geral Ativo
              </span>
              <h2 className="text-xl font-bold mt-3 text-amber-100">Akali Confeitaria Artesanal</h2>
              <p className="text-xs text-amber-200/80 mt-1">Controlo completo de stock, validades PVPS, receitas, produção e vendas.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                <button onClick={() => setActiveTab('insumos')} className="bg-amber-600 hover:bg-amber-700 text-white text-xs py-2.5 px-3 rounded-xl font-semibold shadow">Insumos</button>
                <button onClick={() => setActiveTab('receitas')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">Receitas</button>
                <button onClick={() => setActiveTab('producao')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">Produção</button>
                <button onClick={() => setActiveTab('vendas')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">Vendas</button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm"><p className="text-[11px] font-bold text-stone-400 uppercase">Insumos</p><p className="text-xl font-bold text-stone-900 mt-1">{insumos.length} Itens</p></div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm"><p className="text-[11px] font-bold text-stone-400 uppercase">Receitas</p><p className="text-xl font-bold text-stone-900 mt-1">{receitas.length} Cadastradas</p></div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm"><p className="text-[11px] font-bold text-stone-400 uppercase">Produção</p><p className="text-xl font-bold text-stone-900 mt-1">{producao.length} Lotes</p></div>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm"><p className="text-[11px] font-bold text-stone-400 uppercase">Vendas</p><p className="text-xl font-bold text-stone-900 mt-1">{vendas.length} Pedidos</p></div>
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
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Insumo</th><th className="px-6 py-3">Estoque</th><th className="px-6 py-3">Custo</th></tr></thead>
              <tbody className="divide-y">{insumos.map(i => (<tr key={i.id}><td className="px-6 py-3 font-medium">{i.nome}</td><td className="px-6 py-3">{i.estoque} {i.unidade}</td><td className="px-6 py-3">R$ {i.custo.toFixed(2)}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* FORNECEDORES */}
        {activeTab === 'fornecedores' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Cadastrar Fornecedor</h2>
              <form onSubmit={adicionarFornecedor} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Nome" value={novoFornecedor.nome} onChange={e => setNovoFornecedor({...novoFornecedor, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Contato" value={novoFornecedor.contato} onChange={e => setNovoFornecedor({...novoFornecedor, contato: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Categoria" value={novoFornecedor.categoria} onChange={e => setNovoFornecedor({...novoFornecedor, categoria: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Fornecedor</th><th className="px-6 py-3">Contato</th><th className="px-6 py-3">Categoria</th></tr></thead>
              <tbody className="divide-y">{fornecedores.map(f => (<tr key={f.id}><td className="px-6 py-3 font-medium">{f.nome}</td><td className="px-6 py-3">{f.contato}</td><td className="px-6 py-3">{f.categoria}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* COMPRAS */}
        {activeTab === 'compras' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Registar Compra</h2>
              <form onSubmit={adicionarCompra} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Item" value={novaCompra.item} onChange={e => setNovaCompra({...novaCompra, item: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Fornecedor" value={novaCompra.fornecedor} onChange={e => setNovaCompra({...novaCompra, fornecedor: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Valor (R$)" value={novaCompra.valor} onChange={e => setNovaCompra({...novaCompra, valor: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Item</th><th className="px-6 py-3">Fornecedor</th><th className="px-6 py-3">Valor</th></tr></thead>
              <tbody className="divide-y">{compras.map(co => (<tr key={co.id}><td className="px-6 py-3 font-medium">{co.item}</td><td className="px-6 py-3">{co.fornecedor}</td><td className="px-6 py-3 text-amber-800 font-semibold">R$ {co.valor.toFixed(2)}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* LOTES (PVPS/FEFO) */}
        {activeTab === 'lotes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Gerir Lotes e Validade (PVPS)</h2>
              <form onSubmit={adicionarLote} className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                <input type="text" placeholder="Produto / Insumo" value={novoLote.produto} onChange={e => setNovoLote({...novoLote, produto: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Código do Lote" value={novoLote.lote} onChange={e => setNovoLote({...novoLote, lote: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="date" value={novoLote.validade} onChange={e => setNovoLote({...novoLote, validade: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Qtd" value={novoLote.qtd} onChange={e => setNovoLote({...novoLote, qtd: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Lote</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Produto</th><th className="px-6 py-3">Lote</th><th className="px-6 py-3">Validade</th><th className="px-6 py-3">Qtd</th></tr></thead>
              <tbody className="divide-y">{lotes.map(l => (<tr key={l.id}><td className="px-6 py-3 font-medium">{l.produto}</td><td className="px-6 py-3">{l.lote}</td><td className="px-6 py-3 text-amber-700 font-semibold">{l.validade}</td><td className="px-6 py-3">{l.qtd}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* RECEITAS */}
        {activeTab === 'receitas' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Cadastrar Receita</h2>
              <form onSubmit={adicionarReceita} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Nome da Receita" value={novaReceita.nome} onChange={e => setNovaReceita({...novaReceita, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Rendimento (ex: 20 un)" value={novaReceita.rendimento} onChange={e => setNovaReceita({...novaReceita, rendimento: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Custo Estimado (R$)" value={novaReceita.custoEstimado} onChange={e => setNovaReceita({...novaReceita, custoEstimado: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Receita</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Receita</th><th className="px-6 py-3">Rendimento</th><th className="px-6 py-3">Custo Est.</th></tr></thead>
              <tbody className="divide-y">{receitas.map(r => (<tr key={r.id}><td className="px-6 py-3 font-medium">{r.nome}</td><td className="px-6 py-3">{r.rendimento}</td><td className="px-6 py-3 text-amber-800">R$ {r.custoEstimado.toFixed(2)}</td></tr>))}</tbody></table>
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
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Produto</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Produto</th><th className="px-6 py-3">Categoria</th><th className="px-6 py-3">Preço</th></tr></thead>
              <tbody className="divide-y">{produtos.map(p => (<tr key={p.id}><td className="px-6 py-3 font-medium">{p.nome}</td><td className="px-6 py-3">{p.categoria}</td><td className="px-6 py-3 font-semibold text-amber-800">R$ {p.preco.toFixed(2)}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* PRODUÇÃO */}
        {activeTab === 'producao' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Registar Produção</h2>
              <form onSubmit={adicionarProducao} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Item a Produzir" value={novaProducao.item} onChange={e => setNovaProducao({...novaProducao, item: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Quantidade" value={novaProducao.qtd} onChange={e => setNovaProducao({...novaProducao, qtd: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Registar Lote</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Item</th><th className="px-6 py-3">Quantidade</th><th className="px-6 py-3">Estado</th></tr></thead>
              <tbody className="divide-y">{producao.map(pr => (<tr key={pr.id}><td className="px-6 py-3 font-medium">{pr.item}</td><td className="px-6 py-3">{pr.qtd} un</td><td className="px-6 py-3"><span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-semibold">{pr.status}</span></td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* CLIENTES */}
        {activeTab === 'clientes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Cadastrar Cliente</h2>
              <form onSubmit={adicionarCliente} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Nome" value={novoCliente.nome} onChange={e => setNovoCliente({...novoCliente, nome: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Telefone" value={novoCliente.telefone} onChange={e => setNovoCliente({...novoCliente, telefone: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Cliente</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Cliente</th><th className="px-6 py-3">Telefone</th><th className="px-6 py-3">Cidade</th></tr></thead>
              <tbody className="divide-y">{clientes.map(c => (<tr key={c.id}><td className="px-6 py-3 font-medium">{c.nome}</td><td className="px-6 py-3">{c.telefone}</td><td className="px-6 py-3">{c.cidade}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* VENDAS */}
        {activeTab === 'vendas' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Registar Venda</h2>
              <form onSubmit={adicionarVenda} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Cliente" value={novaVenda.cliente} onChange={e => setNovaVenda({...novaVenda, cliente: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Item" value={novaVenda.item} onChange={e => setNovaVenda({...novaVenda, item: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Total (R$)" value={novaVenda.total} onChange={e => setNovaVenda({...novaVenda, total: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar Venda</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Cliente</th><th className="px-6 py-3">Item</th><th className="px-6 py-3">Total</th></tr></thead>
              <tbody className="divide-y">{vendas.map(v => (<tr key={v.id}><td className="px-6 py-3 font-medium">{v.cliente || 'Balcão'}</td><td className="px-6 py-3">{v.item}</td><td className="px-6 py-3 text-emerald-700 font-semibold">R$ {v.total.toFixed(2)}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* CUSTOS & PRECIFICAÇÃO */}
        {activeTab === 'custos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-stone-900">Módulo de Custos & Precificação</h2>
              <p className="text-xs text-stone-500">Calcule o preço de venda ideal com base nos insumos e margem de lucro desejada.</p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                Margem sugerida padrão: <strong>100% sobre o custo dos insumos</strong>
              </div>
            </div>
          </div>
        )}

        {/* DESPESAS */}
        {activeTab === 'despesas' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4">Registar Despesa</h2>
              <form onSubmit={adicionarDespesa} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input type="text" placeholder="Descrição" value={novaDespesa.descricao} onChange={e => setNovaDespesa({...novaDespesa, descricao: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="number" placeholder="Valor (R$)" value={novaDespesa.valor} onChange={e => setNovaDespesa({...novaDespesa, valor: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <input type="text" placeholder="Categoria (ex: Fixas)" value={novaDespesa.categoria} onChange={e => setNovaDespesa({...novaDespdespesa, categoria: e.target.value})} className="px-3 py-2 border rounded-xl text-sm" />
                <button type="submit" className="bg-amber-700 text-white rounded-xl text-sm font-semibold px-4 py-2">Salvar</button>
              </form>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm"><thead className="bg-stone-50 border-b text-stone-500"><tr><th className="px-6 py-3">Descrição</th><th className="px-6 py-3">Categoria</th><th className="px-6 py-3">Valor</th></tr></thead>
              <tbody className="divide-y">{despesas.map(d => (<tr key={d.id}><td className="px-6 py-3 font-medium">{d.descricao}</td><td className="px-6 py-3">{d.categoria}</td><td className="px-6 py-3 text-rose-700 font-semibold">R$ {d.valor.toFixed(2)}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* RELATÓRIOS */}
        {activeTab === 'relatorios' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-stone-900">Relatórios Financeiros e de Produção</h2>
              <p className="text-xs text-stone-500">Consolidação automática do faturamento mensal, total de vendas e custos de produção.</p>
            </div>
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500 mt-auto">
        Akali Confeitaria Artesanal • Sistema Completo de Gestão
      </footer>
    </div>
  );
}
