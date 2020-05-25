- `npm run scully` and navigate to any `routerLink` route at the top of the page.
- In the console, I get the error: `ERROR TypeError: Cannot read property 'transferStateTest' of null`

- The component which finds the error looks to be:
  ```ts
  export class PostListComponent implements OnInit {

    availablePosts$: Observable<ScullyRoute[]>;
    transferStatePosts$: Observable<ScullyRoute[]>;

    constructor(
      private scully: ScullyRoutesService,
      private transferState: TransferStateService
    ) {}

    ngOnInit() {
      this.availablePosts$ = this.scully.available$;
      this.transferStatePosts$ = this.transferState.useScullyTransferState(
        'transferStateTest',
        this.availablePosts$
      );
    }

  }
  ```

- All I'm doing is running `ScullyRoutesService.available$` through `TransferStateService.useScullyTransferState()`, and showing its `json` in the template.
- It seems simple enough.. am I just implementing this incorrectly?