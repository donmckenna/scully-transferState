import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoutesService, TransferStateService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-post-list',
  styleUrls: ['./post-list.component.scss'],
  template: `


    <pre>
---------------------------------------
TransferStateService.useScullyTransferState('transferStateTest', ScullyRoutesService.available$)
---------------------------------------
<ng-container *ngIf="transferStatePosts$ | async as posts; else nothingFound">
  <ng-container *ngFor="let post of posts">
{{ post | json }}
  </ng-container>
</ng-container>
<ng-template #nothingFound>[ nothing found ]</ng-template>
    </pre>


    <pre>
---------------------------------------
ScullyRoutesService.available$
---------------------------------------
<ng-container *ngIf="availablePosts$ | async as posts; else nothingFound">
  <ng-container *ngFor="let post of availablePosts$ | async">
{{ post | json }}
  </ng-container>
</ng-container>
<ng-template #nothingFound>[ nothing found ]</ng-template>
    </pre>


  `,
})
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
