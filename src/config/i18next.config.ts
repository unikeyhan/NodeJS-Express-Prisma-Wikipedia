import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + '/../../../langs/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    preload: ['en', 'fr'],
  });

const i18nextConfig = i18nextMiddleware.handle(i18next);

export default i18nextConfig;


// app.get('/greeting', (req, res) => {
//   const response = req.t('greeting');
//   res.status(200);
//   res.send(response);
// });