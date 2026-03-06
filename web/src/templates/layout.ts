import type { SiteConfig } from '../types.js'
import { baseStyles } from './styles.js'

export function layout(site: SiteConfig, title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
  <title>${title} - ${site.name}</title>
  <link rel="icon" type="image/png" href="/static/icon.png">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="header">
    <a href="/" class="back-link">&larr; Back to ${site.backLink}</a>
  </div>
  ${content}
  <div class="footer">
    <p class="copyright">&copy; syui</p>
  </div>
</body>
</html>`
}

export function appLayout(site: SiteConfig, content: string): string {
  return layout(site, 'App Info', `
  <div class="app-header">
    ${site.appUrl ? `<a href="${site.appUrl}" target="_blank">` : ''}<img src="${site.icon}" alt="${site.name}" class="app-icon">${site.appUrl ? `</a>` : ''}
    <div class="app-name">${site.name}</div>
  </div>

  <div class="section">
    <p class="description">${site.description}</p>
  </div>

  <div class="section">
    <div class="section-title">App Information</div>
    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Category</div>
        <div class="info-value">${site.category}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Supported OS</div>
        <div class="info-value">${site.os}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Price</div>
        <div class="info-value">${site.price}</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Developer</div>
    <div class="developer-name">syui</div>
    <div class="link-row">
      <span class="link-icon">git</span>
      <a href="https://git.syui.ai/syui" class="link-value" target="_blank">git.syui.ai/syui</a>
      <span class="link-arrow">&rarr;</span>
    </div>
    <div class="link-row">
      <span class="link-icon">atproto</span>
      <a href="https://syu.is/syui" class="link-value" target="_blank">syu.is/syui</a>
      <span class="link-arrow">&rarr;</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Bitcoin</div>
    <div class="bitcoin-row">
      <span class="bitcoin-label">&#8383;</span>
      <span class="bitcoin-address" id="btc-address">3BqHXxraZyBapyNpJmniJDh9zqzuB8aoRr</span>
      <span class="copy-btn" onclick="copyBTC()">copy</span>
    </div>
  </div>

  ${content}

  <script>
    function copyBTC() {
      const addr = document.getElementById('btc-address').textContent;
      navigator.clipboard.writeText(addr).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = 'copied!';
        btn.style.color = '#4CAF50';
        setTimeout(() => {
          btn.textContent = 'copy';
          btn.style.color = '';
        }, 2000);
      });
    }
  </script>
`)
}

export function legalLayout(site: SiteConfig, title: string, content: string): string {
  return layout(site, title, `
  <div class="content">
    <h1>${title}</h1>
    ${content}
  </div>
`)
}
