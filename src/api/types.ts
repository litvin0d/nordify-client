export interface User {
	id: string;
	fullName: string;
	username: string;
	profilePic: string;
}

export interface Message {
	id: string;
	conversationId: string;
	senderId: string;
	body: string;
	createdAt: string;
	updatedAt: string;
}

export interface SignInData {
	username: string;
	password: string;
}

export interface SignUpData {
	username: string;
	fullName: string;
	password: string;
	confirmPassword: string;
	gender: 'male' | 'female';
}

export interface LogoutResponse {
	message: string;
}

export interface ErrorResponse {
	error: string;
}
