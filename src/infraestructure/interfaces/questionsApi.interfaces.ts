export interface QuestionsAPIResponse {
    date: string;
    data: DataQuestion[];
}

export interface DataQuestion {
    question_id: string;
    question:    string;
    answers:     Answer[];
}

export interface Answer {
    answer_id: string;
    answer:    string;
}
