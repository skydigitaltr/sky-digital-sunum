export default function Page() {
  const contents = [
    "Giriş",
    "SKY DIGITAL Hakkında",
    "Neden Biz?",
    "Hizmetlerimiz",
    "Kurumsal Web Sitesi Paket Teklifi",
    "E-Ticaret Paket Teklifi",
    "Sosyal Medya Danışmanlığı",
    "Email ve Altyapı",
    "Fiyatlandırma",
    "Süreç ve Teslimat",
    "İletişim",
  ];

  const webFeatures = [
    "Kurumsal Web Sitesi Tasarımı",
    "SSL Güvenlik Sertifikası (HTTPS)",
    "Sınırsız Trafik Desteği",
    "Temel SEO Optimizasyonu",
    "Amazon Bulut Sunucu Altyapısı",
    "AWS Firewall Güvenlik Duvarı",
    "DDoS Saldırılarına Karşı Rate Limiter Koruması",
    "1000 Sayfa Oluşturma",
    "2500 Dosya Yükleme",
  ];

  const ecommerceFeatures = [
    "SEO Denetleme ve Analiz Sistemi",
    "1000 Adet Ürün Yükleme",
    "5000 Adet Ürün Görseli Yükleme",
    "2000 Sayfa Oluşturma",
    "5000 Dosya Yükleme",
    "Gelişmiş E-Ticaret Altyapısı",
    "Entegre E-Tahsilat Sistemi",
    "Hazır Sanal POS Entegrasyonu",
    "SSL Güvenlik Sertifikası",
    "Sınırsız Trafik Desteği",
    "AWS Firewall Güvenlik Duvarı",
    "DDoS Saldırılarına Karşı Rate Limiter Koruması",
    "Tüm SEO Araçları Dahil",
  ];

  const mailFeatures = [
    "%99,9 çalışma süresi",
    "Spam ve virüs filtreleme",
    "Güvenli veri depolama",
    "Sınırsız e-posta takma adı",
    "35 MB ek sınırı",
    "Kişiler ve takvim desteği",
    "Dosya paylaşımı",
    "Her e-posta hesabı için 5 GB ve üzeri alan",
    "Modern webmail arayüzü",
    "Outlook, Gmail ve benzeri istemcilerle kolay entegrasyon",
  ];

  const reasons = [
    "Modern ve premium tasarım yaklaşımı",
    "Güçlü altyapı ve güvenlik sistemleri",
    "Uzun vadeli teknik destek ve süreklilik",
    "İşletmeye özel, ölçeklenebilir çözümler",
  ];

  const services = [
    {
      title: "Kurumsal Web Sitesi",
      text: "Markanızı profesyonel şekilde temsil eden modern, hızlı ve güvenli web sitesi çözümleri.",
    },
    {
      title: "E-Ticaret Altyapısı",
      text: "Satış odaklı, SEO destekli ve ödeme sistemleriyle entegre profesyonel e-ticaret çözümleri.",
    },
    {
      title: "Sosyal Medya Danışmanlığı",
      text: "İçerik planlama, marka görünürlüğü ve kurumsal iletişim için stratejik sosyal medya desteği.",
    },
    {
      title: "Dijital Danışmanlık",
      text: "Altyapı, domain, email, güvenlik ve dijital büyüme süreçlerinde profesyonel yönlendirme.",
    },
  ];

  const webPricing = [
    { title: "1 Yıllık Paket", price: "150 USD", badge: "Standart" },
    { title: "3 Yıllık Paket", price: "360 USD", badge: "Avantajlı" },
    { title: "5 Yıllık Paket", price: "550 USD", badge: "En Avantajlı", featured: true },
  ];

  const summaryCards = [
    {
      title: "Kurumsal Web Sitesi",
      price: "10.000 TL",
      sub: "Kurulum + yıllık paket seçenekleri",
    },
    {
      title: "E-Ticaret Sitesi",
      price: "25.000 TL",
      sub: "Başlangıç fiyatı + 150 USD yıllık yenileme",
    },
    {
      title: "Sosyal Medya Danışmanlığı",
      price: "20.000 TL",
      sub: "Aylık başlangıç fiyatı",
    },
  ];

  const process = [
    "İhtiyaç analizi ve tekliflendirme",
    "Tasarım ve içerik planlaması",
    "Kurulum, test ve yayın öncesi kontroller",
    "Teslim, yayın ve teknik destek süreci",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <BackgroundGlow />

      <section className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-white/55">
              SKY DIGITAL
            </p>

            <h1 className="max-w-5xl text-[54px] font-black uppercase leading-[0.9] tracking-tight sm:text-[84px] lg:text-[118px]">
              Teklif
              <br />
              Sunum
              <br />
              Sitesi
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Kurumsal web sitesi, e-ticaret ve dijital danışmanlık çözümleri için
              hazırlanmış modern, güvenli ve premium hizmet sunumu.
            </p>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 text-sm text-white/70 sm:grid-cols-3">
            <InfoMini label="Hazırlayan" value="SKY DIGITAL" />
            <InfoMini label="Telefon" value="+90 505 570 36 91" />
            <InfoMini label="E-Posta" value="info@skydigitaltr.com" />
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="grid gap-5 md:grid-cols-[0.88fr_1.12fr]">
              <div className="rounded-[1.75rem] bg-gradient-to-b from-white/10 to-white/5 p-5">
                <div className="aspect-[3/4] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03))] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-black/10 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Premium Proposal
                      </p>
                      <div className="mt-5 h-28 w-28 rounded-full bg-white/10 blur-sm" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">SKY</p>
                      <p className="text-4xl font-black uppercase leading-none">
                        DIGITAL
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-[1.75rem] bg-black/20 p-5">
                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/50">
                  Table of Contents
                </p>
                <div className="space-y-3">
                  {contents.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-3 text-sm text-white/80 sm:text-base"
                    >
                      <span className="font-medium text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-right uppercase tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section kicker="01" title="SKY DIGITAL Hakkında">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="text-lg leading-8 text-white/75">
              SKY DIGITAL, işletmeler için profesyonel web tasarım, e-ticaret
              altyapısı, kurumsal email çözümleri ve dijital danışmanlık hizmetleri
              sunar.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/55">
              Hedefimiz; müşterilerimize sadece bir web sitesi değil, güven veren,
              dönüşüm odaklı ve sürdürülebilir bir dijital yapı sunmaktır.
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard value="Modern" label="tasarım yaklaşımı" />
            <StatCard value="Güvenli" label="altyapı ve koruma" />
            <StatCard value="Hızlı" label="performans ve yayın" />
            <StatCard value="Sürekli" label="destek ve bakım" />
          </div>
        </div>
      </Section>

      <Section kicker="02" title="Neden Biz?">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => (
            <InfoCard
              key={item}
              title={item}
              text="İşletmenize güven veren, profesyonel ve net çözümler sunarız."
            />
          ))}
        </div>
      </Section>

      <Section kicker="03" title="Hizmetlerimiz">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <InfoCard key={service.title} title={service.title} text={service.text} />
          ))}
        </div>
      </Section>

      <Section kicker="04" title="Kurumsal Web Sitesi Paket Teklifi">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <SmallTitle>Paket İçeriği</SmallTitle>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {webFeatures.map((item) => (
                <ListChip key={item}>{item}</ListChip>
              ))}
            </div>
          </Card>

          <Card highlight>
            <SmallTitle className="text-cyan-200">Kurulum Bedeli</SmallTitle>
            <h3 className="mt-4 text-4xl font-black">10.000 TL</h3>
            <p className="mt-4 leading-8 text-white/70">
              Kurulum ve lisans bedeline modern tasarım, güvenlik, temel SEO ve
              profesyonel yayın altyapısı dahildir.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm text-white/45">Yıllık Paket Seçenekleri</div>
              <div className="mt-4 grid gap-3">
                {webPricing.map((plan) => (
                  <div
                    key={plan.title}
                    className={`rounded-2xl border px-4 py-4 ${
                      plan.featured
                        ? "border-cyan-300/30 bg-cyan-300/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">{plan.title}</span>
                      <span className="text-lg font-black">{plan.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section kicker="05" title="E-Ticaret Paket Teklifi">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <p className="text-lg leading-8 text-white/75">
              İşletmeniz için modern, hızlı ve güvenli bir e-ticaret altyapısı
              sunuyoruz. Üyeliksiz sipariş verebilme özelliği, gelişmiş güvenlik
              sistemleri ve güçlü SEO araçları ile rakiplerinizin önüne
              geçebilirsiniz.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ecommerceFeatures.map((item) => (
                <ListChip key={item}>{item}</ListChip>
              ))}
            </div>
          </Card>

          <Card highlight>
            <SmallTitle className="text-cyan-200">Fiyatlandırma</SmallTitle>
            <h3 className="mt-4 text-4xl font-black">25.000 TL</h3>
            <p className="mt-2 text-white/65">Kurulum ve lisans bedeli</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm text-white/45">Yıllık Yenileme Bedeli</div>
              <div className="mt-2 text-2xl font-bold">150 USD</div>
            </div>

            <p className="mt-6 leading-8 text-white/70">
              Yenileme ve kurulum bedeline hosting, SSL sertifikası, güvenlik
              güncellemeleri ve sistem sürekliliği dahildir.
            </p>
          </Card>
        </div>
      </Section>

      <Section kicker="06" title="Sosyal Medya Danışmanlığı">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                title="İçerik Planlama"
                text="Marka kimliğine uygun paylaşım düzeni ve içerik akışı oluşturulur."
              />
              <InfoCard
                title="Hesap Yönetimi"
                text="Kurumsal görünüm, istikrar ve düzenli içerik yapısı sağlanır."
              />
              <InfoCard
                title="Stratejik Danışmanlık"
                text="Görünürlük, hedef kitle ve büyüme için yönlendirme sunulur."
              />
            </div>
          </Card>

          <Card highlight>
            <SmallTitle className="text-cyan-200">Başlangıç Fiyatı</SmallTitle>
            <h3 className="mt-4 text-4xl font-black">20.000 TL</h3>
            <p className="mt-2 text-white/65">Aylık sosyal medya danışmanlığı</p>
            <p className="mt-6 leading-8 text-white/70">
              Hizmet kapsamı marka hedeflerine, içerik yoğunluğuna ve reklam
              süreçlerine göre özel olarak şekillendirilebilir.
            </p>
          </Card>
        </div>
      </Section>

      <Section kicker="07" title="Email ve Altyapı">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <SmallTitle>Kurumsal Email Hizmeti</SmallTitle>
            <h3 className="mt-4 text-3xl font-bold">
              Modern bulut altyapısı ile güvenli kurumsal iletişim
            </h3>
            <p className="mt-4 leading-8 text-white/70">
              Verileriniz birinci sınıf güvenlik ve yüksek erişilebilirlik ile modern
              bulut sunucu mimarisi üzerinde çalışır.
            </p>

            <div className="mt-6 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-5">
              4 adet kurumsal email hesabı · Kişi başı 15 GB alan
            </div>
          </Card>

          <div className="grid gap-3">
            {mailFeatures.map((item) => (
              <ListChip key={item}>{item}</ListChip>
            ))}
          </div>
        </div>
      </Section>

      <Section kicker="08" title="Fiyatlandırma Özeti">
        <div className="grid gap-5 lg:grid-cols-3">
          {summaryCards.map((card, index) => (
            <div
              key={card.title}
              className={`rounded-[2rem] border p-8 ${
                index === 1
                  ? "border-cyan-400/35 bg-gradient-to-b from-cyan-400/15 to-white/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                {card.title}
              </div>
              <div className="mt-6 text-5xl font-black">{card.price}</div>
              <p className="mt-4 leading-8 text-white/70">{card.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="09" title="Süreç ve Teslimat">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <SmallTitle>Ödeme ve Teslim Süresi</SmallTitle>
            <p className="mt-4 leading-8 text-white/70">
              Toplam bedelin %50’si iş başlangıcında, kalan tutar iş tesliminde yayın
              öncesi nakit havale şeklinde alınır.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Proje; ana dil için 3 iş günü, ilave her dil için yine 3 iş günü içinde
              tamamlanır. Bu süreye revize talepleri, doküman/tercüme temini ve onay
              aşamasındaki gecikmeler dahil değildir.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Tercüme hizmetimiz bulunmaktadır.
            </p>
          </Card>

          <Card>
            <SmallTitle>Ekstra Dil ve Teknik Notlar</SmallTitle>
            <p className="mt-4 leading-8 text-white/70">
              Her ek dil, ayrı birer web sitesi olarak hazırlanmaktadır. Teklif
              dışındaki her ilave dil için hosting 70 USD ve tercümelerin eklenmesi /
              site üretim bedeli 1.000 TL’dir.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Kodlama, merkezi yazılımda mevcut teknik özelliklere göre yapılır.
              Tasarım, tema marketinden seçilen yerleşim planının müşteri ihtiyacına
              göre uyarlanmasıyla hazırlanır.
            </p>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => (
            <div
              key={step}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm text-white/40">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-4 md:px-10 lg:px-16 lg:pb-24">
        <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 sm:p-10 lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            İletişim
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">
            Projeye başlamak için hazırız.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Teklif detayları, kapsam ve teslim süreci için bizimle doğrudan iletişime
            geçebilirsiniz.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="https://wa.me/905055703691"
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white px-6 py-5 text-black transition hover:scale-[1.01]"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-black/50">
                Telefon / WhatsApp
              </div>
              <div className="mt-2 text-xl font-bold">+90 505 570 36 91</div>
            </a>

            <a
              href="mailto:info@skydigitaltr.com"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:bg-white/10"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                E-Posta
              </div>
              <div className="mt-2 text-xl font-bold">info@skydigitaltr.com</div>
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="https://skydigitaltasarimlar.yoneticigirisi.com"
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:bg-white/10"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                Tema Marketimiz
              </div>
              <div className="mt-2 text-base font-semibold break-all">
                skydigitaltasarimlar.yoneticigirisi.com
              </div>
            </a>

            <a
              href="https://skydigitaltr.com/"
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:bg-white/10"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                Web Sitemiz
              </div>
              <div className="mt-2 text-base font-semibold break-all">
                skydigitaltr.com
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute top-[28%] left-[8%] h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-24 right-[16%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
    </div>
  );
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16 lg:py-14">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-white/35">{kicker}</p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Card({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] border p-8 ${
        highlight
          ? "border-cyan-400/25 bg-gradient-to-b from-cyan-400/10 to-white/5"
          : "border-white/10 bg-white/5"
      }`}
    >
      {children}
    </div>
  );
}

function InfoMini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="text-white/40">{label}</div>
      <div className="mt-2 font-medium text-white break-all">{value}</div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-white/65">{text}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-black uppercase">{value}</div>
      <div className="mt-2 text-sm text-white/55">{label}</div>
    </div>
  );
}

function SmallTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm uppercase tracking-[0.3em] text-white/45 ${className}`}>
      {children}
    </p>
  );
}

function ListChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">
      ✓ {children}
    </div>
  );
}
