import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, 
  Menu, X, ChefHat, BookOpen, Calculator, FileText, Settings, BarChart3, AlertCircle, Box, Trash2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Estados completos e profissionais
  const [insumos] = useState([
    { id: 1, nome: 'Leite Moça (Nestlé)', unidade: 'un', custo: 8.50 },
    { id: 2, nome: 'Chocolate Belga 50%', unidade: 'kg', custo: 65.00 },
    { id: 3, nome: 'Maracujá Fresco in Natura', unidade: 'g', custo: 0.02 }
  ]);

  const [receitas, setReceitas] = useState([
    { id: 1, nome: 'Bolo de Cenoura com Ganache', categoria: 'Bolos', rendimento: 20, unidadeRendimento: 'fatias', tempoPreparo: 60, modoPreparo: 'Bater cenoura, ovos e óleo, misturar com secos e assar.' }
  ]);

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Bolo no Pote de Ninho com Morango', preco: 15.00, categoria: 'Bolos no Pote' }
  ]);

  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Mariana Silva', telefone: '(11) 98888-7777', cidade: 'Itapevi/SP' }
  ]);

  const [vendas, setVendas] = useState([
    { id: 1, cliente: 'Mariana Silva', item: 'Bolo no Pote de Ninho', total: 15.00, data: 'Hoje' }
  ]);

  // Estados do formulário avançado de Receitas (Ficha Técnica)
  const [novaReceita, setNovaReceita] = useState({
    nome: '',
    categoria: 'Bolos',
    rendimento: '20',
    unidadeRendimento: 'unidades',
    tempoPreparo: '60',
    modoPreparo: '',
    componenteTipo: 'Insumo Básico',
    componenteItem: 'Maracujá Fresco in Natura',
    componenteQtd: '100'
  });

  const [novoProduto, setNovoProduto] = useState({ nome: '', preco: '', categoria: 'Bolos no Pote' });
  const [novoCliente, setNovoCliente] = useState({ nome: '', telefone: '', cidade: 'Itapevi/SP' });
  const [novaVenda, setNovaVenda] = useState({ cliente: '', item: '', total: '' });

  const adicionarReceita = (e) => {
    e.preventDefault();
    if (!novaReceita.nome) return;
    setReceitas([...receitas, { 
      id: Date.now(), 
      nome: novaReceita.nome, 
      categoria: novaReceita.categoria, 
      rendimento: Number(novaReceita.rendimento), 
      unidadeRendimento: novaReceita.unidadeRendimento,
      tempoPreparo: Number(novaReceita.tempoPreparo),
      modoPreparo: novaReceita.modoPreparo
    }]);
    setNovaReceita({ nome: '', categoria: 'Bolos', rendimento: '20', unidadeRendimento: 'unidades', tempoPreparo: '60', modoPreparo: '', componenteTipo: 'Insumo Básico', componenteItem: 'Maracujá Fresco in Natura', componenteQtd: '100' });
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

  const adicionarVenda = (e) => {
    e.preventDefault();
    if (!novaVenda.item || !novaVenda.total) return;
    setVendas([...vendas, { id: Date.now(), ...novaVenda, total: Number(novaVenda.total), data: 'Hoje' }]);
    setNovaVenda({ cliente: '', item: '', total: '' });
  };

  const menuItems = [
    { id: 'dashboard', label: '1. Dashboard', icon: LayoutDashboard },
    { id: 'receitas', label: '9. Receitas & Ficha Técnica', icon: BookOpen },
    { id: 'produtos', label: '10. Produtos', icon: Sparkles },
    { id: 'clientes', label: '14. Clientes', icon: Users },
    { id: 'vendas', label: '15. Vendas', icon: DollarSign },
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

      {/* Menu Lateral */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex" onClick={() => setMenuOpen(false)}>
          <div className="w-80 bg-[#FDFBF7] h-full shadow-2xl overflow-y-auto p-4 flex flex-col border-r border-stone-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-stone-200">
              <h2 className="font-bold text-stone-900 text-sm">MENU PRINCIPAL</h2>
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
                Gestão Profissional Ativa
              </span>
              <h2 className="text-xl font-bold mt-3 text-amber-100">Akali Confeitaria Artesanal</h2>
              <p className="text-xs text-amber-200/80 mt-1">Fichas técnicas inteligentes, cálculo de custos e controlo total da produção.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                <button onClick={() => setActiveTab('receitas')} className="bg-amber-600 hover:bg-amber-700 text-white text-xs py-2.5 px-3 rounded-xl font-semibold shadow">Receitas (Fichas)</button>
                <button onClick={() => setActiveTab('produtos')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">Produtos</button>
                <button onClick={() => setActiveTab('clientes')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">Clientes</button>
                <button onClick={() => setActiveTab('vendas')} className="bg-stone-800 text-amber-100 text-xs py-2.5 px-3 rounded-xl font-semibold border border-amber-900/50">Vendas</button>
              </div>
            </div>
          </div>
        )}

        {/* CADASTRO DE RECEITAS / FICHA TÉCNICA (PADRÃO PROFISSIONAL) */}
        {activeTab === 'receitas' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-5 max-w-3xl mx-auto">
              <div>
                <h2 className="text-lg font-bold text-stone-900">Cadastrar Receita Ficha Técnica</h2>
                <p className="text-xs text-stone-500 mt-0.5">Combine insumos básicos e preparações intermediárias com recálculo automático de custos.</p>
              </div>

              <form onSubmit={adicionarReceita} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Nome da Receita *</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Bolo de Cenoura com Ganache, Macarons de Baunilha" 
                    value={novaReceita.nome} 
                    onChange={e => setNovaReceita({...novaReceita, nome: e.target.value})} 
                    className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-stone-50/50" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Categoria</label>
                    <select 
                      value={novaReceita.categoria} 
                      onChange={e => setNovaReceita({...novaReceita, categoria: e.target.value})}
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-stone-50/50"
                    >
                      <option value="Bolos">Bolos</option>
                      <option value="Bolos no Pote">Bolos no Pote</option>
                      <option value="Brigadeiros">Brigadeiros</option>
                      <option value="Gourmet">Gourmet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Rendimento Padrão (Número) *</label>
                    <input 
                      type="number" 
                      value={novaReceita.rendimento} 
                      onChange={e => setNovaReceita({...novaReceita, rendimento: e.target.value})} 
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-stone-50/50" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Unidade de Rendimento</label>
                    <input 
                      type="text" 
                      value={novaReceita.unidadeRendimento} 
                      onChange={e => setNovaReceita({...novaReceita, unidadeRendimento: e.target.value})} 
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-stone-50/50" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Tempo Médio de Preparo (min)</label>
                    <input 
                      type="number" 
                      value={novaReceita.tempoPreparo} 
                      onChange={e => setNovaReceita({...novaReceita, tempoPreparo: e.target.value})} 
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-stone-50/50" 
                    />
                  </div>
                </div>

                {/* Caixa de Componentes / Insumos */}
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Adicionar Componentes (Insumos & Preparações)</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Tipo de Componente</label>
                      <select 
                        value={novaReceita.componenteTipo}
                        onChange={e => setNovaReceita({...novaReceita, componenteTipo: e.target.value})}
                        className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs bg-white"
                      >
                        <option value="Insumo Básico">Insumo Básico</option>
                        <option value="Preparação">Preparação</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Item</label>
                      <select 
                        value={novaReceita.componenteItem}
                        onChange={e => setNovaReceita({...novaReceita, componenteItem: e.target.value})}
                        className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs bg-white"
                      >
                        {insumos.map(i => (
                          <option key={i.id} value={i.nome}>{i.nome} ({i.unidade}) - R$ {i.custo.toFixed(2)}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Qtd</label>
                      <div className="flex gap-2">
                        <input 
                          type="number" 
                          value={novaReceita.componenteQtd}
                          onChange={e => setNovaReceita({...novaReceita, componenteQtd: e.target.value})}
                          className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs bg-white" 
                        />
                        <button type="button" className="bg-amber-700 hover:bg-amber-800 text-white px-3 py-2 rounded-xl text-sm font-bold shadow">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Modo de Preparo / Instruções</label>
                  <textarea 
                    rows="3"
                    placeholder="Descreva o passo a passo da receita..."
                    value={novaReceita.modoPreparo}
                    onChange={e => setNovaReceita({...novaReceita, modoPreparo: e.target.value})}
                    className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-stone-50/50"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button type="button" onClick={() => setActiveTab('dashboard')} className="px-4 py-2.5 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-100">Cancelar</button>
                  <button type="submit" className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold shadow transition-all">Salvar Receita</button>
                </div>
              </form>
            </div>

            {/* Listagem de Receitas */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm max-w-3xl mx-auto">
              <div className="px-6 py-4 bg-stone-50 border-b border-stone-200">
                <h3 className="font-bold text-stone-900 text-sm">Receitas Registadas</h3>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50/50 border-b text-stone-500 text-xs">
                  <tr><th className="px-6 py-3">Receita</th><th className="px-6 py-3">Categoria</th><th className="px-6 py-3">Rendimento</th><th className="px-6 py-3">Preparo</th></tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {receitas.map(r => (
                    <tr key={r.id} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-medium text-stone-900">{r.nome}</td>
                      <td className="px-6 py-4 text-stone-600">{r.categoria}</td>
                      <td className="px-6 py-4 text-stone-600">{r.rendimento} {r.unidadeRendimento}</td>
                      <td className="px-6 py-4 text-stone-600">{r.tempoPreparo} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PRODUTOS */}
        {activeTab === 'produtos' && (
          <div className="space-y-6 max-w-3xl mx-auto">
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

        {/* CLIENTES */}
        {activeTab === 'clientes' && (
          <div className="space-y-6 max-w-3xl mx-auto">
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
          <div className="space-y-6 max-w-3xl mx-auto">
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

      </main>

      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500 mt-auto">
        Akali Confeitaria Artesanal • Ficha Técnica & Gestão Profissional
      </footer>
    </div>
  );
}
