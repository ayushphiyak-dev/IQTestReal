'use client';

export function ConsentSettingsButton() {
  function openSettings() {
    window.dispatchEvent(new CustomEvent('iqtestreal:open-consent-settings'));
    if (typeof (window as Window & { __tcfapi?: unknown }).__tcfapi === 'undefined') alert('Consent settings will become available after the site owner connects a certified consent platform.');
  }
  return <button className="text-button" type="button" onClick={openSettings}>Privacy settings</button>;
}
