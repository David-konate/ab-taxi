// typings.ts

export interface Comment {
  author: {
      name: string;
  };
  createdAt: string; // Assurez-vous que le format de la date correspond à ce que vous recevez
  content: string;
  rating: number;
}
