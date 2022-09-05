export interface IAppConfig {
  nodeEnv: string;
}

export interface IAppContext {
  isClicked: boolean;
  toggleClicked: (flag?: boolean) => void;
}
