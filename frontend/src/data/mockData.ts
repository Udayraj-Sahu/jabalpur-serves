// src/data/mockData.ts
import type { Category, Professional } from "../types";

export const mockCategories: Category[] = [
	{
		id: "cat-1",
		name: "Photographers",
		imageUrl:
			"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
	},
	{
		id: "cat-2",
		name: "Event Designers",
		imageUrl:
			"https://images.unsplash.com/photo-1511795409834-ef04bbd51622?w=500",
	},
	{
		id: "cat-3",
		name: "Electricians",
		imageUrl:
			"https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500",
	},
	{
		id: "cat-4",
		name: "Plumbers",
		imageUrl:
			"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=500",
	},
];

export const mockProfessionals: Professional[] = [
	{
		id: "pro-1",
		name: "Anjali Sharma",
		brandName: "Anjali Clicks",
		phone: "+91 9876543210",
		category: "cat-1",
		isVerified: true,
		profilePictureUrl:
			"https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=200",
		bio: "Capturing life's moments, one frame at a time. Specializing in wedding and portrait photography.",
		instagramUrl: "https://www.instagram.com/", // Added Instagram link
		portfolio: [
			{
				id: "p1-1",
				imageUrl:
					"https://images.unsplash.com/photo-1587933188521-7c8502288923?w=500",
			},
			{
				id: "p1-2",
				imageUrl:
					"https://images.unsplash.com/photo-1515934751635-481eff042b81?w=500",
			},
			{
				id: "p1-3",
				imageUrl:
					"https://images.unsplash.com/photo-1519225421980-715cb0215a0d?w=500",
			},
			{
				id: "p1-4",
				imageUrl:
					"https://images.unsplash.com/photo-1542042161-d19f5a542455?w=500",
			},
			{
				id: "p1-5",
				imageUrl:
					"https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
			},
			{
				id: "p1-6",
				imageUrl:
					"https://images.unsplash.com/photo-1565538352822-5c9a593339a0?w=500",
			},
		],
	},
	{
		id: "pro-2",
		name: "Rohan Designs",
		brandName: "Dream Themes",
		phone: "+91 9123456789",
		category: "cat-2",
		isVerified: true,
		profilePictureUrl:
			"https://images.unsplash.com/photo-1543168256-418b85723631?w=200",
		bio: "Creating unforgettable experiences. Full-service event design and planning for all occasions.",
		// No instagramUrl for this user, to test conditional rendering
		portfolio: [
			{
				id: "p2-1",
				imageUrl:
					"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500",
			},
			{
				id: "p2-2",
				imageUrl:
					"https://images.unsplash.com/photo-1551829032-695be4b60694?w=500",
			},
			{
				id: "p2-3",
				imageUrl:
					"https://images.unsplash.com/photo-1546853342-02c3c9e6341d?w=500",
			},
		],
	},
	{
		id: "pro-3",
		name: "Prakash Electric",
		brandName: "Prakash Electric Co.",
		phone: "+91 9988776655",
		category: "cat-3",
		isVerified: true,
		profilePictureUrl:
			"https://images.unsplash.com/photo-1528256102793-3a8397a24558?w=200",
		bio: "Licensed and insured electrician. Quick service for all residential and commercial needs.",
		portfolio: [],
	},
];
