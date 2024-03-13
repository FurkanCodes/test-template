# BOTAŞ

**WORK IN PROGRESS** BOTAŞ projesinin mimarisi oluşturuldu ama değişiklikler
yapılabilir. Feature-based design kullanacağız. Structure'ı iki şekilde düşünün.
**_"FEATURE" ve "GLOBAL"._** Global kısımlar, appin her yerinde, her feature'ın
kullanabileceği özellikler, feature ise yalnız o feature a spesifik özellikler
olmalı.

# Dosya Yapısı

- **features**

> En önemli klasor olabilir.

Uygulamanın kolay yönetimi adına, her feature'a ait spesifik ihtiyaçları(hooks,
util, style, components, types etc.) kendi feature klasoründe tutacağız. Örnek
olarak bir feature'ın sahip olabileceği folder yapısı şöyle olabilir;

> src/features/gaz-vanası-açılacak | 
**+-- api** # o feature'a ait api logic
> burada, bu api logic bizim genel Api klasorundeki axios setupına gider muhtemelen | 
**+-- assets** # bu feature'a ait spesifik bir asset
> kullanacaksak buraya | **+-- components** # bu feature'a ait spesifik bir
> asset kullanacaksak buraya | **+-- hooks** # bu feature'a ait spesifik bir
> hook kullanacaksak buraya | **+-- routes** # bu feature'a ait spesifik bir
> route ayarı varsa buraya | **+-- stores** # bu feature'a ait spesifik stateler
> varse redux gibi, buraya | **+-- types** #feature'a ait spesifik typleler |
> **+-- utils** # feature'a ait spesifik utiller | **+-- index.ts** # burası
> feature'ın giriş noktası

- **api** Öncelikle uygulamamızın API Layer’ını içerecek olan api klasörümüz
  var. API isteklerini gerçekleştirmekten ve bir sunucuyla iletişim kurmaktan
  sorumlu metodlara sahip olacaktır. Axios kullanacağız. Burası genel bir api
  layer'ı gibi olacak.
- **assets** Uygulama boyunca kullanacağımız fontlar, resimler etc. bu klasorde
  saklanmalı.
- **components** Klasörünün içersinde **_"shared"_** klasörü yer almakta. Bu
  klasorde, bütün uygulamada kullanacağımız componentler yer alacak. Örneğin,
  button, form componentleri, checkboxes etc. **Ama her feature kendine ait
  componentlere sahip olacağı için, kendi featureları içerisinde yazacağız o
  componentleri. **
- **hooks** Proje genelinde kullanacağımız hooklar burada. Ama her hook, her
  yerde kullanılmak zorunda değil, o yüzden spesifik hookları her feature'ın
  kendi dosyasına yazacağız. Örneğin, bir kullanıcının bir haber bültenine
  kaydolmasını sağlayacak bir form içeren bir `<BultenForm />` olduğunu hayal
  edin. Bu component, bir kullanıcının kaydolmasını sağlayacak
  `useNewsletterSignup` adlı bir hook kullanabilir. Bunun gibi bir hook, global
  src/hooks dizinine değil, `<BultenForm />` componenti feature'ına bağlı olduğu
  için o feature'ın içerisine yazılmalı.

**Logic kullanıldığı yere mümkün oldukca yakın şekilde tutulmalıdır. Bu şekilde,
yalnızca reusable hooklar içermesi gereken global hooklar (src/hook) klasörüne
gereksiz yere daha fazla kod eklemeyeceğiz. Aynı durum helpers, services vb.
gibi diğer işlevler için de geçerlidir.**

- **context** Bu klasor Context API kullanırsak diye ekledim. Bütün app
  contextini buradan idare edeceğiz.
- **layout** Adından da anlaşılacağı gibi, sayfalarınız için farklı layoutlar
  burada. Örneğin, bir Dashboard uygulaması oluşturuyorsanız, kullanıcının
  oturum açıp açmamasına bağlı olarak farklı layout oluşturabilirsiniz; user
  login olunca farklı bir layout, değilken farklı.
- **constants** Uygulama boyunca kullanılan sabit değişkenleri buraya
  koyabilirsiniz. Constants, uygulamanızdaki diğer değişkenlerden ve
  yerelleştirilmiş constantlardan ayırmak için büyük harfle yazmak gerek.
  `export const APP_NAME = 'BOTAŞ'` `export const WIDGETS_LABEL = 'SELAM'`

- **helpers** ya da **utils** App genelinde kullanacağımız bütün utiller burada,
  eğer spesifik bir feature için spesifik bir util yazmak zorundaysanız, o
  featurein içerisinde bir util klasoru oluşturun.

- **store** Redux kullanırsak, setup burada yapılacak.

- **styles** Global styles buradan yönetilecek

- **types** Global types buradan yönetilecek

- **views** ya da **routes** Genellikle views dizini yalnızca route/page
  componentlerini içerir. Örneğin, kullanıcıların ürünleri görüntülemesine izin
  vermesi gereken bir sayfamız varsa, views klasöründe `Products.tsx`
  componentim,z olur ve karşılık gelen route şunun gibi olabilir:  
  `<Route path="/projects" element={<Products />} />`

> Bunun hakkında daha detaylı açıklama yapabilirim ileride.

# Notlar

İmportlarda absolute path kullanacağız;

    import  Button  from  'src/components/Button'
