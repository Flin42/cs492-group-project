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
		question: 'A shopping app prompts you for location access, promising "exclusive deals at stores near you."',
		image: '/images/location_access.png',
		options: [
			{
				id: 'q1o1',
				text: 'Allow location access "Always"',
				outcome: 'Constant tracking leads to detailed profiles and targeted ads.',
				leaks: [] // ['location', 'device_info', 'habits']
			},
			{
				id: 'q1o2',
				text: 'Allow location access "Only when using the app"',
				outcome: 'Limited tracking reduces profiling.',
				leaks: [] // ['location']
			},
			{
				id: 'q1o3',
				text: 'Deny location access',
				outcome: 'No tracking, fewer personalized offers.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q2',
		question: 'You decide to close your account on a popular social media platform.',
		image: '/images/delete_account.png',
		options: [
			{
				id: 'q2o1',
				text: 'Request standard account deletion',
				outcome: 'Public profile hidden, data may remain archived internally.',
				leaks: [] // ['archived_profile_data']
			},
			{
				id: 'q2o2',
				text: 'Request full data deletion (GDPR/CCPA)',
				outcome: 'Higher chance data is truly deleted.',
				leaks: [] // []
			},
			{
				id: 'q2o3',
				text: 'Deactivate account temporarily instead',
				outcome: 'Your data remains fully stored and easily reactivated.',
				leaks: [] // ['full_profile_data']
			}
		],
	},
	{
		id: 'q3',
		question: 'When using a customer-support chatbot, the platform states your interactions may help train their AI.',
		image: '/images/chatbot_ai.png',
		options: [
			{
				id: 'q3o1',
				text: 'Continue using the chatbot (implicit consent)',
				outcome: 'Your interactions become training data.',
				leaks: [] // ['chat_logs', 'personal_info_shared_in_chat']
			},
			{
				id: 'q3o2',
				text: 'Explicitly opt-out and request human support',
				outcome: 'Your data is protected from AI training.',
				leaks: [] // []
			},
			{
				id: 'q3o3',
				text: 'Request clarification about data usage',
				outcome: 'Clarifies privacy implications, empowers informed decision-making.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q4',
		question: 'You are joining a new social network with lengthy, vague terms about data sharing.',
		image: '/images/terms_of_service.png',
		options: [
			{
				id: 'q4o1',
				text: 'Accept terms without reading carefully',
				outcome: 'Risk extensive unknown data sharing.',
				leaks: [] // ['email', 'profile_data', 'device_info']
			},
			{
				id: 'q4o2',
				text: 'Use privacy-check tool to highlight problematic sections',
				outcome: 'Better safety, reduced risk of hidden data sharing.',
				leaks: [] // ['limited_profile_data']
			},
			{
				id: 'q4o3',
				text: 'Decline to join until fully understanding risks',
				outcome: 'Highest privacy protection, no data shared.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q5',
		question: 'You visit an online store and encounter a cookie consent popup.',
		image: '/images/cookie_consent.png',
		options: [
			{
				id: 'q5o1',
				text: 'Accept all cookies',
				outcome: 'Enables extensive tracking and personalized ads.',
				leaks: [] // ['browsing_history', 'preferences', 'device_info']
			},
			{
				id: 'q5o2',
				text: 'Accept only necessary cookies',
				outcome: 'Minimal tracking, basic website functionality maintained.',
				leaks: [] // ['basic_usage_data']
			},
			{
				id: 'q5o3',
				text: 'Manage preferences manually',
				outcome: 'Limits data exposure by explicitly controlling cookies.',
				leaks: [] // ['controlled_preferences']
			}
		],
	},
	{
		id: 'q6',
		question: 'A social media app asks for extensive permissions (microphone, contacts, gallery, camera).',
		image: '/images/app_permissions.png',
		options: [
			{
				id: 'q6o1',
				text: 'Accept all permissions',
				outcome: 'Leads to extensive data collection.',
				leaks: [] // ['contacts', 'photos', 'audio_data', 'device_info']
			},
			{
				id: 'q6o2',
				text: 'Only grant necessary permissions',
				outcome: 'Limited functionality but reduced privacy risk.',
				leaks: [] // ['photos']
			},
			{
				id: 'q6o3',
				text: 'Reject all permissions',
				outcome: 'Maximum privacy protection, reduced app functionality.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q7',
		question: 'You download the official app for your favorite sports league, Sportify, but notice there is no clear notice about the data being collected.',
		image: '/images/sports_app.png',
		options: [
			{
				id: 'q7o1',
				text: 'Agree and use the app without further investigation',
				outcome: 'Extensive data collection occurs without your clear consent.',
				leaks: [] // ['location', 'consumer_interests', 'usage_patterns']
			},
			{
				id: 'q7o2',
				text: 'Check app permissions carefully before accepting',
				outcome: 'You limit data tracking by carefully reviewing permissions.',
				leaks: [] // ['limited_usage_data']
			},
			{
				id: 'q7o3',
				text: 'Avoid using the app and follow the league through a browser',
				outcome: 'Minimizes your data exposure.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q8',
		question: 'You join a new trendy social network called FriendShare. It asks you to quickly accept the Terms of Service without clearly highlighting key points.',
		image: '/images/social_network.png',
		options: [
			{
				id: 'q8o1',
				text: 'Accept terms quickly without reading',
				outcome: 'You unknowingly agree to broad data sharing.',
				leaks: [] // ['profile_data', 'contacts', 'shared_content']
			},
			{
				id: 'q8o2',
				text: 'Use a browser extension to briefly highlight red flags',
				outcome: 'Improved privacy through proactive checking.',
				leaks: [] // ['minimal_profile_data']
			},
			{
				id: 'q8o3',
				text: 'Decline joining completely',
				outcome: 'You fully protect your data.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q9',
		question: 'The photo-sharing app PicWorld updates terms allowing the platform to use your photos commercially without explicit consent.',
		image: '/images/photo_sharing.png',
		options: [
			{
				id: 'q9o1',
				text: 'Continue using normally without reviewing',
				outcome: 'Risk of your photos being used commercially.',
				leaks: [] // ['photos', 'usernames']
			},
			{
				id: 'q9o2',
				text: 'Limit content visibility (private mode)',
				outcome: 'Protects content more effectively.',
				leaks: [] // ['limited_photos']
			},
			{
				id: 'q9o3',
				text: 'Delete sensitive photos immediately',
				outcome: 'Reduces risk of unauthorized use.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q10',
		question: 'You decide to install the video app QuickClips, which requests extensive permissions (contacts, precise location, keystrokes).',
		image: '/images/video_app.png',
		options: [
			{
				id: 'q10o1',
				text: 'Accept all permissions',
				outcome: 'Extensive personal data collection occurs.',
				leaks: [] // ['contacts', 'location', 'keystrokes', 'device_info']
			},
			{
				id: 'q10o2',
				text: 'Limit permissions for basic functionality',
				outcome: 'Limits data collection to basic app functions.',
				leaks: [] // ['limited_device_info']
			},
			{
				id: 'q10o3',
				text: 'Decline installation entirely',
				outcome: 'Fully protects your data.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q11',
		question: 'You authorize a third-party app to connect to your SocialSphere profile. A bug allows the app to access your friends’ private data.',
		image: '/images/social_bug.png',
		options: [
			{
				id: 'q11o1',
				text: 'Authorize access immediately without deeper review',
				outcome: 'Unintentional exposure of your friends’ private information.',
				leaks: [] // ['friends_data', 'profile_data']
			},
			{
				id: 'q11o2',
				text: 'Check privacy settings carefully before granting access',
				outcome: 'Limits potential data exposure.',
				leaks: [] // ['limited_profile_data']
			},
			{
				id: 'q11o3',
				text: 'Avoid using third-party apps altogether',
				outcome: 'Best protection against data leaks.',
				leaks: [] // []
			}
		],
	},
	{
		id: 'q12',
		question: 'You set up your new smart assistant, HomeHelper, which asks permission to "analyze audio for a better experience."',
		image: '/images/smart_assistant.png',
		options: [
			{
				id: 'q12o1',
				text: 'Allow all audio data analysis',
				outcome: 'Your private conversations may be analyzed.',
				leaks: [] // ['audio_recordings', 'private_conversations']
			},
			{
				id: 'q12o2',
				text: 'Allow limited command-based interactions only',
				outcome: 'Limits audio data collection significantly.',
				leaks: [] // ['command_audio']
			},
			{
				id: 'q12o3',
				text: 'Completely opt-out of audio data sharing',
				outcome: 'Best protection of privacy.',
				leaks: [] // []
			}
		],
	}
];

