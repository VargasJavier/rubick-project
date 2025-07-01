interface IProject {
  title: string;
  type: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
}
interface IReview {
  description: string;
  authorImage: string;
  authorName: string;
  authorJob: string;
  rating: number;
}
interface IBlog {
  image: string;
  dateCreation: string;
  title: string;
  shortDescription: string;
  link: string;
}