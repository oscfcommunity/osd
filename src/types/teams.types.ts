export type TeamRole = {
  id: string;
  role: string;
};

export type TeamMember = {
  id: string;
  number: number;
  name: string;
  linkedin: string;
  image: { url: string } | null;
  roles: TeamRole[];
};

export type TeamGroup = {
  id: string;
  title: string;
  description: string;
  teams: TeamMember[];
};

/** Top-level Strapi document returned by the GetTeams query */
export type TeamDocument = {
  documentId: string;
  teams: TeamGroup[];
};

/** Full GraphQL response shape for the GetTeams query */
export type TeamsQueryResponse = {
  teams: TeamDocument[];
};

export type ResolvedTeamMember = TeamMember & {
  imageUrl: string | null;
};

export type ResolvedTeamGroup = Omit<TeamGroup, "teams"> & {
  teams: ResolvedTeamMember[];
};
