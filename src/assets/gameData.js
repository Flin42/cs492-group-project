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
		question: 'You’ve just downloaded ShopMaster, the latest shopping app promising “exclusive deals at stores near you.” As you open it, a cheery popup appears: “To serve you better, we need your location! Because who doesn’t love deals right next door?” followed by the following options to manage your location preferences:',
		summary: 'Location sharing for deals', 
		image: '/images/kp_bald_emote.png',
		articleLinks: [
			"https://privacycenter.instagram.com/policy"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q1o1',
				text: 'Allow location access "Always"',
				outcome: `
				ShopMaster tracks your every move—whether you're grabbing coffee, heading to work, or hitting the gym.
				You’re assaulted with hyper-targeted ads and offers, but it’s clear the app knows more about your habits
				than you might be comfortable with. That cozy café you visit every Monday morning? ShopMaster already has a discount ready, with more on the way.
			`,
				leaks: ['location', 'device_info', 'habits'],
				conveniencePoints: 90
			},
			{
				id: 'q1o2',
				text: 'Allow location access "Only when using the app"',
				outcome: `
				ShopMaster checks in only when you’re actively browsing.
				You still get relevant offers while searching for deals, but the app isn’t snooping around when you’re off the clock.
				The suggestions are helpful, and you've made some nice purchases from them. Sometimes the timing is a bit off, however, like getting a discount just as you've arrived home from shopping.`,
				leaks: ['location'],
				conveniencePoints: 70
			},
			{
				id: 'q1o3',
				text: 'Deny location access',
				outcome: `
			ShopMaster has almost no clue about where you are.
			You get generic ads for random products from halfway across the country.
			You miss out on that half-price latte deal, but at least your whereabouts remain your own little secret.`,
				leaks: [],
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q2',
		question: 'You decide to close your account on a popular social media platform.',
		summary: 'Social media account deletion', 
		image: '/images/delete_account.png',
		articleLinks: [],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q2o1',
				text: 'Request standard account deletion',
				outcome: 'Public profile hidden, data may remain archived internally.',
				leaks: [], // ['archived_profile_data']
				conveniencePoints: 40
			},
			{
				id: 'q2o2',
				text: 'Request full data deletion (GDPR/CCPA)',
				outcome: 'Higher chance data is truly deleted.',
				leaks: [], // []
				conveniencePoints: 0
			},
			{
				id: 'q2o3',
				text: 'Deactivate account temporarily instead',
				outcome: 'Your data remains fully stored and easily reactivated.',
				leaks: [], // ['full_profile_data']
				conveniencePoints: 90
			}
		],
	},
	{
		id: 'q3',
		question: 'When using a customer-support chatbot, the platform states your interactions may help train their AI.',
		summary: 'Chatbot data for AI', 
		image: '/images/chatbot_ai.png',
		articleLinks: [
			"https://privacycenter.instagram.com/policy"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q3o1',
				text: 'Continue using the chatbot (implicit consent)',
				outcome: 'Your interactions become training data.',
				leaks: [], // ['chat_logs', 'personal_info_shared_in_chat']
				conveniencePoints: 90
			},
			{
				id: 'q3o2',
				text: 'Explicitly opt-out and request human support',
				outcome: 'Your data is protected from AI training.',
				leaks: [], // []
				conveniencePoints: 30
			},
			{
				id: 'q3o3',
				text: 'Request clarification about data usage',
				outcome: 'Clarifies privacy implications, empowers informed decision-making.',
				leaks: [], // []
				conveniencePoints: 60
			}
		],
	},
	{
		id: 'q4',
		question: 'All your friends have joined the brand new social media app GooseGram and have asked you to join them. After a few weeks, you decide to join this social network that everyone’s been buzzing about. As you reach the signup page, you’re faced with a massive wall of text containing vague terms and outlines about data sharing that would take hours to comb through. Do you dive in or take the shortcut?',
		summary: 'Accepting app terms blindly', 
		image: '/images/terms_of_service.png',
		articleLinks: [
			"https://www.facebook.com/terms",
			"https://privacycenter.instagram.com/policy",
			"https://www.tiktok.com/legal/page/row/privacy-policy/en"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q4o1',
				text: 'Accept terms without reading carefully',
				outcome: `
			You breeze through the signup process, barely reading the first word from the wall of text, and gain instant access. But with vague terms, you’ve effectively handed over the keys to your personal data. Your profile information, browsing habits, and even device details are now up for grabs.
			Weeks later, you start receiving ads eerily tailored to your conversations. That one time you mentioned alpaca farming as a joke? You're now getting targeted emails from luxury wool suppliers and guided llama trekking tours. But that's the price you pay for "convenience"`,
				leaks: ['email', 'profile_data', 'device_info'],
				conveniencePoints: 95
			},
			{
				id: 'q4o2',
				text: 'Use privacy-check tool to highlight problematic sections',
				outcome: `You take a few minutes to scan the terms using a privacy-check tool. It flags some concerning clauses—data sharing, targeted advertising, even location tracking. Concerned, you share your findings with your friends. Spooked by the details, they decide to ditch the app altogether and switch to something else. You’ve managed to dodge a privacy disaster, but the whole group chat is now looking for a new platform.`,
				leaks: ['limited_profile_data'],
				conveniencePoints: 50
			},
			{
				id: 'q4o3',
				text: 'Decline to join until fully understanding risks',
				outcome: `You decide to dig deeper before committing, determined to understand every clause. Days turn into weeks as you wade through endless legal jargon and cross-reference privacy policies. By the time you finally grasp what you're signing up for (it was nothing good) the social network is yesterday’s news.
			Your friends have already moved on to the next big thing, leaving you with your privacy preserved but also with a headache and a newfound distrust of fine print.`,
				leaks: [],
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q5',
		question: 'You visit an online store and encounter a cookie consent popup.',
		summary: 'Cookie consent choices', 
		image: '/images/cookie_consent.png',
		articleLinks: [],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q5o1',
				text: 'Accept all cookies',
				outcome: 'Enables extensive tracking and personalized ads.',
				leaks: [], // ['browsing_history', 'preferences', 'device_info']
				conveniencePoints: 90
			},
			{
				id: 'q5o2',
				text: 'Accept only necessary cookies',
				outcome: 'Minimal tracking, basic website functionality maintained.',
				leaks: [], // ['basic_usage_data']
				conveniencePoints: 60
			},
			{
				id: 'q5o3',
				text: 'Manage preferences manually',
				outcome: 'Limits data exposure by explicitly controlling cookies.',
				leaks: [], // ['controlled_preferences']
				conveniencePoints: 30
			}
		],
	},
	{
		id: 'q6',
		question: 'A social media app asks for extensive permissions (microphone, contacts, gallery, camera).',
		summary: 'App permission requests', 
		image: '/images/app_permissions.png',
		articleLinks: [
			"https://www.cbc.ca/news/canada/tiktok-data-collection-privacy-1.6763626",
			"https://www.tiktok.com/legal/page/row/privacy-policy/en",
			"https://current360.com/instagrams-new-tos-what-do-they-mean/",
			"https://privacycenter.instagram.com/policy"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q6o1',
				text: 'Accept all permissions',
				outcome: 'Leads to extensive data collection.',
				leaks: [], // ['contacts', 'photos', 'audio_data', 'device_info']
				conveniencePoints: 90
			},
			{
				id: 'q6o2',
				text: 'Only grant necessary permissions',
				outcome: 'Limited functionality but reduced privacy risk.',
				leaks: [], // ['photos']
				conveniencePoints: 60
			},
			{
				id: 'q6o3',
				text: 'Reject all permissions',
				outcome: 'Maximum privacy protection, reduced app functionality.',
				leaks: [], // []
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q7',
		question: 'You download the official app for your favorite sports league, the National Fun League (NFL), but notice there is no clear notice about what data may be collected. The app promises real-time updates, exclusive videos, and special offers. From such a huge brand and household name, how harmful could a simple sports app really be?',
		summary: 'Sports app data collection', 
		image: '/images/sports_app.png',
		articleLinks: [
			"https://www.wsj.com/articles/nfl-teams-gathered-detailed-consumer-data-without-standard-notice-or-opt-outs-ab70582d"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q7o1',
				text: 'Agree and use the app without further investigation',
				outcome: `You dive into the app, soaking up scores and highlights. Meanwhile, it’s quietly gathering everything from your location to your Browse habits, even your chat messages and posts.
			A few months later, as part of a huge investigative report, you learn that the app is not only selling your data to third parties but also using your rants about bad referees and triumphant game predictions to train their in-house sports AI, “CoachGPT.”
			Now, CoachGPT is spitting out trash talk eerily similar to yours and even predicting your team’s losses with brutal accuracy. All for the sake of ‘better fan engagement.’`,
				leaks: ['location', 'consumer_interests', 'usage_patterns'],
				conveniencePoints: 90
			},
			{
				id: 'q7o2',
				text: 'Avoid using the app and follow the league through a browser',
				outcome: `You decide to stick with the league’s official website. It’s not as smooth or flashy as the app, but you avoid the hidden data collection. A few months later, you stumble upon a huge investigative report revealing the app’s shady practices—selling user data and training their AI, “CoachGPT,” on fan interactions.`,
				leaks: [],
				conveniencePoints: 20
			}
		],
	},
	{
		id: 'q8',
		question: 'You join a new trendy social network called FriendShare. It asks you to quickly accept the Terms of Service without clearly highlighting key points.',
		summary: 'Quickly accept network terms', 
		image: '/images/social_network.png',
		articleLinks: [
			"https://www.usatoday.com/story/tech/2020/01/28/not-reading-the-small-print-is-privacy-policy-fail/4565274002/"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q8o1',
				text: 'Accept terms quickly without reading',
				outcome: 'You unknowingly agree to broad data sharing.',
				leaks: [], // ['profile_data', 'contacts', 'shared_content']
				conveniencePoints: 90
			},
			{
				id: 'q8o2',
				text: 'Use a browser extension to briefly highlight red flags',
				outcome: 'Improved privacy through proactive checking.',
				leaks: [], // ['minimal_profile_data']
				conveniencePoints: 50
			},
			{
				id: 'q8o3',
				text: 'Decline joining completely',
				outcome: 'You fully protect your data.',
				leaks: [], // []
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q9',
		question: 'The photo-sharing app PicWorld updates terms allowing the platform to use your photos commercially without explicit consent.',
		summary: 'App using photos commercially', 
		image: '/images/photo_sharing.png',
		articleLinks: [
			"https://current360.com/instagrams-new-tos-what-do-they-mean/",
			"https://thomashawk.com/2012/12/photographers-upset-by-instagrams-change-in-terms-of-service.html"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q9o1',
				text: 'Continue using normally without reviewing',
				outcome: 'Risk of your photos being used commercially.',
				leaks: [], // ['photos', 'usernames']
				conveniencePoints: 90
			},
			{
				id: 'q9o2',
				text: 'Limit content visibility (private mode)',
				outcome: 'Protects content more effectively.',
				leaks: [], // ['limited_photos']
				conveniencePoints: 50
			},
			{
				id: 'q9o3',
				text: 'Delete sensitive photos immediately',
				outcome: 'Reduces risk of unauthorized use.',
				leaks: [], // []
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q10',
		question: 'You decide to install the video app QuickClips, which requests extensive permissions (contacts, precise location, keystrokes).',
		summary: 'Video app permission requests', 
		image: '/images/video_app.png',
		articleLinks: [
			"https://www.cbc.ca/news/canada/tiktok-data-collection-privacy-1.6763626",
			"https://www.tiktok.com/legal/page/row/privacy-policy/en"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q10o1',
				text: 'Accept all permissions',
				outcome: 'Extensive personal data collection occurs.',
				leaks: [], // ['contacts', 'location', 'keystrokes', 'device_info']
				conveniencePoints: 95
			},
			{
				id: 'q10o2',
				text: 'Limit permissions for basic functionality',
				outcome: 'Limits data collection to basic app functions.',
				leaks: [], // ['limited_device_info']
				conveniencePoints: 60
			},
			{
				id: 'q10o3',
				text: 'Decline installation entirely',
				outcome: 'Fully protects your data.',
				leaks: [], // []
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q11',
		question: 'You authorize a third-party app to connect to your SocialSphere profile. A bug allows the app to access your friends’ private data.',
		summary: 'Third-party app access bug', 
		image: '/images/social_bug.png',
		articleLinks: [
			"https://www.theguardian.com/technology/2018/oct/08/google-plus-security-breach-wall-street-journal"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q11o1',
				text: 'Authorize access immediately without deeper review',
				outcome: 'Unintentional exposure of your friends’ private information.',
				leaks: [], // ['friends_data', 'profile_data']
				conveniencePoints: 90
			},
			{
				id: 'q11o2',
				text: 'Check privacy settings carefully before granting access',
				outcome: 'Limits potential data exposure.',
				leaks: [], // ['limited_profile_data']
				conveniencePoints: 50
			},
			{
				id: 'q11o3',
				text: 'Avoid using third-party apps altogether',
				outcome: 'Best protection against data leaks.',
				leaks: [], // []
				conveniencePoints: 0
			}
		],
	},
	{
		id: 'q12',
		question: 'You set up your new smart assistant, HomeHelper, which asks permission to "analyze audio for a better experience."',
		summary: 'Smart assistant audio analysis', 
		image: '/images/smart_assistant.png',
		articleLinks: [
			"https://www.bbc.com/news/articles/cr4rvr495rgo"
		],
		blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q12o1',
				text: 'Allow all audio data analysis',
				outcome: 'Your private conversations may be analyzed.',
				leaks: [], // ['audio_recordings', 'private_conversations']
				conveniencePoints: 90
			},
			{
				id: 'q12o2',
				text: 'Allow limited command-based interactions only',
				outcome: 'Limits audio data collection significantly.',
				leaks: [], // ['command_audio']
				conveniencePoints: 50
			},
			{
				id: 'q12o3',
				text: 'Completely opt-out of audio data sharing',
				outcome: 'Best protection of privacy.',
				leaks: [], // []
				conveniencePoints: 0
			}
		],
	}
];