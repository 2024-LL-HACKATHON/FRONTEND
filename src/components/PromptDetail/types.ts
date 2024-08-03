export interface PromptData {
    prompt_id: number;
    title: string;
    category: string;
    summary: string;
    content: string;
    output: string;
    image: string;
    prompt_writer: string;
    condition: string;
  }

  export interface Review {
    review_id: number;
    writer_thumbnail: string; // URL or path to the user's profile image
    review_writer: string; // Reviewer's name
    title: string; // Review title
    content: string; // Review content
  }