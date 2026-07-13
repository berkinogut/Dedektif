const victimFirstNames = [
  "Levent", "Derya", "Cem", "Ayşe", "Baran", "Nermin", "Oğuz", "Melis", "Tarık", "Gizem",
  "Yalın", "Suna", "Kemal", "İpek", "Rauf", "Mina", "Yekta", "Aslı", "Tolga", "Nazan",
  "Eren", "Defne", "Bora", "Lale", "Serkan", "Pelin", "Mahir", "Cansu", "Volkan", "Sevda",
  "Arda", "Nil", "Ferit", "Zeynep", "Hakan", "Bade", "Emre", "Elif", "Orhan", "Merve",
  "Kaan", "Sibel", "Umut", "Buket", "Tuna", "Rana", "Alp", "Eylül", "Mert", "Selma"
];

const victimSurnames = [
  "Arman", "Korhan", "Tunalı", "Yıldırım", "Eren", "Savaş", "Karan", "Uslu", "Ersoy", "Aksoy",
  "Demir", "Ergin", "Ilgaz", "Tan", "Deniz", "Soyer", "Bulut", "Meriç", "Kıraç", "Ulus",
  "Saygı", "Aral", "Kalkan", "Onur", "Tezel", "Aksu", "Toker", "Bilgin", "Özer", "Ural",
  "Polat", "Karaca", "Uğur", "Alkan", "Sezgin", "Yücel", "Güneş", "Sarp", "Batur", "Tunç",
  "Poyraz", "Aydın", "Giray", "Irmak", "Acar", "Ekin", "Soylu", "Bozkurt", "Yaman", "Kaya"
];

const victims = Array.from({ length: 100 }, (_, index) => {
  const first = victimFirstNames[index % victimFirstNames.length];
  const surnameIndex = (index * 7 + Math.floor(index / victimFirstNames.length) * 13) % victimSurnames.length;
  return `${first} ${victimSurnames[surnameIndex]}`;
});

const firstNames = [
  "Ece", "Murat", "Deniz", "Selin", "Canan", "Fırat", "Burcu", "Kerem", "Aylin", "Tamer",
  "Seda", "Onur", "Beste", "Cihan", "Dilan", "Koray", "Pınar", "Rıza", "Yağmur", "Gökhan",
  "Nazlı", "Emir", "Bartu", "Leyla", "Sarp", "İdil", "Alper", "Simge", "Kuzey", "Melek",
  "Ulaş", "Duru", "Ekin", "Nejat", "Zehra", "Yaman", "Ceren", "Ozan", "Buse", "Sinan",
  "İrem", "Arif", "Nehir", "Doruk", "Güneş", "Esra", "Aren", "Lina", "Atlas", "Ada",
  "Taner", "Damla", "Ömer", "Nisa", "Barış", "Ceyda", "Utku", "Eda", "Kıvanç", "Selen",
  "Berke", "Derin", "Cenk", "Ahu", "Yiğit", "Lara", "Koral", "Beliz", "Demir", "İlayda",
  "Oytun", "Alara", "Taylan", "Nehirhan", "Berk", "Eylül", "Çağrı", "Maya", "Engin", "Lalin"
];

const surnames = [
  "Karaca", "Şener", "Aydın", "Vural", "Keskin", "Ertem", "Dinçer", "Sağlam", "Korkmaz", "Özkan",
  "Başar", "Tekin", "Akın", "Gür", "Sönmez", "Avcı", "Toprak", "Eroğlu", "Kurt", "Erdem",
  "Koç", "Taşçı", "Baysal", "Keleş", "Aybar", "Güven", "Çetin", "Köksal", "Duman", "Ekinci",
  "Oral", "Önal", "Yalçın", "Doğan", "Bayrak", "İnce", "Güler", "Mutlu", "Özdemir", "Kılıç",
  "Duru", "Aksoy", "Çağlar", "Uçar", "Gökçe", "Turan", "Sezer", "Arı", "Bozkır", "Ateş",
  "Esen", "Özbay", "Koral", "Sayın", "Erkin", "Tansu", "Yüce", "Tanrıverdi", "Kavak", "Gürsoy",
  "Akman", "Eray", "Yüksel", "Işık", "Özden", "Kara", "Kapan", "Aydemir", "Çakır", "Dikmen",
  "Ilıcalı", "Özen", "Erkal", "Kunt", "Atalay", "Boran", "Çevik", "Kaynak", "Öztürk", "Gündüz"
];

const femaleFirstNames = new Set([
  "Ece", "Deniz", "Selin", "Canan", "Burcu", "Aylin", "Seda", "Beste", "Dilan", "Pınar",
  "Yağmur", "Nazlı", "Leyla", "İdil", "Simge", "Melek", "Duru", "Ekin", "Zehra", "Ceren",
  "Buse", "İrem", "Nehir", "Güneş", "Esra", "Lina", "Ada", "Damla", "Nisa", "Ceyda",
  "Eda", "Selen", "Derin", "Ahu", "Lara", "Beliz", "İlayda", "Alara", "Eylül", "Maya", "Lalin"
]);

const roles = [
  "iş ortağı", "gece sorumlusu", "yakın arkadaşı", "eski eşi", "muhasebeci",
  "teknik görevli", "avukat", "asistan", "tedarikçi", "komşusu",
  "proje yöneticisi", "aile temsilcisi", "özel şoför", "güvenlik amiri"
];
const moods = ["Kontrollü", "Savunmada", "Tedirgin", "Soğukkanlı", "Yorgun", "Öfkeli"];

