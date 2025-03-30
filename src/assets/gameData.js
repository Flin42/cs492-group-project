// src/gameData.js (Example Data)

export const personalData = {
	name: { value: 'Alex Doe', leaked: false, how: [] },
	email: { value: 'alex.doe@example.com', leaked: false, how: [] },
	location: { value: 'Cityville, Statesota', leaked: false, how: [] },
	ipAddress: { value: '192.168.1.x', leaked: false, how: [] },
	// Add more PII types relevant to your scenarios
  };

export const gameQuestions = [
	{
	  id: 'q1',
	  question: 'You visit a new social media site. It asks you to accept its Terms of Service and Privacy Policy.',
	  image: '/images/tos_prompt.png', // Make sure images are in public/images or handled by Vite
	  options: [
		{
		  id: 'q1o1',
		  text: 'Click "Accept" without reading',
		  outcome: 'You agreed to their terms, which might include broad data sharing permissions.',
		  leaks: ['email', 'ipAddress', 'device_info'] // Example PII keys
		},
		{
		  id: 'q1o2',
		  text: 'Skim the Privacy Policy first',
		  outcome: 'You notice they collect location data but decide to accept anyway.',
		  leaks: ['location', 'ipAddress'] // Example
		},
		{
		  id: 'q1o3',
		  text: 'Decline and leave the site',
		  outcome: 'You avoided sharing data with this specific site for now.',
		  leaks: []
		}
	  ]
	},
	// ... more questions
  ];