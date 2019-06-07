interface Purpose {
  id: number;
  name: string;
  description: string;
  descriptionLegal: string;
  consentable? : boolean;
  rightToObject?: boolean;
};

interface Purposes {
  [id: string]: Purpose;
};

interface SpecialPurposes {
  [id: string]: Purpose;
};

interface Feature {
  id: number;
  name: string;
  description: string;
  descriptionLegal: string;
};

interface Features {
  [id: string]: Feature;
};

interface SpecialFeatures {
  [id: string]: Feature;
};

interface Overflow {
  httpGetLimit: 32 | 128;
}

interface Vendor {
  id: number;
  name: string;
  purposeIds: number[];
  legIntPurposeIds: number[];
  flexiblePurposeIds?: number[];
  featureIds: number[];
  specialFeatureIds: number[];
  policyUrl: string;
  deletedDate?: Date | string;
  overflow?: Overflow;
};

interface Vendors {
  [id: string]: Vendor;
};

interface GVLSchema {
  gvlSpecificationVersion: number;
  vendorListVersion: number;
  tcfPolicyVersion: number;
  lastUpdated: string | Date;
  purposes: Purposes;
  specialPurposes: SpecialPurposes;
  features: Features;
  speciaLFeatures: SpecialFeatures;
  vendors: Vendors;
};

export {GVLSchema, Purpose, Purposes, Feature, Features, Vendor, Vendors, SpecialPurposes, SpecialFeatures};