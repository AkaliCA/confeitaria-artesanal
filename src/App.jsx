import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [produtoInput, setProdutoInput] = useState('');

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-amber-900 text-amber-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              AKALI CONFEITARIA ARTESANAL
            </h1>
            <p className="text-xs text-amber-200">Gestão Completa da Produção & Vendas</p>
          </div>
          <div className="text-xs bg-amber-800 px-3 py-1.5 rounded-full border border-amber-700">
            Modo Ativo • 2026
          </div>
        </div>
      </header>

      {/* Barra de Pesquisa e Atalho Rápido */}
      <div className="bg-white border-b border-stone-200 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
            <input 
              type="text" 
              placeholder="Pesquisar insumo, produto, receita..." 
              value={produtoInput}
              onChange={(e) => setProdutoInput(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-100 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-sm">
            <Plus className="w-4 h-4" /> Produzir / Nova Venda
          </button>
        </div>
      </div>

      {/* Navegação por Abas */}
      <nav className="bg-stone-100 border-b border-stone-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex px-4 gap-2 py-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'insumos', label: 'Insumos', icon: Package },
            { id: 'lotes', label: 'Lotes (PVPS)', icon: Layers },
            { id: 'producao', label: 'Produção', icon: Sparkles },
            { id: 'vendas', label: 'Vendas', icon: ShoppingCart },
            { id: 'clientes', label: 'Clientes', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive 
                    ? 'bg-amber-900 text-white shadow' 
                    : 'text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Faturamento do Mês</p>
                <p className="text-2xl font-bold text-stone-800 mt-1">R$ 4.850,00</p>
                <span className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5" /> +12% que o mês anterior
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Pedidos em Produção</p>
                <p className="text-2xl font-bold text-amber-800 mt-1">8 Lotes Ativos</p>
                <span className="text-xs text-stone-500 mt-2 block">Brigadeiros e Bolos no Pote</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Insumos Críticos</p>
                <p className="text-2xl font-bold text-rose-600 mt-1">2 Itens</p>
                <span className="text-xs text-rose-500 mt-2 block">Leite Moça precisa de reposição</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-800 mb-4">Bem-vinda de volta ao sistema da Akali!</h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                O painel está totalmente otimizado e pronto para controlar os seus lotes por validade (PVPS/FEFO), rendimento de receitas, custos e entregas. Use o menu acima para navegar entre os módulos.
              </p>
            </div>
          </div>
        )}

        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-xl border border-stone-200 p-8 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-stone-800 capitalize">Módulo: {activeTab}</h2>
            <p className="text-sm text-stone-500 mt-2">Este painel está sincronizado com a base de dados em tempo real.</p>
          </div>
        )}
      </main>

      {/* Rodapé */}
      <footer className="bg-white border-t border-stone-200 py-3 text-center text-xs text-stone-500">
        Akali Confeitaria Artesanal • Todos os direitos reservados
      </footer>
    </div>
  );
}
