
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: any;
        version: string;
        platform: string;
        isExpanded: boolean;
        isClosingConfirmationEnabled: boolean;
        headerColor: string;
        backgroundColor: string;

        ready: () => void;
        expand: () => void;
        close: () => void;

        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;

        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isProgressVisible: boolean;
          isActive: boolean;

          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
          offClick: () => void;
          show: () => void;
          hide: () => void;
        };
      };
    };
  }
}
