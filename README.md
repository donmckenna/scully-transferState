Live example:  
https://wizardly-johnson-148805.netlify.app

---
- Refresh page on route `/`
- The `TransferStateService` template area should show the correct routes.
- Now navigate to a link with search params `/search/something`
- The `TransferStateService` template area should now only show `[ nothing found ]` with a `fetchTransferState` error in the console.
---
- Again, refresh page on route `/`
- Navigate to `/search`
- The `TransferStateService` template area should quickly flash `[ nothing found ]` before showing the correct routes.
- Now navigate to a link with search params `/search/something`
- The `TransferStateService` template area again only shows `[ nothing found ]` with a `fetchTransferState` error in the console.
---
- Now refresh the page on `/search/something`
- The `TransferStateService` template area should show the correct routes.
- Now navigate back to `/`
- The `TransferStateService` template area should continue to show the correct routes.
- Now navigate back to `/search/something`
- The `TransferStateService` template area should still continue to show the correct routes.
  - **NOTE:**  The `TransferStateService` template area does NOT flash `[ nothing found ]` anymore.
---

If this error came up with _every_ navigation to `/search/something`, it would make more sense to me, but it only comes up when the first route on a refresh is a "root" route. Otherwise it seems to work fine.

So if route params is the issue, then what I find confusing is why it sometimes works at all here, and when it does, why it seems to function even smoother than refreshing on the root level routes.

I only see this issue when using `TransferStateService`