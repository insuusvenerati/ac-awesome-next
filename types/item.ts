export interface Item {
  _id: { $oid: string };
  sourceSheet: string;
  name: string;
  patternTitle: unknown;
  diy: boolean;
  patternCustomize: unknown;
  kitType: unknown;
  size: string;
  surface: boolean;
  exchangePrice: number;
  exchangeCurrency: number;
  sourceNotes: unknown;
  hhaBasePoints: unknown;
  hhaCategory: unknown;
  interact: unknown;
  tag: string;
  outdoor: unknown;
  speakerType: unknown;
  lightingType: unknown;
  catalog: string;
  versionAdded: string;
  unlocked: boolean;
  unlockNotes: unknown;
  set: unknown;
  series: unknown;
  customizationKitCost: unknown;
  variants: Array<Variant>;
}

export interface Variant {
  image: string;
  variation: unknown;
  filename: string;
  variantId: unknown;
  uniqueEntryId: string;
  colors: Array<string>;
  pattern: unknown;
  bodyCustomize: unknown;
  bodyTitle: unknown;
  source: Array<string>;
  internalId: number;
  buy: number;
  sell: number;
  themes: Array<string>;
}
