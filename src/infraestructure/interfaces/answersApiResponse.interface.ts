export interface AnswersApiResponse {
    date: string;
    data: Data[];
}

export interface Data {
    question_id: string;
    answer_id:   string;
}
