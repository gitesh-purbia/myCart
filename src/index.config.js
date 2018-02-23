import alertify from 'alertify.js';
export function config($locationProvider, $logProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  alertify.delay(2000);
  alertify.theme('bootstrap');
  alertify.maxLogItems(1);
  alertify.logPosition('bottom right');
  alertify.closeLogOnClick(true);
  alertify.okBtn('OK');
  $logProvider.debugEnabled(true);
}
