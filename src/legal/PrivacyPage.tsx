import { LegalLayout, Section } from './LegalLayout';
import { APP_NAME, COMPANY_NAME, CONTACT_EMAIL, TERMS_PATH } from './company';

// Metin, uygulamanın GERÇEKTE yaptıklarına dayanıyor (backend/store/schema.sql, mobile/src/notifications.ts,
// mobile/src/purchases.ts). Uygulamaya yeni bir veri toplama ya da üçüncü taraf SDK'sı eklenirse
// (analitik, çökme raporu, reklam) bu sayfa VE mağazalardaki veri beyanları birlikte güncellenmeli.
export function PrivacyPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      intro={`${APP_NAME}, iOS ve Android için fiyat ve stok takip uygulamasıdır. Senden ad, e-posta, telefon numarası ya da herhangi bir üyelik bilgisi istemiyoruz. Bu sayfa hangi verilerin neden işlendiğini, kimlerle paylaşıldığını ve haklarını açıklar.`}
    >
      <Section id="veri-sorumlusu" title="1. Veri sorumlusu">
        <p>
          Kişisel verilerin işlenmesinde veri sorumlusu <strong>{COMPANY_NAME}</strong>'dir. Bu metin 6698 sayılı Kişisel
          Verilerin Korunması Kanunu (KVKK) kapsamındaki aydınlatma yükümlülüğünü de yerine getirir. Bize{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresinden ulaşabilirsin.
        </p>
      </Section>

      <Section id="toplanan-veriler" title="2. Hangi verileri işliyoruz?">
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Veri</th>
                <th>Ne için</th>
                <th>Nerede</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Veri">
                  <strong>Anonim hesap kimliği</strong> ve oturum anahtarı
                </td>
                <td data-label="Ne için">
                  Uygulamayı ilk açtığında sunucumuz rastgele bir kimlik (UUID) üretir. Takip listeni ve plan durumunu sana bağlar;
                  başkalarının listene erişmesini engeller. Seni tanıyan bir bilgi içermez.
                </td>
                <td data-label="Nerede">
                  Sunucumuzda; oturum anahtarı cihazında iOS Anahtar Zinciri (Keychain) / Android Keystore'da
                </td>
              </tr>
              <tr>
                <td data-label="Veri">
                  <strong>Takip listen</strong>
                </td>
                <td data-label="Ne için">
                  Eklediğin ürünün bağlantısı, seçtiğin renk ve beden, bildirim tercihlerin (fiyat düşüşü, stoğa giriş) ve takibi
                  ekleme/kaldırma zamanı. Fiyat ve stok kontrollerini yapmak ve bildirim göndermek için gerekli.
                </td>
                <td data-label="Nerede">Sunucumuzda</td>
              </tr>
              <tr>
                <td data-label="Veri">
                  <strong>Bildirim jetonu</strong> ve platform (iOS/Android)
                </td>
                <td data-label="Ne için">Telefonuna anlık bildirim (push) gönderebilmek için. Bildirimleri uygulamadan kapattığında jetonun silinir.</td>
                <td data-label="Nerede">Sunucumuzda</td>
              </tr>
              <tr>
                <td data-label="Veri">
                  <strong>Abonelik durumu</strong>
                </td>
                <td data-label="Ne için">Premium üye olup olmadığını bilmek ve Premium özelliklerini açmak için. Kart bilgilerin bize ulaşmaz.</td>
                <td data-label="Nerede">Sunucumuzda ve RevenueCat'te</td>
              </tr>
              <tr>
                <td data-label="Veri">
                  <strong>Teknik kayıtlar</strong>
                </td>
                <td data-label="Ne için">
                  İsteğin zamanı, IP adresi, uygulama/cihaz türü (user-agent), isteğin sonucu ve hata kayıtları. Güvenlik, kötüye
                  kullanımı önleme (ör. istek sınırı) ve arıza giderme için. Takip ettiğin ürünler bu kayıtlara ürün bağlantısı
                  olarak yazılmaz; hesap kimliğin kayıtlarda kısaltılarak tutulur.
                </td>
                <td data-label="Nerede">Sunucumuzda</td>
              </tr>
              <tr>
                <td data-label="Veri">
                  <strong>Cihazındaki tercihler</strong>
                </td>
                <td data-label="Ne için">Tema (açık/koyu) ve bildirim tercihin gibi ayarlar. Bunlar yalnızca cihazında kalır.</td>
                <td data-label="Nerede">Cihazında</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="legal-note">
          <strong>İşlemediklerimiz:</strong> adın, e-posta adresin, telefon numaran, konumun, rehberin, fotoğraflarının ve
          reklam kimliğin (IDFA / Android reklam kimliği). {APP_NAME}'de reklam yoktur; reklam ya da üçüncü taraf kullanım
          analizi (analytics) araçları kullanmıyoruz ve seni uygulamalar ya da web siteleri arasında takip etmiyoruz.
        </p>
        <p>
          Fiyat geçmişi ürün bazında tutulur ve belirli bir kullanıcıya bağlı değildir.
        </p>
      </Section>

      <Section id="kullanim-amaclari" title="3. Verileri neden kullanıyoruz? (hukuki sebepler)">
        <ul>
          <li>
            <strong>Hizmeti sunmak:</strong> ürünleri takip etmek, fiyat/stok değişince bildirim göndermek, plan sınırlarını uygulamak.
            Hukuki sebep: sözleşmenin ifası (KVKK m.5/2-c).
          </li>
          <li>
            <strong>Abonelikleri yönetmek:</strong> satın alma ve yenilemeyi doğrulamak. Hukuki sebep: sözleşmenin ifası.
          </li>
          <li>
            <strong>Güvenlik ve kötüye kullanımı önleme:</strong> yetkisiz erişimi, otomatik/toplu istekleri ve plan sınırlarının
            atlatılmasını engellemek. Hukuki sebep: meşru menfaat (KVKK m.5/2-f).
          </li>
          <li>
            <strong>Hukuki yükümlülükler:</strong> yetkili makamların talepleri gibi yasal zorunluluklar (KVKK m.5/2-ç).
          </li>
        </ul>
        <p>Verilerini pazarlama için kullanmıyor, üçüncü kişilere satmıyoruz.</p>
      </Section>

      <Section id="paylasim" title="4. Verileri kimlerle paylaşıyoruz?">
        <p>Hizmeti sunabilmek için aşağıdaki hizmet sağlayıcılarla, yalnızca gerekli ölçüde veri paylaşıyoruz:</p>
        <ul>
          <li>
            <strong>Apple (App Store, APNs) ve Google (Google Play, FCM):</strong> uygulamanın dağıtımı, ödeme işlemleri ve
            bildirimlerin cihazına iletilmesi. Ödemeler tamamen Apple/Google tarafından işlenir.
          </li>
          <li>
            <strong>Expo (Expo Push Service):</strong> bildirimleri Apple ve Google'ın bildirim sistemlerine ileten aracı hizmet.
            Bildirim jetonun ve bildirim metni (ürün adı, fiyat) Expo üzerinden geçer.
          </li>
          <li>
            <strong>RevenueCat:</strong> abonelik ve satın alma doğrulama hizmeti. Anonim hesap kimliğin ve satın alma kayıtların
            RevenueCat'e iletilir.
          </li>
          <li>
            <strong>Sunucu altyapı sağlayıcılarımız:</strong> verilerin barındırıldığı bulut/sunucu hizmetleri.
          </li>
        </ul>
        <p>
          Fiyat ve stok bilgisini almak için marka sitelerinin (Zara, H&amp;M, Bershka, Mango, Pull&amp;Bear, Massimo Dutti,
          Stradivarius, Oysho) herkese açık ürün sayfalarını ziyaret ederiz. Bu sitelere senin hesap kimliğin ya da kişisel
          bilgilerin gönderilmez. Bu markalarla bağlantımız yoktur.
        </p>
        <p>
          Bu hizmet sağlayıcıların bir kısmı Türkiye dışında (ör. ABD ve Avrupa) bulunur; dolayısıyla verilerin yurt dışına
          aktarımı söz konusu olabilir. Aktarımlar KVKK m.9 ve ilgili mevzuata uygun güvencelerle yapılır. Yasal bir zorunluluk
          olduğunda yetkili makamlarla da paylaşım yapılabilir.
        </p>
      </Section>

      <Section id="saklama" title="5. Verileri ne kadar süre saklıyoruz?">
        <ul>
          <li>
            <strong>Hesap kimliği ve takip listen:</strong> uygulamayı kullandığın sürece. Uygulamadan hesabını sildiğinde hemen silinir (bkz. bölüm 7).
          </li>
          <li>
            <strong>Takipten çıkardığın ürünler:</strong> ücretsiz plandaki bekleme kuralını (yeni ürün eklemeden önceki 48 saat)
            uygulayabilmek için kaldırma zamanıyla birlikte kayıtlı kalır; silme talebinde bunlar da silinir.
          </li>
          <li>
            <strong>Bildirim jetonu:</strong> bildirimleri kapatana ya da silme talebinde bulunana kadar.
          </li>
          <li>
            <strong>Fiyat geçmişi:</strong> fiyat veya stok değişmeyen eski kayıtlar 90 gün sonra temizlenir.
          </li>
          <li>
            <strong>Teknik kayıtlar:</strong> yalnızca güvenlik ve arıza giderme için gerektiği kadar tutulur.
          </li>
          <li>
            <strong>Yasal saklama zorunlulukları</strong> (ör. Apple/Google ve RevenueCat'in ödeme kayıtları) ilgili şirketlerin
            kendi politikalarına tabidir.
          </li>
        </ul>
        <p>
          Uygulamayı cihazından kaldırmak sunucudaki verileri kendiliğinden silmez; bunun için önce uygulamadan hesabını sil
          (bölüm 7). Silinen hesabın rastgele kimliği (kişisel veri içermez) yeniden oluşturulmasın diye “silindi” kaydı olarak
          saklanır.
        </p>
      </Section>

      <Section id="guvenlik" title="6. Verilerini nasıl koruyoruz?">
        <ul>
          <li>Uygulama ile sunucu arasındaki iletişim TLS (HTTPS) ile şifrelenir.</li>
          <li>
            Her istek, sunucumuzun imzaladığı bir oturum anahtarıyla doğrulanır; yalnızca kendi hesabının verilerine erişebilirsin.
            Anahtar cihazında iOS Anahtar Zinciri / Android Keystore'da saklanır.
          </li>
          <li>Kayıtlarda kimlik bilgileri maskelenir; erişim yetkili kişilerle sınırlıdır.</li>
        </ul>
        <p>
          Hiçbir sistem tamamen risksiz değildir; bir ihlal olursa mevzuatın gerektirdiği bildirimleri yaparız.
        </p>
      </Section>

      <Section id="haklariniz" title="7. Haklarını nasıl kullanırsın?">
        <p>KVKK m.11 uyarınca şu haklara sahipsin:</p>
        <ul>
          <li>Verilerinin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,</li>
          <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
          <li>Bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>İşlenen verilerin otomatik sistemlerle analiz edilmesi sonucu aleyhine bir sonuç çıkmasına itiraz etme,</li>
          <li>Kanuna aykırı işleme nedeniyle zarara uğrarsan zararın giderilmesini talep etme.</li>
        </ul>
        <h3>Hesabını ve verilerini uygulamadan sil</h3>
        <p>
          En hızlı yol uygulamanın içinde: <strong>Ayarlar → Veriler → Hesabımı ve Verilerimi Sil</strong>. Onayladığında takip
          listen, bildirim jetonların ve plan kaydın sunucularımızdan <strong>hemen ve kalıcı olarak</strong> silinir; işlem geri
          alınamaz. Ardından uygulama yeni, boş bir hesapla açılır. Silinen hesabın rastgele kimliği (içinde kişisel bilgi
          yoktur) yalnızca eski oturum anahtarının hesabı yeniden oluşturamaması için “silindi” kaydı olarak saklanır. Silme
          sırasında RevenueCat'teki müşteri kaydın için de silme isteği gönderilir.
        </p>
        <h3>Diğer talepler</h3>
        <p>
          Düzeltme, bilgi alma ya da silme dışındaki talepler için (veya uygulamaya erişemiyorsan)
          <a href={`mailto:${CONTACT_EMAIL}`}> {CONTACT_EMAIL}</a> adresine yazabilirsin. Talebini hızlı doğrulayabilmemiz için
          uygulamadaki <strong>Ayarlar</strong> ekranında görünen <strong>Cihaz ID</strong>'ni (kopyalayabilirsin) ve talebinin
          içeriğini belirt; gerekirse kimliği doğrulamak için ek bilgi isteyebiliriz. Talebini en geç <strong>30 gün</strong>{' '}
          içinde yanıtlarız.
        </p>
        <p>
          Abonelik: verilerini silmen aboneliğini iptal etmez. Aboneliği Apple/Google hesabından iptal etmelisin (bkz.{' '}
          <a href={TERMS_PATH}>Kullanım Koşulları</a>).
        </p>
        <p>
          Cevabımızdan memnun kalmazsan Kişisel Verileri Koruma Kurulu'na başvurma hakkın saklıdır.
        </p>
      </Section>

      <Section id="bildirimler" title="8. Bildirim izinleri">
        <p>
          Fiyat ve stok bildirimlerini alabilmen için işletim sisteminin bildirim iznini isteriz. İzni vermek zorunda değilsin;
          vermezsen uygulama çalışır ama fiyat düşüşünü bildiremeyiz. Uygulamadaki Ayarlar ekranından bildirimleri istediğin zaman
          kapatabilir, cihazının ayarlarından izni geri alabilirsin.
        </p>
      </Section>

      <Section id="cocuklar" title="9. Çocukların gizliliği">
        <p>
          {APP_NAME}, 13 yaşın altındaki çocuklara yönelik değildir ve bilerek bu yaştaki çocukların verilerini işlemeyiz.
          Çocuğunun bize veri ilettiğini düşünüyorsan lütfen bize yaz; ilgili verileri sileriz.
        </p>
      </Section>

      <Section id="degisiklikler" title="10. Bu politikadaki değişiklikler">
        <p>
          Uygulama ya da mevzuat değiştikçe bu politikayı güncelleyebiliriz. Önemli değişiklikleri uygulama içinde veya bu
          sayfada duyururuz; sayfanın başındaki “Son güncelleme” tarihi en güncel sürümü gösterir.
        </p>
      </Section>

      <Section id="iletisim" title="11. İletişim">
        <p>
          Sorular ve talepler için: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </Section>
    </LegalLayout>
  );
}
