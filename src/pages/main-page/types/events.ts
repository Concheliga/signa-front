export type EventStatus = 'current' | 'registration' | 'upcoming' | 'completed';
export type SportType = 'volleyball' | 'tennis' | 'football' | 'basketball';
export type GenderType = 'male' | 'female' | 'mixed';

export interface Filters {
  status: EventStatus;
  sport: SportType;
  gender: GenderType | '';
  dateFrom: string;
  dateTo: string;
}

export interface EventDetails {
  text: string;
  type: 'warning' | 'available';
}

export interface SportEvent {
  id: number;
  sport: SportType;
  teamType?: string;
  name: string;
  date: string;
  details?: EventDetails;
  stage?: string;
  stageColor?: 'green' | 'orange';
}

export interface EventsSectionProps {
  title: string;
  events: SportEvent[];
  buttonText: string;
  isResults?: boolean;
}