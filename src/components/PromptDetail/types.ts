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
    writer_thumbnail: string; 
    review_writer: string; 
    title: string; 
    content: string; 
    star: string;
  }