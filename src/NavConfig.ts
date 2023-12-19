export interface LogoConfig {
  icon: string;
  link: string;
}

export type NavigationControl = LinkControl | MenuControl;

export interface LinkControl {
  type: 'link';
  settings: {
    name: string;
    href: string;
    /* URL Pattern */
    activeTest: "" 
  };
}

export interface MenuControl {
  type: 'menu';
  settings: {
    name: string;
    children: NavigationControl[];
  };
}

export interface HeaderConfig {
  logo?: LogoConfig;
  navigation?: NavigationControl[];
}
