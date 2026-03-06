import type { SiteConfig } from '../types.js'

export function oauthCallback(site: SiteConfig): string {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Redirecting...</title>
  <script>
    const params = window.location.search;
    window.location.href = '${site.scheme}://oauth/callback' + params;
    setTimeout(function () {
      window.location.replace('/?oauth_callback=true' + params.replace('?', '&'));
    }, 500);
  </script>
</head>
<body>
  <p>Redirecting to app...</p>
  <p>If nothing happens, <a href="#"
      onclick="window.location.replace('/?oauth_callback=true' + window.location.search.replace('?', '&')); return false;">click
      here</a> to continue in browser.</p>
</body>
</html>`
}

export function clientMetadata(site: SiteConfig): string {
  return JSON.stringify({
    client_id: `https://${site.domain}/.well-known/client-metadata.json`,
    client_name: site.name,
    client_uri: `https://${site.domain}`,
    logo_uri: `https://${site.domain}/static/icon.png`,
    redirect_uris: [
      `https://${site.domain}/oauth/callback`
    ],
    scope: 'atproto transition:generic',
    grant_types: [
      'authorization_code',
      'refresh_token'
    ],
    response_types: [
      'code'
    ],
    token_endpoint_auth_method: 'none',
    application_type: 'web',
    dpop_bound_access_tokens: true
  }, null, 2)
}