const difficulties = {
  easy: { label: "Kolay", range: [0, 25], requiredClues: 2, hint: "Yönlendirmeli sorgu" },
  normal: { label: "Normal", range: [25, 50], requiredClues: 3, hint: "Dengeli soruşturma" },
  hard: { label: "Zor", range: [50, 75], requiredClues: 4, hint: "Sınırlı adli destek" },
  police: { label: "Gerçek Polis İşi", range: [75, 100], requiredClues: 5, hint: "Tavizsiz prosedür" }
};
const caseWorlds = [
  {
    place: "Beyoğlu'ndaki özel sanat galerisi",
    access: "eser deposunun elektronik anahtarı",
    motives: ["sahte tablo satışı", "kayıp koleksiyon kaydı", "telif anlaşmazlığı", "kaçak müzayede", "sigortalı eser planı"],
    methods: [
      ["bronz heykelle darbe", "Depodaki bronz heykelciğin kaidesiyle başına tek darbe vuruldu.", "bronz heykelcik", "kaidede kalan vernik parçacığı"],
      ["restorasyon zehri", "Restorasyon odasındaki çözücü içeceğine karıştırıldı.", "çözücü şişesi", "bardağın dibindeki çözücü tortusu"],
      ["asma teliyle boğma", "Tablo asmakta kullanılan çelik tel boynuna dolandı.", "kesik çelik tel", "eldivendeki metal çapak"],
      ["iklim odasında havasız bırakma", "Eser koruma odasının havalandırması dışarıdan kapatıldı.", "iklim kontrol paneli", "paneldeki yağlı parmak izi"],
      ["yük asansöründe sabotaj", "Eser asansörünün fren sensörü bilinçli olarak söküldü.", "fren sensörü", "cebe bulaşan bakır tozu"]
    ]
  },
  {
    place: "Karaköy'deki butik otel",
    access: "personel geçiş kartı",
    motives: ["gizli misafir kaydı", "otel hissesi devri", "şantaj görüntüsü", "zimmete geçirilen kasa", "yasadışı rezervasyon ağı"],
    methods: [
      ["ilaçlı gece kahvesi", "Kahve termosuna yüksek doz kalp ilacı karıştırıldı.", "oda servisi termosu", "kapakta kalan ilaç kristali"],
      ["servis merdiveninden itme", "Merdiven korkuluğunun bağlantısı önceden gevşetildi.", "gevşek korkuluk vidası", "tornavida ucundaki boya"],
      ["banyo buharında boğma", "Banyo kapısı kilitlendi ve buhar tahliyesi kapatıldı.", "havalandırma mandalı", "mandaldaki kumaş lifi"],
      ["yastıkla boğma", "Maktul uyutulduktan sonra odadaki dekoratif yastık kullanıldı.", "dekoratif yastık", "dikişte kalan saat camı"],
      ["çamaşır asansörü tuzağı", "Çamaşır asansörünün kapak kilidi devre dışı bırakıldı.", "kilit köprüsü", "üzerindeki temizlik kimyasalı"]
    ]
  },
  {
    place: "Kadıköy'deki şehir tiyatrosu",
    access: "kulise açılan anahtar",
    motives: ["başrol seçimi", "çalınan oyun metni", "iptal edilen turne", "gişe gelirindeki açık", "gizli oyuncu sözleşmesi"],
    methods: [
      ["sahne halatıyla boğma", "Dekor taşıma halatı kuliste boğma aracı olarak kullanıldı.", "kesilmiş sahne halatı", "avuç içindeki kenevir lifi"],
      ["sahne kapağı sabotajı", "Döner sahnenin güvenlik kapağı açık bırakıldı.", "kontrol anahtarı", "anahtardaki pudra izi"],
      ["kostüm iğnesine zehir", "Kostüm provasındaki iğneye hızlı etkili toksin sürüldü.", "kostüm iğnesi", "iğne kutusundaki lateks izi"],
      ["projektör düşürme", "Üst köprüdeki projektör kelepçesi bilerek gevşetildi.", "projektör kelepçesi", "somundaki yeni çizik"],
      ["sis makinesi gazı", "Sis makinesine kapalı alanda zehirli gaz üreten sıvı kondu.", "sis sıvısı bidonu", "kapaktaki kimyasal yanık"]
    ]
  },
  {
    place: "Şişli'deki özel klinik",
    access: "ilaç dolabı yetki kartı",
    motives: ["sahte reçete ağı", "hatalı ameliyat kaydı", "ilaç deneyi dosyası", "hasta verisi satışı", "klinik ortaklığı"],
    methods: [
      ["değiştirilmiş alerji kalemi", "Acil durum kalemine ölümcül dozda ilaç yüklendi.", "enjeksiyon kalemi", "haznedeki farklı parti numarası"],
      ["oksijen hattı kesintisi", "Tedavi odasının oksijen vanası dışarıdan kapatıldı.", "oksijen vanası", "vanadaki el kremi izi"],
      ["yanlış kan torbası", "Etiketi değiştirilmiş uyumsuz kan torbası bağlandı.", "kan torbası etiketi", "etiketin altındaki ikinci barkod"],
      ["sedatif aşırı dozu", "Seruma normal dozun beş katı sedatif eklendi.", "serum enjektörü", "pistondaki eldiven pudrası"],
      ["MR odasında metal tuzağı", "Güçlü mıknatıs devredeyken metal tüp odaya bırakıldı.", "metal tüp", "tüp üzerindeki dolap tozu"]
    ]
  },
  {
    place: "Üsküdar'daki tarihi yalı",
    access: "yalının mahzen anahtarı",
    motives: ["miras paylaşımı", "saklı tapu belgesi", "aile sırrı", "antik eşya satışı", "vasiyet değişikliği"],
    methods: [
      ["şömine maşasıyla darbe", "Çalışma odasındaki şömine maşasıyla başına vuruldu.", "şömine maşası", "sapındaki balmumu izi"],
      ["mahzende boğma", "Mahzen kapısı kilitlenip hava menfezi kapatıldı.", "mahzen sürgüsü", "sürgüdeki yosun lekesi"],
      ["zehirli aile likörü", "Yalnızca maktulün kadehine bitkisel zehir eklendi.", "kristal likör kadehi", "kenardaki yüksük izi"],
      ["iskelede sahte kaza", "İskele tahtalarından biri önceden kesilerek düşme planlandı.", "kesilmiş iskele tahtası", "testere dişindeki reçine"],
      ["perde bağıyla boğma", "Salonun ağır perde bağı boğma aracı olarak kullanıldı.", "ipek perde bağı", "düğümde kalan yüzük çizgisi"]
    ]
  },
  {
    place: "Maslak'taki teknoloji şirketi",
    access: "sunucu odası biyometrik kaydı",
    motives: ["çalınan kaynak kodu", "yatırım dolandırıcılığı", "veri sızıntısı", "patent kavgası", "gizli kripto cüzdanı"],
    methods: [
      ["sunucu odasında elektrik tuzağı", "Bakım panelinin topraklaması bilerek kesildi.", "yalıtılmış pense", "sapındaki sunucu tozu"],
      ["akıllı kapı kilidi", "Prototip odasının kapısı uzaktan kilitlenip havalandırma durduruldu.", "yönetici tableti", "silinmiş erişim kaydı"],
      ["batarya yangını", "Lityum batarya hücresi aşırı ısınacak şekilde değiştirildi.", "prototip batarya", "hücredeki lehim izi"],
      ["robot kol sabotajı", "Test robotunun güvenlik sınırı yazılımdan kaldırıldı.", "kontrol dizüstüsü", "yerel oturum anahtarı"],
      ["enerji içeceğine zehir", "Maktulün işaretli kutusuna renksiz toksin enjekte edildi.", "enerji içeceği kutusu", "tabandaki iğne deliği"]
    ]
  },
  {
    place: "Balat'taki antika deposu",
    access: "arka depo kilidinin anahtarı",
    motives: ["sahte antika sertifikası", "kaçak ikon satışı", "kayıp kasa anahtarı", "borç senedi", "çalınan koleksiyon"],
    methods: [
      ["pirinç şamdanla darbe", "Ağır pirinç şamdan olay yerinde silah olarak kullanıldı.", "pirinç şamdan", "tabanındaki kumaş parçası"],
      ["sandık içinde havasız bırakma", "Restorasyon sandığının iç kilidi dışarıdan sabitlendi.", "sandık mandalı", "mandaldaki pas lekesi"],
      ["arsenikli cila", "Zehirli eski cila, maktulün eldivenine sürüldü.", "cila kavanozu", "kapaktaki taze çizik"],
      ["raf sistemi çökertme", "Yük rafının emniyet pimi çıkarılarak devrilmesi sağlandı.", "emniyet pimi", "pimdeki cep tiftiği"],
      ["paket ipiyle boğma", "Eski sandıkları bağlayan mumlu ip kullanıldı.", "mumlu paket ipi", "düğümdeki mühür mumu"]
    ]
  },
  {
    place: "Moda'daki bağımsız yayınevi",
    access: "kilitli arşiv odasının şifresi",
    motives: ["çalınan roman taslağı", "sahte telif bordrosu", "yasaklanan biyografi", "gizli yazar kimliği", "dağıtım komisyonu"],
    methods: [
      ["kâğıt kesme presi", "Presin çift el güvenliği devre dışı bırakıldı.", "pres güvenlik rölesi", "röledeki mürekkep izi"],
      ["zehirli dolma kalem", "Kalemin mürekkep haznesine deri yoluyla geçen toksin kondu.", "dolma kalem", "kapakta kalan çözücü"],
      ["arşiv rafıyla ezme", "Hareketli rafın acil durdurma düğmesi söküldü.", "durdurma düğmesi", "vidasındaki kırmızı lif"],
      ["cilt ipiyle boğma", "Kitap ciltlemede kullanılan sağlam keten ip kullanıldı.", "keten cilt ipi", "düğümdeki mürekkep lekesi"],
      ["yangın alarmı sabotajı", "Arşivde yangın çıkarılıp alarm devresi önceden kesildi.", "alarm sigortası", "sigortadaki toner tozu"]
    ]
  },
  {
    place: "Sarıyer'deki marina kulübü",
    access: "özel iskele geçiş kartı",
    motives: ["tekne sigortası", "kaçak yakıt sevkiyatı", "yarış şikesi", "marina hissesi", "gizli rota kaydı"],
    methods: [
      ["can yeleği sabotajı", "Can yeleğinin gaz kartuşu boşaltılıp düşme planlandı.", "boş gaz kartuşu", "dişlerdeki pense izi"],
      ["tekne halatıyla boğma", "İskeledeki ince bağlama halatı kullanıldı.", "bağlama halatı", "liflerdeki motor yağı"],
      ["yakıt buharı zehirlenmesi", "Kapalı bakım kabinine yakıt buharı yönlendirildi.", "havalandırma hortumu", "kelepçedeki tuz izi"],
      ["iskele elektriği", "Kıyı elektrik kutusunun kaçak akım rölesi köprülendi.", "bakır köprü teli", "teldeki beyaz boya"],
      ["denizcilik bıçağı", "Kulüp vitrininin bıçağı göğse tek darbede kullanıldı.", "denizcilik bıçağı", "kında kalan ceket lifi"]
    ]
  },
  {
    place: "Bakırköy'deki gastronomi okulu",
    access: "eğitmen mutfağı anahtarı",
    motives: ["çalınan tarif kitabı", "yarışma sonucu", "sahte hijyen raporu", "tedarik yolsuzluğu", "okul ortaklığı"],
    methods: [
      ["alerjenli tadım tabağı", "Maktulün ağır alerjisi bilinerek tabağına fındık yağı sürüldü.", "tadım fırçası", "kıllardaki fındık proteini"],
      ["soğuk oda kilidi", "Soğuk odanın içeriden açma kolu söküldü.", "kapı kolu yayı", "yay üzerindeki un"],
      ["şef bıçağı", "Kişisel bıçak setinden alınan şef bıçağı kullanıldı.", "şef bıçağı", "sapındaki baharat karışımı"],
      ["basınçlı tencere sabotajı", "Emniyet valfi kapatılarak patlama hazırlandı.", "emniyet valfi", "dişlerdeki metal talaşı"],
      ["temizlik kimyasalı", "Kokusuz endüstriyel temizleyici su şişesine aktarıldı.", "ölçü kabı", "kabın kenarındaki ruj izi"]
    ]
  }
];

