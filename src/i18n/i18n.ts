export class I18n {
  private translations: Record<string, any> = {};
  private fallbackTranslations: Record<string, any> = {};
  private currentLang: string = 'en';
  private fallbackLang: string = 'en';

  /**
   * Detects language from URL path
   * Examples:
   * /ru/project/overview -> 'ru'
   * /project/overview -> 'en' (default)
   * /unknown/project -> 'en' (unknown language)
   */
  detectLanguageFromPath(): string {
    const pathname = window.location.pathname;
    const segments = pathname.split('/').filter(Boolean);
    
      // Supported languages (without English - it's default)
  const supportedLanguages = [
    'af', 'ar', 'az', 'ba', 'bg', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'es', 
    'et', 'eu', 'fa', 'fi', 'fil', 'fr', 'gl', 'gu', 'he', 'hi', 'hr', 'hu', 
    'id', 'it', 'ja', 'jv', 'ka', 'kab', 'km_KH', 'ko', 'ku', 'lt', 'lv', 
    'mi', 'mk', 'mn', 'mr', 'ms', 'my', 'nb', 'ne', 'nl', 'nqo', 'pa', 'pl', 
    'pt_BR', 'pt_PT', 'ro', 'ru', 'si', 'sk', 'sq', 'sr', 'sv', 'sw', 'ta', 
    'te', 'tl', 'tr', 'ug', 'uk', 'ur', 'zh-Hans', 'zh-Hant'
  ];
    
    const firstSegment = segments[0];
    
    if (supportedLanguages.includes(firstSegment)) {
      return firstSegment;
    }
    
    return this.fallbackLang;
  }

  /**
   * Initializes translation system
   */
  async init(basePath: string = '/i18n/'): Promise<void> {
    this.currentLang = this.detectLanguageFromPath();
    
    try {
      // Load translations in parallel
      const promises = [
        this.loadLanguage(this.currentLang, basePath),
      ];
      
      // If current language is not English, load English as fallback
      if (this.currentLang !== this.fallbackLang) {
        promises.push(this.loadLanguage(this.fallbackLang, basePath, true));
      }
      
      await Promise.all(promises);
    } catch (error) {
      console.error('Failed to initialize i18n:', error);
    }
  }

  /**
   * Loads translation file for specified language
   */
  private async loadLanguage(
    lang: string, 
    basePath: string, 
    isFallback: boolean = false
  ): Promise<void> {
    try {
      const response = await fetch(`${basePath}${lang}.json`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to load ${lang}.json`);
      }
      
      const translations = await response.json();
      
      if (isFallback) {
        this.fallbackTranslations = translations;
      } else {
        this.translations = translations;
      }
      
    } catch (error) {
      console.warn(`Failed to load ${lang} translations:`, error);
      
      // Fallback strategy
      if (!isFallback && lang !== this.fallbackLang) {
        console.info(`Trying to load fallback language: ${this.fallbackLang}`);
        return this.loadLanguage(this.fallbackLang, basePath);
      }
      
      // If even fallback failed, use empty object
      if (isFallback) {
        this.fallbackTranslations = {};
      } else {
        this.translations = {};
      }
    }
  }

  /**
   * Gets value by nested key from translations object
   */
  private getNestedValue(obj: any, key: string): string | null {
    const keys = key.split('.');
    let value = obj;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }
    
    return typeof value === 'string' ? value : null;
  }

  /**
   * Gets translation by key
   * Supports simple variable interpolation
   */
  t(key: string, params?: Record<string, any>): string {
    // Backward compatibility: if key doesn't contain dots - return as is
    if (!key.includes('.')) {
      return key;
    }
    
    // Try to find in main translations
    let value = this.getNestedValue(this.translations, key);
    
    // Fallback to English if not found
    if (!value && this.currentLang !== this.fallbackLang) {
      value = this.getNestedValue(this.fallbackTranslations, key);
    }
    
    // If nothing found - return key
    if (!value) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
    
    // Simple variable interpolation
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => 
        params[paramKey]?.toString() || match
      );
    }
    
    return value;
  }

  /**
   * Gets current language
   */
  getCurrentLanguage(): string {
    return this.currentLang;
  }

  /**
   * Checks if translations are loaded
   */
  isReady(): boolean {
    return Object.keys(this.translations).length > 0 || 
           Object.keys(this.fallbackTranslations).length > 0;
  }
} 