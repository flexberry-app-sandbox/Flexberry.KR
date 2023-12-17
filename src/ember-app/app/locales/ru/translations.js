import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'KR',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KR',
          title: 'KR'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