const questionOpeners = [
  "Ölüm aralığında tam olarak neredeydin?",
  "O gece olay yerinden ne zaman ayrıldın?",
  "Son kamera kaydından sonra kiminleydin?",
  "Maktulle son görüşmen ne zaman gerçekleşti?",
  "Telefonunun kapalı olduğu aralığı açıklar mısın?"
];

function pick(list, index) {
  return list[((index % list.length) + list.length) % list.length];
}

function initials(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toLocaleUpperCase("tr-TR");
}

function suspectName(slot) {
  const first = firstNames[slot % firstNames.length];
  const cycle = Math.floor(slot / firstNames.length);
  const surnameIndex = (slot * 29 + cycle * 17) % surnames.length;
  return `${first} ${surnames[surnameIndex]}`;
}

function portraitStyle(portrait) {
  return `--portrait-image:url('${portrait.image}')`;
}

const portraitsBySlot = (() => {
  let femaleIndex = 0;
  let maleIndex = 0;
  return Array.from({ length: 400 }, (_, slot) => {
    const firstName = firstNames[slot % firstNames.length];
    const isFemale = femaleFirstNames.has(firstName);
    const portraitIndex = isFemale ? femaleIndex++ % 121 : maleIndex++ % 144;
    return {
      gender: isFemale ? "female" : "male",
      image: `assets/portraits/${isFemale ? "female" : "male"}-${String(portraitIndex).padStart(3, "0")}.webp`
    };
  });
})();

const victimPortraits = Array.from({ length: 100 }, (_, index) => {
  const gender = index % 2 === 0 ? "male" : "female";
  const portraitIndex = Math.floor(index / 2);
  return `assets/portraits/${gender}-${String(portraitIndex).padStart(3, "0")}.webp`;
});

