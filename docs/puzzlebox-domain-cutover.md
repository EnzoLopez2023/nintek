# Puzzlebox hostname cutover

This repository now permanently redirects the retired paths on the Nintek site:

- `/puzzlebox` -> `/cortex`
- `/puzzlebox/privacy` -> `/cortex`
- `/puzzlebox/*` -> `/cortex`

Those rules are path-based Azure Static Web Apps rules. They cover
`www.nintek.com`, including `/puzzlebox/privacy` and deeper paths, but they cannot
match the request host. They therefore cannot retire `puzzlebox.nintek.com` while
DNS and its custom-domain binding still send that hostname to the dedicated
Puzzlebox deployment.

Do not bind `puzzlebox.nintek.com` directly to the Nintek Static Web App as the
cutover. Static Web Apps cannot apply a redirect only to that host, so `/` would
serve the Nintek homepage instead of redirecting to Cortex.

## Required external cutover

The preferred cutover is a GoDaddy **Subdomain** forward for
`puzzlebox.nintek.com` with these settings:

- Destination: exactly `https://www.nintek.com/cortex`
- Forwarding type: **Permanent (301)**
- Masking: disabled
- Source HTTPS: automatically applied by GoDaddy

This forward is not configured yet. GoDaddy states that adding a subdomain forward
automatically adds or updates that subdomain's DNS. Use the GoDaddy Domain Portfolio
UI rather than the API so that Domain Protection and two-step verification remain in
the normal approval path.

The forward keeps the redirect outside the Puzzlebox Azure resources and avoids
provisioning Azure Front Door or another paid Azure redirect service.

## Prerequisites

1. Merge and deploy PR
   [#3](https://github.com/EnzoLopez2023/nintek/pull/3).
2. Confirm the Nintek-hosted Static Web Apps path redirects:

   ```sh
   curl -sS -o /dev/null -D - https://www.nintek.com/puzzlebox
   curl -sS -o /dev/null -D - https://www.nintek.com/puzzlebox/privacy
   curl -sS -o /dev/null -D - https://www.nintek.com/puzzlebox/any/deep/path
   ```

   Each response must be `301` with a location that resolves to
   `https://www.nintek.com/cortex`.

3. Before changing GoDaddy, record the complete rollback state:
   - The existing `puzzlebox` CNAME target and TTL
   - Relevant TXT validation records and their TTLs
   - The dedicated App Service custom-domain binding
   - The certificate identity, expiration, and binding for
     `puzzlebox.nintek.com`

Do not remove the App Service binding or certificate.

## Safe order of operations

1. In the GoDaddy Domain Portfolio, open `nintek.com`, select **DNS** then
   **Forwarding**, and add a **Subdomain** forward for `puzzlebox`.
2. Set the destination to exactly `https://www.nintek.com/cortex`, choose
   **Permanent (301)**, leave masking disabled, and complete the account's normal
   identity-verification flow. Saving the forward replaces or updates the
   subdomain DNS.
3. Keep the dedicated Puzzlebox App Service, custom-domain binding, and
   certificate intact while DNS converges. From multiple networks, verify that
   source-host TLS succeeds and that each un-followed response is `301` with
   `Location: https://www.nintek.com/cortex`:

   ```sh
   curl -sS -o /dev/null -D - https://puzzlebox.nintek.com/
   curl -sS -o /dev/null -D - https://puzzlebox.nintek.com/privacy
   curl -sS -o /dev/null -D - https://puzzlebox.nintek.com/games/city-war
   curl -sS -L -o /dev/null -w '%{http_code} %{url_effective}\n' \
     https://puzzlebox.nintek.com/any/deep/path
   ```

   The first three requests must return `301` to the canonical Cortex URL. The
   final request must end at `https://www.nintek.com/cortex` with `200`.

4. Wait for at least the recorded DNS TTL and for probes from multiple networks to
   agree. GoDaddy notes that DNS changes can take up to 48 hours to propagate
   globally.
5. Only after convergence and successful probes, continue the Puzzlebox retirement
   by privately archiving or quarantining the dedicated deployment and source as
   planned.

## Rollback

If TLS, redirect, or destination verification fails:

1. Remove the GoDaddy subdomain forward.
2. Restore the recorded CNAME and TXT records with their recorded TTLs.
3. Restore the recorded App Service custom-domain binding and certificate state if
   either changed. They should still be present because the safe sequence keeps
   them intact.
4. Wait for DNS convergence, then verify that
   `https://puzzlebox.nintek.com/` again serves the dedicated app with a valid
   certificate and that its health checks pass.

Do not archive or quarantine the dedicated app until the forwarding cutover is
stable.

The hostname cutover does not delete the Puzzlebox source repository or its
history. Any later private archive or quarantine must preserve that history.
Recheck the retention notes in
[`PORTFOLIO.md`](https://github.com/EnzoLopez2023/azure-infra/blob/main/PORTFOLIO.md)
before deleting any source used by Sortie or Salvo.

## GoDaddy references

- [Forward my GoDaddy domain](https://www.godaddy.com/help/forward-my-godaddy-domain-12123)
- [Edit my domain forwarding](https://www.godaddy.com/help/edit-my-domain-forwarding-19978)
- [Forward a domain (Domains API)](https://developer.godaddy.com/en/docs/api-users/domains/manage/forwarding)
