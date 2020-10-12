module.exports = {
  title: 'Сборы для борьбы с вирусными инфекциями',
  tagline: 'Оздоровительный центр «Амрита» О.Г. Торсунова',
  url: 'https://lk.amrita.center',
  baseUrl: '/docs/',
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'alexandrejev', // Usually your GitHub org/user name.
  projectName: 'amritaDocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Методики ARTimmunity',
      logo: {
        alt: 'docs ARTimmunity',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Документы',
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
              label: 'Бесплатные сборы',
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
            {
              label: 'Ответы на вопросы',
              to: 'https://t.me/centerAmritaBot',
            },
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