function killerIndexFor(caseIndex) {
  let seed = (caseIndex + 17) * 2654435761;
  seed ^= seed >>> 15;
  seed = Math.imul(seed, 2246822519);
  seed ^= seed >>> 13;
  return (seed >>> 0) % 4;
}

function buildQuestions({ suspect, isKiller, method, motive, access, deathWindow, caseIndex, suspectIndex }) {
  const alibiWitness = suspectName((caseIndex * 4 + suspectIndex + 37) % 400);
  const opener = pick(questionOpeners, caseIndex + suspectIndex);
  const calm = `${suspect.name} ayrıntıları kronolojik anlatıyor; omuzları gevşiyor.`;
  const tense = `${suspect.name} cümlenin ortasında duruyor; parmakları masaya düzensiz vuruyor.`;

  return [
    {
      q: opener,
      a: isKiller
        ? `${deathWindow.split("-")[0]}'den kısa süre sonra çıktım. Beni gören olmadı; telefonumun kapanması tesadüftü.`
        : `${deathWindow} boyunca ${alibiWitness} ile birlikteydim. Kamera ve konum kaydı aynı zamanı doğruluyor.`,
      clue: isKiller
        ? `${suspect.name}, ölüm aralığı için doğrulanabilir bir alibi sunamadı.`
        : `${suspect.name} için bağımsız tanık ve konum kaydı alibiyi doğruladı.`,
      pose: isKiller ? tense : calm,
      reaction: isKiller ? "Alibi kırılıyor" : "İfade tutarlı",
      key: isKiller
    },
    {
      q: `${access} neden senin kullanım kaydında görünüyor?`,
      a: isKiller
        ? `Kaydı hatırlamıyorum. Sistemin saati yanlış olabilir; zaten bu yetkiyi birden fazla kişi kullanıyordu.`
        : `Gündüz vardiyasında kullandım ve çıkışımı kaydettim. Geceki erişim bana ait değil; kartım teslim kasasındaydı.`,
      clue: isKiller
        ? `${suspect.name}, olay yerine erişim kaydını teknik arızayla açıklamaya çalıştı; sistem saati doğruydu.`
        : `${suspect.name} erişim aracını olaydan önce teslim etmişti.`,
      pose: isKiller ? `${suspect.name} göz temasını kesip sandalyesini geriye itiyor.` : calm,
      reaction: isKiller ? "Kaçınma" : "Sakin",
      key: isKiller
    },
    {
      q: `${method.object} üzerindeki ${method.trace} izini nasıl açıklıyorsun?`,
      a: isKiller
        ? `O nesneye daha önce dokunmuş olabilirim. Bu, cinayet gecesi kullandığım anlamına gelmez.`
        : `Bu iz benim kıyafetim veya eşyalarımla eşleşmez. Laboratuvar karşılaştırması yapılabilir.`,
      clue: isKiller
        ? `${method.object} üzerindeki iz, ${suspect.name} ile doğrudan eşleşti.`
        : `${method.object} üzerindeki iz ${suspect.name} ile eşleşmedi.`,
      pose: isKiller ? `${suspect.name} ellerini masanın altına çekiyor; sesi belirgin biçimde alçalıyor.` : calm,
      reaction: isKiller ? "Fiziksel gerilim" : "İş birliği",
      key: isKiller
    },
    {
      q: `${motive} konusunda maktulle neden tartıştın?`,
      a: isKiller
        ? `Bu sadece iş konuşmasıydı. Dosyayı almaya çalışmadım; kim söylediyse yalan söylüyor.`
        : `Fikir ayrılığımız vardı ama görüşme öğleden sonra bitti. Yazışmaların tamamını teslim ettim.`,
      clue: isKiller
        ? `${suspect.name}, ${motive} dosyasını gizlice almaya çalıştığını inkâr ederken tanık ifadesiyle çelişti.`
        : `${suspect.name} ile maktul arasındaki anlaşmazlık cinayet saatine taşınmadı.`,
      pose: isKiller ? `${suspect.name} öne eğiliyor; inkârı sertleşirken yüzü kızarıyor.` : calm,
      reaction: isKiller ? "Savunma yükseliyor" : "Tutarlı açıklama",
      key: isKiller
    },
    {
      q: "İlk ifadendeki saat ile kamera kaydı arasındaki farkı açıkla.",
      a: isKiller
        ? `Saati yanlış hatırlamış olabilirim. Birkaç dakikanın bu kadar önemli olduğunu bilmiyordum.`
        : `İlk ifadede yaklaşık saat verdim. Kamera kaydı hareket rotamı doğruluyor ve ölüm aralığına girmiyorum.`,
      clue: isKiller
        ? `${suspect.name} zaman çizelgesindeki kritik boşluğu ikinci kez farklı anlattı.`
        : `${suspect.name} ifadesindeki saat farkı kamera kaydıyla açıklığa kavuştu.`,
      pose: isKiller ? `${suspect.name} uzun süre susuyor; nefesi hızlanıyor ve bakışları kapıya kayıyor.` : calm,
      reaction: isKiller ? "Çelişki derinleşiyor" : "Şüphe azalıyor",
      key: isKiller
    }
  ];
}

function difficultyFor(index) {
  return index < 25 ? "easy" : index < 50 ? "normal" : index < 75 ? "hard" : "police";
}

