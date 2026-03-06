export type SponsorItem = {
  id: string;
  number: number;
  name: string;
  website: string;
  logo: { url: string } | null;
};

export type SponsorGroup = {
  id: string;
  title: string;
  sponsors: SponsorItem[];
};

/** Mirrors a single Strapi sponsors document returned by the GraphQL query */
export type SponsorDocument = {
  documentId: string;
  sponsors: SponsorGroup[];
};

/** Full GraphQL response shape for the GetSponsors query */
export type SponsorsQueryResponse = {
  sponsors: SponsorDocument[];
};

export type ResolvedSponsorItem = SponsorItem & {
  logoUrl: string | null;
};

export type ResolvedSponsorGroup = Omit<SponsorGroup, "sponsors"> & {
  sponsors: ResolvedSponsorItem[];
};
