export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  description: string;
  image: string; // path in /public/images/projects
}

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Boundary Survey",
    location: "Tiruppur",
    serviceType: "Boundary Survey",
    description:
      "Boundary demarcation for fencing and legal verification of a residential plot.",
    image: "/images/projects/boundary-survey-1.jpg",
  },
  {
    id: "proj-2",
    title: "Topographic Survey",
    location: "Coimbatore",
    serviceType: "Topographic Survey",
    description:
      "Topographic mapping for a 5-acre industrial land parcel prior to construction.",
    image: "/images/projects/topographic-survey-1.jpg",
  },
  {
    id: "proj-3",
    title: "Setting-Out Survey",
    location: "Pollachi",
    serviceType: "Setting-Out Survey",
    description:
      "On-site marking and reference points for foundation layout execution.",
    image: "/images/projects/setting-out-survey-1.jpg",
  },
  {
    id: "proj-4",
    title: "Subdivision Layout Survey",
    location: "Coimbatore",
    serviceType: "Subdivision & Layout Design Survey",
    description:
      "Land subdivision and road layout planning for real estate development.",
    image: "/images/projects/layout-survey-1.jpg",
  },
];
