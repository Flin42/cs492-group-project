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
		image: '/images/q1.png',
		"articleLinks": [
			{
				"url": "https://www.ey.com/en_gl/insights/forensic-integrity-services/how-location-tracking-is-raising-the-stakes-on-privacy-protection",
				"title": "How location tracking is raising the stakes on privacy protection"
			},
			{
				"url": "https://www.nytimes.com/interactive/2019/12/19/opinion/location-tracking-cell-phone.html",
				"title": "Twelve Million Phones, One Dataset, Zero Privacy"
			},
			{
				"url": "https://www.nytimes.com/2019/01/03/technology/weather-channel-app-lawsuit.html",
				"title": "Los Angeles Accuses Weather Channel App of Covertly Mining User Data"
			}
		],
		writeup: "The legal battles in 2019 surrounding The Weather Channel app highlight a critical privacy issue: the potential for apps to misuse location data. These lawsuits revealed allegations of the app secretly tracking users' precise movements and selling that information to third parties, often without clear consent. This demonstrates how 'always allow' location permissions can lead to a significant breach of privacy, enabling companies to compile detailed profiles of your daily habits and whereabouts. Such data can be exploited for targeted advertising, or even worse, fall into the hands of those with malicious intent. It reinforces the necessity of carefully managing app permissions and understanding the potential consequences of sharing your location information.",
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
				satisfactionPoints: 90
			},
			{
				id: 'q1o2',
				text: 'Allow location access "Only when using the app"',
				outcome: `
				ShopMaster checks in only when you’re actively browsing.
				You still get relevant offers while searching for deals, but the app isn’t snooping around when you’re off the clock.
				The suggestions are helpful, and you've made some nice purchases from them. Sometimes the timing is a bit off, however, like getting a discount just as you've arrived home from shopping.`,
				leaks: ['location'],
				satisfactionPoints: 70
			},
			{
				id: 'q1o3',
				text: 'Deny location access',
				outcome: `
			ShopMaster has almost no clue about where you are.
			You get generic ads for random products from halfway across the country.
			You miss out on that half-price latte deal, but at least your whereabouts remain your own little secret.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q2',
		question: 'You decide to close your account on a popular social media platform.',
		summary: 'Social media account deletion',
		image: '/images/delete_account.png',
		articleLinks: [
			{
				url: "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-staff-report-finds-large-social-media-video-streaming-companies-have-engaged-vast-surveillance#:~:text=The%20report%20found%20that%20the,and%20about%20both%20users%20and",
				title: "FTC Staff Report Finds Large Social Media and Video Streaming Companies Have Engaged in Vast Surveillance of Users with Lax Privacy Controls and Inadequate Safeguards for Kids and Teens"
			},
			{
				url: "https://www.ftc.gov/reports/look-behind-screens-examining-data-practices-social-media-video-streaming-services",
				title: "A Look Behind the Screens: Examining the Data Practices of Social Media and Video Streaming Services"
			}
		],
		writeup: "A 2024 FTC staff report sheds light on the significant privacy risks associated with social media and video streaming platforms, highlighting the critical distinction between temporarily deactivating an account and requesting full data deletion. As the report indicates, these companies engage in 'vast surveillance' of users, often retaining extensive data even after account deactivation. This practice exposes users to prolonged privacy vulnerabilities, as their information remains on company servers, susceptible to breaches or misuse. In contrast, pursuing a full data deletion, while not always guaranteeing complete removal due to backup systems and legal obligations, significantly reduces this risk. The FTC's findings underscore the importance of understanding a company's data retention policies and the necessity of advocating for true data deletion to minimize long-term privacy threats.",
		options: [
			{
				id: 'q2o1',
				text: 'Request standard account deletion',
				outcome: 'Public profile hidden, data may remain archived internally.',
				leaks: ['archived_profile_data'],
				satisfactionPoints: 40
			},
			{
				id: 'q2o2',
				text: 'Request full data deletion (GDPR/CCPA)',
				outcome: 'Higher chance data is truly deleted.',
				leaks: [],
				satisfactionPoints: 0
			},
			{
				id: 'q2o3',
				text: 'Deactivate account temporarily instead',
				outcome: 'Your data remains fully stored and easily reactivated.',
				leaks: ['full_profile_data'],
				satisfactionPoints: 90
			}
		],
	},
	{
		id: 'q3',
		question: 'When using a customer-support chatbot, the platform states your interactions may help train their AI.',
		summary: 'Chatbot data for AI',
		image: '/images/chatbot_ai.png',
		articleLinks: [
			{
				url: "https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2023/04/the-italian-data-protection-authority-halts-chatgpt-s-data-proce.html#:~:text=Prominent%20Garante%20board%20member%20Mr,reasons%3A%20(1)%20OpenAI%20has",
				title: "The Italian Data Protection Authority halts ChatGPT's data processing operations"
			}
		],
		writeup: "The Italian Data Protection Authority's (Garante) intervention with ChatGPT, as detailed in the Clifford Chance article, underscores the heightened privacy risks associated with AI chatbots compared to human support agents. The Garante's concerns stemmed from OpenAI's alleged unlawful and massive-scale collection of personal data, enabled by the ease with which chatbots can ingest and process information, a stark contrast to the typically limited, case-specific data handling of human agents. Moreover, the article highlights the Garante's finding of a lack of transparency regarding data processing and the potential for inaccurate data generation by ChatGPT, issues less prevalent with human agents operating under established privacy guidelines. The absence of clear privacy notices and age verification mechanisms, as cited by the Garante, further distinguishes the risks, revealing a regulatory gap that amplifies privacy concerns beyond those associated with traditional human interactions, particularly given the unprecedented volume of data that chatbots can automatically collect..",
		options: [
			{
				id: 'q3o1',
				text: 'Continue using the chatbot (implicit consent)',
				outcome: 'Your interactions become training data.',
				leaks: ['chat_logs', 'personal_info_shared_in_chat'],
				satisfactionPoints: 90
			},
			{
				id: 'q3o2',
				text: 'Explicitly opt-out and request human support',
				outcome: 'Your data is protected from AI training.',
				leaks: [],
				satisfactionPoints: 30
			},
			{
				id: 'q3o3',
				text: 'Request clarification about data usage',
				outcome: 'Clarifies privacy implications, empowers informed decision-making.',
				leaks: [],
				satisfactionPoints: 60
			}
		],
	},
	{
		id: 'q4',
		question: 'All your friends have joined the brand new social media app GooseGram and have asked you to join them. After a few weeks, you decide to join this social network that everyone’s been buzzing about. As you reach the signup page, you’re faced with a massive wall of text containing vague terms and outlines about data sharing that would take hours to comb through. Do you dive in or take the shortcut?',
		summary: 'Accepting app terms blindly',
		image: '/images/terms_of_service.png',
		articleLinks: [
			{
				"url": "https://www.facebook.com/terms",
				"title": "Meta Terms of Service"
			},
			{
				"url": "https://privacycenter.instagram.com/policy",
				"title": "Instagram Privacy Policy"
			},
			{
				"url": "https://www.tiktok.com/legal/page/row/privacy-policy/en",
				"title": "TikTok Privacy Policy"
			},
			{
				"url": "https://nypost.com/2024/07/28/us-news/priest-outed-for-using-grindr-sues-dating-app-for-allegedly-selling-data-report/",
				"title": "Catholic priest outed for using Grindr sues dating app for allegedly selling data: Report"
			},
			{
				"url": "https://www.yorku.ca/osgoode/iposgoode/2021/04/05/social-media-privacy-legalities-of-personal-data-collection/",
				"title": "Social Media Privacy: Legalities of Personal Data Collection"
			},
			{
				"url": "https://www.usatoday.com/story/tech/2020/01/28/not-reading-the-small-print-is-privacy-policy-fail/4565274002/",
				"title": "What you need to know before clicking 'I agree' on that terms of service agreement or privacy policy"
			}
		],
		writeup: "Social media platforms like Facebook, Instagram, and TikTok often have privacy policies that grant them extensive data collection rights, encompassing everything from location and browsing history to biometric data and purchase information, often shared with third-party advertisers. This data is used for targeted advertising and profile creation, with platforms reserving the right to change policies without notice and retain data indefinitely. Furthermore, users often unknowingly grant broad rights to their content and contribute to AI training, all while facing limited transparency and control over their personal information.\n\nThe case of Monsignor Jeffrey Burrill, as reported by the NYPost, starkly illustrates the dangers of blindly accepting privacy policies. Grindr's alleged sale of his sensitive data, leading to his public outing, underscores the potential for severe consequences when users fail to scrutinize the terms governing their personal information. This incident aligns with the broader concerns discussed in the York University IP Osgoode article, which highlights the legal complexities and challenges surrounding social media privacy and the often-problematic nature of \"implied consent.\" Both sources emphasize the critical need for users to actively understand and question the data collection and sharing practices outlined in privacy policies, rather than passively accepting them, to protect themselves from potentially devastating privacy violations.",
		options: [
			{
				id: 'q4o1',
				text: 'Accept terms without reading carefully',
				outcome: `
			You breeze through the signup process, barely reading the first word from the wall of text, and gain instant access. But with vague terms, you’ve effectively handed over the keys to your personal data. Your profile information, browsing habits, and even device details are now up for grabs.
			Weeks later, you start receiving ads eerily tailored to your conversations. That one time you mentioned alpaca farming as a joke? You're now getting targeted emails from luxury wool suppliers and guided llama trekking tours. But that's the price you pay for "satisfaction"`,
				leaks: ['email', 'profile_data', 'device_info'],
				satisfactionPoints: 95
			},
			{
				id: 'q4o2',
				text: 'Use privacy-check tool to highlight problematic sections',
				outcome: `You take a few minutes to scan the terms using a privacy-check tool. It flags some concerning clauses—data sharing, targeted advertising, even location tracking. Concerned, you share your findings with your friends. Spooked by the details, they decide to ditch the app altogether and switch to something else. You’ve managed to dodge a privacy disaster, but the whole group chat is now looking for a new platform.`,
				leaks: ['limited_profile_data'],
				satisfactionPoints: 50
			},
			{
				id: 'q4o3',
				text: 'Decline to join until fully understanding risks',
				outcome: `You decide to dig deeper before committing, determined to understand every clause. Days turn into weeks as you wade through endless legal jargon and cross-reference privacy policies. By the time you finally grasp what you're signing up for (it was nothing good) the social network is yesterday’s news.
			Your friends have already moved on to the next big thing, leaving you with your privacy preserved but also with a headache and a newfound distrust of fine print.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q5',
		question: 'You visit an online store and encounter a cookie consent popup.',
		summary: 'Cookie consent choices',
		image: '/images/cookie_consent.png',
		articleLinks: [
			{
				"title": "What to know about Internet cookies",
				"url": "https://www.getcybersafe.gc.ca/en/blogs/what-know-about-internet-cookies"
			},
			{
				"title": "Web tracking with cookies",
				"url": "https://www.priv.gc.ca/en/privacy-topics/technology/online-privacy-tracking-cookies/cookies/02_05_d_49/"
			},
			{
				"title": "Know Your Cookies",
				"url": "https://ithelp.brown.edu/kb/articles/know-your-cookies"
			},
			{
				"title": "Session Management Cheat Sheet",
				"url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
			}
		],
		writeup: "Accepting all cookies significantly increases the risk of your Personal Identification Information (PII) being compromised. As detailed by resources like those from Brown University's IT Help, cookies can store sensitive data such as login credentials, contact details, and even partial financial information. This data, if intercepted, can lead to identity theft and financial fraud. Furthermore, the Office of the Privacy Commissioner of Canada highlights the danger of third-party cookies, which enable companies to link your visits between different websites. This cross-site tracking allows for the creation of comprehensive profiles of your online behavior, revealing intimate details about your interests, habits, and even location. This aggregation of data, when combined with leaked PII, creates a heightened risk of targeted attacks and a severe erosion of your online privacy, as your actions across the web become a detailed, traceable record.",
		options: [
			{
				id: 'q5o1',
				text: 'Accept all cookies',
				outcome: 'Enables extensive tracking and personalized ads.',
				leaks: [], // ['browsing_history', 'preferences', 'device_info']
				satisfactionPoints: 90
			},
			{
				id: 'q5o2',
				text: 'Accept only necessary cookies',
				outcome: 'Minimal tracking, basic website functionality maintained.',
				leaks: [], // ['basic_usage_data']
				satisfactionPoints: 60
			},
			{
				id: 'q5o3',
				text: 'Manage preferences manually',
				outcome: 'Limits data exposure by explicitly controlling cookies.',
				leaks: [], // ['controlled_preferences']
				satisfactionPoints: 30
			}
		],
	},
	{
		id: 'q6',
		question: 'A social media app asks for extensive permissions (microphone, contacts, gallery, camera).',
		summary: 'App permission requests',
		image: '/images/app_permissions.png',
		articleLinks: [
			{
				"title": "Android Owners, Watch Out for These 7 Shady VPN Apps",
				"url": "https://www.cnet.com/tech/services-and-software/shady-android-vpn-apps-to-avoid-privacy-google-play/"
			},
			{
				"title": "What does TikTok know about you? What should you know about it?",
				"url": "https://www.cbc.ca/news/canada/tiktok-data-collection-privacy-1.6763626"
			},
			{
				"title": "TikTok Privacy Policy",
				"url": "https://www.tiktok.com/legal/page/row/privacy-policy/en"
			}
		],
		writeup: "The practice of indiscriminately granting apps all requested permissions presents a substantial threat to your digital privacy and security. As the CBC News investigation into TikTok demonstrates, applications can aggressively monitor an array of device functions, including 'keystroke patterns or rhythms, battery state, audio settings and connected audio devices,' and even analyze video content to identify 'objects and scenery... face and body features... and the text of the words spoken.' This level of data collection often extends far beyond the app's essential functionality, highlighting a pattern of excessive data gathering. Furthermore, the CNET report on 'shady' Android VPN apps reveals a disturbing trend: these apps, designed to enhance privacy, might instead collect and sell user data, directly undermining the very privacy they claim to offer. In essence, many apps, regardless of their purported purpose, frequently request permissions that enable them to gather sensitive information unrelated to their core functions. Therefore, it is imperative that users exercise caution, thoroughly review permission requests, and only grant access to information that is absolutely essential for an app's proper operation.",
		options: [
			{
				id: 'q6o1',
				text: 'Accept all permissions',
				outcome: 'Leads to extensive data collection.',
				leaks: [], // ['contacts', 'photos', 'audio_data', 'device_info']
				satisfactionPoints: 90
			},
			{
				id: 'q6o2',
				text: 'Only grant necessary permissions',
				outcome: 'Limited functionality but reduced privacy risk.',
				leaks: [], // ['photos']
				satisfactionPoints: 60
			},
			{
				id: 'q6o3',
				text: 'Reject all permissions',
				outcome: 'Maximum privacy protection, reduced app functionality.',
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q7',
		question: 'You download the official app for your favorite sports league, the National Fun League (NFL), but notice there is no clear notice about what data may be collected. The app promises real-time updates, exclusive videos, and special offers. From such a huge brand and household name, how harmful could a simple sports app really be?',
		summary: 'Sports app data collection',
		image: '/images/sports_app.png',
		articleLinks: [
			{
			"url": "https://www.wsj.com/articles/nfl-teams-gathered-detailed-consumer-data-without-standard-notice-or-opt-outs-ab70582d",
			"title": "NFL Teams Gathered Detailed Consumer Data Without Standard Notice or Opt-Outs - WSJ"
			},
			{
			"url": "https://bbbprograms.org/media/newsroom/decisions/daap-nfl",
			"title": "Digital Advertising Accountability Program Decision Regarding NFL - BBB Programs"
			}
		],
		writeup: `
		An investigation by the Digital Advertising Accountability Program (DAAP) revealed that all 32 NFL team apps and websites were collecting detailed consumer data without proper disclosure or the option to opt out, violating standards set by the Digital Advertising Alliance (DAA). This included gathering precise geolocation details and online behavior, which were shared with third-party advertisers.
		Despite these violations, the NFL was not fined and did not suffer any legal reprecussions. Instead, the league voluntarily updated its privacy practices by revising its global privacy policy, adding new consent prompts, and enhancing disclosures related to advertising practices. It's important to note that the DAAP is a non-profit organization
		following a self-regulatory framework, rather than any laws themselves. There is no comprehensive federal data privacy law in the U.S. that would apply universally to all industries, including national sports leagues like the NFL.
		`,
		options: [
			{
				id: 'q7o1',
				text: 'Agree and use the app without further investigation',
				outcome: `You dive into the app, soaking up scores and highlights. Meanwhile, it’s quietly gathering everything from your location to your Browse habits, even your chat messages and posts.
			A few months later, as part of a huge investigative report, you learn that the app is not only selling your data to third parties but also using your rants about bad referees and triumphant game predictions to train their in-house sports AI, “CoachGPT.”
			Now, CoachGPT is spitting out trash talk eerily similar to yours and even predicting your team’s losses with brutal accuracy. All for the sake of ‘better fan engagement.’`,
				leaks: ['location', 'consumer_interests', 'usage_patterns'],
				satisfactionPoints: 90
			},
			{
				id: 'q7o2',
				text: 'Avoid using the app and follow the league through a browser',
				outcome: `You decide to stick with the league’s official website. It’s not as smooth or flashy as the app, but you avoid the hidden data collection. A few months later, you stumble upon a huge investigative report revealing the app’s shady practices—selling user data and training their AI, “CoachGPT,” on fan interactions.`,
				leaks: [],
				satisfactionPoints: 20
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
		writeup: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q8o1',
				text: 'Accept terms quickly without reading',
				outcome: 'You unknowingly agree to broad data sharing.',
				leaks: [], // ['profile_data', 'contacts', 'shared_content']
				satisfactionPoints: 90
			},
			{
				id: 'q8o2',
				text: 'Use a browser extension to briefly highlight red flags',
				outcome: 'Improved privacy through proactive checking.',
				leaks: [], // ['minimal_profile_data']
				satisfactionPoints: 50
			},
			{
				id: 'q8o3',
				text: 'Decline joining completely',
				outcome: 'You fully protect your data.',
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q9',
		question: `
			You've just returned from a fun filled vacation and can’t wait to share your best pictures on PicWorld, the go-to platform for travel photos.
			As you open the app, a notification pops up: “We've updated our terms of service.” You tap in to check it out and are met with a massive wall of text that takes multiple seconds
			to simply scroll to the bottom. There's no way you'll be able to read it all, and 95% of it likely isn't relevant to you. You head to post, but then stop and wonder if
			you should take some precautions.
		`,
		summary: 'App sells user posts to advertisers',
		image: '/images/photo_sharing.png',
		"articleLinks": [
			{
				"url": "https://current360.com/instagrams-new-tos-what-do-they-mean/",
				"title": "Instagram's New TOS: What Do They Mean?"
			},
			{
				"url": "https://thomashawk.com/2012/12/photographers-upset-by-instagrams-change-in-terms-of-service.html",
				"title": "Photographers Upset By Instagram's Change In Terms Of Service"
			},
			{
				"url": "https://www.theguardian.com/technology/2012/dec/18/instagram-issues-statement-terms-of-service",
				"title": "Instagram reassures users over terms of service after massive outcry"
			},
			{
				"url": "https://www.forbes.com/sites/tomiogeron/2012/12/20/after-backlash-instagram-changes-back-to-original-terms-of-service/",
				"title": "https://www.forbes.com/sites/tomiogeron/2012/12/20/after-backlash-instagram-changes-back-to-original-terms-of-service/"
			}
		],
		"writeup": `
			Back in December 2012, Instagram proposed changes to its Terms of Service (TOS) that would allow the platform to display users' photos, usernames, and other data for paid or sponsored content without any compensation to the users. 
			This move sparked significant backlash from photographers, content creators, and just regular users who were concerned about their content and data being used for advertising purposes without consent or payment.
			Instagram responded to this backlash, stating that there was no "intention to sell your photos" and that they were "working on updated language in the terms to make sure this is clear". Instagram also said that the original was written in a way that was meant to legally provide for room to experiment with "innovative advertising" in the app, but had worded it poorly.
			Regardless, this case highlights how tech companies can intentionally use ambiguous language in their TOS and interpret it in a way that best fits their current situation.
			`,
		options: [
			{
				id: 'q9o1',
				text: 'Post your latest pictures publicly',
				outcome: `
					Unknown to you, your photos are legally usable by PicWorld for advertising, promotions, or even resale.
					Weeks later, you find one of your carefully curated beach photos on a billboard promoting a snake oil based sunscreen (which you don’t endorse).
					To make things stranger, the latest image generation models from UnstableDiffusion create images that look a lot like your photos when you prompt it to create an image of "a fun filled vacation".
				`,
				leaks: [], // ['photos', 'usernames']
				satisfactionPoints: 90
			},
			{
				id: 'q9o2',
				text: `Switch your account to private, sharing posts only with your friends`,
				outcome: `
					While this restricts external access to your content, PicWorld’s terms still allow the platform to use your images for promotional purposes. 
					Your images are reviewed in analytics and experiments by PicWorld employees, but at least strangers can't misuse them.
				`,
				leaks: [], // ['limited_photos']
				satisfactionPoints: 50
			},
			{
				id: 'q9o3',
				text: `Don't post at all`,
				outcome: `
					You decide to play it safe and skip posting altogether. Afterall, nobody knows what PicWorlds intentions are. Unfortunately, nobody knows about your awesome photos now either.
				`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		"id": "q10",
		"question": "You're deciding between two cars: a sleek, modern vehicle equipped with cutting-edge connectivity features like in-car Wi-Fi, voice recognition, and seamless smartphone integration, or a simpler, older model from the early 2000s without advanced capabilities. The new car’s infotainment system prompts you to accept the manufacturer's privacy policy to activate its services. The policy is lengthy and filled with complex and vague legal terms. Debating between the two vehicles, you weigh your options.",
		"summary": "Car manufacturers collecting extensive personal data",
		"image": "/images/car_data_collection.png",
		"articleLinks": [
			{
				"url": "https://foundation.mozilla.org/en/privacynotincluded/nissan/",
				"title": "Nissan | Privacy & security guide - Mozilla Foundation"
			},
			{
				"url": "https://foundation.mozilla.org/en/privacynotincluded/articles/its-official-cars-are-the-worst-product-category-we-have-ever-reviewed-for-privacy/",
				"title": "It’s Official: Cars Are the Worst Product Category We Have Ever Reviewed for Privacy"
			},
			{
				"url": "https://www.theguardian.com/business/2023/sep/06/cars-collect-extensive-personal-data-on-drivers-study-warns",
				"title": "From sex life to politics: car driver data grab presents ‘privacy nightmare’, says study - The Guardian"
			}
		],
		"writeup": "Software is becoming integral in modern vehicles, collecting vast amounts of driving data and personal information from its occupants. However, according to a study by the Mozilla Foundation, 25 major car brands reviewed failed their consumer privacy tests, with 84% of them admitting to sharing or selling the data they collect. One notable company was Nissan, which was found to collect sensitive data, including information about drivers' sexual activity, health diagnoses, and genetic information. Nissan shared all of this themselves in their privacy policy. This extensive data collection raises significant privacy concerns, as it often goes beyond what is necessary for vehicle operation and may be used for targeted marketing or shared with third parties without explicit consent.",
		"options": [
			{
				"id": "q10o1",
				"text": "Buy the modern car and accept the privacy policy",
				"outcome": "You quickly agree to the terms and enjoy the full suite of connectivity features. You're enjoying the seamless integration of your smartphone, real-time navigation, and voice-activated controls. Weeks go by, and you continue to appreciate the modern conveniences, from automatically updated maps to music playlists tailored to your tastes. However, you start to notice peculiar ads popping up on your devices. Promotions for health-related products based on conversations you had in the car, or ads for specific destinations you drove past just once. Even more unsettling, personalized insurance quotes arrive in your inbox, referencing your driving habits and frequency of late-night trips.",
				leaks: [],
				satisfactionPoints: 90
			},
			{
				"id": "q10o2",
				"text": "Buy the modern car, but refuse to accept the privacy policy",
				"outcome": "You decide not to accept the privacy policy. As a result, many of the car’s connected features, such as in-car Wi-Fi, voice recognition, and over-the-air updates, are disabled. Your experience with the vehicle is severely limited, and certain functionalities may not work at all. But at the end of the day, the car gets you to point A and point B which is exactly what you need.",
				leaks: [],
				satisfactionPoints: 60
			},
			{
				"id": "q10o3",
				"text": "Buy the older, simpler car",
				"outcome": "You settle on a classic vehicle, free of modern connectivity and any privacy concerns that could come with it. It’s a bit of a fixer-upper, but you like the idea of something simple and reliable. The radio is outdated, and there’s no way to connect your smartphone aside from an aux cord you dug out of a drawer. When friends talk about their car's latest features, you feel a slight pang of envy. You stick by your decision, finding comfort in the old-school charm and privacy your car provides. It ain't much, but it's honest work.",
				leaks: [],
				satisfactionPoints: 0
			}
		]
	},
	{
		id: 'q11',
		question: `
			You stumble upon a flashy new app called BrowseBoost that promises to supercharge your internet experience—ad-free browsing, personalized news feeds, and slick customization options. 
			It’s buzzing with five-star reviews and influencers hyping it up everywhere.
			All you need to do is log in using third-party authentication through your Boogle account. It’s quick, easy, and lets you bypass the hassle of creating a whole new profile.
		`,
		summary: 'Third-party app access bug',
		image: '/images/social_bug.png',
		"articleLinks": [
			{
				"url": "https://www.theguardian.com/technology/2018/oct/08/google-plus-security-breach-wall-street-journal",
				"title": "Google Plus Security Breach Exposes Users’ Data"
			},
			{
				"url": "https://therecord.media/google-agrees-to-settle-data-leak",
				"title": "Google agrees to $350 million settlement over data leak"
			}
		],
		"writeup": `Back in 2018, a security vulnerability in the Google+ API allowed third-party developers to access the private data of up to 500,000 users without proper authorization. The bug, discovered during an internal review prompted by the Facebook-Cambridge Analytica scandal, potentially exposed sensitive information such as names, email addresses, occupations, genders, and ages. Google themselves found no evidence that developers were aware of the bug or that data was misused. As a result, the company chose not to disclose the breach at the time, fearing reputational damage and regulatory scrutiny. Regardless, the breach ultimately led to significant legal and financial repercussions. Google was made to pay a settlement of $350 million in 2024 for a class action lawsuit that focused on this security glitch. This incident highlights how your data can be exposed even when not intended.`,
		options: [
			{
				id: 'q11o1',
				text: 'Authorize access immediately without deeper review',
				outcome: `
				You dive right into BrowseBoost, logging in with your Boogle account without a second thought. The setup is smooth, and the app’s features work perfectly. Unbeknownst to you, there was a bug that granted BrowseBoost unintended access to your friends’ private data. 
				Fortunately, Boogle’s engineers catch and patch the issue before it’s ever exploited.
				`,
				leaks: [], // ['friends_data', 'profile_data']
				satisfactionPoints: 90
			},
			{
				id: 'q11o2',
				text: 'Check privacy settings carefully before granting access',
				outcome: `
					You take a cautious approach, double-checking permissions and restricting BrowseBoost’s access as much as possible. Unbeknownst to you, there was a bug that could have granted BrowseBoost unintended access to your friends’ private data. Fortunately, Boogle’s engineers discover and fix the vulnerability before it’s ever exploited. Your precautions were solid, but unnecessary this time around.
				`,
				leaks: [], // ['limited_profile_data']
				satisfactionPoints: 50
			},
			{
				id: 'q11o3',
				text: 'Avoid using third-party apps altogether',
				outcome: `You refuse to authenticate BrowseBoost with your Boogle account. No login. No data shared. Unknown to you, Boogle’s engineers found a bug that was a potential data risk, but  patched it before anyone even had a chance to exploit it.
					So, while everyone else is happily browsing away, you're missing out.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q12',
		question: `
			You just unboxed your shiny new smart home assistant, HomeHelper. It promises to streamline your home life with voice commands, seamless appliance integration, and even a friendly personality.
			As you set it up, a notification pops up: “Allow HomeHelper to analyze audio for a better experience.” This would probably make HomeHelper a better... well, home helper, but should you let it?
		`,
		summary: 'Smart assistant audio analysis',
		image: '/images/smart_assistant.png',
		articleLinks: [
			"https://www.bbc.com/news/articles/cr4rvr495rgo"
		],
		writeup: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		options: [
			{
				id: 'q12o1',
				text: 'Allow all audio data analysis',
				outcome: `
				You give HomeHelper full permission to analyze all your audio for that “better experience” it keeps promising. Your commands work flawlessly, the thermostat adjusts before you even ask, and it even recommends TV shows you didn’t know you’d love
				Everything is so seamless, you almost forget it’s always listening. Except, of course, it is. HomeHelper’s constant analysis means that someone’s probably hearing more of your life than you intended.
				`,
				leaks: [], // ['audio_recordings', 'private_conversations']
				satisfactionPoints: 90
			},
			{
				id: 'q12o2',
				text: 'Allow limited command-based interactions only',
				outcome: `
					You cautiously restrict HomeHelper to only listen for direct commands. You sometimes find yourself shouting or repeating commands to get its attention, but most of the time, it works.
				`,
				leaks: [], // ['command_audio']
				satisfactionPoints: 50
			},
			{
				id: 'q12o3',
				text: 'Completely opt-out of audio data sharing',
				outcome: `
					You decide to play it safe and shut disable all audio analysis. Sure, it’s not as convenient as it could be, but your privacy is secure. HomeHelper is basically a fancy clock now, but at least it’s a clock that respects your boundaries.
				`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	}
];