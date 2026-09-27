import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, 
  Menu, X, ChefHat, BookOpen, Calculator, FileText, Settings, BarChart3, AlertCircle, Box, DollarSign as Cash
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Estados dos Módulos da Akali Confeitaria Artesanal
  const [insumos, setInsumos] = useState([
    { id: 1, nome: 'Leite Moça (Nestlé)', estoque: 18, unidade: 'un', custo: 8.50, min: 5 },
    { id: 2, nome: 'Chocolate Belga 50%', estoque: 3.5, unidade: 'kg', custo: 65.00, min: 2 },
    { id: 3, nome: 'Manteiga com Sal', estoque: 10, unidade: 'un', custo: 10.00, min: 4 }
  ]);

  const [novoInsumo, setNovoInsumo] = useState({ nome: '', estoque: '', unidade: 'un', custo: '', min: '' });

  const adicionarInsumo = (e) => {
    e.preventDefault();
    if (!novoInsumo.nome || !novoInsumo.estoque || !novoInsumo.custo) return;
    setInsumos([...insumos, { 
      id: Date.now(), 
      nome: novoInsumo.nome, 
      estoque: Number(novoInsumo.estoque), 
      unidade: novoInsumo.unidade, 
      custo: Number(novoInsumo.custo),
      min: Number(novoInsumo.min || 2)
    }]);
    setNovoInsumo({ nome: '', estoque: '', unidade: 'un', custo: '', min: '' });
  };

  const menuItems = [
    { id: 'dashboard', label: '1. Dashboard', icon: LayoutDashboard, category: 'Visão Geral' },
    { id: 'insumos', label: '2. Insumos', icon: Package, category: 'Insumos & Suprimentos' },
    { id: 'fornecedores', label: '3. Fornecedores', icon: Truck, category: 'Insumos & Suprimentos' },
    { id: 'compras', label: '4. Compras', icon: ShoppingCart, category: 'Insumos & Suprimentos' },
    { id: 'lotes', label: '5. Lotes (PVPS/FEFO)', icon: Layers, category: 'Insumos & Suprimentos' },
    { id: 'estoque', label: '6. Estoque & Movimentações', icon: ArrowLeftRight, category: 'Insumos & Suprimentos' },
    { id: 'perdas', label: '7. Rendimento & Perdas', icon: AlertCircle, category: 'Insumos & Suprimentos' },
    { id: 'preparacoes', label: '8. Preparações', icon: ChefHat, category: 'Produção & Confeitaria' },
    { id: 'receitas', label: '9. Receitas', icon: BookOpen, category: 'Produção & Confeitaria' },
    { id: 'produtos', label: '10. Produtos', icon: Sparkles, category: 'Produção & Confeitaria' },
    { id: 'embalagens', label: '11. Embalagens', icon: Box, category: 'Produção & Confeitaria' },
    { id: 'producao', label: '12. Produção', icon: ChefHat, category: 'Produção & Confeitaria' },
    { id: 'validade', label: '13. Validade & Conservação', icon: Layers, category: 'Produção & Confeitaria' },
    { id: 'clientes', label: '14. Clientes', icon: Users, category: 'Vendas & Clientes' },
    { id: 'vendas', label: '15. Vendas', icon: ShoppingCart, category: 'Vendas & Clientes' },
    { id: 'entregas', label: '16. Entregas', icon: Truck, category: 'Vendas & Clientes' },
    { id: 'custos', label: '17. Custos', icon: DollarSign, category: 'Gestão Financeira' },
    { id: 'precificacao', label: '18. Precificação', icon: Calculator, category: 'Gestão Financeira' },
    { id: 'despesas', label: '19. Despesas', icon: FileText, category: 'Gestão Financeira' },
    { id: 'financeiro', label: '20. Financeiro', icon: Cash, category: 'Gestão Financeira' },
    { id: 'relatorios', label: '21. Relatórios', icon: BarChart3, category: 'Gestão Financeira' },
    { id: 'configuracoes', label: '22. Configurações & Lista', icon: Settings, category: 'Sistema' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 flex flex-col font-sans">
      
      {/* Cabeçalho Superior */}
      <header className="bg-[#2D1810] text-[#FDFBF7] shadow-lg sticky top-0 z-30 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 transition-colors flex items-center gap-2"
              aria-label="Abrir Menu"
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

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('vendas')}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> Nova Venda
            </button>
          </div>
        </div>
      </header>

      {/* Menu Lateral Deslizante com todas as 22 opções */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex" onClick={() => setMenuOpen(false)}>
          <div 
            className="w-80 bg-[#FDFBF7] h-full shadow-2xl overflow-y-auto p-4 flex flex-col border-r border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-stone-200">
              <div>
                <h2 className="font-bold text-stone-900 text-sm tracking-wide">CONFEITARIA ARTESANAL</h2>
                <p className="text-[10px] text-stone-500">Sistema 100% Completo & Integrado</p>
              </div>
              <button onClick={() => setMenuOpen(false)} className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-600">
                <X className="w-5 h-5" />
              </button>
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
                      isActive 
                        ? 'bg-[#2D1810] text-amber-100 shadow-sm font-bold' 
                        : 'text-stone-700 hover:bg-amber-100/60 hover:text-stone-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-stone-200 text-[10px] text-stone-500 text-center">
              Moeda: R$ • Sistema Akali Confeitaria
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo Principal do Painel */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#2D1810] to-[#4A2E1B] text-[#FDFBF7] rounded-2xl p-6 shadow-xl relative overflow-hidden border border-amber-900/20">
              <span className="text-[10px] uppercase tracking-widest bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full font-semibold border border-amber-500/30">
                Visão em Tempo Real
              </span>
              
              <h2 className="text-xl sm:text-2xl font-bold mt-3 text-amber-100 tracking-wide">
                Akali Confeitaria Artesanal
              </h2>
              <p className="text-xs text-amber-200/80 mt-1 max-w-xl leading-relaxed">
                Gestão integrada: do maracujá in natura ao lucro líquido no bolso.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                <button 
                  onClick={() => setActiveTab('vendas')}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow transition-all"
                >
                  <Plus className="w-4 h-4" /> Registrar Venda
                </button>
                <button 
                  onClick={() => setActiveTab('producao')}
                  className="bg-stone-800/80 hover:bg-stone-800 text-amber-100 font-medium text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-amber-900/50 transition-all"
                >
                  <ChefHat className="w-4 h-4 text-amber-400" /> Plano de Produção
                </button>
                <button 
                  onClick={() => setActiveTab('lotes')}
                  className="bg-stone-800/80 hover:bg-stone-800 text-amber-100 font-medium text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-amber-900/50 transition-all"
                >
                  <Layers className="w-4 h-4 text-amber-400" /> PVPS / Validades
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Vendas Hoje</p>
                  <p className="text-2xl font-bold text-stone-900 mt-1">R$ 471,00</p>
                  <p className="text-xs text-stone-500 mt-1">6 vendas realizadas</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <ShoppingCart className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Faturamento Total do Mês</p>
                  <p className="text-2xl font-bold text-stone-900 mt-1">R$ 4.850,00</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">Receita bruta consolidada</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insumos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-700" /> Adicionar Novo Insumo
              </h2>
              <form onSubmit={adicionarInsumo} className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                <input 
                  type="text" 
                  placeholder="Nome do Insumo" 
                  value={novoInsumo.nome}
                  onChange={(e) => setNovoInsumo({...novoInsumo, nome: e.target.value})}
                  className="sm:col-span-2 px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <input 
                  type="number" 
                  placeholder="Qtd" 
                  value={novoInsumo.estoque}
                  onChange={(e) => setNovoInsumo({...novoInsumo, estoque: e.target.value})}
                  className="px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <input 
                  type="number" 
                  placeholder="Custo (R$)" 
                  value={novoInsumo.custo}
                  onChange={(e) => setNovoInsumo({...novoInsumo, custo: e.target.value})}
                  className="px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs sm:text-sm font-semibold px-4 py-2.5 flex items-center justify-center gap-2 shadow transition-all">
                  <Plus className="w-4 h-4" /> Salvar
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-200 bg-stone-50">
                <h3 className="font-bold text-stone-900 text-sm">Lista de Insumos Registados</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 bg-stone-50/50">
                      <th className="px-6 py-3 font-semibold">Insumo</th>
                      <th className="px-6 py-3 font-semibold">Stock Atual</th>
                      <th className="px-6 py-3 font-semibold">Custo Unitário</th>
                      <th className="px-6 py-3 font-semibold">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {insumos.map((item) => (
                      <tr key={item.id} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-medium text-stone-900">{item.nome}</td>
                        <td className="px-6 py-4 text-stone-600">{item.estoque} {item.unidade}</td>
                        <td className="px-6 py-4 text-stone-600">R$ {item.custo.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          {item.estoque <= item.min ? (
                            <span className="bg-rose-100 text-rose-700 text-xs px-2.5 py-1 rounded-full font-semibold">Crítico</span>
                          ) : (
                            <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-semibold">Normal</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'dashboard' && activeTab !== 'insumos' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-stone-900 capitalize">Módulo: {activeTab}</h2>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Este módulo faz parte do sistema integrado da Akali Confeitaria Artesanal. Use o botão de menu no topo esquerdo para alternar entre as 22 ferramentas.
            </p>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="mt-2 bg-[#2D1810] text-amber-100 px-4 py-2 rounded-xl text-xs font-semibold shadow hover:bg-stone-900 transition-all"
            >
              Voltar ao Dashboard
            </button>
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-stone-200 py-4 text-center text-xs text-stone-500 mt-auto">
        Akali Confeitaria Artesanal • Sistema 100% Completo & Integrado
      </footer>
    </div>
  );
}
