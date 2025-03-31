// src/gameData.js

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
		articleLinks: [
			"https://privacycenter.instagram.com/policy"
		],
		blurb: "",
		options: [
			{
				id: 'q1o1',
				text: 'Allow location access "Always"',
				outcome: 'Constant tracking leads to detailed profiles and targeted ads.',
				leaks: [], // ['location', 'device_info', 'habits']
				// Always-on location means you instantly get nearby deals and personalized experiences.
				conveniencePoints: 90
			},
			{
				id: 'q1o2',
				text: 'Allow location access "Only when using the app"',
				outcome: 'Limited tracking reduces profiling.',
				leaks: [], // ['location']
				// You still get location-based services, but it might be less seamless.
				conveniencePoints: 70
			},
			{
				id: 'q1o3',
				text: 'Deny location access',
				outcome: 'No tracking, fewer personalized offers.',
				leaks: [], // []
				// You miss out on location-based conveniences.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q2',
		question: 'You decide to close your account on a popular social media platform.',
		image: '/images/delete_account.png',
		articleLinks: [],
		blurb: "",
		options: [
			{
				id: 'q2o1',
				text: 'Request standard account deletion',
				outcome: 'Public profile hidden, data may remain archived internally.',
				leaks: [], // ['archived_profile_data']
				// Standard deletion might let you return more easily, so moderate convenience.
				conveniencePoints: 40
			},
			{
				id: 'q2o2',
				text: 'Request full data deletion (GDPR/CCPA)',
				outcome: 'Higher chance data is truly deleted.',
				leaks: [], // []
				// Full deletion means losing the chance to easily return.
				conveniencePoints: 0
			},
			{
				id: 'q2o3',
				text: 'Deactivate account temporarily instead',
				outcome: 'Your data remains fully stored and easily reactivated.',
				leaks: [], // ['full_profile_data']
				// This option maximizes convenience if you plan to come back.
				conveniencePoints: 90
			}
		],
	},
	{
		id: 'q3',
		question: 'When using a customer-support chatbot, the platform states your interactions may help train their AI.',
		image: '/images/chatbot_ai.png',
		articleLinks: [
			"https://privacycenter.instagram.com/policy"
		],
		blurb: "",
		options: [
			{
				id: 'q3o1',
				text: 'Continue using the chatbot (implicit consent)',
				outcome: 'Your interactions become training data.',
				leaks: [], // ['chat_logs', 'personal_info_shared_in_chat']
				// Chatbot is quick and efficient, making your experience very smooth.
				conveniencePoints: 90
			},
			{
				id: 'q3o2',
				text: 'Explicitly opt-out and request human support',
				outcome: 'Your data is protected from AI training.',
				leaks: [], // []
				// Human support tends to be slower and more cumbersome.
				conveniencePoints: 30
			},
			{
				id: 'q3o3',
				text: 'Request clarification about data usage',
				outcome: 'Clarifies privacy implications, empowers informed decision-making.',
				leaks: [], // []
				// Asking for more info takes extra time, reducing immediate convenience.
				conveniencePoints: 60
			}
		],
	},
	{
		id: 'q4',
		question: 'You are joining a new social network with lengthy, vague terms about data sharing.',
		image: '/images/terms_of_service.png',
		articleLinks: [
			"https://www.facebook.com/terms",
			"https://privacycenter.instagram.com/policy",
			"https://www.tiktok.com/legal/page/row/privacy-policy/en"
		],
		blurb: "",
		options: [
			{
				id: 'q4o1',
				text: 'Accept terms without reading carefully',
				outcome: 'Risk extensive unknown data sharing.',
				leaks: [], // ['email', 'profile_data', 'device_info']
				// Skipping the reading gives you immediate access.
				conveniencePoints: 95
			},
			{
				id: 'q4o2',
				text: 'Use privacy-check tool to highlight problematic sections',
				outcome: 'Better safety, reduced risk of hidden data sharing.',
				leaks: [], // ['limited_profile_data']
				// Using a tool takes some extra effort but still gets you in.
				conveniencePoints: 50
			},
			{
				id: 'q4o3',
				text: 'Decline to join until fully understanding risks',
				outcome: 'Highest privacy protection, no data shared.',
				leaks: [], // []
				// Not joining means you forgo the convenience of using the network.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q5',
		question: 'You visit an online store and encounter a cookie consent popup.',
		image: '/images/cookie_consent.png',
		articleLinks: [],
		blurb: "",
		options: [
			{
				id: 'q5o1',
				text: 'Accept all cookies',
				outcome: 'Enables extensive tracking and personalized ads.',
				leaks: [], // ['browsing_history', 'preferences', 'device_info']
				// Quick acceptance means the site loads and works seamlessly.
				conveniencePoints: 90
			},
			{
				id: 'q5o2',
				text: 'Accept only necessary cookies',
				outcome: 'Minimal tracking, basic website functionality maintained.',
				leaks: [], // ['basic_usage_data']
				// You get the necessary functionality, but with a bit of extra hassle.
				conveniencePoints: 60
			},
			{
				id: 'q5o3',
				text: 'Manage preferences manually',
				outcome: 'Limits data exposure by explicitly controlling cookies.',
				leaks: [], // ['controlled_preferences']
				// Managing settings manually takes time and interrupts your browsing.
				conveniencePoints: 30
			}
		],
	},
	{
		id: 'q6',
		question: 'A social media app asks for extensive permissions (microphone, contacts, gallery, camera).',
		image: '/images/app_permissions.png',
		articleLinks: [
			"https://www.cbc.ca/news/canada/tiktok-data-collection-privacy-1.6763626",
			"https://www.tiktok.com/legal/page/row/privacy-policy/en",
			"https://current360.com/instagrams-new-tos-what-do-they-mean/",
			"https://privacycenter.instagram.com/policy"
		],
		blurb: "",
		options: [
			{
				id: 'q6o1',
				text: 'Accept all permissions',
				outcome: 'Leads to extensive data collection.',
				leaks: [], // ['contacts', 'photos', 'audio_data', 'device_info']
				// Accepting all permissions gives you the full feature set without delays.
				conveniencePoints: 90
			},
			{
				id: 'q6o2',
				text: 'Only grant necessary permissions',
				outcome: 'Limited functionality but reduced privacy risk.',
				leaks: [], // ['photos']
				// This option may limit some features, so it’s slightly less convenient.
				conveniencePoints: 60
			},
			{
				id: 'q6o3',
				text: 'Reject all permissions',
				outcome: 'Maximum privacy protection, reduced app functionality.',
				leaks: [], // []
				// Rejecting all permissions may disable key features.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q7',
		question: 'You download the official app for your favorite sports league, Sportify, but notice there is no clear notice about the data being collected.',
		image: '/images/sports_app.png',
		articleLinks: [
			"https://www.wsj.com/articles/nfl-teams-gathered-detailed-consumer-data-without-standard-notice-or-opt-outs-ab70582d"
		],
		blurb: "",
		options: [
			{
				id: 'q7o1',
				text: 'Agree and use the app without further investigation',
				outcome: 'Extensive data collection occurs without your clear consent.',
				leaks: [], // ['location', 'consumer_interests', 'usage_patterns']
				// Jumping right in with the app maximizes convenience.
				conveniencePoints: 90
			},
			{
				id: 'q7o2',
				text: 'Check app permissions carefully before accepting',
				outcome: 'You limit data tracking by carefully reviewing permissions.',
				leaks: [], // ['limited_usage_data']
				// Taking the time to review settings slows you down.
				conveniencePoints: 60
			},
			{
				id: 'q7o3',
				text: 'Avoid using the app and follow the league through a browser',
				outcome: 'Minimizes your data exposure.',
				leaks: [], // []
				// Using a browser might be less integrated than the native app.
				conveniencePoints: 20
			}
		],
	},
	{
		id: 'q8',
		question: 'You join a new trendy social network called FriendShare. It asks you to quickly accept the Terms of Service without clearly highlighting key points.',
		image: '/images/social_network.png',
		articleLinks: [
			"https://www.usatoday.com/story/tech/2020/01/28/not-reading-the-small-print-is-privacy-policy-fail/4565274002/"
		],
		blurb: "",
		options: [
			{
				id: 'q8o1',
				text: 'Accept terms quickly without reading',
				outcome: 'You unknowingly agree to broad data sharing.',
				leaks: [], // ['profile_data', 'contacts', 'shared_content']
				// Quick acceptance gets you into the platform immediately.
				conveniencePoints: 90
			},
			{
				id: 'q8o2',
				text: 'Use a browser extension to briefly highlight red flags',
				outcome: 'Improved privacy through proactive checking.',
				leaks: [], // ['minimal_profile_data']
				// Using an extension requires an extra step.
				conveniencePoints: 50
			},
			{
				id: 'q8o3',
				text: 'Decline joining completely',
				outcome: 'You fully protect your data.',
				leaks: [], // []
				// Not joining means you forgo the network's convenience entirely.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q9',
		question: 'The photo-sharing app PicWorld updates terms allowing the platform to use your photos commercially without explicit consent.',
		image: '/images/photo_sharing.png',
		articleLinks: [
			"https://current360.com/instagrams-new-tos-what-do-they-mean/",
			"https://thomashawk.com/2012/12/photographers-upset-by-instagrams-change-in-terms-of-service.html"
		],
		blurb: "",
		options: [
			{
				id: 'q9o1',
				text: 'Continue using normally without reviewing',
				outcome: 'Risk of your photos being used commercially.',
				leaks: [], // ['photos', 'usernames']
				// Continuing as usual means uninterrupted access to sharing your photos.
				conveniencePoints: 90
			},
			{
				id: 'q9o2',
				text: 'Limit content visibility (private mode)',
				outcome: 'Protects content more effectively.',
				leaks: [], // ['limited_photos']
				// Limiting visibility might reduce how easily your photos are shared.
				conveniencePoints: 50
			},
			{
				id: 'q9o3',
				text: 'Delete sensitive photos immediately',
				outcome: 'Reduces risk of unauthorized use.',
				leaks: [], // []
				// Deleting photos removes the content you might enjoy sharing.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q10',
		question: 'You decide to install the video app QuickClips, which requests extensive permissions (contacts, precise location, keystrokes).',
		image: '/images/video_app.png',
		articleLinks: [
			"https://www.cbc.ca/news/canada/tiktok-data-collection-privacy-1.6763626",
			"https://www.tiktok.com/legal/page/row/privacy-policy/en"
		],
		blurb: "",
		options: [
			{
				id: 'q10o1',
				text: 'Accept all permissions',
				outcome: 'Extensive personal data collection occurs.',
				leaks: [], // ['contacts', 'location', 'keystrokes', 'device_info']
				// Accepting all permissions gives you the full functionality of the app.
				conveniencePoints: 95
			},
			{
				id: 'q10o2',
				text: 'Limit permissions for basic functionality',
				outcome: 'Limits data collection to basic app functions.',
				leaks: [], // ['limited_device_info']
				// With limited permissions, some features might not work as seamlessly.
				conveniencePoints: 60
			},
			{
				id: 'q10o3',
				text: 'Decline installation entirely',
				outcome: 'Fully protects your data.',
				leaks: [], // []
				// Not installing means you lose out on the app’s conveniences.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q11',
		question: 'You authorize a third-party app to connect to your SocialSphere profile. A bug allows the app to access your friends’ private data.',
		image: '/images/social_bug.png',
		articleLinks: [
			"https://www.theguardian.com/technology/2018/oct/08/google-plus-security-breach-wall-street-journal"
		],
		blurb: "",
		options: [
			{
				id: 'q11o1',
				text: 'Authorize access immediately without deeper review',
				outcome: 'Unintentional exposure of your friends’ private information.',
				leaks: [], // ['friends_data', 'profile_data']
				// Quick authorization maximizes convenience.
				conveniencePoints: 90
			},
			{
				id: 'q11o2',
				text: 'Check privacy settings carefully before granting access',
				outcome: 'Limits potential data exposure.',
				leaks: [], // ['limited_profile_data']
				// Taking time to review settings is less convenient.
				conveniencePoints: 50
			},
			{
				id: 'q11o3',
				text: 'Avoid using third-party apps altogether',
				outcome: 'Best protection against data leaks.',
				leaks: [], // []
				// Not using third-party apps may cut out useful features.
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q12',
		question: 'You set up your new smart assistant, HomeHelper, which asks permission to "analyze audio for a better experience."',
		image: '/images/smart_assistant.png',
		articleLinks: [
			"https://www.bbc.com/news/articles/cr4rvr495rgo"
		],
		blurb: "",
		options: [
			{
				id: 'q12o1',
				text: 'Allow all audio data analysis',
				outcome: 'Your private conversations may be analyzed.',
				leaks: [], // ['audio_recordings', 'private_conversations']
				// Allowing full analysis usually means a more seamless, responsive experience.
				conveniencePoints: 90
			},
			{
				id: 'q12o2',
				text: 'Allow limited command-based interactions only',
				outcome: 'Limits audio data collection significantly.',
				leaks: [], // ['command_audio']
				// Restricting to commands might mean occasional delays or missed nuances.
				conveniencePoints: 50
			},
			{
				id: 'q12o3',
				text: 'Completely opt-out of audio data sharing',
				outcome: 'Best protection of privacy.',
				leaks: [], // []
				// Opting out may reduce the assistant’s effectiveness.
				conveniencePoints: 0
			}
		],
	}
];
