import Image from 'next/image';
import { Phone, MapPin, Star, ShieldCheck, Wrench, Truck, Droplets, ArrowRight } from 'lucide-react';

const products = [
  { name: 'Bombas hidráulicas', image: '/producto1.jpg' },
  { name: 'Válvulas industriales', image: '/producto2.jpg' },
  { name: 'Controladores automáticos', image: '/producto3.jpg' },
  { name: 'Componentes hidráulicos', image: '/producto4.jpg' },
  { name: 'Conectores industriales', image: '/producto5.jpg' },
  { name: 'Accesorios especializados', image: '/producto6.jpg' },
  { name: 'Tubería industrial', image: '/producto7.jpg' },
  { name: 'Equipos técnicos', image: '/producto8.jpg' },
  { name: 'Repuestos industriales', image: '/producto9.jpg' },
  { name: 'Motores especializados', image: '/producto10.jpg' },
  { name: 'Instrumentación', image: '/producto11.jpg' },
  { name: 'Sistemas de presión', image: '/producto12.jpg' },
  { name: 'Equipamiento técnico', image: '/producto13.jpg' },
  { name: 'Motores industriales', image: '/producto14.jpg' },
  { name: 'Perforadora principal', image: '/producto15.jpg' },
  { name: 'Maquinaria pesada', image: '/producto16.jpg' },
  { name: 'Bombas especializadas', image: '/producto17.jpg' },
];

const services = [
  'Perforación profesional de pozos de agua',
  'Venta de maquinaria especializada',
  'Repuestos y accesorios industriales',
  'Soluciones hidráulicas',
  'Asesoría técnica',
  'Atención a empresas y particulares',
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={60} height={60} className="object-contain rounded-xl" />
            <div>
              <h1 className="font-black text-cyan-300 text-lg md:text-xl">CHAVEZ'PERFORACIONES HN</h1>
              <p className="text-xs md:text-sm text-slate-300">Sonaguera, Colón, Honduras</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 font-semibold text-sm">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative min-h-screen flex items-center scroll-mt-24">
        <Image src="/producto15.jpg" alt="hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-300 font-bold tracking-widest text-sm">SOLUCIONES INDUSTRIALES</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mt-4">Expertos en perforación y soluciones hidráulicas</h2>
            <p className="mt-6 text-slate-200 text-lg leading-8">Brindamos soluciones profesionales en perforación de pozos, maquinaria, repuestos y equipamiento especializado en Honduras.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/50488028854" target="_blank" className="bg-green-500 text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-2">Cotizar <ArrowRight size={18} /></a>
              <a href="#catalogo" className="border border-cyan-300 text-cyan-300 px-6 py-4 rounded-2xl font-bold">Explorar catálogo</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['Cobertura nacional', ShieldCheck],
              ['Atención técnica', Wrench],
              ['Logística rápida', Truck],
              ['Soluciones de agua', Droplets],
            ].map(([label, Icon]: any) => (
              <div key={label} className="bg-white/10 border border-cyan-400/20 backdrop-blur rounded-3xl p-6">
                <Icon className="text-cyan-300 mb-4" />
                <p className="font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-4">
          {['2+ años', 'Cobertura nacional', 'Empresas y particulares', 'Compromiso total'].map((s) => (
            <div key={s} className="bg-slate-900 border border-cyan-500/10 rounded-3xl p-6 text-center font-bold text-cyan-300">{s}</div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <h3 className="text-4xl md:text-5xl font-black text-cyan-300">Nuestra Historia</h3>
        <p className="mt-6 text-slate-300 text-lg leading-8 max-w-5xl">Nuestra empresa nació hace aproximadamente 2 años en Sonaguera, Colón, con el propósito de brindar soluciones efectivas en perforación de pozos de agua y suministro de maquinaria especializada. Como negocio familiar, atendemos empresas privadas y clientes particulares en todo el territorio nacional.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-slate-900 rounded-3xl p-8 border border-cyan-500/10">
            <h4 className="text-2xl font-bold text-cyan-300">Misión</h4>
            <p className="mt-4 text-slate-300 leading-7">Brindar soluciones integrales en perforación de pozos de agua y suministro especializado con calidad, eficiencia y compromiso.</p>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 border border-cyan-500/10">
            <h4 className="text-2xl font-bold text-cyan-300">Visión</h4>
            <p className="mt-4 text-slate-300 leading-7">Ser líderes nacionales en perforación y soluciones hidráulicas, reconocidos por excelencia e innovación.</p>
          </div>
        </div>
      </section>

      <section id="servicios" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <h3 className="text-4xl md:text-5xl font-black text-center text-cyan-300">Servicios</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div key={service} className="bg-slate-900 rounded-3xl p-8 border border-cyan-500/10 hover:-translate-y-2 transition duration-300">
              <h4 className="font-bold text-xl">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <h3 className="text-4xl md:text-5xl font-black text-center text-cyan-300">Catálogo Especializado</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((p) => (
            <div key={p.image} className="bg-slate-900 rounded-3xl overflow-hidden border border-cyan-500/10 hover:-translate-y-2 transition duration-300">
              <Image src={p.image} alt={p.name} width={500} height={320} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-lg">{p.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <h3 className="text-4xl md:text-5xl font-black text-cyan-300">Contacto</h3>
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-lg"><Phone className="text-cyan-300" /> +504 8802-8854</div>
            <div className="flex items-center gap-4 text-lg"><MapPin className="text-cyan-300" /> Sonaguera, Colón, Honduras</div>
            <a href="https://www.google.com/maps?q=15.60976,-86.27517" target="_blank" className="inline-block bg-cyan-400 text-black px-6 py-4 rounded-2xl font-bold">Cómo llegar</a>
            <div>
              <p className="font-bold mb-3">Califícanos</p>
              <div className="flex gap-2">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" />)}</div>
            </div>
          </div>
          <iframe className="w-full h-96 rounded-3xl border border-cyan-500/10" src="https://www.google.com/maps?q=15.60976,-86.27517&z=15&output=embed" loading="lazy" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl md:text-5xl font-black text-center text-cyan-300">Lo que opinan nuestros clientes</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            'Excelente atención y servicio profesional.',
            'Muy responsables con los proyectos de perforación.',
            'Equipos de calidad y soporte técnico confiable.',
          ].map((t) => (
            <div key={t} className="bg-slate-900 rounded-3xl p-8 border border-cyan-500/10">
              <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />)}</div>
              <p className="text-slate-300">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-cyan-500/10 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-black text-cyan-300 text-xl">CHAVEZ'PERFORACIONES HN</h4>
            <p className="text-slate-400 mt-3">Soluciones industriales y perforación profesional en Honduras.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Perforación</li>
              <li>Maquinaria</li>
              <li>Repuestos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contacto</h4>
            <ul className="space-y-2 text-slate-400">
              <li>+504 8802-8854</li>
              <li>Sonaguera, Colón</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Enlaces</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/50488028854" target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-black px-5 py-4 rounded-full font-bold shadow-2xl z-50">WhatsApp</a>
    </main>
  );
}
