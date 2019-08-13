import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  // O objetivo do código abaixo é remover o menu tab da página home, sendo que a mesma está no menu tab.

	hideTabBarPages = [
    '',
		'tab1',
	];

	routeParamPages: string[] = [
		'tabs/tab2',
		'tabs/tab3',
    'tabs/tab4'
	];

	constructor(private router: Router, private platform: Platform) {
		this.platform.ready().then(() => {
			// console.log('Core service init');
			this.navEvents();
		});
	}

	public hideTabs() {
		const tabBar = document.getElementById('myTabBar');
		if (tabBar.style.display !== 'none') tabBar.style.display = 'none';
	}

	public showTabs() {
		const tabBar = document.getElementById('myTabBar');
		if (tabBar.style.display !== 'flex') tabBar.style.display = 'flex';
	}

	// A simple subscription that tells us what page we're currently navigating to.
	private navEvents() {
		this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
			// console.log(e);
			this.showHideTabs(e);
		});
	}

	private showHideTabs(e: any) {
		console.log(e.url);
		// Result:  e.url: "/tabs/groups/tabs/tab1?type=group"

		// Split the URL up into an array.
		const urlArray = e.url.split('/');
		// Result: urlArray: ["", "tabs", "groups", "tabs/tab1?type=group"]
		// Grab the parentUrl
		const pageUrlParent = urlArray[urlArray.length - 2];
		// Grab the last page url.
		const pageUrl = urlArray[urlArray.length - 1];
		// Result: tabs/tab1?type=group

		const page = pageUrl.split('?')[0];
		// Result: tabs/tab1
		// Check if it's a routeParamPage that we need to hide on
		const hideParamPage = this.routeParamPages.indexOf(pageUrlParent) > -1 && !isNaN(Number(page));
		// Check if we should hide or show tabs.
		const shouldHide = this.hideTabBarPages.indexOf(page) > -1 || hideParamPage;
		//console.log(shouldHide);
		// Result: true

		// Not ideal to set the timeout, but I haven't figured out a better method to wait until the page is in transition...
		try {
			setTimeout(() => shouldHide ? this.hideTabs() : this.showTabs(), 300);
		} catch (err) {
		}
	}
}
