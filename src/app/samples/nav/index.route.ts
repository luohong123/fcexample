import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbreadcrumbComponent } from './navbreadcrumb/navbreadcrumb.component';
import { NavdropdownComponent } from './navdropdown/navdropdown.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavsideComponent } from './navside/navside.component';
import { NavstepComponent } from './navstep/navstep.component';
import { NavtabComponent } from './navtab/navtab.component';
export const navRouters: Routes = [
    {
        path: 'fcnavbarList/:menuId',//导航栏
        component: NavbarComponent
    }, {
        path: 'fcnavbreadcrumbList/:menuId',//路径
        component: NavbreadcrumbComponent
    }, {
        path: 'fcnavdropdownList/:menuId',//下拉
        component: NavdropdownComponent
    }, {
        path: 'fcnavmenuList/:menuId',//菜单
        component: NavmenuComponent
    }, {
        path: 'fcnavsideList/:menuId',//侧边框
        component: NavsideComponent
    }, {
        path: 'fcnavsteplList/:menuId',//步骤
        component: NavstepComponent
    }, {
        path: 'fcnavtabList/:menuId',//选项卡
        component: NavtabComponent
    }
];
