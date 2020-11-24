export interface Item {
  _id: string;
  id: string;
  sourceSheet: string;
  name: string;
  patternTitle: any;
  diy: boolean;
  patternCustomize: any;
  kitType: any;
  size: string;
  surface: boolean;
  exchangePrice: number;
  exchangeCurrency: number;
  sourceNotes: any;
  hhaBasePoints: any;
  hhaCategory: any;
  interact: any;
  tag: string;
  outdoor: any;
  speakerType: any;
  lightingType: any;
  catalog: string;
  versionAdded: string;
  unlocked: boolean;
  unlockNotes: any;
  set: any;
  series: any;
  customizationKitCost: any;
  variants: Array<Variant>;
}

export interface Variant {
  image: string;
  variation: any;
  filename: string;
  variantId: any;
  uniqueEntryId: string;
  colors: Array<string>;
  pattern: any;
  bodyCustomize: any;
  bodyTitle: any;
  source: Array<string>;
  internalId: number;
  buy: number;
  sell: number;
  themes: Array<string>;
}
