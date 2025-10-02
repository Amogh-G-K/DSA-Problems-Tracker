// Cookie-based storage utility for persisting question data
export interface QuestionData {
  solved: boolean;
  notes: string;
}

export interface StorageData {
  [questionId: string]: QuestionData;
}

const COOKIE_NAME = 'dsa_problems_tracker_data';
const COOKIE_EXPIRY_DAYS = 365;

export const cookieStorage = {
  // Get all data from cookie
  getData(): StorageData {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.trim().startsWith(`${COOKIE_NAME}=`));
    
    if (!cookie) return {};
    
    try {
      const value = cookie.split('=')[1];
      return JSON.parse(decodeURIComponent(value));
    } catch (error) {
      console.error('Error parsing cookie data:', error);
      return {};
    }
  },

  // Save all data to cookie
  setData(data: StorageData): void {
    const expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_EXPIRY_DAYS);
    
    const cookieValue = encodeURIComponent(JSON.stringify(data));
    document.cookie = `${COOKIE_NAME}=${cookieValue}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  },

  // Get data for a specific question
  getQuestion(questionId: string): QuestionData {
    const data = this.getData();
    return data[questionId] || { solved: false, notes: '' };
  },

  // Update data for a specific question
  setQuestion(questionId: string, questionData: Partial<QuestionData>): void {
    const data = this.getData();
    data[questionId] = {
      ...this.getQuestion(questionId),
      ...questionData,
    };
    this.setData(data);
  },

  // Toggle solved status
  toggleSolved(questionId: string): void {
    const current = this.getQuestion(questionId);
    this.setQuestion(questionId, { solved: !current.solved });
  },

  // Update notes
  updateNotes(questionId: string, notes: string): void {
    this.setQuestion(questionId, { notes });
  },
};
