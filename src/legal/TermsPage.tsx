import { LegalLayout, Section } from './LegalLayout';
import { APP_NAME, COMPANY_NAME, CONTACT_EMAIL, PRIVACY_PATH } from './company';

// Plan limitleri backend/constants.js (TIER_LIMITS) ile aynı olmalı: ücretsiz 3 ürün / 5 dk / 48 saat bekleme,
// Premium sınırsız / 1 dk / bekleme yok. Oradaki değerler değişirse burası ve web ana sayfasındaki
// "Fiyatlandırma" bölümü (App.tsx PLAN_FEATURES) da güncellenmeli.
export function TermsPage() {
  return (
    <LegalLayout
      title="Kullanım Koşulları"
      intro={`Bu koşullar, ${COMPANY_NAME} tarafından sunulan ${APP_NAME} iOS ve Android uygulamasının ve ilgili web sitesinin kullanımını düzenler. Uygulamayı indirerek veya kullanarak bu koşulları kabul etmiş olursun. Kabul etmiyorsan lütfen uygulamayı kullanma.`}
    >
      <Section id="hizmet" title="1. Hizmetin tanımı">
        <p>
          {APP_NAME}, kullanıcıların mağaza sitelerindeki ürünlerin fiyat ve stok durumunu takip etmesini ve değişiklik olduğunda
          bildirim almasını sağlar. Şu anda Zara, H&amp;M, Bershka, Mango, Pull&amp;Bear, Massimo Dutti, Stradivarius ve Oysho
          desteklenir; liste değişebilir.
        </p>
        <p className="legal-note">
          {APP_NAME} bir alışveriş mağazası değildir ve satış yapmaz. Adı geçen markalarla ticari ya da kurumsal bir bağımız,
          onayımız veya ortaklığımız yoktur. Marka adları ve logoları ilgili sahiplerine aittir ve yalnızca desteklenen
          mağazaları belirtmek için kullanılır. Satın alma işlemin tamamen ilgili mağaza ile aranda gerçekleşir.
        </p>
      </Section>

      <Section id="dogruluk" title="2. Bilgilerin doğruluğu ve bildirimler">
        <ul>
          <li>
            Fiyat, stok, beden ve görsel bilgileri mağazaların herkese açık sayfalarından <strong>otomatik</strong> olarak alınır.
            Mağaza sayfaları değişebilir, geçici olarak erişilemeyebilir; bu nedenle bilgiler gecikmeli, eksik veya hatalı olabilir.
          </li>
          <li>
            Bildirimlerin zamanında ya da hiç ulaşacağını garanti edemeyiz; bildirimler Apple/Google altyapısına, internet
            bağlantına ve cihazının ayarlarına bağlıdır. Belirtilen kontrol süreleri hedeftir, taahhüt değildir.
          </li>
          <li>
            <strong>Satın almadan önce fiyatı, stoğu ve kampanya koşullarını mutlaka mağazanın kendi sayfasında doğrula.</strong>{' '}
            Bir bildirime dayanarak yaptığın alışverişten ya da kaçırdığın bir fırsattan {COMPANY_NAME} sorumlu değildir.
          </li>
        </ul>
      </Section>

      <Section id="planlar" title="3. Ücretsiz plan ve Premium">
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th></th>
                <th>Ücretsiz</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aynı anda takip edilen ürün</td>
                <td data-label="Ücretsiz">En fazla 3</td>
                <td data-label="Premium">Sınırsız</td>
              </tr>
              <tr>
                <td>Hedef kontrol sıklığı</td>
                <td data-label="Ücretsiz">Yaklaşık 5 dakika</td>
                <td data-label="Premium">Yaklaşık 1 dakika</td>
              </tr>
              <tr>
                <td>Takipten çıkardıktan sonra yeni ürün ekleme</td>
                <td data-label="Ücretsiz">48 saat bekleme</td>
                <td data-label="Premium">Bekleme yok</td>
              </tr>
              <tr>
                <td>Fiyat ve stok bildirimleri</td>
                <td data-label="Ücretsiz">Var</td>
                <td data-label="Premium">Var</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Aynı ürünün farklı beden veya renkleri tek ürün olarak sayılır. Plan özelliklerini ve limitlerini makul bir
          gerekçeyle değiştirebiliriz; mevcut ödenmiş dönemini etkileyecek esaslı bir azaltma yapmayız.
        </p>
      </Section>

      <Section id="abonelik" title="4. Premium abonelik, yenileme ve iptal">
        <ul>
          <li>
            Premium; haftalık, aylık ve yıllık seçeneklerle, uygulamada gösterilen fiyatla satılır. Fiyat ve para birimi
            bulunduğun ülkeye göre App Store veya Google Play'de satın alma ekranında gösterilir; onayladığın tutar geçerlidir.
          </li>
          <li>
            Ödeme, satın almayı onayladığında <strong>Apple Kimliği</strong> (iOS) veya <strong>Google Play hesabına</strong>{' '}
            (Android) yansıtılır. Ödeme bilgilerini biz görmeyiz ve işlemeyiz.
          </li>
          <li>
            Abonelik, mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece <strong>otomatik olarak yenilenir</strong>;
            yenileme ücreti dönem bitiminden önceki 24 saat içinde hesabından tahsil edilebilir.
          </li>
          <li>
            Mağazada ücretsiz deneme sunulduğunda, deneme bitmeden iptal etmezsen abonelik seçtiğin ücretli plana geçer. Deneme
            süresinin kullanılmayan kısmı, ücretli abonelik satın alındığında geçersiz olur.
          </li>
        </ul>
        <h3>Aboneliği nasıl iptal edersin?</h3>
        <p>
          Aboneliği yalnızca satın aldığın mağaza üzerinden iptal edebilirsin; uygulamayı silmek aboneliği iptal etmez:
        </p>
        <ul>
          <li>
            <strong>iPhone / iPad:</strong> Ayarlar → Adın (Apple Kimliği) → Abonelikler → {APP_NAME} → Aboneliği İptal Et.
          </li>
          <li>
            <strong>Android:</strong> Google Play Store → Profil simgesi → Ödemeler ve abonelikler → Abonelikler → {APP_NAME} →
            Aboneliği iptal et.
          </li>
        </ul>
        <p>
          İptal, içinde bulunduğun ödenmiş dönemin sonunda geçerli olur; o zamana kadar Premium'dan yararlanmaya devam edersin.
          Yeni bir cihaza geçtiğinde ya da uygulamayı yeniden kurduğunda <strong>Satın Alımları Geri Yükle</strong> seçeneğiyle
          aboneliğini yeniden bağlayabilirsin.
        </p>
      </Section>

      <Section id="iade" title="5. İade">
        <p>
          Ödemeler Apple ve Google tarafından alındığı için iadeler de onların politika ve süreçlerine tabidir; ödemeler üzerinde
          iade yetkimiz bulunmaz. İade talebini iOS'ta{' '}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">
            reportaproblem.apple.com
          </a>{' '}
          üzerinden Apple'a, Android'de Google Play'in iade ve destek sayfaları üzerinden Google'a iletebilirsin. Tüketici olarak
          kanundan doğan haklarının (ör. cayma hakkı) saklı olduğunu ve bunların mağazanın uygulama süreçleri üzerinden
          kullanıldığını hatırlatırız.
        </p>
      </Section>

      <Section id="kurallar" title="6. Kullanım kuralları">
        <p>Uygulamayı kişisel ve ticari olmayan amaçlarla kullanabilirsin. Şunları yapmamayı kabul edersin:</p>
        <ul>
          <li>
            Hizmeti otomatik araçlarla (bot, tarayıcı, betik) kullanmak, toplu veya aşırı istek göndermek, altyapıya yük bindirmek
            ya da hizmetin işleyişini bozmaya çalışmak,
          </li>
          <li>Uygulamayı veya sunucuları tersine mühendislikle çözmeye, güvenlik önlemlerini aşmaya çalışmak,</li>
          <li>
            Plan limitlerini veya bekleme süresini aşmak için sahte, çoklu veya yeniden oluşturulan hesap/kimlik kullanmak,
          </li>
          <li>Başkalarına ait verilere veya hesaplara erişmeye çalışmak,</li>
          <li>Hizmeti hukuka aykırı bir amaçla veya mağazaların kullanım şartlarını ihlal edecek şekilde kullanmak.</li>
        </ul>
      </Section>

      <Section id="askiya" title="7. Askıya alma ve sonlandırma">
        <p>
          Bu koşulları ihlal ettiğini, hizmeti kötüye kullandığını veya yasa dışı bir kullanım yaptığını tespit edersek erişimini
          sınırlayabilir, askıya alabilir veya sonlandırabiliriz. İstediğin zaman uygulamayı kullanmayı bırakabilir ve verilerinin
          silinmesini isteyebilirsin (bkz. <a href={PRIVACY_PATH}>Gizlilik Politikası</a>).
        </p>
      </Section>

      <Section id="fikri-mulkiyet" title="8. Fikri mülkiyet">
        <p>
          Uygulamanın tasarımı, yazılımı, adı ve logosu {COMPANY_NAME}'ye aittir ve ilgili mevzuatla korunur. Sana yalnızca
          uygulamayı kişisel kullanım için yüklemek ve çalıştırmak üzere kişiye özel, devredilemez, münhasır olmayan bir kullanım
          hakkı verilir. Üçüncü kişilerin marka, ürün adı ve görselleri ilgili sahiplerine aittir.
        </p>
      </Section>

      <Section id="sorumluluk" title="9. Sorumluluğun sınırlandırılması">
        <p>
          Hizmet “olduğu gibi” ve “mevcut haliyle” sunulur. Kesintisiz, hatasız veya her zaman erişilebilir olacağını, bilgilerin
          tam doğru olacağını taahhüt etmeyiz. Hizmetin kullanımından veya kullanılamamasından doğan dolaylı zararlar, kâr kaybı,
          kaçırılan fırsatlar ve üçüncü taraf sitelerdeki fiyat/stok farklılıklarından {COMPANY_NAME} sorumlu tutulamaz.
          Kasıt ve ağır kusur halleri ile 6502 sayılı Tüketicinin Korunması Hakkında Kanun başta olmak üzere emredici mevzuattan
          doğan haklarının sınırlandırılamaz olduğu saklıdır.
        </p>
      </Section>

      <Section id="degisiklik-hizmet" title="10. Hizmette ve koşullarda değişiklik">
        <p>
          Hizmetin bir bölümünü veya desteklenen markaları değiştirebilir, durdurabiliriz (ör. bir mağaza sitesini artık
          okuyamamamız halinde). Bu koşulları güncelleyebiliriz; önemli değişiklikleri uygulamada veya bu sayfada duyururuz.
          Güncellemeden sonra uygulamayı kullanmaya devam etmen yeni koşulları kabul ettiğin anlamına gelir. Sayfanın başındaki
          “Son güncelleme” tarihi en güncel sürümü gösterir.
        </p>
      </Section>

      <Section id="hukuk" title="11. Uygulanacak hukuk ve uyuşmazlıklar">
        <p>
          Bu koşullara Türkiye Cumhuriyeti hukuku uygulanır. Tüketici olarak, uyuşmazlıklarda yürürlükteki parasal sınırlar
          dahilinde il/ilçe tüketici hakem heyetlerine veya ikametgâhının bulunduğu yerdeki tüketici mahkemelerine başvurma
          hakkın saklıdır. Diğer durumlarda Türkiye mahkemeleri ve icra daireleri yetkilidir.
        </p>
      </Section>

      <Section id="iletisim" title="12. İletişim">
        <p>
          Sorular, destek ve talepler için: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Kişisel verilerin
          işlenmesine ilişkin ayrıntılar için <a href={PRIVACY_PATH}>Gizlilik Politikası</a>'na bak.
        </p>
      </Section>
    </LegalLayout>
  );
}
