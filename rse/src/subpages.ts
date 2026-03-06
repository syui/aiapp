export interface SubpageSection {
  title?: { en: string; ja: string }
  texts?: { en: string; ja: string }[]
  list?: { en: string; ja: string }[]
  html?: string
}

export interface SubpageData {
  path: string
  titleEn: string
  titleJa: string
  introEn?: string
  introJa?: string
  sections: SubpageSection[]
}

export const subpages: SubpageData[] = [
  {
    path: 'account',
    titleEn: 'Account',
    titleJa: 'アカウント',
    introEn: 'Your SNS account is your game account.',
    introJa: 'SNSアカウントがゲームアカウントになります。',
    sections: [
      {
        title: { en: 'Sign In', ja: 'サインイン' },
        texts: [
          { en: 'Sign in with your Bluesky account to access your game data.', ja: 'Blueskyアカウントでサインインしてゲームデータにアクセスできます。' },
          { en: 'Account data is managed through the AT Protocol.', ja: 'アカウントデータはAT Protocolを通じて管理されます。' },
        ],
      },
      {
        title: { en: 'Check Game Data', ja: 'ゲームデータの確認' },
        texts: [
          { en: "Access <a href='https://syui.ai/' target='_blank' rel='noopener'>https://syui.ai/</a> and search by your username (handle).", ja: "<a href='https://syui.ai/' target='_blank' rel='noopener'>https://syui.ai/</a> にアクセスして、自分のusername(handle)で検索します。" },
          { en: "For example, if your name is <code>syui.ai</code>, the URL will be:", ja: "例えば、<code>syui.ai</code>という名前なら以下のURLになります。" },
        ],
        html: '<p class="subpage-section-text"><a href="https://syui.ai/@syui.ai/at/rse" target="_blank" rel="noopener">https://syui.ai/@syui.ai/at/rse</a></p>',
      },
      {
        title: { en: 'Delete Game Data', ja: 'ゲームデータの削除' },
        texts: [
          { en: "Log in at <a href='https://syui.ai/' target='_blank' rel='noopener'>https://syui.ai/</a>, then delete the <code>ai.syui.rse.user</code> service.", ja: "<a href='https://syui.ai/' target='_blank' rel='noopener'>https://syui.ai/</a> からログインします。そして、<code>ai.syui.rse.user</code>のサービスを削除します。" },
        ],
        html: `<img src="/img/bluesky_oauth.png" alt="Bluesky OAuth" class="subpage-img">
<p class="subpage-section-text" data-lang-en="For example, if your name is <code>syui.ai</code>, you can delete it from the following URL (login required):" data-lang-ja="例えば、<code>syui.ai</code>という名前なら以下のURLから削除することができます。この操作はログインしている場合に限ります。">For example, if your name is <code>syui.ai</code>, you can delete it from the following URL (login required):</p>
<p class="subpage-section-text"><a href="https://syui.ai/@syui.ai/at/collection/ai.syui.rse.user/self" target="_blank" rel="noopener">https://syui.ai/@syui.ai/at/collection/ai.syui.rse.user/self</a></p>`,
      },
    ],
  },
  {
    path: 'privacy',
    titleEn: 'Privacy Policy',
    titleJa: 'プライバシーポリシー',
    introEn: 'Airse is an open-world action game that utilizes the AT Protocol for account authentication. This Privacy Policy explains how we handle your information when you use our game.',
    introJa: 'Airseは、AT Protocolをアカウント認証に利用するオープンワールドアクションゲームです。本プライバシーポリシーは、ゲーム利用時における情報の取り扱いについて説明します。',
    sections: [
      {
        title: { en: 'Information Collection', ja: '情報の収集' },
        texts: [
          { en: 'We do not collect any personal information.', ja: '個人情報は一切収集しません。' },
          { en: 'Airse does not track, store, or analyze any user data, gameplay statistics, or personal information. Your gaming experience remains private.', ja: 'Airseはユーザーデータ、ゲームプレイ統計、個人情報の追跡・保存・分析を行いません。ゲーム体験はプライベートに保たれます。' },
        ],
      },
      {
        title: { en: 'Account Authentication', ja: 'アカウント認証' },
        texts: [
          { en: 'Airse uses AT Protocol for account login functionality. When you log in:', ja: 'AirseはAT Protocolをアカウントログインに使用します。ログイン時:' },
        ],
        list: [
          { en: 'We only use your AT Protocol identity for authentication purposes.', ja: 'AT Protocolのアイデンティティは認証目的のみに使用します。' },
          { en: 'No additional data is collected or stored beyond what is necessary for login.', ja: 'ログインに必要な範囲を超えたデータの収集・保存は行いません。' },
          { en: 'Your credentials are handled securely through the AT Protocol.', ja: '認証情報はAT Protocolを通じて安全に処理されます。' },
        ],
      },
      {
        title: { en: 'syu.is Service Users', ja: 'syu.isサービス利用者' },
        list: [
          { en: 'The service operator reserves the right to suspend or terminate (ban) accounts at their discretion.', ja: 'サービス運営者は、自身の裁量でアカウントの停止または終了（BAN）を行う権利を有します。' },
          { en: 'This may occur in cases of terms of service violations or inappropriate behavior.', ja: '利用規約違反や不適切な行為があった場合に行われることがあります。' },
          { en: 'Account suspension decisions are final.', ja: 'アカウント停止の判断は最終的なものです。' },
        ],
      },
      {
        title: { en: 'Third-Party Services', ja: '第三者サービス' },
        texts: [
          { en: 'Airse relies on AT Protocol infrastructure. Please refer to the privacy policies of your AT Protocol provider (PDS) for information about how they handle your data.', ja: 'AirseはAT Protocolのインフラに依存しています。データの取り扱いについては、ご利用のAT Protocolプロバイダー（PDS）のプライバシーポリシーをご参照ください。' },
        ],
      },
      {
        title: { en: 'Changes to This Policy', ja: 'ポリシーの変更' },
        texts: [
          { en: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.', ja: '本プライバシーポリシーは随時更新されることがあります。変更は本ページに更新日とともに掲載されます。' },
        ],
      },
      {
        title: { en: 'Contact', ja: 'お問い合わせ' },
        texts: [
          { en: 'If you have any questions about this Privacy Policy, please contact the developer.', ja: '本プライバシーポリシーについてご質問がある場合は、開発者にお問い合わせください。' },
        ],
        html: '<p class="subpage-section-text"><a href="https://github.com/syui" target="_blank" rel="noopener">https://github.com/syui</a></p>',
      },
    ],
  },
  {
    path: 'terms',
    titleEn: 'Terms',
    titleJa: '利用規約',
    sections: [
      {
        list: [
          { en: 'The service may be terminated at any time.', ja: 'サービスは終了することがあります。' },
          { en: 'Game data may be lost.', ja: 'ゲームデータは失われることがあります。' },
          { en: 'Accounts created on syu.is may be lost.', ja: 'syu.isに作成されたアカウントは失われることがあります。' },
        ],
      },
    ],
  },
  {
    path: 'support',
    titleEn: 'Support',
    titleJa: 'サポート',
    introEn: 'If you have questions, feedback, or need help with Airse, please reach out through the following channels.',
    introJa: 'Airseについてのご質問、フィードバック、サポートが必要な場合は、以下からご連絡ください。',
    sections: [
      {
        title: { en: 'GitHub', ja: 'GitHub' },
        texts: [
          { en: 'Source code and issue tracker.', ja: 'ソースコードとイシュートラッカー。' },
        ],
        html: '<p class="subpage-section-text"><a href="https://github.com/syui" target="_blank" rel="noopener">https://github.com/syui</a></p>',
      },
      {
        title: { en: 'Bluesky', ja: 'Bluesky' },
        html: '<p class="subpage-section-text"><a href="https://bsky.app/profile/syui.ai" target="_blank" rel="noopener">@syui.ai</a></p>',
      },
    ],
  },
]

const menuItems = [
  { path: '/', labelEn: 'Airse', labelJa: 'Airse' },
  { path: '/account', labelEn: 'Account', labelJa: 'アカウント' },
  { path: '/privacy', labelEn: 'Privacy', labelJa: 'プライバシー' },
  { path: '/terms', labelEn: 'Terms', labelJa: '利用規約' },
  { path: '/support', labelEn: 'Support', labelJa: 'サポート' },
]

function renderSection(s: SubpageSection): string {
  let html = '<div class="subpage-section">'
  if (s.title) {
    html += `<h2 class="subpage-section-title" data-lang-en="${s.title.en}" data-lang-ja="${s.title.ja}">${s.title.en}</h2>`
    html += '<div class="subpage-section-line"></div>'
  }
  if (s.texts) {
    for (const t of s.texts) {
      html += `<p class="subpage-section-text" data-lang-en="${t.en}" data-lang-ja="${t.ja}">${t.en}</p>`
    }
  }
  if (s.list) {
    html += '<ul class="subpage-list">'
    for (const item of s.list) {
      html += `<li class="subpage-list-item" data-lang-en="${item.en}" data-lang-ja="${item.ja}">${item.en}</li>`
    }
    html += '</ul>'
  }
  if (s.html) {
    html += s.html
  }
  html += '</div>'
  return html
}

function renderMenu(activePath: string): string {
  return menuItems.map(m => {
    const active = `/${activePath}` === m.path ? ' menu-option-active' : ''
    const langAttrs = m.path === '/'
      ? ''
      : ` data-lang-en="${m.labelEn}" data-lang-ja="${m.labelJa}"`
    return `<a href="${m.path}" class="menu-option${active}"><span class="menu-option-text"${langAttrs}>${m.labelEn}</span></a>`
  }).join('\n      ')
}

export function renderSubpage(page: SubpageData): string {
  const intro = page.introEn
    ? `<p class="subpage-section-text" data-lang-en="${page.introEn}" data-lang-ja="${page.introJa}">${page.introEn}</p>`
    : ''

  const sections = page.sections.map(renderSection).join('\n    ')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/icon/ai.svg" type="image/svg+xml">
  <title>${page.titleEn} | Airse</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Space+Mono:wght@400&display=swap" rel="stylesheet">
  <style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--c-bg:#f5f5f8;--c-text:#1a1a2e;--c-accent:#3a7ca5;--c-accent2:#6a5acd;--c-dim:#8888a0;--f-d:'Orbitron',sans-serif;--f-b:'Space Mono',monospace}
html,body{width:100%;height:100%;background:var(--c-bg);color:var(--c-text);font-size:calc(1rem + 3px)}
.site-header{position:fixed;top:0;left:0;width:100%;height:5rem;padding:0 2rem;display:flex;align-items:center;z-index:110;background:var(--c-bg)}
.header-logo{display:inline-flex;align-items:center;gap:.5rem;text-decoration:none;color:var(--c-text);margin-right:auto}
.header-logo-icon{width:24px;height:24px}
.header-logo-text{font-family:var(--f-d);font-weight:700;font-size:.85rem;letter-spacing:.1em}
.site-footer{position:fixed;bottom:0;left:0;width:100%;padding:1.5rem 2rem 2.5rem;z-index:110;display:flex;flex-direction:column;align-items:center;background:var(--c-bg)}
.footer-copy{font-family:var(--f-b);font-size:.6rem;letter-spacing:.1em;color:var(--c-dim)}
.lang-selector{position:relative}
.lang-btn{display:flex;align-items:center;justify-content:center;background:0 0;border:none;border-radius:6px;cursor:pointer;padding:6px;opacity:.4;transition:opacity .3s,background .3s}
.lang-btn:hover{opacity:.9;background:rgba(26,26,46,.06)}
.lang-icon{width:20px;height:20px}
.lang-dropdown{display:none;position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.1);min-width:100px;overflow:hidden}
.lang-dropdown.show{display:block}
.lang-option{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;cursor:pointer;font-family:var(--f-b);font-size:.75rem;letter-spacing:.05em;transition:background .15s}
.lang-option:hover{background:#f0f0f0}
.lang-option.selected{background:linear-gradient(135deg,#f0f7ff,#e8f4ff)}
.lang-check{width:18px;height:18px;border-radius:50%;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;font-size:10px;transition:all .2s;color:transparent}
.lang-option.selected .lang-check{background:var(--c-accent);border-color:var(--c-accent);color:#fff}
.menu-selector{position:relative;margin-left:8px}
.menu-btn{display:flex;align-items:center;justify-content:center;background:0 0;border:none;border-radius:6px;cursor:pointer;padding:6px;opacity:.4;transition:opacity .3s,background .3s}
.menu-btn:hover{opacity:.9;background:rgba(26,26,46,.06)}
.menu-icon{width:20px;height:20px}
.menu-dropdown{display:none;position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.1);min-width:180px;overflow:hidden}
.menu-dropdown.show{display:block}
.menu-option{display:flex;align-items:center;padding:10px 14px;cursor:pointer;font-family:var(--f-b);font-size:.75rem;letter-spacing:.05em;transition:background .15s}
.menu-option:hover{background:#f0f0f0}
a.menu-option{text-decoration:none;color:inherit}
.menu-option-active{background:linear-gradient(135deg,#f0f7ff,#e8f4ff)}
.page{position:fixed;top:5rem;left:0;width:100%;height:calc(100% - 5rem);z-index:10;display:flex;flex-direction:column;align-items:center;background:var(--c-bg);justify-content:flex-start;overflow-y:auto}
.subpage-content{width:100%;max-width:640px;margin:0 auto;padding:4rem 2rem 6rem}
.subpage-heading{font-family:var(--f-d);font-weight:700;font-size:clamp(1rem,2.5vw,1.4rem);letter-spacing:.1em;color:var(--c-text);margin-bottom:.8rem}
.subpage-section{margin-top:2.5rem}
.subpage-section-title{font-family:var(--f-d);font-weight:700;font-size:clamp(.85rem,1.8vw,1.1rem);letter-spacing:.1em;color:var(--c-text);margin-bottom:.8rem}
.subpage-section-line{width:clamp(40px,8vw,80px);height:1px;background:linear-gradient(90deg,var(--c-accent),var(--c-accent2),transparent);margin-bottom:1rem}
.subpage-section-text{font-family:var(--f-b);font-size:clamp(.65rem,1.1vw,.8rem);line-height:2;letter-spacing:.05em;color:rgba(26,26,46,.6)}
.subpage-section-text a{color:var(--c-accent);text-decoration:none;word-break:break-all}
.subpage-section-text a:hover{text-decoration:underline}
.subpage-section-text code{background:rgba(26,26,46,.06);padding:.15em .4em;border-radius:3px;font-size:.9em}
.subpage-img{max-width:100%;border-radius:4px;margin:.5rem 0}
.subpage-list{list-style:none;margin-top:1.5rem;display:flex;flex-direction:column;gap:1rem}
.subpage-list-item{font-family:var(--f-b);font-size:clamp(.65rem,1.1vw,.8rem);line-height:2;letter-spacing:.05em;color:rgba(26,26,46,.6);padding-left:1.2em;position:relative}
.subpage-list-item::before{content:'';position:absolute;left:0;top:.85em;width:6px;height:6px;border-radius:50%;background:linear-gradient(135deg,var(--c-accent),var(--c-accent2))}
@media(max-width:768px){.site-header{padding:.8rem 1rem}.site-footer{padding:1rem 1rem 1.5rem}}
  </style>
</head>
<body>

<header class="site-header">
  <a href="/" class="header-logo">
    <img src="/icon/ai.svg" alt="Airse" class="header-logo-icon">
    <span class="header-logo-text">Airse</span>
  </a>
  <div class="lang-selector">
    <button type="button" class="lang-btn" id="lang-tab">
      <img src="/icon/language.svg" alt="Lang" class="lang-icon">
    </button>
    <div class="lang-dropdown" id="lang-dropdown">
      <div class="lang-option selected" data-lang="en"><span class="lang-name">EN</span><span class="lang-check">&#10003;</span></div>
      <div class="lang-option" data-lang="ja"><span class="lang-name">JA</span><span class="lang-check">&#10003;</span></div>
    </div>
  </div>
  <div class="menu-selector">
    <button type="button" class="menu-btn" id="menu-btn">
      <img src="/icon/menu.svg" alt="Menu" class="menu-icon">
    </button>
    <div class="menu-dropdown" id="menu-dropdown">
      ${renderMenu(page.path)}
    </div>
  </div>
</header>

<footer class="site-footer"><div class="footer-copy">&copy;syui</div></footer>

<div class="page">
  <div class="subpage-content">
    <h1 class="subpage-heading" data-lang-en="${page.titleEn}" data-lang-ja="${page.titleJa}">${page.titleEn}</h1>
    <div class="subpage-section-line"></div>
    ${intro}
    ${sections}
  </div>
</div>

<script>
!function(){var l=localStorage.getItem('preferred-lang')||'en',d=document,lb=d.getElementById('lang-tab'),ld=d.getElementById('lang-dropdown'),mb=d.getElementById('menu-btn'),md=d.getElementById('menu-dropdown');function a(g){d.querySelectorAll('[data-lang-en]').forEach(function(e){var t=e.getAttribute('data-lang-'+g);if(t)e.innerHTML=t});ld.querySelectorAll('.lang-option').forEach(function(o){o.classList.toggle('selected',o.dataset.lang===g)})}lb.onclick=function(e){e.stopPropagation();ld.classList.toggle('show');md.classList.remove('show')};ld.querySelectorAll('.lang-option').forEach(function(o){o.onclick=function(e){e.stopPropagation();l=o.dataset.lang||'en';localStorage.setItem('preferred-lang',l);a(l);ld.classList.remove('show')}});mb.onclick=function(e){e.stopPropagation();md.classList.toggle('show');ld.classList.remove('show')};d.onclick=function(){ld.classList.remove('show');md.classList.remove('show')};a(l)}()
</script>
</body>
</html>`
}
