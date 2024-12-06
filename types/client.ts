export interface Client {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export interface ClientDetails {
	id: number;
	points: number;
	comment: string;
}

export type ClientWithDetails = Client & Omit<ClientDetails, 'id'>
