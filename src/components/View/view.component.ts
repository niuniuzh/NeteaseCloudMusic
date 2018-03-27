import { Component, Input } from '@angular/core'

@Component({
  selector: 'view-header',
  template: `<ng-content></ng-content>
  <ng-content></ng-content>`
})

export class ViewHeader {
  constructor() { }
}

@Component({
  selector: 'view-sub-header',
  template: `<ng-content></ng-content>`
})

export class ViewSubHeader {
  constructor() { }
}

@Component({
  selector: 'view-footer',
  template: `<ng-content ></ng-content>`
})
export class ViewFooter {
  constructor() { }
}

@Component({
  selector: 'music-view',
  templateUrl: 'view.component.html'
})

export class MusicView {
  @Input() hasHeader: Boolean = true;
  @Input() hasSubHeader: Boolean = false;
  @Input() title = null;
  constructor() {}
}
