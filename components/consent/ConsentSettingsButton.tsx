'use client';

export function ConsentSettingsButton() {
  function openSettings() {
    window.dispatchEvent(new CustomEvent('iqtestreal:open-consent-settings'));
  }
  return (
    <button className="text-button" type="button" onClick={openSettings}>
      Privacy choices
    </button>
  );
}
