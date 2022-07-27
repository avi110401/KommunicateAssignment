let url = new URL('https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby');
let searchParams = new URLSearchParams(url.search);
console.log(searchParams.get('utm_campaign'));
