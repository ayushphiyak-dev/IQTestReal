# Consent integration

`ConsentProvider` is an integration boundary, not a consent banner or a claim of compliance. Before enabling advertising for visitors in the EEA, UK, or Switzerland, connect a Google-certified CMP here and map its consent result to a `signalcraft:consent` event whose detail is `granted` or `denied`.

Wire `signalcraft:open-consent-settings` to the CMP's privacy-options UI. Test region-specific behaviour and keep policy copy aligned with the technologies actually active. AdSense remains blocked while consent is `unknown` or `denied`.
