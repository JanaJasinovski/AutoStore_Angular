import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeaderCarListService} from "../../../services/header-car-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();

  menuStatus: boolean = false;

  constructor(
    public headerCarListService: HeaderCarListService
  ) {

  }

  ngOnInit(): void {
  }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}
