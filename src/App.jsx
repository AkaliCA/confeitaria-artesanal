import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, 
  Menu, X, ChefHat, BookOpen, Calculator, FileText, Settings, BarChart3, AlertCircle, Box, Trash2, Edit3, Bell, TrendingUp
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalInsumoOpen, setModalInsumoOpen] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas as Categorias');

  // Estados completos com os dados reais mostrados nas suas imagens
  const [insumos, setInsumos] = useState([
    { id: 1, nome: 'Maracujá Fresco in Natura', categoria: 'Frutas', desc: 'Comprar maduro. 1kg rende aprox. 350g de polpa limpa.', estoque: 1000, unidade: 'g', custo: 0.02, rendimento: '35% aproveitamento', min: 1000, validade: '7 dias' },
    { id: 2, nome: 'Morango Fresco Selecionado', categoria: 'Frutas', desc: 'Para geleia e decoração. Higienizar e tirar cabinhos.', estoque: 2000, unidade: 'g', custo: 0.02, rendimento: '85% aproveitamento', min: 500, validade: '3 dias' }
  ]);

  const [lotes] = useState([
    { id: 1, produto: 'Morango Fresco Selecionado', lote: 'LOT-MOR-001', qtd: '2000 g', status: 'Vence em 1 dia (crítico)' },
    { id: 2, produto: 'Maracujá Fresco in Natura', lote: 'LOT-MAR-001', qtd: '1000 g', status: 'Vence em 3 dias (crítico)' }
  ]);

  const [vendas] = useState([
    { id: 1, codigo: 'VDA-2026-368', cliente: 'Cliente Balcão', itens: '1x Pote de Geleia Artesanal de Maracujá', data: '25/09/2026' },
    { id: 2, codigo: 'VDA-2026-003', cliente: 'Camila Duarte', itens: '2x Pote de Geleia Artesanal de Morango', data: '25/09/2026' },
    { id: 3, codigo: 'VDA-2026-002', cliente: 'Lucas Mendonça', itens: '2x Caixa Degustação 12 Brigadeiros', data: '23/09/2026' },
    { id: 4, codigo: 'VDA-2026-001', cliente: 'Mariana Souza Guimarães', itens: '1x Bolo Artesanal Belga com Morango', data: '20/09/2026' }
  ]);

  // Novo Insumo Form State
  const [novoInsumo, setNovoInsumo] = useState({ nome: '', categoria: 'Frutas', unidade: 'g', custo: '0.02', min: '1000', fator: '1', validade: '7' });

  const adicionarInsumo = (e) => {
    e.preventDefault();
    if (!novoInsumo.nome) return;
    setInsumos([...insumos, {
      id: Date.now(),
      nome: novoInsumo.nome,
      categoria: novoInsumo.categoria,
      desc: 'Insumo cadastrado via painel.',
      estoque: Number(novoInsumo.min),
      unidade: novoInsumo.unidade === 'Gramas (g)' ? 'g' : 'un',
      custo: Number(novoInsumo.custo),
      rendimento: `${Number(novoInsumo.fator) * 100}% aproveitamento`,
      min: Number(novoInsumo.min),
      validade: `${novoInsumo.validade} dias`
    }]);
    setModalInsumoOpen(false);
    setNovoInsumo({ nome: '', categoria: 'Frutas', unidade: 'g', custo: '0.02', min: '1000', fator: '1', validade: '7' });
  };

  const menuCategories = [
    { title: 'VISÃO GERAL', items: [{ id: 'dashboard', label: '1. Dashboard', icon: LayoutDashboard }] },
    { title: 'INSUMOS & SUPRIMENTOS', items: [
      { id: 'insumos', label: '2. Insumos', icon: Package },
      { id: 'fornecedores', label: '3. Fornecedores', icon: Truck },
      { id: 'compras', label: '4. Compras', icon: ShoppingCart },
      { id: 'lotes', label: '5. Lotes (PVPS/FEFO)', icon: Layers }
    ]},
    { title: 'PRODUÇÃO & CONFEITARIA', items: [
      { id: 'receitas', label: '9. Receitas & Ficha Técnica', icon: BookOpen },
      { id: 'produtos', label: '10. Produtos', icon: Sparkles },
      { id: 'producao', label: '12. Produção', icon: ChefHat }
    ]},
    { title: 'VENDAS & CLIENTES', items: [
      { id: 'clientes', label: '14. Clientes', icon: Users },
      { id: 'vendas', label: '15. Vendas', icon: ShoppingCart }
    ]},
    { title: 'GESTÃO FINANCEIRA', items: [
      { id: 'custos', label: '17. Custos', icon: Calculator },
      { id: 'precificacao', label: '18. Precificação', icon: DollarSign },
      { id: 'despesas', label: '19. Despesas', icon: FileText }
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-sans">
      
      {/* Cabeçalho exato da imagem de referência */}
      <header className="bg-[#FDFBF7] border-b border-stone-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-xl hover:bg-stone-100 text-stone-800 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#C25E00] flex items-center justify-center text-white font-bold shadow-sm border border-amber-600/30">
                CA
              </div>
              <div>
                <h1 className="text-xs font-bold tracking-widest uppercase text-stone-900 leading-tight">
                  AKALI
                </h1>
                <h2 className="text-xs font-bold tracking-tight uppercase text-stone-900 leading-tight">
                  CONFEITARIA ARTESANAL
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setActiveTab('vendas')} className="bg-[#C25E00] hover:bg-[#A85100] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all">
              <Plus className="w-3.5 h-3.5" /> Nova Venda
            </button>
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 relative border border-stone-200">
              <Bell className="w-4 h-4 text-stone-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Lateral Deslizante */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs flex" onClick={() => setMenuOpen(false)}>
          <div className="w-80 bg-[#FDFBF7] h-full shadow-2xl overflow-y-auto p-4 flex flex-col border-r border-stone-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-stone-200">
              <div>
                <h2 className="font-bold text-stone-900 text-sm">CONFEITARIA ARTESANAL</h2>
                <p className="text-[10px] text-stone-500">Sistema 100% Completo & Integrado</p>
              </div>
              <button onClick={() => setMenuOpen(false)} className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4 flex-1 pb-6">
              {menuCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] font-bold text-stone-400 tracking-wider px-3 mb-1">{cat.title}</p>
                  {cat.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button key={item.id} onClick={() => { setActiveTab(item.id); setMenuOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${isActive ? 'bg-[#C25E00] text-white shadow-sm font-bold' : 'text-stone-700 hover:bg-stone-100'}`}>
                        <Icon className="w-4 h-4 shrink-0" /><span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-4">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-4">
            {/* Bloco Visão em Tempo Real */}
            <div className="bg-gradient-to-br from-[#2D1810] to-[#4A2E1B] text-[#FDFBF7] rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-semibold border border-amber-500/30">
                Visão em Tempo Real
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-3 text-amber-100">Akali Confeitaria Artesanal</h2>
              <p className="text-xs text-amber-200/80 mt-1">Gestão integrada: do maracujá in natura ao lucro líquido no bolso.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5">
                <button onClick={() => setActiveTab('vendas')} className="bg-[#C25E00] hover:bg-[#A85100] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow transition-all">
                  <Plus className="w-4 h-4" /> Registrar Venda
                </button>
                <button onClick={() => setActiveTab('producao')} className="bg-stone-800/80 hover:bg-stone-800 text-amber-100 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-amber-900/50">
                  <ChefHat className="w-4 h-4 text-amber-400" /> Plano de Produção
                </button>
                <button onClick={() => setActiveTab('perdas')} className="bg-stone-800/80 hover:bg-stone-800 text-amber-100 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-amber-900/50">
                  <TrendingUp className="w-4 h-4 text-amber-400" /> Rendimento & Perdas
                </button>
              </div>
            </div>

            {/* Indicadores Financeiros */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Vendas Hoje</p>
                  <p className="text-2xl font-bold text-stone-900 mt-1">R$ 0,00</p>
                  <p className="text-xs text-stone-500 mt-1">0 vendas realizadas</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Faturamento Total</p>
                  <p className="text-2xl font-bold text-stone-900 mt-1">R$ 471,00</p>
                  <p className="text-xs text-sky-600 font-medium mt-1">Receita bruta total</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-600">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Lucro Líquido Real & Contas a Receber */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#EAF7ED] p-5 rounded-3xl border border-emerald-200 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Lucro Líquido Real</p>
                  <p className="text-2xl font-bold text-emerald-900 mt-1">-R$ 622,69</p>
                  <p className="text-xs text-emerald-700 mt-1">Após CMV, despesas e taxas</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-[#F8F4FC] p-5 rounded-3xl border border-purple-200 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-purple-900 uppercase tracking-wider">Contas a Receber</p>
                  <p className="text-2xl font-bold text-purple-950 mt-1">R$ 0,00</p>
                  <p className="text-xs text-purple-700 mt-1">A pagar: R$ 512,90</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Layers className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Validade dos Lotes & Estoque Baixo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center"><Layers className="w-4 h-4" /></div>
                    <span className="font-bold text-stone-900 text-sm">Validade dos Lotes</span>
                  </div>
                  <button onClick={() => setActiveTab('lotes')} className="text-xs font-bold text-[#C25E00] hover:underline">Ver todos</button>
                </div>
                {lotes.map(l => (
                  <div key={l.id} className="p-3 bg-stone-50 rounded-2xl border border-stone-100 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-stone-900">{l.produto}</p>
                      <p className="text-stone-500 text-[11px]">{l.lote} • {l.qtd}</p>
                    </div>
                    <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full font-semibold text-[10px]">{l.status}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center"><AlertCircle className="w-4 h-4" /></div>
                    <span className="font-bold text-stone-900 text-sm">Estoque Baixo</span>
                  </div>
                  <button onClick={() => setActiveTab('insumos')} className="text-xs font-bold text-[#C25E00] hover:underline">Ver estoque</button>
                </div>
                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-stone-900">Insumo: Maracujá Fresco in Na...</p>
                    <p className="text-stone-500 text-[11px]">Mín: 1000 g</p>
                  </div>
                  <span className="font-bold text-stone-900">1000 g</span>
                </div>
              </div>
            </div>

            {/* Últimas Vendas Registradas */}
            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Últimas Vendas Registradas</h3>
                  <p className="text-xs text-stone-500">Com baixa automática no estoque e lucro calculado</p>
                </div>
                <button onClick={() => setActiveTab('vendas')} className="text-xs font-bold text-[#C25E00] hover:underline">Ver todas as vendas</button>
              </div>

              <div className="divide-y divide-stone-100">
                {vendas.map(v => (
                  <div key={v.id} className="py-3 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-stone-900">{v.codigo} • <span className="text-stone-600 font-normal">{v.cliente}</span></p>
                      <p className="text-stone-400 text-[11px]">{v.data}</p>
                    </div>
                    <span className="font-medium text-stone-800 text-right max-w-xs">{v.itens}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MÓDULO DE INSUMOS EXATAMENTE COMO NA SUA IMAGEM */}
        {activeTab === 'insumos' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-stone-900">2. Insumos & Matérias-Primas</h2>
              <p className="text-xs text-stone-500">Cadastre os ingredientes básicos com custo médio, unidade padrão e fator de rendimento.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <button onClick={() => setModalInsumoOpen(true)} className="w-full sm:w-auto bg-[#C25E00] hover:bg-[#A85100] text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-md flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> + Novo Insumo
              </button>

              <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1">
                {['Todas as Categorias', 'Frutas', 'Laticínios', 'Chocolate', 'Secos'].map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setFiltroCategoria(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${filtroCategoria === cat ? 'bg-[#C25E00] text-white shadow-xs' : 'bg-white text-stone-700 border border-stone-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de Insumos em Cartões */}
            <div className="space-y-3">
              {insumos.filter(i => filtroCategoria === 'Todas as Categorias' || i.categoria === filtroCategoria).map(i => (
                <div key={i.id} className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">{i.categoria}</span>
                      <h3 className="text-base font-bold text-stone-900 mt-2">{i.nome}</h3>
                      <p className="text-xs text-stone-500 mt-0.5">{i.desc}</p>
                    </div>
                    <div className="flex gap-1.5">
                      <button className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700"><Edit3 className="w-4 h-4" /></button>
                      <button className="p-2 rounded-xl bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-600"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-stone-100 text-xs">
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase font-bold">Estoque Atual</p>
                      <p className="font-bold text-stone-900 text-sm mt-0.5">{i.estoque} {i.unidade}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase font-bold">Custo Médio / g</p>
                      <p className="font-bold text-stone-900 text-sm mt-0.5">R$ {i.custo.toFixed(2)}</p>
                    </div>
                    <div className="sm:col-span-2 bg-[#FDF8F0] p-2.5 rounded-2xl border border-amber-200/60 flex justify-between items-center">
                      <span className="text-[11px] font-bold text-amber-900">Rendimento Real:</span>
                      <span className="text-xs font-bold text-amber-950 bg-white px-2.5 py-1 rounded-xl shadow-xs">{i.rendimento}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL CADASTRAR NOVO INSUMO */}
        {modalInsumoOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#FDFBF7] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden p-6 space-y-4 border border-stone-200">
              <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Cadastrar Novo Insumo</h3>
                  <p className="text-xs text-stone-500">Defina nome, categoria, unidade e fatores de rendimento real.</p>
                </div>
                <button onClick={() => setModalInsumoOpen(false)} className="p-1.5 rounded-xl hover:bg-stone-200 text-stone-600"><X className="w-5 h-5" /></button>
              </div>

              <form onSubmit={adicionarInsumo} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1">Nome do Insumo *</label>
                  <input type="text" placeholder="Ex: Maracujá Fresco in Natura" value={novoInsumo.nome} onChange={e => setNovoInsumo({...novoInsumo, nome: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white outline-none focus:ring-2 focus:ring-amber-500 text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1">Categoria</label>
                    <select value={novoInsumo.categoria} onChange={e => setNovoInsumo({...novoInsumo, categoria: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm">
                      <option value="Frutas">Frutas</option><option value="Laticínios">Laticínios</option><option value="Chocolate">Chocolate</option><option value="Secos">Secos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1">Unidade de Medida</label>
                    <select value={novoInsumo.unidade} onChange={e => setNovoInsumo({...novoInsumo, unidade: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm">
                      <option value="Gramas (g)">Gramas (g)</option><option value="Unidades (un)">Unidades (un)</option><option value="Quilos (kg)">Quilos (kg)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1">Custo de Referência (R$)</label>
                    <input type="number" step="0.01" value={novoInsumo.custo} onChange={e => setNovoInsumo({...novoInsumo, custo: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm" />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1">Estoque Mínimo (Alerta)</label>
                    <input type="number" value={novoInsumo.min} onChange={e => setNovoInsumo({...novoInsumo, min: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm" />
                  </div>
                </div>

                <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/60 space-y-2">
                  <label className="block font-bold text-amber-900 uppercase">Fator de Rendimento / Aproveitamento</label>
                  <input type="text" value={novoInsumo.fator} onChange={e => setNovoInsumo({...novoInsumo, fator: e.target.value})} className="w-full px-3.5 py-2 border rounded-xl bg-white text-sm" />
                  <p className="text-[11px] text-stone-500">Rendimento estimado: {Number(novoInsumo.fator) * 100}% • Perda estimada: {100 - (Number(novoInsumo.fator) * 100)}%</p>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setModalInsumoOpen(false)} className="px-4 py-2.5 border rounded-xl font-semibold hover:bg-stone-100">Cancelar</button>
                  <button type="submit" className="px-5 py-2.5 bg-[#C25E00] text-white rounded-xl font-bold shadow">Salvar Insumo</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* OUTROS MÓDULOS */}
        {activeTab !== 'dashboard' && activeTab !== 'insumos' && (
          <div className="bg-white rounded-3xl border border-stone-200 p-8 text-center shadow-xs space-y-3 max-w-xl mx-auto">
            <h2 className="text-base font-bold text-stone-900 capitalize">Módulo: {activeTab}</h2>
            <p className="text-xs text-stone-500">Módulo integrado e em execução na estrutura da Akali Confeitaria.</p>
            <button onClick={() => setActiveTab('dashboard')} className="mt-2 bg-[#2D1810] text-amber-100 px-4 py-2 rounded-2xl text-xs font-semibold shadow">Voltar ao Dashboard</button>
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500 mt-auto">
        Akali Confeitaria Artesanal • Sistema de Gestão Integrada
      </footer>
    </div>
  );
}
