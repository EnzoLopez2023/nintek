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

The Azure/DNS owner must move `puzzlebox.nintek.com` to a host-aware HTTPS redirect
endpoint. Configure one rule with these acceptance criteria:

- Match host `puzzlebox.nintek.com` on every path.
- Return `301 Moved Permanently`.
- Set `Location: https://www.nintek.com/cortex`.
- Replace the incoming path rather than appending it.
- Serve a valid certificate for `puzzlebox.nintek.com`.

An Azure Front Door redirect rule or an equivalent HTTPS redirect service can own
that behavior. This requires external custom-domain, certificate, and DNS work; it
cannot be completed from this repository.

## Safe order of operations

1. Deploy this Nintek change first.
2. Confirm the Nintek-hosted path redirects:

   ```sh
   curl -sS -o /dev/null -D - https://www.nintek.com/puzzlebox
   curl -sS -o /dev/null -D - https://www.nintek.com/puzzlebox/privacy
   curl -sS -o /dev/null -D - https://www.nintek.com/puzzlebox/any/deep/path
   ```

   Each response must be `301` with a location that resolves to
   `https://www.nintek.com/cortex`.

3. Provision and validate the host-aware redirect endpoint and its managed
   certificate without stopping the dedicated Puzzlebox deployment.
4. Record the current DNS value and TTL for rollback, then change the
   `puzzlebox.nintek.com` DNS record to the redirect endpoint.
5. Keep the dedicated Puzzlebox deployment running while DNS converges. Verify
   from more than one network:

   ```sh
   curl -sS -o /dev/null -D - https://puzzlebox.nintek.com/
   curl -sS -o /dev/null -D - https://puzzlebox.nintek.com/privacy
   curl -sS -o /dev/null -D - https://puzzlebox.nintek.com/games/city-war
   curl -sS -L -o /dev/null -w '%{http_code} %{url_effective}\n' \
     https://puzzlebox.nintek.com/any/deep/path
   ```

   The first three requests must return `301` to the canonical Cortex URL. The
   final request must end at `https://www.nintek.com/cortex` with `200`.

6. Retire the dedicated deployment only after the old DNS TTL has elapsed and all
   probes pass. If any probe fails, restore the recorded DNS value; the dedicated
   app remains the rollback target.

This cutover retires the deployment, not the Puzzlebox source repository or its
history. Recheck the retention notes in
[`PORTFOLIO.md`](https://github.com/EnzoLopez2023/azure-infra/blob/main/PORTFOLIO.md)
before deleting any source used by Sortie or Salvo.
