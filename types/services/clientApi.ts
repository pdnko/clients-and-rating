import type { Client } from '../client';

export interface GetClientsResponse {
	page: number
	per_page: number
	total: number
	total_pages: number
	data: Client[] 
}

export interface GetClientResponse {
	data?: Client 
}
