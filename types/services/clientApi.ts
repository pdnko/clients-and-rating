import type { Client } from '../client';

export interface SupportField {
	text?: string
	url?: string
}

export interface GetClientsResponse {
	page: number
	per_page: number
	total: number
	total_pages: number
	data: Client[]
	support?: SupportField
}

export interface GetClientResponse {
	data?: Client
	support?: SupportField
}
