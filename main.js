const { getMostRecentBrowserWindow } = require('api-utils/window/utils');
const { setTimeout } = require('timer');


let window = getMostRecentBrowserWindow();
let { document, PopupNotifications, gBrowser } = window;

let myNotificationIconId = 'my-notification-icon';
if (!document.getElementById('myNotificationIconId')) {
  let iconBox = document.getElementById('notification-popup-box');
  let icon = document.createElement('image');
  icon.setAttribute('id', myNotificationIconId);
  icon.setAttribute('class', 'notification-anchor-icon');
  icon.setAttribute('src', 'https://developer.cdn.mozilla.net/media/img/favicon.ico');
  iconBox.appendChild(icon);
}

PopupNotifications.show(
  gBrowser.selectedBrowser,
  'my-notification-id',
  'Description',
  'my-notification-icon', 
  { label: 'Main action', accessKey:'a', callback: function (){} },
  null,
  { popupIconURL: 'https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png' }
);
