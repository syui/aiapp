export const baseStyles = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #fff;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
@media (prefers-color-scheme: dark) {
  body { background: #000; color: #e0e0e0; }
  a { color: #6bb3ff; }
  h1, h2, h3 { color: #fff; }
  .section { background: #1a1a1a; }
  .info-item { background: #2a2a2a; }
}
.header { margin-bottom: 32px; }
.back-link { display: inline-block; margin-bottom: 16px; font-size: 14px; color: #0066cc; text-decoration: none; }
.back-link:hover { text-decoration: underline; }
.app-header { text-align: center; margin-bottom: 32px; }
.app-icon { width: 80px; height: 80px; border-radius: 18px; margin-bottom: 12px; }
.app-name { font-size: 24px; font-weight: bold; margin-bottom: 4px; }
.app-version { font-size: 14px; color: #666; }
.section { background: #f5f5f5; border-radius: 16px; padding: 20px; margin-bottom: 16px; }
.section-title { font-size: 13px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
.description { font-size: 15px; line-height: 22px; }
.info-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.info-item { flex: 1; min-width: 45%; text-align: center; background: #e8e8e8; border-radius: 12px; padding: 12px; }
.info-label { font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.info-value { font-size: 16px; font-weight: 600; }
.developer-name { font-size: 18px; font-weight: 600; margin-bottom: 12px; }
.link-row { display: flex; align-items: center; padding: 12px 0; border-top: 1px solid rgba(0,0,0,0.1); }
.link-icon { font-size: 14px; font-weight: 600; color: #666; width: 70px; }
.link-value { flex: 1; font-size: 14px; color: #0084ff; text-decoration: none; }
.link-value:hover { text-decoration: underline; }
.link-arrow { font-size: 16px; color: #ccc; }
.bitcoin-row { display: flex; align-items: center; background: rgba(247, 147, 26, 0.08); border-radius: 12px; padding: 14px; gap: 10px; }
.bitcoin-label { font-size: 18px; font-weight: 600; color: #f7931a; }
.bitcoin-address { flex: 1; font-size: 11px; font-family: monospace; color: #666; word-break: break-all; }
.copy-btn { font-size: 12px; color: #999; cursor: pointer; min-width: 50px; text-align: right; }
.copy-btn:hover { color: #0084ff; }
.footer { text-align: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #ddd; }
.copyright { font-size: 12px; color: #999; }
.content h1 { font-size: 24px; margin-bottom: 16px; }
.content h2 { font-size: 18px; margin: 24px 0 12px; }
.content p { margin-bottom: 12px; }
.content ul { margin: 12px 0; padding-left: 24px; }
.content li { margin-bottom: 8px; }
`
