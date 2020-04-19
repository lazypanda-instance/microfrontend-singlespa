import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LinkMenu } from './LinkMenu.model';
import { assetUrl } from 'src/single-spa/asset-url';
import { Router } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss', './app-header.component.mobile.scss']
})
export class AppHeaderComponent implements OnInit {
  public isSideMenuOpen = false;
  public navigationMenuDataSource: Array<LinkMenu> = [];
  public closeImageSrc = assetUrl('close.svg');
  public menuList = [];

  @ViewChild('sidemenu', {static: false}) private sidemenu: ElementRef;

  constructor(public router: Router, public menuService: MenuService) {}

  ngOnInit() {
    setTimeout(() => {
      this.toggle();
    }, 10);

    this.fetchMenu();
  }

  toggle(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
    const sideMenuHTMLElement: HTMLElement = this.sidemenu.nativeElement;
    this.isSideMenuOpen ? sideMenuHTMLElement.style.display = 'none' : sideMenuHTMLElement.style.display = '';
  }

  fetchMenu(): void {
    this.menuService.fetchMenuList().subscribe((response: any) => {
      this.menuList = response.menu;
    });
  }

  mobileNavigateTo(menu: LinkMenu): void {
    this.toggle();
    this.router.navigate([menu.navigation]);
  }

  navigateTo(menu: LinkMenu): void {
    this.router.navigate([menu.navigation]);
  }

}
