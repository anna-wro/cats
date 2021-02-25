# Service worker insights and reference

To konfiguracji jest scachowanie wszystkich naszych url
https://github.com/shadowwalker/next-pwa#available-options

np:
_next/data/lHVbMOcsXr1RH-6VlSxma/ostrokrzew-amerykanski.json

Do zastanowienia czy cachujemy obrazki, bo teraz on cachuje
tylko my mamy lazy loading wiec cachuje te ktore widac

To jest chyba default cache
https://github.com/shadowwalker/next-pwa/blob/master/cache.js

Przyklad promtpa o reloadowanie okna jak jest nowy js 
https://github.com/shadowwalker/next-pwa/blob/master/examples/lifecycle/pages/index.js#L26-L38


Tylko dla prod 
w naszym przypadku / zamiast /app
zamiast service-worker.js sw.js lub workbox
```
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    //...
  }
})
```

Nalezy sie pozbyc bledow (?) dotyczacych dzialania offline
Najelpiej testowac na buildzie produkcyjnym: yarn build -> yarn start bo wtedy odpada nam webpack i dynamiczny loading