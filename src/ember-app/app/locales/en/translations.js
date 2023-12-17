import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKRВакансииLForm from './forms/i-i-s-k-r-вакансии-l';
import IISKRГрафикРаботыLForm from './forms/i-i-s-k-r-график-работы-l';
import IISKRНаймРаботниковLForm from './forms/i-i-s-k-r-найм-работников-l';
import IISKRСотрудникиLForm from './forms/i-i-s-k-r-сотрудники-l';
import IISKRВакансииEForm from './forms/i-i-s-k-r-вакансии-e';
import IISKRГрафикРаботыEForm from './forms/i-i-s-k-r-график-работы-e';
import IISKRНаймРаботниковEForm from './forms/i-i-s-k-r-найм-работников-e';
import IISKRСотрудникиEForm from './forms/i-i-s-k-r-сотрудники-e';
import IISKRВакансииModel from './models/i-i-s-k-r-вакансии';
import IISKRГрафикРаботыModel from './models/i-i-s-k-r-график-работы';
import IISKRГрафикModel from './models/i-i-s-k-r-график';
import IISKRНаймРаботниковModel from './models/i-i-s-k-r-найм-работников';
import IISKRСотрудникиModel from './models/i-i-s-k-r-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-r-вакансии': IISKRВакансииModel,
    'i-i-s-k-r-график-работы': IISKRГрафикРаботыModel,
    'i-i-s-k-r-график': IISKRГрафикModel,
    'i-i-s-k-r-найм-работников': IISKRНаймРаботниковModel,
    'i-i-s-k-r-сотрудники': IISKRСотрудникиModel
  },

  'application-name': 'KR',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'KR',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KR',
          title: 'KR'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'график-для-сотрудников': {
          caption: 'График для сотрудников',
          title: 'График для сотрудников',
          'i-i-s-k-r-график-работы-l': {
            caption: 'График работы',
            title: ''
          },
          'i-i-s-k-r-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        'найм-работников': {
          caption: 'Найм работников',
          title: 'Найм работников',
          'i-i-s-k-r-найм-работников-l': {
            caption: 'Найм работников',
            title: ''
          },
          'i-i-s-k-r-вакансии-l': {
            caption: 'Вакансии',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-r-вакансии-l': IISKRВакансииLForm,
    'i-i-s-k-r-график-работы-l': IISKRГрафикРаботыLForm,
    'i-i-s-k-r-найм-работников-l': IISKRНаймРаботниковLForm,
    'i-i-s-k-r-сотрудники-l': IISKRСотрудникиLForm,
    'i-i-s-k-r-вакансии-e': IISKRВакансииEForm,
    'i-i-s-k-r-график-работы-e': IISKRГрафикРаботыEForm,
    'i-i-s-k-r-найм-работников-e': IISKRНаймРаботниковEForm,
    'i-i-s-k-r-сотрудники-e': IISKRСотрудникиEForm
  },

});

export default translations;
