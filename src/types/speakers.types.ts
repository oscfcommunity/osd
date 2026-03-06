export type SpeakerTag = {
  id: string;
  tagName: string;
};

export type Speaker = {
  id: string;
  name: string;
  position: string;
  company: string;
  event: string | null;
  presentationTitle: string | null;
  link: string | null;
  presentationLink: string | null;
  image: { url: string } | null;
  tags: SpeakerTag[];
};

export type SpeakerSection = {
  id: string;
  title: string;
  segment: string | null;
  speakers: Speaker[];
};

/** Top-level Strapi speakers document */
export type SpeakerDocument = {
  documentId: string;
  ourSpeakers: SpeakerSection[];
  pastSpeaker: SpeakerSection | null;
};

/** Full GraphQL response shape for GetSpeakers query */
export type SpeakersQueryResponse = {
  speakers: SpeakerDocument[];
};

/** Speaker with resolved full image URL */
export type ResolvedSpeaker = Speaker & {
  imageUrl: string | null;
  linkedinUrl: string | null;
};

export type ResolvedSpeakerSection = Omit<SpeakerSection, "speakers"> & {
  speakers: ResolvedSpeaker[];
};
