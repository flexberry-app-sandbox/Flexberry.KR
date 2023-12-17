import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.график-для-сотрудников.caption'),
          title: i18n.t('forms.application.sitemap.график-для-сотрудников.title'),
          children: [{
            link: 'i-i-s-k-r-график-работы-l',
            caption: i18n.t('forms.application.sitemap.график-для-сотрудников.i-i-s-k-r-график-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.график-для-сотрудников.i-i-s-k-r-график-работы-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-k-r-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.график-для-сотрудников.i-i-s-k-r-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.график-для-сотрудников.i-i-s-k-r-сотрудники-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.найм-работников.caption'),
          title: i18n.t('forms.application.sitemap.найм-работников.title'),
          children: [{
            link: 'i-i-s-k-r-найм-работников-l',
            caption: i18n.t('forms.application.sitemap.найм-работников.i-i-s-k-r-найм-работников-l.caption'),
            title: i18n.t('forms.application.sitemap.найм-работников.i-i-s-k-r-найм-работников-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-k-r-вакансии-l',
            caption: i18n.t('forms.application.sitemap.найм-работников.i-i-s-k-r-вакансии-l.caption'),
            title: i18n.t('forms.application.sitemap.найм-работников.i-i-s-k-r-вакансии-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})