function buildCases() {
  return victims.map((victim, index) => {
    const world = caseWorlds[index % caseWorlds.length];
    const variant = (Math.floor(index / caseWorlds.length) + Math.floor(index / 50)) % world.methods.length;
    const [short, detail, object, trace] = world.methods[variant];
    const motive = world.motives[variant];
    const difficulty = difficultyFor(index);
    const difficultyMeta = difficulties[difficulty];
    const correctIndex = killerIndexFor(index);
    const startHour = 19 + ((index * 7) % 4);
    const startMinute = 8 + ((index * 11) % 39);
    const duration = 9 + ((index * 3) % 12);
    const deathStart = `${String(startHour).padStart(2, "0")}.${String(startMinute).padStart(2, "0")}`;
    const deathEnd = `${String(startHour).padStart(2, "0")}.${String(startMinute + duration).padStart(2, "0")}`;
    const deathWindow = `${deathStart}-${deathEnd}`;
    const method = { short, detail, object, trace };
    const suspects = Array.from({ length: 4 }, (_, suspectIndex) => {
      const suspectSlot = index * 4 + suspectIndex;
      const name = suspectName(suspectSlot);
      const role = pick(roles, index * 3 + suspectIndex);
      const isKiller = suspectIndex === correctIndex;
      const suspect = {
        id: `case-${index + 1}-suspect-${suspectIndex}`,
        name,
        role,
        mood: pick(moods, index + suspectIndex),
        mark: initials(name),
        portrait: portraitsBySlot[suspectSlot],
        isKiller,
        bio: `${name}, maktulle ${role} ilişkisi üzerinden bağlantılı. ${world.place} çevresindeki hareketleri dosyaya alındı.`
      };
      suspect.questions = buildQuestions({
        suspect, isKiller, method, motive, access: world.access, deathWindow, caseIndex: index, suspectIndex
      });
      return suspect;
    });

    return {
      id: `case-${index + 1}`,
      number: `Dosya No ${String(index + 1).padStart(3, "0")}-${317 + ((index * 19) % 600)}`,
      title: `${victim} Dosyası`,
      victim,
      location: world.place,
      method,
      motive,
      difficulty,
      difficultyLabel: difficultyMeta.label,
      requiredClues: difficultyMeta.requiredClues,
      deathWindow,
      summary: `${world.place} içinde bulunan ${victim}, ${short} yöntemiyle öldürüldü.`,
      file: [
        ["Olay yeri", `${world.place}. Kontrollü erişim alanında zorla giriş izi bulunmadı.`],
        ["Ölüm şekli", detail],
        ["Zaman aralığı", `Adli tıp ölüm saatini ${deathWindow} arası olarak daralttı.`],
        ["Kritik nesne", `${object} üzerinde incelenen ana iz: ${trace}.`],
        ["Soruşturma ekseni", `Maktulün araştırdığı ${motive}, doğrudan risk oluşturuyordu.`]
      ],
      timeline: [
        `${deathStart} - Maktul son kez canlı görüldü.`,
        `${deathEnd} - Kontrollü alandaki hareket kaydı kesildi.`,
        `${object} adli incelemeye alındı.`,
        `${motive} dosyasının bir bölümü kayıp bulundu.`
      ],
      forensic: [
        { type: "Maktul", image: victimPortraits[index], title: victim, note: `Dosyaya özel kimlik fotoğrafı · ${String(index + 1).padStart(3, "0")}` },
        { type: "Olay Yeri", image: `assets/evidence/scenes/case-${String(index + 1).padStart(3, "0")}.webp`, title: world.place, note: `${deathWindow} kayıt aralığı · görüntü ${String(index + 1).padStart(3, "0")}` },
        { type: "DNA", image: "assets/evidence/dna-report.webp", title: "Biyolojik analiz", note: difficulty === "easy" ? "Eşleşme profili belirgin" : "Karşılaştırmalı inceleme gerekli" },
        { type: "Balistik / İz", image: "assets/evidence/ballistics-report.webp", title: object, note: trace }
      ],
      suspects,
      killerId: suspects[correctIndex].id
    };
  });
}
const cases = buildCases();
const progressByCase = loadProgress();
const profile = loadProfile();
let selectedDifficulty = difficulties[profile.difficulty] ? profile.difficulty : "easy";
let currentCase = null;
let activeSuspect = null;
let evidence = new Map();
let asked = new Set();
let suspectProgress = new Map();
let questionTotal = 0;
let logEntries = [];
let isClosed = false;
let isAnswering = false;
let pendingQuestionIndex = null;
let answerTimer = null;

const introScreen = document.querySelector("#introScreen");
const gameScreen = document.querySelector("#gameScreen");
const caseList = document.querySelector("#caseList");
const caseSearch = document.querySelector("#caseSearch");
const suspectList = document.querySelector("#suspectList");
const questionBank = document.querySelector("#questionBank");
const log = document.querySelector("#log");
const evidenceList = document.querySelector("#evidenceList");
const accuseSelect = document.querySelector("#accuseSelect");
const observationPanel = document.querySelector("#observationPanel");
const bodyLanguage = document.querySelector("#bodyLanguage");
const reactionState = document.querySelector("#reactionState");
const accuseBtn = document.querySelector("#accuseBtn");
const activePortrait = document.querySelector("#activePortrait");
const commissionerName = document.querySelector("#commissionerName");
const resultScreen = document.querySelector("#resultScreen");
const startShift = document.querySelector("#startShift");
const profileHint = document.querySelector("#profileHint");
const archiveSummary = document.querySelector("#archiveSummary");
const difficultyInputs = [...document.querySelectorAll('input[name="difficulty"]')];

commissionerName.value = profile.name;
const savedDifficultyInput = difficultyInputs.find((input) => input.value === selectedDifficulty);
if (savedDifficultyInput) savedDifficultyInput.checked = true;

function cleanName(value = "") {
  return String(value).trim().replace(/\s+/g, " ").slice(0, 28);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem("gece-vardiyasi-profile") || "{}");
    return { name: cleanName(saved.name), difficulty: saved.difficulty || "easy", randomQueues: saved.randomQueues || {} };
  } catch {
    return { name: "", difficulty: "easy", randomQueues: {} };
  }
}

function commissionerLabel() {
  return profile.name ? `Komiser ${profile.name}` : "Komiser";
}

function saveProfile() {
  profile.name = cleanName(commissionerName.value);
  profile.difficulty = selectedDifficulty;
  commissionerName.value = profile.name;
  try {
    localStorage.setItem("gece-vardiyasi-profile", JSON.stringify(profile));
  } catch {
    // Profil depolanamasa da mevcut oturum kişiselleştirilmiş kalır.
  }
}

function loadProgress() {
  try {
    return new Map(Object.entries(JSON.parse(localStorage.getItem("gece-vardiyasi-progress") || "{}")));
  } catch {
    return new Map();
  }
}

function persistProgress() {
  try {
    localStorage.setItem("gece-vardiyasi-progress", JSON.stringify(Object.fromEntries(progressByCase)));
  } catch {
    // Oyun, depolama kapalıyken mevcut oturumda çalışmaya devam eder.
  }
}

function saveCurrentCase() {
  if (!currentCase) return;
  progressByCase.set(currentCase.id, {
    asked: [...asked],
    evidence: [...evidence.entries()],
    questionTotal,
    logEntries,
    suspectProgress: [...suspectProgress.entries()],
    isClosed,
    activeSuspectId: activeSuspect?.id || null
  });
  persistProgress();
}

function casesForSelectedDifficulty() {
  return cases.filter((item) => item.difficulty === selectedDifficulty);
}

function shuffledCaseIds(pool) {
  const ids = pool.map((item) => item.id);
  for (let index = ids.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [ids[index], ids[swapIndex]] = [ids[swapIndex], ids[index]];
  }
  return ids;
}

