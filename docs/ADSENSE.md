# AdSense launch guide

AdSense is off by default. The publication remains complete when it is disabled. Do not enable it until the site has substantial publisher-owned content and AdSense has supplied the real client and slot identifiers.

## Pre-application checklist

### Site
- [ ] Custom domain connected and canonical hostname chosen
- [ ] HTTPS, navigation, mobile layouts, favicon, and every public route work
- [ ] Site is not under construction and has no broken assets

### Content
- [ ] Substantial original content replaces or formally adopts all demo material
- [ ] No copied, scraped, thin, or automatically published articles
- [ ] Drafts are not indexed; categories contain actual content
- [ ] Author and publisher details are accurate; no fake credentials or lorem ipsum

### Trust and privacy
- [ ] About, contact, privacy, cookies, terms, disclaimer, and editorial policy are final
- [ ] A Google-certified CMP is connected where required
- [ ] Policies match the services actually enabled and privacy settings reopen correctly

### Advertising
- [ ] No copy encourages clicks and ads cannot resemble navigation or controls
- [ ] Ads never obscure content or appear on empty, error, or 404 pages
- [ ] Publisher content substantially exceeds advertising and spacing prevents accidental taps

### Technical
- [ ] Sitemap, robots, canonicals, custom domain, and production assets work
- [ ] Lighthouse and mobile usability have been checked at 320, 375, 390, and 430 px
- [ ] `public/ads.txt` contains the exact line supplied by AdSense

## Enable AdSense

Set `NEXT_PUBLIC_ADSENSE_ENABLED=true` and `NEXT_PUBLIC_ADSENSE_CLIENT_ID` to the real `ca-pub-…` identifier. Replace example slot names in article templates with real slot IDs. The script will still wait for the consent abstraction to report `granted`.

Copy `public/ads.txt.example` to `public/ads.txt`, replace its comments with the exact account-provided entry, and confirm `https://YOURDOMAIN.com/ads.txt` returns it. Never invent a publisher ID.
