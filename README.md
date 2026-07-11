# Gece Vardiyası

Gece Vardiyası, oyuncunun bir cinayet büro komiserini canlandırdığı, şüphelileri
sorgulayıp delilleri değerlendirerek katili bulmaya çalıştığı tarayıcı tabanlı bir
rol yapma oyunudur.

## Teknoloji

- Düz HTML, CSS ve JavaScript
- Backend veya veritabani yoktur
- Oyuncu ilerlemesi tarayıcının `localStorage` alanında saklanır
- Herhangi bir API anahtarı veya environment variable gerektirmez

## Yerel Çalıştırma

Uygulamanın giriş dosyası `outputs/index.html` dosyasıdır. Dosya doğrudan
tarayıcıda açılabilir veya basit bir statik dosya sunucusuyla çalıştırılabilir:

```bash
python -m http.server 8000 -d outputs
```

Ardından `http://localhost:8000` adresini açın.

## Vercel

Depodaki `vercel.json`, Vercel'in `outputs/` klasörünü statik site olarak
yayınlamasını sağlar. Vercel projesini GitHub deposuna bağlamak yeterlidir.

- Framework Preset: `Other`
- Build Command: boş bırakın
- Output Directory: `outputs` (`vercel.json` tarafından tanımlanır)
- Environment Variables: gerekmez

## Kayitlar

Oyun kayıtları kullanıcının kendi tarayıcısında tutulur. Farklı cihazlar veya
tarayıcılar arasında senkronize edilmez.