function takeRandomCase() {
  const pool = casesForSelectedDifficulty();
  const validIds = new Set(pool.map((item) => item.id));
  profile.randomQueues ||= {};
  let queue = Array.isArray(profile.randomQueues[selectedDifficulty])
    ? profile.randomQueues[selectedDifficulty].filter((id) => validIds.has(id))
    : [];
  if (!queue.length) queue = shuffledCaseIds(pool);
  if (queue.length > 1 && queue.at(-1) === currentCase?.id) {
    [queue[queue.length - 1], queue[queue.length - 2]] = [queue[queue.length - 2], queue[queue.length - 1]];
  }
  const caseId = queue.pop();
  profile.randomQueues[selectedDifficulty] = queue;
  saveProfile();
  return cases.find((item) => item.id === caseId);
}

function updateSetupUI() {
  const meta = difficulties[selectedDifficulty];
  const name = cleanName(commissionerName.value);
  const pool = casesForSelectedDifficulty();
  const solved = pool.filter((item) => progressByCase.get(item.id)?.isClosed).length;
  startShift.disabled = !name;
  document.querySelector("#startShiftHint").textContent = `${meta.label} · rastgele dosya`;
  profileHint.textContent = name
    ? `${name}, ${meta.hint.toLocaleLowerCase("tr-TR")} için hazırsın.`
    : "Devam etmek için dedektif adını yaz.";
  archiveSummary.textContent = `${meta.label} · ${solved}/25 çözüldü`;
}

function renderCaseList(filter = caseSearch.value) {
  const normalized = filter.trim().toLocaleLowerCase("tr-TR");
  const filtered = casesForSelectedDifficulty().filter((item) =>
    `${item.title} ${item.location} ${item.motive} ${item.method.short}`
      .toLocaleLowerCase("tr-TR").includes(normalized)
  );

  if (!filtered.length) {
    caseList.innerHTML = '<p class="empty-result">Aramana uyan vaka bulunamadı.</p>';
    updateSetupUI();
    return;
  }

  caseList.innerHTML = filtered.map((item) => {
    const progress = progressByCase.get(item.id);
    const status = progress?.isClosed ? "Çözüldü" : progress?.questionTotal ? `${progress.questionTotal} soru` : "Yeni";
    return `
      <button class="case-card ${progress?.isClosed ? "is-solved" : ""}" data-case-id="${item.id}" type="button">
        <span><i>${item.difficultyLabel}</i>${item.number} · ${status}</span>
        <strong>${item.title}</strong>
        <small>${item.location} · ${item.method.short}</small>
      </button>`;
  }).join("");
  updateSetupUI();
}
function startCase(caseId) {
  cancelPendingAnswer();
  saveCurrentCase();
  currentCase = cases.find((item) => item.id === caseId);
  if (!currentCase) return;
  selectedDifficulty = currentCase.difficulty;
  profile.difficulty = selectedDifficulty;
  saveProfile();
  const saved = progressByCase.get(caseId) || {};
  evidence = new Map(saved.evidence || []);
  asked = new Set(saved.asked || []);
  suspectProgress = new Map(saved.suspectProgress || []);
  questionTotal = saved.questionTotal || 0;
  logEntries = saved.logEntries || [];
  isClosed = Boolean(saved.isClosed);
  activeSuspect = currentCase.suspects.find((suspect) => suspect.id === saved.activeSuspectId) || null;

  introScreen.classList.add("is-hidden");
  gameScreen.classList.remove("is-hidden");
  document.querySelector("#caseNumber").textContent = currentCase.number;
  document.querySelector("#caseTitle").textContent = currentCase.title;
  document.querySelector("#difficultyBadge").textContent = currentCase.difficultyLabel;
  document.querySelector("#caseState").textContent = isClosed ? "Dosya kapandı" : "Dosya açık";
  document.querySelector("#questionCount").textContent = questionTotal;
  document.querySelector("#verdict").className = "verdict";
  document.querySelector("#verdict").textContent = isClosed
    ? "Bu vaka çözüldü. Dosya salt okunur durumda."
    : `Karar için ${currentCase.requiredClues} kritik eşleşme gerekli.`;
  accuseBtn.disabled = isClosed;
  accuseSelect.disabled = isClosed;

  renderCaseFile();
  renderSuspects();
  renderEvidence();
  renderLog();
  if (activeSuspect) selectSuspect(activeSuspect.id);
  else resetInterview();
  switchTab("file");
}

function resetInterview() {
  document.querySelector("#activeName").textContent = "Bir şüpheli seç";
  document.querySelector("#activeRole").textContent = "Sorgu Odası";
  document.querySelector("#activeMood").textContent = "Beklemede";
  document.querySelector("#activeBio").textContent = "Şüpheli seçildiğinde kısa profil ve sorgu soruları burada görünür.";
  activePortrait.className = "active-portrait is-empty";
  activePortrait.removeAttribute("style");
  observationPanel.className = "observation-panel is-empty";
  reactionState.textContent = "Beklemede";
  bodyLanguage.textContent = "Karşı sandalyede henüz kimse yok.";
  renderQuestions();
}

function renderCaseFile() {
  const timeline = currentCase.timeline.map((item) => `<li>${item}</li>`).join("");
  const gallery = currentCase.forensic.map((item) => `
    <article class="forensic-card">
      <img src="${item.image}" alt="${item.type}: ${item.title}" />
      <div><span>${item.type}</span><strong>${item.title}</strong><small>${item.note}</small></div>
    </article>`).join("");
  document.querySelector("#caseFile").innerHTML = `
    <div class="forensic-gallery">${gallery}</div>
    <div class="file-grid">
      ${currentCase.file.map(([title, text]) => `<div class="file-card"><strong>${title}</strong><span>${text}</span></div>`).join("")}
      <div class="file-card timeline-card"><strong>Zaman çizelgesi</strong><span><ol>${timeline}</ol></span></div>
    </div>`;
}

