import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PieChart, 
  Target, 
  ShieldCheck, 
  Lock, 
  Eye, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  CheckCircle, 
  AlertCircle,
  Building2,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';

export default function PortalMockup() {
  const [activeTab, setActiveTab] = useState('resumen');
  const [clientProfile, setClientProfile] = useState('ejecutivo'); // 'ejecutivo' | 'familia'

  // Data strictly in Guaraníes (Gs.)
  const data = clientProfile === 'ejecutivo' ? {
    name: "Carlos & Natalia R.",
    accountType: "eFI Wealth Flow Member",
    patrimonioTotal: "Gs. 645.000.000",
    patrimonioVar: "+ 5.2%",
    flujoNeto: "Gs. 54.200.000",
    fondoReserva: "Gs. 150.000.000",
    tasaAhorro: "38.5%",
    ingresoMes: "Gs. 88.000.000",
    gastosFijos: "Gs. 24.500.000",
    gastosEstiloVida: "Gs. 13.800.000",
    inversionMes: "Gs. 35.500.000",
    disponibleMes: "Gs. 14.200.000",
    objetivos: [
      { name: "Inversión Inmobiliaria Asunción", target: "Gs. 350.000.000", current: "Gs. 245.000.000", progress: 70 },
      { name: "Fondo Universitario Niños", target: "Gs. 200.000.000", current: "Gs. 110.000.000", progress: 55 },
      { name: "Viaje Familiar Europa 2027", target: "Gs. 60.000.000", current: "Gs. 60.000.000", progress: 100 }
    ],
    alertas: [
      { type: "ok", text: "Fondo de tranquilidad de 6 meses completo al 100%." },
      { type: "info", text: "Sugerencia de eFI: Reorganizar Gs. 10.000.000 excedentes a fondo de liquidez de alto rendimiento." },
      { type: "ok", text: "Sin compromisos financieros imprevistos para este trimestre." }
    ]
  } : {
    name: "Familia M. Benítez",
    accountType: "eFI Family Care Member",
    patrimonioTotal: "Gs. 380.000.000",
    patrimonioVar: "+ 3.8%",
    flujoNeto: "Gs. 28.500.000",
    fondoReserva: "Gs. 90.000.000",
    tasaAhorro: "31.0%",
    ingresoMes: "Gs. 52.000.000",
    gastosFijos: "Gs. 18.000.000",
    gastosEstiloVida: "Gs. 9.500.000",
    inversionMes: "Gs. 16.000.000",
    disponibleMes: "Gs. 8.500.000",
    objetivos: [
      { name: "Fondo de Emergencia Familiar", target: "Gs. 90.000.000", current: "Gs. 90.000.000", progress: 100 },
      { name: "Renovación Vehículo Familiar", target: "Gs. 120.000.000", current: "Gs. 72.000.000", progress: 60 }
    ],
    alertas: [
      { type: "ok", text: "Presupuesto familiar del mes alineado al plan." },
      { type: "info", text: "Recordatorio eFI: Renovación de póliza de seguro médico en 30 días." }
    ]
  };

  return (
    <section id="portal-preview" className="py-24 relative overflow-hidden bg-efi-dark">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-glow pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-efi-gold/10 border border-efi-gold/30 text-efi-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-efi-gold" />
            El Momento WOW · Vista Previa del Portal
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-efi-sand mb-4">
            "El nivel de información que recibe un Gerente General de una multinacional"
          </h2>
          <p className="text-efi-muted text-base">
            Una plataforma privada y segura para visualizar tu salud financiera de un vistazo. Sin accesos a tus cuentas bancarias, con total privacidad.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="rounded-3xl border border-efi-gold/30 bg-efi-surface shadow-2xl overflow-hidden glass-panel-gold">
          
          {/* Top Browser/Portal Header */}
          <div className="bg-efi-card px-6 py-4 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left Status & Profile Info */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>

              <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-efi-gold" />
                <span className="text-xs text-efi-sand font-medium">
                  portal.efistudio.co <span className="text-efi-muted font-normal">(Portal Privado de Cliente)</span>
                </span>
              </div>
            </div>

            {/* Profile Switcher Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-efi-muted">Simular perfil:</span>
              <div className="bg-efi-dark/80 p-1 rounded-xl border border-white/10 flex gap-1">
                <button
                  onClick={() => setClientProfile('ejecutivo')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    clientProfile === 'ejecutivo' 
                      ? 'bg-efi-gold text-efi-dark shadow-sm' 
                      : 'text-efi-muted hover:text-efi-sand'
                  }`}
                >
                  Perfil Ejecutivo
                </button>
                <button
                  onClick={() => setClientProfile('familia')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    clientProfile === 'familia' 
                      ? 'bg-efi-gold text-efi-dark shadow-sm' 
                      : 'text-efi-muted hover:text-efi-sand'
                  }`}
                >
                  Perfil Familia
                </button>
              </div>
            </div>

          </div>

          {/* Inner Portal Body */}
          <div className="p-6 md:p-8 space-y-8">
            
            {/* Client Welcome Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-efi-card via-efi-surface to-efi-card border border-white/5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-efi-gold font-semibold uppercase tracking-wider">
                    {data.accountType}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-efi-gold"></span>
                  <span className="text-[11px] text-efi-gold font-medium">Estado: Al día (Agosto 2026)</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-efi-sand">
                  Bienvenido, {data.name}
                </h3>
                <p className="text-xs text-efi-muted">
                  Reporte mensual consolidado e indicadores ejecutivos.
                </p>
              </div>

              <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-6">
                <div className="text-left">
                  <span className="text-[10px] text-efi-muted uppercase tracking-wider block">Moneda de visualización</span>
                  <span className="text-xs font-bold text-efi-gold flex items-center gap-1">
                    Guaraníes Paraguayos (Gs.)
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs inside Dashboard */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('resumen')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'resumen' 
                    ? 'bg-efi-gold/20 text-efi-gold border border-efi-gold/40' 
                    : 'text-efi-muted hover:text-efi-sand hover:bg-white/5'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                1. Resumen Ejecutivo
              </button>

              <button
                onClick={() => setActiveTab('flujo')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'flujo' 
                    ? 'bg-efi-gold/20 text-efi-gold border border-efi-gold/40' 
                    : 'text-efi-muted hover:text-efi-sand hover:bg-white/5'
                }`}
              >
                <PieChart className="w-4 h-4" />
                2. Distribución de Flujo (Gs.)
              </button>

              <button
                onClick={() => setActiveTab('objetivos')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'objetivos' 
                    ? 'bg-efi-gold/20 text-efi-gold border border-efi-gold/40' 
                    : 'text-efi-muted hover:text-efi-sand hover:bg-white/5'
                }`}
              >
                <Target className="w-4 h-4" />
                3. Plan de Objetivos
              </button>

              <button
                onClick={() => setActiveTab('alertas')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'alertas' 
                    ? 'bg-efi-gold/20 text-efi-gold border border-efi-gold/40' 
                    : 'text-efi-muted hover:text-efi-sand hover:bg-white/5'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                4. Control & Tranquilidad
              </button>
            </div>

            {/* TAB CONTENT 1: RESUMEN EJECUTIVO */}
            {activeTab === 'resumen' && (
              <div className="space-y-6">
                
                {/* 4 Metric KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* KPI 1 */}
                  <div className="p-5 rounded-2xl bg-efi-card border border-white/10 hover:border-efi-gold/30 transition-all">
                    <span className="text-xs text-efi-muted uppercase font-medium block mb-1">
                      Patrimonio Líquido Consolidado
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-serif font-bold text-efi-sand">
                        {data.patrimonioTotal}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-2 font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {data.patrimonioVar} vs mes anterior
                    </span>
                  </div>

                  {/* KPI 2 */}
                  <div className="p-5 rounded-2xl bg-efi-card border border-white/10 hover:border-efi-gold/30 transition-all">
                    <span className="text-xs text-efi-muted uppercase font-medium block mb-1">
                      Flujo Neto Líquido del Mes
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-serif font-bold text-efi-gold">
                        {data.flujoNeto}
                      </span>
                    </div>
                    <span className="text-[11px] text-efi-muted block mt-2">
                      Capacidad total de asignación
                    </span>
                  </div>

                  {/* KPI 3 */}
                  <div className="p-5 rounded-2xl bg-efi-card border border-white/10 hover:border-efi-gold/30 transition-all">
                    <span className="text-xs text-efi-muted uppercase font-medium block mb-1">
                      Fondo de Tranquilidad (Reserva)
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-serif font-bold text-efi-sand">
                        {data.fondoReserva}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-2 font-medium">
                      ✓ 6 Meses de cobertura (100%)
                    </span>
                  </div>

                  {/* KPI 4 */}
                  <div className="p-5 rounded-2xl bg-efi-card border border-white/10 hover:border-efi-gold/30 transition-all">
                    <span className="text-xs text-efi-muted uppercase font-medium block mb-1">
                      Tasa de Ahorro / Inversión
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-serif font-bold text-efi-gold">
                        {data.tasaAhorro}
                      </span>
                    </div>
                    <span className="text-[11px] text-efi-muted block mt-2">
                      Sobre ingresos totales netos
                    </span>
                  </div>

                </div>

                {/* Premium Area Curve Chart Visual (Section 4ter Redesign) */}
                <div className="p-6 rounded-2xl bg-efi-card/90 border border-efi-gold/30 shadow-2xl relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-efi-sand">
                        Evolución de Liquidez & Capacidad Patrimonial
                      </h4>
                      <p className="text-xs text-efi-muted">Tendencia de flujo libre y acumulación mensual</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-efi-gold bg-efi-gold/10 px-3 py-1 rounded-full border border-efi-gold/30 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-efi-gold animate-pulse"></span>
                        Power BI Executive View
                      </span>
                    </div>
                  </div>

                  {/* SVG Area Chart */}
                  <div className="relative h-48 w-full pt-4">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="goldGradientArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="goldStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#9C7F53" />
                          <stop offset="50%" stopColor="#C9A84C" />
                          <stop offset="100%" stopColor="#E5D298" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path
                        d="M 0,110 Q 80,100 160,85 T 320,50 T 500,20 L 500,150 L 0,150 Z"
                        fill="url(#goldGradientArea)"
                      />

                      {/* Glowing Line Stroke */}
                      <path
                        d="M 0,110 Q 80,100 160,85 T 320,50 T 500,20"
                        fill="none"
                        stroke="url(#goldStrokeGrad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Data Points */}
                      {[
                        { cx: 0, cy: 110, month: 'Mar' },
                        { cx: 100, cy: 95, month: 'Abr' },
                        { cx: 200, cy: 75, month: 'May' },
                        { cx: 300, cy: 55, month: 'Jun' },
                        { cx: 400, cy: 35, month: 'Jul' },
                        { cx: 500, cy: 20, month: 'Ago' },
                      ].map((pt, i) => (
                        <g key={i} className="group cursor-pointer">
                          <circle
                            cx={pt.cx}
                            cy={pt.cy}
                            r="5"
                            className="fill-efi-dark stroke-efi-gold stroke-[3] group-hover:r-7 transition-all"
                          />
                        </g>
                      ))}
                    </svg>
                  </div>

                  {/* Month X-Axis Labels */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs text-efi-muted font-medium">
                    <span>Mar 2026</span>
                    <span>Abr 2026</span>
                    <span>May 2026</span>
                    <span>Jun 2026</span>
                    <span>Jul 2026</span>
                    <span className="text-efi-gold font-bold">Ago 2026 (Actual)</span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB CONTENT 2: DISTRIBUCIÓN DE FLUJO */}
            {activeTab === 'flujo' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Detailed Expense Breakdown Card */}
                  <div className="p-6 rounded-2xl bg-efi-card border border-white/10">
                    <h4 className="text-lg font-serif font-semibold text-efi-sand mb-4">
                      Desglose de Salida Mensual
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-efi-sand font-medium">Gastos Fijos & Estructura del Hogar</span>
                          <span className="text-efi-gold font-mono">{data.gastosFijos}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <div className="bg-efi-gold h-full w-[40%] rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-efi-sand font-medium">Estilo de Vida Discrecional</span>
                          <span className="text-efi-gold font-mono">{data.gastosEstiloVida}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <div className="bg-yellow-500/80 h-full w-[25%] rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-efi-sand font-medium">Construcción de Patrimonio & Inversión</span>
                          <span className="text-efi-gold font-mono">{data.inversionMes}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[35%] rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-efi-sand font-medium">Remanente Líquido Disponible</span>
                          <span className="text-efi-gold font-mono">{data.disponibleMes}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-400/80 h-full w-[15%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-6 rounded-2xl bg-efi-card border border-white/10 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-efi-sand mb-3">
                        Criterio de Asignación Boutique
                      </h4>
                      <p className="text-xs text-efi-muted leading-relaxed mb-4">
                        A diferencia de las planillas genéricas, en eFI separaremos estrictamente tus gastos estructurales de tus metas patrimoniales, garantizando que tu estilo de vida no comprometa tu libertad futura.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-efi-muted uppercase font-semibold block mb-1">
                        Ingreso Neto del Mes Evaluado
                      </span>
                      <span className="text-xl font-serif font-bold text-efi-gold">
                        {data.ingresoMes}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB CONTENT 3: PLAN DE OBJETIVOS */}
            {activeTab === 'objetivos' && (
              <div className="space-y-4">
                <h4 className="text-lg font-serif font-semibold text-efi-sand mb-2">
                  Metas Financieras y Avance del Patrimonio (Gs.)
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.objetivos.map((obj, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-efi-card border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-efi-sand">{obj.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          obj.progress === 100 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-efi-gold/20 text-efi-gold border border-efi-gold/30'
                        }`}>
                          {obj.progress}%
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] text-efi-muted">
                          <span>Acumulado: <strong className="text-efi-sand">{obj.current}</strong></span>
                          <span>Meta: {obj.target}</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <div 
                            style={{ width: `${obj.progress}%` }} 
                            className={`h-full rounded-full ${obj.progress === 100 ? 'bg-emerald-400' : 'bg-efi-gold'}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: ALERTAS Y TRANQUILIDAD */}
            {activeTab === 'alertas' && (
              <div className="space-y-4">
                <h4 className="text-lg font-serif font-semibold text-efi-sand mb-2">
                  Puntos de Control & Tranquilidad Operativa
                </h4>

                <div className="space-y-3">
                  {data.alertas.map((al, i) => (
                    <div key={i} className="p-4 rounded-xl bg-efi-card border border-white/10 flex items-start gap-3">
                      {al.type === 'ok' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <Sparkles className="w-5 h-5 text-efi-gold shrink-0 mt-0.5" />
                      )}
                      <p className="text-xs text-efi-sand leading-relaxed">
                        {al.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Footer Note inside Portal */}
            <div className="p-4 rounded-xl bg-efi-dark/60 border border-efi-gold/20 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-efi-muted flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-efi-gold" />
                Vista previa conceptual interactiva para clientes eFI Studio. Todos los datos son confidenciales y están cifrados.
              </span>
              <a 
                href="#servicios"
                className="text-xs font-semibold text-efi-gold hover:text-efi-gold-light transition-colors whitespace-nowrap"
              >
                Quiero tener mi propio portal →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
