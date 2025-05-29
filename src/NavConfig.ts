export interface LogoConfig {
  icon: string;
  link: string;
}

export type NavigationControl = LinkControl | MenuControl | SecondMenuControl | ButtonControl;

export interface LinkControl {
  type: 'link';
  settings: {
    name: string;
    href: string;
    /* URL Pattern */
    activeTest: '';
  };
}

export interface SecondMenuControl {
  type: 'second-menu';
  settings: {
    name: string;
    href: string;
  };
}

export interface ButtonControl {
  type: 'button';
  settings: {
    name: string;
    href: string;
    icon: string;
    class: string;
  };
}

export interface IconButtonControl {
  type: 'regular-button';
  settings: {
    name: string;
    href: string;
    icon: string;
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

