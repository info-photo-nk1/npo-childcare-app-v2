export interface Message {
  id: string;
  date: string;
  title: string;
  content: string;
  sender: {
    name: string;
    role: 'teacher' | 'parent';
    avatar?: string;
  };
  isRead: boolean;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  date: string;
  tags: string[];
}

export interface DailyRecord {
  id: string;
  date: string;
  mood: 'good' | 'normal' | 'bad';
  meals: {
    breakfast: number;
    lunch: number;
    snack: number;
  };
  nap: {
    start: string;
    end: string;
  };
  activities: string[];
  notes: string;
}

export interface GrowthRecord {
  date: string;
  height: number;
  weight: number;
  notes?: string;
}

export interface AllergyInfo {
  id: string;
  allergen: string;
  severity: 'high' | 'medium' | 'low';
  symptoms: string[];
  notes: string;
}

export interface Schedule {
  id: string;
  title: string;
  date: string;
  startTime?: string;
  endTime?: string;
  type: 'event' | 'reminder' | 'appointment';
  description?: string;
  isAllDay: boolean;
}