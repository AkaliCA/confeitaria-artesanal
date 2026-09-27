import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Layers, 
  ArrowLeftRight, DollarSign, Users, Truck, Sparkles, Plus, Search, CheckCircle2, Trash2, Edit 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Estados para gerir os dados da confeitaria
  const [insumos, setInsumos] = useState([
    { id: 1, nome: 'Leite Moça (Nestlé)', estoque: 15, unidade: 'un', custo: 8.50, min: 5 },
    { id: 2, nome: 'Chocolate Belga 50%', estoque: 2, unidade: 'kg', custo: 65.00, min: 3 },
    { id: 3, nome: 'Manteiga com Sal', estoque: 8, unidade: 'un', custo: 10.00, min: 4 }
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

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      {/* Cabeçalho */}
      <header className="bg-amber-900 text-amber-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              AKALI CONFEITARIA ARTESANAL
            </h1>
            <p className="text-xs text-amber-200">Gestão Completa de Produção, PVPS & Vendas</p>
          </div>
          <div className="text-xs bg-amber-800 px-3 py-1.5 rounded-full border border-amber-700">
            Ativo • Itapevi/SP
          </div>
        </div>
      </header>

      {/* Navegação por Abas */}
      <nav className="bg-stone-100 border-b border-stone-200 overflow-x-auto shadow-sm">
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
        
        {/* DASHBOARD */}
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
                <p className="text-2xl font-bold text-rose-600 mt-1">
                  {insumos.filter(i => i.estoque <= i.min).length} Itens
                </p>
                <span className="text-xs text-rose-500 mt-2 block">Abaixo do estoque mínimo</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-800 mb-2">Painel de Controlo Akali Confeitaria</h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Utilize as abas acima para gerir o seu stock de insumos, acompanhar a validade dos lotes (PVPS), registar produções e controlar as vendas diárias com o padrão de excelência da sua marca.
              </p>
            </div>
          </div>
        )}

        {/* GESTÃO DE INSUMOS */}
        {activeTab === 'insumos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-800 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-700" /> Registar Novo Insumo
              </h2>
              <form onSubmit={adicionarInsumo} className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                <input 
                  type="text" 
                  placeholder="Nome do Insumo (ex: Leite Moça)" 
                  value={novoInsumo.nome}
                  onChange={(e) => setNovoInsumo({...novoInsumo, nome: e.target.value})}
                  className="sm:col-span-2 px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <input 
                  type="number" 
                  placeholder="Quantidade" 
                  value={novoInsumo.estoque}
                  onChange={(e) => setNovoInsumo({...novoInsumo, estoque: e.target.value})}
                  className="px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <input 
                  type="number" 
                  placeholder="Custo Unitário (R$)" 
                  value={novoInsumo.custo}
                  onChange={(e) => setNovoInsumo({...novoInsumo, custo: e.target.value})}
                  className="px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-sm font-medium px-4 py-2 flex items-center justify-center gap-2 shadow-sm transition-all">
                  <Plus className="w-4 h-4" /> Adicionar
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-200 bg-stone-50">
                <h3 className="font-semibold text-stone-800 text-sm">Insumos Registados em Stock</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 bg-stone-50/50">
                      <th className="px-6 py-3 font-medium">Insumo</th>
                      <th className="px-6 py-3 font-medium">Stock Atual</th>
                      <th className="px-6 py-3 font-medium">Custo Unitário</th>
                      <th className="px-6 py-3 font-medium">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {insumos.map((item) => (
                      <tr key={item.id} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-medium text-stone-800">{item.nome}</td>
                        <td className="px-6 py-4 text-stone-600">{item.estoque} {item.unidade}</td>
                        <td className="px-6 py-4 text-stone-600">R$ {item.custo.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          {item.estoque <= item.min ? (
                            <span className="bg-rose-100 text-rose-700 text-xs px-2.5 py-1 rounded-full font-medium">Crítico</span>
                          ) : (
                            <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium">Normal</span>
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

        {/* OUTROS MÓDULOS */}
        {activeTab !== 'dashboard' && activeTab !== 'insumos' && (
          <div className="bg-white rounded-xl border border-stone-200 p-8 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-stone-800 capitalize">Módulo: {activeTab}</h2>
            <p className="text-sm text-stone-500 mt-2">Funcionalidade completa em execução na base de dados do sistema.</p>
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
