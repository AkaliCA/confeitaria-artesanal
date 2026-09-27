import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, 
  Menu, X, ChefHat, BookOpen, Calculator, FileText, Settings, BarChart3, AlertCircle, Box, Trash2, Edit3, Bell, TrendingUp, Printer
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalInsumoOpen, setModalInsumoOpen] = useState(false);
  const [modalDespesaOpen, setModalDespesaOpen] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas as Categorias');
  const [filtroDespesa, setFiltroDespesa] = useState('Todas');

  // Estados completos e reais
  const [insumos, setInsumos] = useState([
    { id: 1, nome: 'Maracujá Fresco in Natura', categoria: 'Frutas', desc: 'Comprar maduro. 1kg rende aprox. 350g de polpa limpa.', estoque: 1000, unidade: 'g', custo: 0.02, rendimento: '35% aproveitamento', min: 1000, validade: '7 dias' },
    { id: 2, nome: 'Morango Fresco Selecionado', categoria: 'Frutas', desc: 'Para geleia e decoração. Higienizar e tirar cabinhos.', estoque: 2000, unidade: 'g', custo: 0.02, rendimento: '85% aproveitamento', min: 500, validade: '3 dias' }
  ]);

  const [lotes] = useState([
    { id: 1, produto: 'Morango Fresco Selecionado', lote: 'LOT-MOR-001', qtd: '2000 g', status: 'Vence em 1 dia (crítico)' },
    { id: 2, produto: 'Maracujá Fresco in Natura', lote: 'LOT-MAR-001', qtd: '1000 g', status: 'Vence em 3 dias (crítico)' }
  ]);

  const [vendas] = useState([
    { id: 1, codigo: 'VDA-2026-368', cliente: 'Cliente Balcão', itens: '1x Pote de Geleia Artesanal de Morango', qtd: '3 un', faturamento: 114.00, lucro: 41.79, margem: '36.7%', data: '25/09/2026' },
    { id: 2, codigo: 'VDA-2026-003', cliente: 'Camila Duarte', itens: '1x Bolo Artesanal Belga com Morangos (1.5 kg)', qtd: '1 un', faturamento: 190.00, lucro: 95.06, margem: '50.0%', data: '25/09/2026' },
    { id: 3, codigo: 'VDA-2026-002', cliente: 'Lucas Mendonça', itens: '2x Caixa Degustação 12 Brigadeiros Gourmet', qtd: '2 un', faturamento: 140.00, lucro: 68.26, margem: '48.8%', data: '23/09/2026' }
  ]);

  const [despesas, setDespesas] = useState([
    { id: 1, descricao: 'Conta de Luz Enel', categoria: 'Energia Elétrica / Luz', valor: 100.00, vencimento: '27/09/2026', status: 'A Pagar (Pendente)' },
    { id: 2, descricao: 'Botijão Ultragaz P13', categoria: 'Gás de Cozinha', valor: 110.00, vencimento: '20/09/2026', status: 'Pago' },
    { id: 3, descricao: 'Aluguel do Espaço', categoria: 'Aluguel & Instalações', valor: 639.90, vencimento: '10/09/2026', status: 'Pago' },
    { id: 4, descricao: 'Internet Fibra Local', categoria: 'Telecomunicações', votlar: 185.40, vencimento: '05/10/2026', status: 'A Pagar (Pendente)' }
  ]);

  const [novoInsumo, setNovoInsumo] = useState({ nome: '', categoria: 'Frutas', unidade: 'g', custo: '0.02', min: '1000', fator: '1', validade: '7' });
  const [novaDespesa, setNovaDespesa] = useState({ descricao: '', categoria: 'Energia Elétrica / Luz', valor: '', vencimento: '27/09/2026', status: 'A Pagar (Pendente)', obs: '' });

  const adicionarInsumo = (e) => {
    e.preventDefault();
    if (!novoInsumo.nome) return;
    setInsumos([...insumos, { id: Date.now(), ...novoInsumo, estoque: Number(novoInsumo.min), custo: Number(novoInsumo.custo), unidade: 'g', rendimento: `${Number(novoInsumo.fator)*100}% aproveitamento` }]);
    setModalInsumoOpen(false);
    setNovoInsumo({ nome: '', categoria: 'Frutas', unidade: 'g', custo: '0.02', min: '1000', fator: '1', validade: '7' });
  };

  const adicionarDespesa = (e) => {
    e.preventDefault();
    if (!novaDespesa.descricao || !novaDespesa.valor) return;
    setDespesas([...despesas, { id: Date.now(), ...novaDespesa, valor: Number(novaDespesa.valor) }]);
    setModalDespesaOpen(false);
    setNovaDespesa({ descricao: '', categoria: 'Energia Elétrica / Luz', valor: '', vencimento: '27/09/2026', status: 'A Pagar (Pendente)', obs: '' });
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
      { id: 'custos', label: '17. Custos Detalhados', icon: Calculator },
      { id: 'precificacao', label: '18. Precificação & Margens', icon: DollarSign },
      { id: 'despesas', label: '19. Despesas & Custos Fixos', icon: FileText },
      { id: 'financeiro', label: '20. Financeiro & DRE', icon: DollarSign },
      { id: 'relatorios', label: '21. Relatórios de Desempenho', icon: BarChart3 },
      { id: 'compras_auto', label: '22. Lista de Compras & Backup', icon: Box }
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-sans">
      
      {/* Cabeçalho */}
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
                <h1 className="text-xs font-bold tracking-widest uppercase text-stone-900 leading-tight">AKALI</h1>
                <h2 className="text-xs font-bold tracking-tight uppercase text-stone-900 leading-tight">CONFEITARIA ARTESANAL</h2>
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

      {/* Menu Lateral */}
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
            <div className="bg-gradient-to-br from-[#2D1810] to-[#4A2E1B] text-[#FDFBF7] rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-semibold border border-amber-500/30">Visão em Tempo Real</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-3 text-amber-100">Akali Confeitaria Artesanal</h2>
              <p className="text-xs text-amber-200/80 mt-1">Gestão integrada: do maracujá in natura ao lucro líquido no bolso.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5">
                <button onClick={() => setActiveTab('vendas')} className="bg-[#C25E00] hover:bg-[#A85100] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow"><Plus className="w-4 h-4" /> Registrar Venda</button>
                <button onClick={() => setActiveTab('producao')} className="bg-stone-800/80 text-amber-100 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-amber-900/50"><ChefHat className="w-4 h-4 text-amber-400" /> Plano de Produção</button>
                <button onClick={() => setActiveTab('relatorios')} className="bg-stone-800/80 text-amber-100 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-amber-900/50"><TrendingUp className="w-4 h-4 text-amber-400" /> Relatórios</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs flex items-center justify-between">
                <div><p className="text-[11px] font-bold text-stone-400 uppercase">Vendas Hoje</p><p className="text-2xl font-bold text-stone-900 mt-1">R$ 0,00</p><p className="text-xs text-stone-500 mt-1">0 vendas realizadas</p></div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600"><TrendingUp className="w-6 h-6" /></div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs flex items-center justify-between">
                <div><p className="text-[11px] font-bold text-stone-400 uppercase">Faturamento Total</p><p className="text-2xl font-bold text-stone-900 mt-1">R$ 471,00</p><p className="text-xs text-sky-600 font-medium mt-1">Receita bruta total</p></div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-600"><DollarSign className="w-6 h-6" /></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#EAF7ED] p-5 rounded-3xl border border-emerald-200 shadow-xs flex items-center justify-between">
                <div><p className="text-[11px] font-bold text-emerald-800 uppercase">Lucro Líquido Real</p><p className="text-2xl font-bold text-emerald-900 mt-1">-R$ 622,69</p><p className="text-xs text-emerald-700 mt-1">Após CMV, despesas e taxas</p></div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center"><TrendingUp className="w-6 h-6" /></div>
              </div>
              <div className="bg-[#F8F4FC] p-5 rounded-3xl border border-purple-200 shadow-xs flex items-center justify-between">
                <div><p className="text-[11px] font-bold text-purple-900 uppercase">Contas a Receber</p><p className="text-2xl font-bold text-purple-950 mt-1">R$ 0,00</p><p className="text-xs text-purple-700 mt-1">A pagar: R$ 512,90</p></div>
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center"><Layers className="w-6 h-6" /></div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INSUMOS */}
        {activeTab === 'insumos' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-stone-900">2. Insumos & Matérias-Primas</h2>
              <p className="text-xs text-stone-500">Cadastre os ingredientes básicos com custo médio, unidade padrão e fator de rendimento.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
              <button onClick={() => setModalInsumoOpen(true)} className="bg-[#C25E00] hover:bg-[#A85100] text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-md flex items-center gap-2"><Plus className="w-4 h-4" /> + Novo Insumo</button>
            </div>
            <div className="space-y-3">
              {insumos.map(i => (
                <div key={i.id} className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">{i.categoria}</span>
                      <h3 className="text-base font-bold text-stone-900 mt-2">{i.nome}</h3>
                      <p className="text-xs text-stone-500 mt-0.5">{i.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-stone-100 text-xs">
                    <div><p className="text-[10px] text-stone-400 uppercase font-bold">Estoque Atual</p><p className="font-bold text-stone-900 text-sm mt-0.5">{i.estoque} {i.unidade}</p></div>
                    <div><p className="text-[10px] text-stone-400 uppercase font-bold">Custo Médio / g</p><p className="font-bold text-stone-900 text-sm mt-0.5">R$ {i.custo.toFixed(2)}</p></div>
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

        {/* 17. CUSTOS DETALHADOS (IGUAL À IMAGEM 1) */}
        {activeTab === 'custos' && (
          <div className="space-y-4 max-w-2xl mx-auto">
            <div>
              <h2 className="text-lg font-bold text-stone-900">17. Custos Detalhados de Produção</h2>
              <p className="text-xs text-stone-500">Rateio operacional por batelada de produção.</p>
            </div>
            
            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs flex items-center justify-between">
              <div><p className="text-xs font-bold text-stone-500 flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-700"/> Mão de Obra</p><p className="text-2xl font-bold text-stone-900 mt-1">R$ 37,50</p></div>
              <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">13% do custo</span>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs flex items-center justify-between">
              <div><p className="text-xs font-bold text-stone-500 flex items-center gap-1.5"><Flame className="w-4 h-4 text-rose-600"/> Gás de Cozinha</p><p className="text-2xl font-bold text-stone-900 mt-1">R$ 5,70</p></div>
              <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">2% do custo</span>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs flex items-center justify-between">
              <div><p className="text-xs font-bold text-stone-500 flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-500"/> Energia Elétrica</p><p className="text-2xl font-bold text-stone-900 mt-1">R$ 3,30</p></div>
              <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">1% do custo</span>
            </div>

            <div className="bg-[#FFFDF5] p-5 rounded-3xl border border-amber-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-amber-950 uppercase">Resultado da Batelada (5 Unidades de Bolo Artesanal Belga com Morangos (1.5 kg))</h3>
              <p className="text-xs text-stone-600">Custo Total da Batelada: <strong className="text-stone-900">R$ 299,45</strong></p>
              <div className="bg-white p-4 rounded-2xl border border-amber-200 flex justify-between items-center">
                <span className="text-xs font-bold text-stone-700 uppercase">Custo Real Unitário:</span>
                <span className="text-xl font-bold text-[#8B3A00]">R$ 59,89 <span className="text-xs font-normal text-stone-500">/ unidade</span></span>
              </div>
            </div>
          </div>
        )}

        {/* 18. PRECIFICAÇÃO & MARGENS (IGUAL ÀS IMAGENS 2 E 3) */}
        {activeTab === 'precificacao' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h2 className="text-lg font-bold text-stone-900">18. Precificação & Margens</h2>
              <p className="text-xs text-stone-500">Análise de preço mínimo, sugerido e margem líquida real.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#FDF2F4] p-5 rounded-3xl border border-rose-200 shadow-xs">
                <p className="text-[11px] font-bold text-rose-900 uppercase">2. Preço Mínimo</p>
                <p className="text-2xl font-bold text-rose-950 mt-1">R$ 98,38</p>
                <p className="text-xs text-rose-700 mt-1">Ponto de equilíbrio c/ taxas</p>
              </div>

              <div className="bg-[#FFFDF5] p-5 rounded-3xl border border-amber-200 shadow-xs">
                <p className="text-[11px] font-bold text-amber-900 uppercase">3. Preço Sugerido</p>
                <p className="text-2xl font-bold text-amber-950 mt-1">R$ 196,77</p>
                <p className="text-xs text-amber-700 mt-1">Margem líquida de 100%</p>
              </div>

              <div className="bg-[#EAF7ED] p-5 rounded-3xl border border-emerald-200 shadow-xs">
                <p className="text-[11px] font-bold text-emerald-900 uppercase">4. Lucro Líquido Real</p>
                <p className="text-2xl font-bold text-emerald-950 mt-1">R$ 88,41</p>
                <p className="text-xs text-emerald-700 mt-1">93.1% margem líquida real</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">Comparativo de Margens de Todos os Produtos</h3>
              <div className="space-y-3 divide-y divide-stone-100">
                <div className="pt-3 flex justify-between items-center text-xs">
                  <div><p className="font-bold text-stone-900">Bolo Artesanal Belga com Morangos (1.5 kg)</p><p className="text-stone-500">Bolos Decorados</p></div>
                  <div className="text-right"><p className="text-stone-500">Custo: R$ 94,94 | Sugerido: R$ 195,00</p><p className="font-bold text-emerald-700 text-sm">Praticado: R$ 190,00 (+R$ 95,06)</p></div>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs">
                  <div><p className="font-bold text-stone-900">Caixa Degustação 12 Brigadeiros Gourmet</p><p className="text-stone-500">Doces Finos</p></div>
                  <div className="text-right"><p className="text-stone-500">Custo: R$ 35,87 | Sugerido: R$ 75,00</p><p className="font-bold text-emerald-700 text-sm">Praticado: R$ 70,00 (+R$ 34,13)</p></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 19. DESPESAS & CUSTOS FIXOS (IGUAL ÀS IMAGENS 4 E 5) */}
        {activeTab === 'despesas' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-stone-900">19. Despesas & Custos Operacionais Fixos</h2>
                <p className="text-xs text-stone-500">Controle de aluguel, luz, gás, água, marketing e outras despesas.</p>
              </div>
              <button onClick={() => setModalDespesaOpen(true)} className="bg-[#C25E00] hover:bg-[#A85100] text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow flex items-center gap-1.5"><Plus className="w-4 h-4" /> + Nova Despesa</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Total de Despesas</p>
                <p className="text-2xl font-bold text-stone-900 mt-1">R$ 1.035,30</p>
                <p className="text-xs text-stone-500 mt-1">4 lançamentos</p>
              </div>
              <div className="bg-[#EAF7ED] p-5 rounded-3xl border border-emerald-200 shadow-xs">
                <p className="text-[11px] font-bold text-emerald-800 uppercase">Despesas Pagas</p>
                <p className="text-2xl font-bold text-emerald-900 mt-1">R$ 849,90</p>
                <p className="text-xs text-emerald-700 mt-1">Baixadas do caixa</p>
              </div>
              <div className="bg-[#FFFDF5] p-5 rounded-3xl border border-amber-200 shadow-xs">
                <p className="text-[11px] font-bold text-amber-900 uppercase">Contas a Pagar</p>
                <p className="text-2xl font-bold text-amber-950 mt-1">R$ 185,40</p>
                <p className="text-xs text-amber-700 mt-1">Previsão pendente</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-3">
              <div className="flex gap-2 pb-2 border-b border-stone-100">
                {['Todas', 'A Pagar', 'Pagas'].map(f => (
                  <button key={f} onClick={() => setFiltroDespesa(f)} className={`px-4 py-1.5 rounded-xl text-xs font-semibold ${filtroDespesa === f ? 'bg-[#C25E00] text-white' : 'bg-stone-100 text-stone-700'}`}>{f}</button>
                ))}
              </div>
              <div className="divide-y divide-stone-100">
                {despesas.filter(d => filtroDespesa === 'Todas' || d.status.includes(filtroDespesa)).map(d => (
                  <div key={d.id} className="py-3 flex justify-between items-center text-xs">
                    <div><p className="font-bold text-stone-900">{d.descricao}</p><p className="text-stone-500 text-[11px]">{d.categoria} • Vencimento: {d.vencimento}</p></div>
                    <div className="text-right"><p className="font-bold text-stone-900">R$ {d.valor.toFixed(2)}</p><span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${d.status.includes('Pago') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{d.status}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 20. FINANCEIRO & DRE (IGUAL À IMAGEM 6) */}
        {activeTab === 'financeiro' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h2 className="text-lg font-bold text-stone-900">20. Financeiro & DRE</h2>
              <p className="text-xs text-stone-500">Visão contábil e operacional integrada de todas as movimentações.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#EAF7ED] p-5 rounded-3xl border border-emerald-200 shadow-xs">
                <p className="text-[11px] font-bold text-emerald-800 uppercase">Valores Recebidos</p>
                <p className="text-2xl font-bold text-emerald-900 mt-1">R$ 471,00</p>
                <p className="text-xs text-emerald-700 mt-1">Entradas confirmadas</p>
              </div>
              <div className="bg-[#FFFDF5] p-5 rounded-3xl border border-amber-200 shadow-xs">
                <p className="text-[11px] font-bold text-amber-900 uppercase">Valores a Receber</p>
                <p className="text-2xl font-bold text-amber-950 mt-1">R$ 0,00</p>
                <p className="text-xs text-amber-700 mt-1">Vendas a prazo/pendentes</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">DRE - Demonstrativo de Resultado do Exercício</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-2xl flex justify-between font-semibold"><span>(+) 1. Faturamento Bruto (Total de Vendas)</span><span className="text-stone-900">R$ 471,00</span></div>
                <div className="p-3 bg-rose-50/50 rounded-2xl flex justify-between font-semibold text-rose-700"><span>(-) 2. Taxas de Operadoras (Cartão Crédito / Débito)</span><span>- R$ 4,90</span></div>
                <div className="p-3 bg-sky-50 rounded-2xl flex justify-between font-bold text-sky-900"><span>(=) 3. Faturamento Líquido Disponível</span><span>R$ 466,10</span></div>
              </div>
            </div>
          </div>
        )}

        {/* 21. RELATÓRIOS (IGUAL À IMAGEM 7) */}
        {activeTab === 'relatorios' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-stone-900">21. Relatórios de Desempenho</h2>
                <p className="text-xs text-stone-500">Quantidade vendida, faturamento gerado e lucro líquido apurado.</p>
              </div>
              <button onClick={() => window.print()} className="bg-stone-800 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"><Printer className="w-4 h-4"/> Imprimir / Salvar PDF</button>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <div className="divide-y divide-stone-100 space-y-3">
                <div className="pt-3 flex justify-between items-center text-xs">
                  <div><p className="font-bold text-stone-900">Pote de Geleia Artesanal de Morango (240g)</p><p className="text-stone-500">3 un • Faturamento: R$ 114,00</p></div>
                  <div className="text-right"><p className="font-bold text-emerald-700 text-sm">R$ 41,79</p><p className="text-stone-500 text-[11px]">36.7% margem</p></div>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs">
                  <div><p className="font-bold text-stone-900">Bolo Artesanal Belga com Morangos (1.5 kg)</p><p className="text-stone-500">1 un • Faturamento: R$ 190,00</p></div>
                  <div className="text-right"><p className="font-bold text-emerald-700 text-sm">R$ 95,06</p><p className="text-stone-500 text-[11px]">50.0% margem</p></div>
                </div>
                <div className="pt-3 flex justify-between items-center text-xs">
                  <div><p className="font-bold text-stone-900">Caixa Degustação 12 Brigadeiros Gourmet Nobres</p><p className="text-stone-500">2 un • Faturamento: R$ 140,00</p></div>
                  <div className="text-right"><p className="font-bold text-emerald-700 text-sm">R$ 68,26</p><p className="text-stone-500 text-[11px]">48.8% margem</p></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 22. LISTA DE COMPRAS (IGUAL À IMAGEM 8) */}
        {activeTab === 'compras_auto' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h2 className="text-lg font-bold text-stone-900">22. Lista Inteligente de Compras & Backup</h2>
              <p className="text-xs text-stone-500">Reposição automática baseada em estoque mínimo e produção planejada.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-stone-100 pb-3">
                <div><h3 className="font-bold text-stone-900 text-sm">Investimento Estimado de Reposição:</h3><p className="text-2xl font-bold text-[#8B3A00] mt-1">R$ 194,20</p></div>
                <button className="bg-[#C25E00] text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow">Registrar Compra destes Itens</button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-2xl flex justify-between items-center">
                  <div><p className="font-bold text-stone-900">Embalagem</p><p className="text-stone-500 text-[11px]">Insumo • Estoque: 0 un • Mín: 10 un</p></div>
                  <div className="text-right"><p className="font-bold text-[#C25E00]">10 un</p><p className="text-stone-500 text-[11px]">R$ 0,20</p></div>
                </div>
                <div className="p-3 bg-stone-50 rounded-2xl flex justify-between items-center">
                  <div><p className="font-bold text-stone-900">Fermento</p><p className="text-stone-500 text-[11px]">Insumo • Estoque: 0.9 g • Mín: 30 g</p></div>
                  <div className="text-right"><p className="font-bold text-[#C25E00]">29,1 g</p><p className="text-stone-500 text-[11px]">R$ 194,00</p></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL CADASTRAR DESPESA */}
        {modalDespesaOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#FDFBF7] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden p-6 space-y-4 border border-stone-200">
              <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                <h3 className="font-bold text-stone-900 text-base">Cadastrar Despesa</h3>
                <button onClick={() => setModalDespesaOpen(false)} className="p-1.5 rounded-xl hover:bg-stone-200 text-stone-600"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={adicionarDespesa} className="space-y-3.5 text-xs">
                <div><label className="block font-bold text-stone-700 uppercase mb-1">Descrição da Despesa *</label><input type="text" placeholder="Ex: Conta de Luz Enel" value={novaDespesa.descricao} onChange={e => setNovaDespesa({...novaDespesa, descricao: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white outline-none text-sm" /></div>
                <div><label className="block font-bold text-stone-700 uppercase mb-1">Categoria</label><select value={novaDespesa.categoria} onChange={e => setNovaDespesa({...novaDespesa, categoria: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm"><option value="Energia Elétrica / Luz">Energia Elétrica / Luz</option><option value="Gás de Cozinha">Gás de Cozinha</option><option value="Aluguel & Instalações">Aluguel & Instalações</option></select></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="block font-bold text-stone-700 uppercase mb-1">Valor (R$) *</label><input type="number" step="0.01" value={novaDespesa.valor} onChange={e => setNovaDespesa({...novaDespesa, valor: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm" /></div>
                  <div><label className="block font-bold text-stone-700 uppercase mb-1">Vencimento</label><input type="text" value={novaDespesa.vencimento} onChange={e => setNovaDespesa({...novaDespesa, vencimento: e.target.value})} className="w-full px-3.5 py-2.5 border rounded-2xl bg-white text-sm" /></div>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setModalDespesaOpen(false)} className="px-4 py-2.5 border rounded-xl font-semibold">Cancelar</button>
                  <button type="submit" className="px-5 py-2.5 bg-[#C25E00] text-white rounded-xl font-bold shadow">Salvar Despesa</button>
                </div>
              </form>
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
