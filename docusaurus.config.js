module.exports = {
  title: 'Сборы для борьбы с вирусными инфекциями',
  tagline: 'Оздоровительный центр «Амрита» О.Г. Торсунова',
  url: 'https://docs.amrita.center',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'alexandrejev', // Usually your GitHub org/user name.
  projectName: 'amritaDocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Методики ОЦ «Амрита»',
      logo: {
        alt: 'Amrita docs',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/ARTimmunity/',
          activeBasePath: 'ARTimmunity',
          label: 'ARTimmunity+ против вирусов',
          position: 'left',
        },
        {
          to: 'docs/site',
          activeBasePath: 'site',
          label: 'Использование сайта',
          position: 'left',
        },
        {
          to: 'docs/faq',
          activeBasePath: 'faq',
          label: 'Ответы',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Методики',
          items: [
            // {
            //   label: 'Style Guide',
            //   to: 'docs/',
            // },
            {
              label: 'Бесплатные оздоровительные сборы',
              to: 'docs/mix/',
            },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Личный кабинет',
              href: 'https://lk.amrita.center/',
            },
            {
              label: 'Оздоровительный центр «Амрита»',
              href: 'https://amrita.center/',
            },

          ],
        },
        {
          title: 'Вопросы',
          items: [
            // {
            //   label: 'Ответы на вопросы',
            //   to: 'https://t.me/centerAmritaBot',
            // },
            {
              label: 'Телеграм канал',
              href: 'https://t.me/amritacenter',
            },
          ],
        },
      ],
      copyright: `<a href='https://andreev.cloud/' class="footer__link-item">© ${new Date().getFullYear()} Амрита.</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/alexandrejev/amritaDocs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/alexandrejev/amritaDocs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