function renderSuspects() {
  const selectedAccusation = accuseSelect.value;
  suspectList.innerHTML = currentCase.suspects.map((suspect, index) => {
    const completed = suspect.questions.filter((_, questionIndex) => asked.has(`${suspect.id}-${questionIndex}`)).length;
    const percent = Math.round((completed / suspect.questions.length) * 100);
    return `
    <button class="suspect suspect-tone-${index} ${activeSuspect?.id === suspect.id ? "is-active" : ""}" data-id="${suspect.id}" type="button" ${isAnswering ? "disabled" : ""}>
      <span class="suspect-thumb" style="${portraitStyle(suspect.portrait)}" aria-hidden="true"></span>
      <span class="suspect-copy"><strong>${suspect.name}</strong><span>${suspect.role}</span><span class="suspect-progress"><i style="--progress:${percent}%"></i><small>${completed}/${suspect.questions.length} soru</small></span></span>
    </button>`;
  }).join("");

  accuseSelect.innerHTML = '<option value="">Şüpheli seç...</option>' +
    currentCase.suspects.map((suspect) => `<option value="${suspect.id}">${suspect.name}</option>`).join("");
  if (currentCase.suspects.some((suspect) => suspect.id === selectedAccusation)) {
    accuseSelect.value = selectedAccusation;
  }
}

function selectSuspect(id) {
  if (isAnswering) return;
  activeSuspect = currentCase.suspects.find((suspect) => suspect.id === id);
  if (!activeSuspect) return;
  document.querySelector("#activeName").textContent = activeSuspect.name;
  document.querySelector("#activeRole").textContent = activeSuspect.role;
  document.querySelector("#activeMood").textContent = activeSuspect.mood;
  document.querySelector("#activeBio").textContent = activeSuspect.bio;
  activePortrait.className = "active-portrait";
  activePortrait.setAttribute("style", portraitStyle(activeSuspect.portrait));
  const remembered = suspectProgress.get(activeSuspect.id);
  if (remembered) {
    updateObservation(remembered.state, remembered.text, remembered.reaction);
  } else {
    updateObservation(0, `${activeSuspect.name} ifadeye hazır. İlk gözlemde beden dili ölçülü.`, "İlk gözlem");
  }
  renderSuspects();
  renderQuestions();
  saveCurrentCase();
}

function updateObservation(state, text, reaction) {
  observationPanel.className = `observation-panel state-${state}`;
  bodyLanguage.textContent = text;
  reactionState.textContent = reaction;
}

function personalizedAnswer(item) {
  if (!profile.name) return item.a;
  const askedBefore = logEntries.filter((entry) => entry.suspectId === activeSuspect?.id).length;
  const address = askedBefore === 0 ? `${commissionerLabel()}, ` : askedBefore === 2 ? `Bakın ${commissionerLabel()}, ` : "";
  if (!address) return item.a;
  return `${address}${item.a.charAt(0).toLocaleLowerCase("tr-TR")}${item.a.slice(1)}`;
}

function renderQuestions() {
  if (!activeSuspect) {
    questionBank.innerHTML = '<p class="muted">Sorguya başlamak için bir şüpheli seç.</p>';
    return;
  }
  if (isClosed) {
    questionBank.innerHTML = '<p class="muted">Dosya kapandı. Önceki ifadeleri Tutanak sekmesinden inceleyebilirsin.</p>';
    return;
  }
  const suspectTone = currentCase.suspects.findIndex((suspect) => suspect.id === activeSuspect.id);
  questionBank.innerHTML = activeSuspect.questions.map((item, index) => {
    const id = `${activeSuspect.id}-${index}`;
    const waiting = isAnswering && pendingQuestionIndex === index;
    const label = waiting ? "Şüpheli düşünüyor..." : item.q;
    return `<button class="question suspect-tone-${suspectTone} ${waiting ? "is-waiting" : ""}" data-index="${index}" type="button" ${asked.has(id) || isAnswering ? "disabled" : ""}>${label}</button>`;
  }).join("");
}

function askQuestion(index) {
  if (!activeSuspect || isClosed || isAnswering) return;
  const item = activeSuspect.questions[index];
  if (!item) return;
  const questionId = `${activeSuspect.id}-${index}`;
  if (asked.has(questionId)) return;
  const caseId = currentCase.id;
  const suspectId = activeSuspect.id;
  const suspectName = activeSuspect.name;
  const delay = 1100 + (index * 170) + ((questionTotal % 3) * 120);

  isAnswering = true;
  pendingQuestionIndex = index;
  accuseBtn.disabled = true;
  accuseSelect.disabled = true;
  updateObservation(1, `${suspectName} soruyu değerlendiriyor; cevap vermeden önce kısa bir süre düşünüyor.`, "Cevap bekleniyor");
  renderQuestions();
  renderSuspects();
  renderLog();
  switchTab("log");

  answerTimer = window.setTimeout(() => {
    answerTimer = null;
    if (currentCase?.id !== caseId || activeSuspect?.id !== suspectId) {
      cancelPendingAnswer();
      return;
    }
    isAnswering = false;
    pendingQuestionIndex = null;
    asked.add(questionId);
    questionTotal += 1;
    const answer = personalizedAnswer(item);
    logEntries.unshift({ question: item.q, answer, name: suspectName, suspectId });
    if (item.clue && !evidence.has(item.clue)) evidence.set(item.clue, Boolean(item.key));
    document.querySelector("#questionCount").textContent = questionTotal;
    updateObservation(Math.min(index + 1, 4), item.pose, item.reaction);
    suspectProgress.set(suspectId, {
      state: Math.min(index + 1, 4),
      text: item.pose,
      reaction: item.reaction
    });
    accuseBtn.disabled = isClosed;
    accuseSelect.disabled = isClosed;
    renderQuestions();
    renderSuspects();
    renderLog();
    renderEvidence();
    saveCurrentCase();
    switchTab(item.key ? "evidence" : "log");
  }, delay);
}

function cancelPendingAnswer() {
  if (answerTimer !== null) window.clearTimeout(answerTimer);
  answerTimer = null;
  isAnswering = false;
  pendingQuestionIndex = null;
}

function renderLog() {
  if (!logEntries.length && !isAnswering) {
    log.innerHTML = '<p class="muted">İlk sorgu kaydı burada görünecek.</p>';
    return;
  }
  const completedTurns = [...logEntries].reverse().map((entry) => {
    const tone = Math.max(0, currentCase.suspects.findIndex((suspect) => suspect.id === entry.suspectId || suspect.name === entry.name));
    return `<div class="log-turn"><div class="speech speech-commissioner"><span>${escapeHtml(commissionerLabel())}</span><p>${entry.question}</p></div><div class="speech speech-suspect suspect-tone-${tone}"><span>${entry.name}</span><p>${entry.answer}</p></div></div>`;
  }).join("");
  const pendingItem = isAnswering && activeSuspect ? activeSuspect.questions[pendingQuestionIndex] : null;
  const pendingTone = activeSuspect ? Math.max(0, currentCase.suspects.findIndex((suspect) => suspect.id === activeSuspect.id)) : 0;
  const pendingTurn = pendingItem ? `<div class="log-turn is-pending"><div class="speech speech-commissioner"><span>${escapeHtml(commissionerLabel())}</span><p>${pendingItem.q}</p></div><div class="speech speech-suspect suspect-tone-${pendingTone}"><span>${activeSuspect.name}</span><p class="typing-answer"><i></i><i></i><i></i> Yanıt hazırlanıyor</p></div></div>` : "";
  log.innerHTML = completedTurns + pendingTurn;
  window.requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
}
function renderEvidence() {
  if (!evidence.size) {
    evidenceList.innerHTML = '<p class="muted">Henüz delil yok. İfadelerden çıkan bilgiler burada birikir.</p>';
  } else {
    evidenceList.innerHTML = [...evidence.entries()].map(([text, key], index) => `
      <div class="evidence ${key ? "is-key" : ""}"><strong>${index + 1}</strong><span>${text}</span></div>`).join("");
  }
  const keyCount = [...evidence.values()].filter(Boolean).length;
  document.querySelector("#clueCount").textContent = evidence.size;
  document.querySelector("#riskLabel").textContent = keyCount >= currentCase.requiredClues ? "Karar için yeterli" : keyCount ? `${keyCount}/${currentCase.requiredClues} kritik eşleşme` : "Analiz sürüyor";
}

function accuse() {
  if (isClosed || isAnswering) return;
  const suspectId = accuseSelect.value;
  const keyCount = [...evidence.values()].filter(Boolean).length;
  const verdict = document.querySelector("#verdict");
  verdict.className = "verdict";
  if (!suspectId) {
    verdict.textContent = "Önce bir şüpheli seç.";
  } else if (suspectId === currentCase.killerId && keyCount >= currentCase.requiredClues) {
    const killer = currentCase.suspects.find((suspect) => suspect.id === currentCase.killerId);
    isClosed = true;
    verdict.classList.add("good");
    verdict.textContent = `Doğru: Katil ${killer.name}. ${currentCase.method.object}, ${currentCase.method.trace} ve ${currentCase.motive} bağlantısı cinayeti çözdü.`;
    document.querySelector("#caseState").textContent = "Dosya kapandı";
    accuseBtn.disabled = true;
    accuseSelect.disabled = true;
    renderQuestions();
    saveCurrentCase();
    window.setTimeout(showResultScreen, 420);
  } else if (suspectId === currentCase.killerId) {
    verdict.classList.add("bad");
    verdict.textContent = `Şüphe doğru yönde ancak dosya zayıf. ${currentCase.requiredClues - keyCount} kritik eşleşme daha gerekli.`;
  } else {
    verdict.classList.add("bad");
    verdict.textContent = "Yanlış suçlama. Kritik izler bu şüpheliyle yeterince örtüşmüyor.";
  }
}

function showResultScreen() {
  if (!currentCase || !isClosed) return;
  const killer = currentCase.suspects.find((suspect) => suspect.id === currentCase.killerId);
  const keyCount = [...evidence.values()].filter(Boolean).length;
  document.querySelector("#resultTitle").textContent = `${currentCase.title} kapandı`;
  document.querySelector("#resultLead").textContent = `${commissionerLabel()}, doğru bağlantıyı kurdun. ${killer.name} cinayetten sorumlu bulundu.`;
  document.querySelector("#resultStats").innerHTML = `
    <span><strong>${questionTotal}</strong>soru</span>
    <span><strong>${evidence.size}</strong>delil</span>
    <span><strong>${keyCount}</strong>kritik eşleşme</span>`;
  document.querySelector("#resultSummary").innerHTML = `
    <p><span>Fail</span><strong>${killer.name}</strong></p>
    <p><span>Yöntem</span><strong>${currentCase.method.short}</strong></p>
    <p><span>Güdü</span><strong>${currentCase.motive}</strong></p>`;
  resultScreen.classList.remove("is-hidden");
  requestAnimationFrame(() => resultScreen.classList.add("is-visible"));
  document.querySelector("#resultToCases").focus();
}

function hideResultScreen() {
  resultScreen.classList.remove("is-visible");
  window.setTimeout(() => resultScreen.classList.add("is-hidden"), 260);
}

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
  document.querySelector(`#${tabName}Tab`).classList.add("is-active");
}

caseList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-case-id]");
  if (button) startCase(button.dataset.caseId);
});
caseSearch.addEventListener("input", (event) => renderCaseList(event.target.value));
commissionerName.addEventListener("input", updateSetupUI);
commissionerName.addEventListener("change", saveProfile);
commissionerName.addEventListener("blur", saveProfile);
difficultyInputs.forEach((input) => input.addEventListener("change", () => {
  selectedDifficulty = input.value;
  profile.difficulty = selectedDifficulty;
  caseSearch.value = "";
  saveProfile();
  renderCaseList("");
}));
startShift.addEventListener("click", () => {
  saveProfile();
  if (!profile.name) {
    commissionerName.focus();
    updateSetupUI();
    return;
  }
  const randomCase = takeRandomCase();
  if (randomCase) startCase(randomCase.id);
});
document.querySelector("#backToCases").addEventListener("click", () => {
  cancelPendingAnswer();
  saveCurrentCase();
  gameScreen.classList.add("is-hidden");
  introScreen.classList.remove("is-hidden");
  renderCaseList();
});
suspectList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (button) selectSuspect(button.dataset.id);
});
questionBank.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (button) askQuestion(Number(button.dataset.index));
});
document.querySelector("#clearLog").addEventListener("click", () => {
  logEntries = [];
  renderLog();
  saveCurrentCase();
});
document.querySelector("#resetGame").addEventListener("click", () => {
  const approved = window.confirm("Tüm vaka ilerlemesi, deliller ve çözülen dosyalar silinsin mi?");
  if (!approved) return;
  cancelPendingAnswer();
  localStorage.removeItem("gece-vardiyasi-progress");
  progressByCase.clear();
  currentCase = null;
  activeSuspect = null;
  evidence = new Map();
  asked = new Set();
  suspectProgress = new Map();
  questionTotal = 0;
  logEntries = [];
  isClosed = false;
  caseSearch.value = "";
  renderCaseList("");
});
accuseBtn.addEventListener("click", accuse);
document.querySelector("#reviewCase").addEventListener("click", hideResultScreen);
document.querySelector("#resultToCases").addEventListener("click", () => {
  hideResultScreen();
  saveCurrentCase();
  gameScreen.classList.add("is-hidden");
  introScreen.classList.remove("is-hidden");
  renderCaseList();
});
document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => switchTab(tab.dataset.tab)));

renderCaseList();
