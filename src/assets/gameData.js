// src/gameData.js

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
				ShopMaster tracks your every move—whether you're grabbing coffee, heading to work, or hitting the gym. You’re assaulted with hyper-targeted ads and offers, but it’s clear the app knows more about your habits than you might be comfortable with. That cozy café you visit every Monday morning? ShopMaster already has a discount ready, with more on the way.
			`,
				leaks: [
					"Your precise location history is tracked 24/7, revealing your daily routines and frequently visited places",
					"Your shopping habits and store visits are collected to build a detailed consumer profile"
				],
				satisfactionPoints: 90
			},
			{
				id: 'q1o2',
				text: 'Allow location access "Only when using the app"',
				outcome: `
				ShopMaster checks in only when you’re actively browsing. You still get relevant offers while searching for deals, but the app isn’t snooping around when you’re off the clock. The suggestions are helpful, and you've made some nice purchases from them. Sometimes the timing is a bit off, however, like getting a discount just as you've arrived home from shopping.`,
				leaks: [
					"Your location is logged whenever you open the app, linking your presence to specific times and places"
				],
				satisfactionPoints: 70
			},
			{
				id: 'q1o3',
				text: 'Deny location access',
				outcome: `
			ShopMaster has almost no clue about where you are. You get generic ads for random products from halfway across the country. You miss out on that half-price latte deal, but at least your whereabouts remain your own little secret.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q2',
		question: 'After years of scrolling, posting questionable memes, and occasionally connecting with actual humans, you decide it’s finally time to leave FaceSpace, the dominant social media platform everyone seems glued to. You navigate through a maze of settings, finally finding the account closure options. What\'s your exit strategy?',
		summary: 'Social media account deletion',
		image: '/images/q2.png',
		articleLinks: [
			{
				url: "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-staff-report-finds-large-social-media-video-streaming-companies-have-engaged-vast-surveillance#:~:text=The%20report%20found%20that%20the,and%20about%20both%20users%20and",
				title: "FTC Staff Report Finds Large Social Media and Video Streaming Companies Have Engaged in Vast Surveillance of Users with Lax Privacy Controls and Inadequate Safeguards for Kids and Teens"
			},
			{
				url: "https://www.ftc.gov/reports/look-behind-screens-examining-data-practices-social-media-video-streaming-services",
				title: "A Look Behind the Screens: Examining the Data Practices of Social Media and Video Streaming Services"
			},
			{
				url: "https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever",
				title: "FTC and DOJ Charge Amazon with Violating Children’s Privacy Law by Keeping Kids’ Alexa Voice Recordings Forever and Undermining Parents’ Deletion Requests"
			}
		],
		writeup: "A 2024 FTC staff report sheds light on the significant privacy risks associated with social media and video streaming platforms, highlighting the critical distinction between temporarily deactivating an account and requesting full data deletion. As the report indicates, these companies engage in 'vast surveillance' of users, often retaining extensive data even after account deactivation. This practice exposes users to prolonged privacy vulnerabilities, as their information remains on company servers, susceptible to breaches or misuse. In contrast, pursuing a full data deletion, while not always guaranteeing complete removal due to backup systems and legal obligations, significantly reduces this risk. The FTC's findings underscore the importance of understanding a company's data retention policies and the necessity of advocating for true data deletion to minimize long-term privacy threats.",
		options: [
			{
				id: 'q2o1',
				text: 'Request standard account deletion',
				outcome: `You click 'Delete Account' and your profile vanishes from public view. Relief washes over you... until months later when targeted ads still reflect inside jokes you only shared in FaceSpace DMs. Turns out, deleted doesn't mean gone. Your data lingers in their archives, possibly sold off or used to train their next-gen AI that predicts breakup likelihoods.`,
				leaks: [
					'Your archived profile data is retained, allowing the company to restore your account or sell your information',
					'Your photos remain stored, potentially accessible by employees or unauthorized third parties',
					'Your posts are retained, allowing them to be used for algorithm training or marketing',
					'Your friend connections are still recorded, which can be exploited for social profiling'
				],
				satisfactionPoints: 90
			},
			{
				id: 'q2o2',
				text: 'Request full data deletion (GDPR/CCPA)',
				outcome: `You invoke your rights under GDPR/CCPA, demanding full data deletion. It takes extra steps and multiple strongly worded email, but you get confirmation that your data is being wiped from their databases.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q3',
		question: 'You\'re trying to resolve a frustrating issue with your online bank, Goose Bank. Instead of a human, you\'re directed to \"FinBot\", their friendly AI assistant. Before you can type your issue, a notice pops up: “To improve FinBot, your conversations may be reviewed and used for training purposes.” You just want your problem solved. Do you proceed?',
		summary: 'Chatbot data for AI',
		image: '/images/q3.avif',
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
				outcome: `You sigh and start explaining your problem to FinBot, pouring out account details and frustrations. FinBot eventually provides a semi-helpful answer. Months later, you read an article about how Goose Bank's AI can now detect 'customer distress levels' with uncanny accuracy, thanks to the thousands of detailed, emotional support chats it was trained on – including yours.`,
				leaks: [
					'Conversations revealing personal details are stored and analyzed to improve AI systems, potentially exposing sensitive information',
					'Personal information shared during chats is stored indefinitely, creating a permanent record of your interactions'
				],
				satisfactionPoints: 90
			},
			{
				id: 'q3o2',
				text: 'Explicitly opt-out and request human support',
				outcome: `You hunt for an 'opt-out' button or type 'CONNECT ME TO A HUMAN.' After a frustrating loop, you finally get connected to a real person. It takes longer, but you resolve your issue without feeding your financial anxieties to Goose Bank's AI. You feel slightly smug about protecting your data, even if it cost you an extra 20 minutes of hold music.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q4',
		question: 'All your friends have joined the brand new social media app GooseGram and have asked you to join them. After a few weeks, you decide to join this social network that everyone’s been buzzing about. As you reach the signup page, you’re faced with a massive wall of text containing vague terms and outlines about data sharing that would take hours to comb through. Do you dive in or take the shortcut?',
		summary: 'Accepting app terms blindly',
		image: '/images/q4.png',
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
		writeup: "Social media platforms like Facebook, Instagram, and TikTok often have privacy policies that grant them extensive data collection rights, encompassing everything from location and browser history to biometric data and purchase information, often shared with third-party advertisers. This data is used for targeted advertising and profile creation, with platforms reserving the right to change policies without notice and retain data indefinitely. Furthermore, users often unknowingly grant broad rights to their content and contribute to AI training, all while facing limited transparency and control over their personal information.\n\nThe case of Monsignor Jeffrey Burrill, as reported by the NYPost, starkly illustrates the dangers of blindly accepting privacy policies. Grindr's alleged sale of his sensitive data, leading to his public outing, underscores the potential for severe consequences when users fail to scrutinize the terms governing their personal information. This incident aligns with the broader concerns discussed in the York University IP Osgoode article, which highlights the legal complexities and challenges surrounding social media privacy and the often-problematic nature of \"implied consent.\" Both sources emphasize the critical need for users to actively understand and question the data collection and sharing practices outlined in privacy policies, rather than passively accepting them, to protect themselves from potentially devastating privacy violations.",
		options: [
			{
				id: 'q4o1',
				text: 'Accept terms without reading carefully',
				outcome: `
				You breeze through the signup process, barely reading the first word from the wall of text, and gain instant access. But with vague terms, you’ve effectively handed over the keys to your personal data. Your profile information, browser habits, and even device details are now up for grabs. Weeks later, you start receiving ads eerily tailored to your conversations. That one time you mentioned alpaca farming as a joke? You're now getting targeted emails from luxury wool suppliers and guided llama trekking tours. But that's the price you pay for "satisfaction"`,
				leaks: [
					"Your email address is collected and potentially shared with marketing partners",
					"Your profile information, including name, age, and interests, is used for targeted advertising",
					"Details about your device (type, OS, IP address) are logged and linked to your account"
				],
				satisfactionPoints: 95
			},
			{
				id: 'q4o2',
				text: 'Use privacy-check tool to highlight problematic sections',
				outcome: `You take a few minutes to scan the terms using a privacy-check tool. It flags some concerning clauses—data sharing, targeted advertising, even location tracking. Concerned, you share your findings with your friends. Spooked by the details, they decide to ditch the app altogether and switch to something else. You’ve managed to dodge a privacy disaster, but the whole group chat is now looking for a new platform.`,
				leaks: [
					"Basic profile information entered during signup might be temporarily stored before you decide against using the app"
				],
				satisfactionPoints: 50
			},
			{
				id: 'q4o3',
				text: 'Decline to join until fully understanding risks',
				outcome: `You decide to dig deeper before committing, determined to understand every clause. Days turn into weeks as you wade through endless legal jargon and cross-reference privacy policies. By the time you finally grasp what you're signing up for (it was nothing good) the social network is yesterday’s news. Your friends have already moved on to the next big thing, leaving you with your privacy preserved but also with a headache and a newfound distrust of fine print.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q5',
		question: 'You\'re browsing GadgetGalaxy, an online store famous for tech deals. Before you can even look at the latest smartwatches, a massive banner slides down: “We value your privacy (and delicious cookies)! Accept our cookie policy to enhance your shopping experience?” Your cursor hovers over the options.',
		summary: 'Cookie consent choices',
		image: '/images/q5.png',
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
		writeup: "Accepting all cookies significantly increases the risk of your Personal Identification Information (PII) being compromised. Cookies can store sensitive data such as login credentials, contact details, and even partial financial information. This data, if intercepted, can lead to identity theft and financial fraud. Furthermore, the Office of the Privacy Commissioner of Canada highlights the danger of third-party cookies, which enable companies to link your visits between different websites. This cross-site tracking allows for the creation of comprehensive profiles of your online behavior, revealing details about your interests, habits, and even location. This aggregation of data, when combined with leaked PII, creates a heightened risk of targeted attacks and erosion of your online privacy. Cookies are indeed useful in making the online experience smoother, but it is important that individuals are aware of the risks.",
		options: [
			{
				id: 'q5o1',
				text: 'Accept all cookies',
				outcome: `You click 'Accept All,' eager to get to the gadgets. The site works smoothly, remembering your cart and showing relevant recommendations. But soon, ads for the exact smartwatch you lingered on follow you everywhere – news sites, social media, even your weather app (since when did it sell things). GadgetGalaxy and its partners now know all your wants and needs thanks to the extensive tracking you enabled.`,
				leaks: [
					"Your browser history across multiple websites is tracked to build a detailed interest profile",
					"Your site preferences and interaction data are stored to personalize your experience and target ads",
					"Information about your device and IP address is collected by third-party trackers"
				],
				satisfactionPoints: 90
			},
			{
				id: 'q5o2',
				text: 'Accept only necessary cookies',
				outcome: `You select 'Accept Necessary Only.' The site functions, letting you browse and add items to your cart during your visit. However, you don't get personalized recommendations, and the ads you see later are generic. You avoided the cross site tracking, maintaining some privacy, but missed out on potentially useful personalization.`,
				leaks: [],
				satisfactionPoints: 60
			}
		],
	},
	{
		id: 'q6',
		question: 'You\'re installing ConnectSphere, the hottest new social app that promises unique augmented reality filters and seamless friend finding. During setup, it bombards you with permission requests: access your camera, microphone, entire photo gallery, and all your contacts. “Granting these helps us provide the full ConnectSphere experience!” the prompt cheerfully claims. What do you do?',
		summary: 'App permission requests',
		image: '/images/q6.png',
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
				outcome: `You tap 'Allow' for everything, excited to try the AR filters. The app works great! It finds all your friends instantly and the filters are fun. Later, you're startled when ConnectSphere suggests tagging a friend in a photo before you even upload it, recognizing them from your gallery. You also hear rumors the app listens for keywords via the microphone to suggest relevant content. The 'full experience' clearly includes full access to your data.`,
				leaks: [
					"Your entire contact list is uploaded and potentially used to find connections or sold to data brokers",
					"The app gains access to all photos and videos in your gallery, potentially scanning them for metadata or content",
					"The app can access your microphone, potentially listening in the background or recording audio",
					"Detailed device information, including unique identifiers, is collected and linked to your profile"
				],
				satisfactionPoints: 90
			},
			{
				id: 'q6o2',
				text: 'Only grant necessary permissions',
				outcome: `You decide ConnectSphere only really needs camera access for the filters and gallery access for posting photos you choose. You deny microphone and contacts. The AR filters work, and you can post pictures, but friend finding is manual, and some audio-reactive features are disabled. You've balanced functionality with privacy, avoiding the more invasive data grabs.`,
				leaks: [
					"Only the photos you explicitly choose to upload are accessed by the app"
				], // Assuming only gallery/camera needed for posting
				satisfactionPoints: 60
			},
			{
				id: 'q6o3',
				text: 'Reject all permissions',
				outcome: `Alarmed by the requests, you deny all permissions. ConnectSphere becomes virtually unusable. You can't take photos, post existing ones, use AR filters, or find friends easily. You uninstall the app, concluding that the 'full experience' isn't worth granting such broad access to your personal information. Your privacy remains intact, but you miss out on the app entirely.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q7',
		question: 'You download the official app for your favorite sports league, the National Fun League (NFL), but notice there is no clear notice about what data may be collected. The app promises real-time updates, exclusive videos, and special offers. From such a huge brand and household name, how harmful could a simple sports app really be?',
		summary: 'Sports app data collection',
		image: '/images/q7.png',
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
				outcome: `You dive into the app, soaking up scores and highlights. Meanwhile, it’s quietly gathering everything from your location to your browsing habits, even your chat messages and posts. A few months later, as part of a huge investigative report, you learn that the app is not only selling your data to third parties but also using your rants about bad referees and triumphant game predictions to train their in-house sports AI, “CoachGPT.” Now, CoachGPT is spitting out trash talk eerily similar to yours and even predicting your team’s losses with brutal accuracy.`,
				leaks: [
					"Your precise geolocation is tracked, revealing your movements and potentially your home/work locations",
					"Your browsing habits within the app and potentially across other sites are monitored to determine your consumer interests",
					"How you interact with the app (clicks, time spent, features used) is logged and analyzed",
					"Content from your in-app messages or posts might be analyzed for sentiment and training AI"
				],
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
		"id": "q8",
		"question": "You order your usual \"Grande Iced Oat Milk Latte with Caramel Drizzle and a hint of Madagascar Cinnamon\" through a coffee shop's app. The app remembers your order and offers a quick reorder option every time you open it.",
		"summary": "Coffee app order history",
		"image": "/images/q8.png",
		"articleLinks": [],
		"writeup": "The app simply stores your most recent order locally on your device for convenience. This is a common feature, and the data isn't necessarily being sent anywhere.",
		"options": [
			{
				"id": "q8o1",
				"text": "Embrace the convenience: Use the 'quick reorder' option.",
				"outcome": "You quickly reorder your usual drink each time, enjoying the convenience. The app efficiently remembers your preferences, making your coffee runs faster and easier.",
				"leaks": [],
				"satisfactionPoints": 90
			},
			{
				"id": "q6o2",
				"text": "Uninstall the app",
				"outcome": "You uninstall the app entirely. You eliminate the potential for the app to store your order history and track your preferences. You now must order in person or use a different method. This gives you the highest amount of privacy, but removes the convenience of the app entirely.",
				"leaks": [],
				"satisfactionPoints": 0
			},
			{
				"id": "q6o3",
				"text": "Order manually each time, avoiding the 'quick reorder'.",
				"outcome": "You manually input your order each time, even though the app suggests the quick reorder. You feel safer knowing you are not storing your order history. Ordering takes longer, but you maintain more privacy.",
				"leaks": [],
				"satisfactionPoints": 50
			}
		]
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
		image: '/images/q9.png',
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
				"title": "After Backlash, Instagram Changes Back To Original Terms Of Service" // Corrected title
			},
			{
				"url": "https://privacycenter.instagram.com/policy",
				"title": "Instagram Privacy Policy"
			},
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
					Unknown to you, your photos are legally usable by PicWorld for advertising, promotions, or even resale. Weeks later, you find one of your carefully curated beach photos on a billboard promoting a snake oil based sunscreen (which you don’t endorse). To make things stranger, the latest image generation models from UnstableDiffusion create images that look a lot like your photos when you prompt it to create an image of "a fun filled vacation".
				`,
				leaks: [
					"Your photos are licensed to the platform for use in advertising without your direct consent or compensation",
					"Your username is associated with your photos when used in promotions",
					"Your photos are used as training data for image generation AI models"
				],
				satisfactionPoints: 90
			},
			{
				id: 'q9o2',
				text: `Switch your account to private, sharing posts only with your friends`,
				outcome: `
					While this restricts external access to your content, PicWorld’s terms still allow the platform to use your images for promotional purposes. Your images are reviewed in analytics and experiments by PicWorld employees, but at least strangers can't misuse them.
				`,
				leaks: [
					"Your private photos are still accessible to platform employees for internal analytics and potential AI training"
				],
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
		"image": "/images/q10.png",
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
				"leaks": [
					"Your precise driving routes, speed, and braking patterns are collected and potentially sold to insurance companies or data brokers",
					"Audio recordings of your in-car conversations are analyzed for keywords to target advertising or infer personal details",
					"Your vehicle's location history is logged, revealing frequently visited places and travel routines",
					"Sensitive personal information inferred from driving habits or conversations (e.g., health status, personal relationships) may be collected"
				],
				"satisfactionPoints": 90
			},
			{
				"id": "q10o2",
				"text": "Buy the modern car, but refuse to accept the privacy policy",
				"outcome": "You decide not to accept the privacy policy. As a result, many of the car’s connected features, such as in-car Wi-Fi, voice recognition, and over-the-air updates, are disabled. Your experience with the vehicle is severely limited, and certain functionalities may not work at all. But at the end of the day, the car gets you to point A and point B which is exactly what you need.",
				"leaks": [
					"Basic vehicle diagnostic data and essential operational information might still be transmitted to the manufacturer for safety or maintenance purposes"
				],
				"satisfactionPoints": 60
			},
			{
				"id": "q10o3",
				"text": "Buy the older, simpler car",
				"outcome": "You settle on a classic vehicle, free of modern connectivity and any privacy concerns that could come with it. It’s a bit of a fixer-upper, but you like the idea of something simple and reliable. The radio is outdated, and there’s no way to connect your smartphone aside from an aux cord you dug out of a drawer. When friends talk about their car's latest features, you feel a slight pang of envy. You stick by your decision, finding comfort in the old-school charm and privacy your car provides. It ain't much, but it's honest work.",
				"leaks": [],
				"satisfactionPoints": 0
			}
		]
	},
	{
		id: 'q11',
		question: `
			You stumble upon a flashy new app called BrowseBoost that promises to supercharge your internet experience with ad-free browsing, personalized news feeds, and slick customization options. 
			It’s buzzing with five-star reviews and influencers hyping it up everywhere.
			All you need to do is log in using third-party authentication through your Boogle account. It’s quick, easy, and lets you bypass the hassle of creating a whole new profile.
		`,
		summary: 'Third-party app access bug',
		image: '/images/q11.avif',
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
		"writeup": `Back in 2018, a security vulnerability in the Google+ API allowed third-party developers to access the private data of up to 500,000 users without proper authorization. The bug, potentially exposed sensitive information such as names, email addresses, occupations, genders, and ages. Google themselves found no evidence that developers were aware of the bug or that data was misused. As a result, the company chose not to disclose the breach at the time, fearing reputational damage and regulatory scrutiny. Regardless, the breach ultimately led to significant legal and financial repercussions. Google was made to pay a settlement of $350 million in 2024 for a class action lawsuit that focused on this security glitch. This incident highlights how your data can be exposed even when not intended.`,
		options: [
			{
				id: 'q11o1',
				text: 'Authorize access immediately without deeper review',
				outcome: `
				You dive right into BrowseBoost, logging in with your Boogle account without a second thought. The setup is smooth, and the app’s features work perfectly. Unbeknownst to you, there was a bug that granted BrowseBoost unintended access to your friends’ private data. Fortunately, Boogle’s engineers catch and patch the issue before it’s ever exploited.
				`,
				leaks: [],
				satisfactionPoints: 90
			},
			{
				id: 'q11o2',
				text: 'Check privacy settings carefully before granting access',
				outcome: `
					You take a cautious approach, double-checking permissions and restricting BrowseBoost’s access as much as possible. Unbeknownst to you, there was a bug that could have granted BrowseBoost unintended access to your friends’ private data. Fortunately, Boogle’s engineers discover and fix the vulnerability before it’s ever exploited. Your precautions were solid, but unnecessary this time around.
				`,
				leaks: [],
				satisfactionPoints: 50
			},
			{
				id: 'q11o3',
				text: 'Avoid using third-party apps altogether',
				outcome: `You refuse to authenticate BrowseBoost with your Boogle account. No login. No data shared. Unknown to you, Boogle’s engineers found a bug that was a potential data risk, but  patched it before anyone even had a chance to exploit it. So, while everyone else is happily browsing away, you're missing out.`,
				leaks: [],
				satisfactionPoints: 0
			}
		],
	},
	{
		id: 'q12',
		question: `
			You just unboxed your shiny new smart home assistant, HomeHelper. It promises to streamline your home life with voice commands, seamless appliance integration, and even a friendly personality.
			As you set it up, a notification pops up: “Allow HomeHelper to analyze audio for a better experience.” This would probably make HomeHelper a better, well, home helper, but should you let it?
		`,
		summary: 'Smart assistant audio analysis',
		image: '/images/q12.png',
		articleLinks: [
			{
				"url":"https://www.bbc.com/news/articles/cr4rvr495rgo",
				"title":"Apple to pay $95m to settle Siri 'listening' lawsuit"
			},
			{
				url: "https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever",
				title: "FTC and DOJ Charge Amazon with Violating Children’s Privacy Law by Keeping Kids’ Alexa Voice Recordings Forever and Undermining Parents’ Deletion Requests"
			},
			{
				url: "https://www.usatoday.com/story/tech/2025/03/17/amazon-echo-alexa-reporting-privacy/82503576007/",
				title: "Amazon is removing an Echo privacy setting that keeps Alexa recordings from the company"
			}
		],
		writeup: "Home assistants have always made some people feel uneasy in their own homes - and perhaps for good reason. In 2024, Apple settled a $95 million lawsuit over Siri recording users without consent, allegedly sharing data with advertisers. Apple isn't the only big tech company guilty of using IOT devices to surveil. Amazon was charged by the FTC for violating children's privacy laws by keeping kids’ Alexa recordings indefinitely. Even worse, just this month Amazon removed a privacy setting that processed voice commands locally, now requiring cloud processing for all commands. It is suspected this is for the company's new AI features.",
		options: [
			{
				id: 'q12o1',
				text: 'Allow all audio data analysis',
				outcome: `
				You give HomeHelper full permission to analyze all your audio for that “better experience” it keeps promising. Your commands work flawlessly, the thermostat adjusts before you even ask, and it even recommends TV shows you didn’t know you’d love. Everything is so seamless, you almost forget it’s always listening. Except, of course, it is. HomeHelper’s constant analysis means that someone’s probably hearing more of your life than you intended.
				`,
				leaks: [
					"Recordings of your background conversations and ambient household sounds are stored and potentially reviewed by human analysts",
					"Private details spoken near the device, even when not directly addressed, can be captured and analyzed",
					"Voice patterns and commands are used to build a detailed profile of your habits and interests"
				],
				satisfactionPoints: 90
			},
			{
				id: 'q12o2',
				text: 'Allow limited command-based interactions only',
				outcome: `
					You cautiously restrict HomeHelper to only listen for direct commands. You sometimes find yourself shouting or repeating commands to get its attention, but most of the time, it works.
				`,
				leaks: [
					"Audio snippets containing your voice commands are recorded and stored for processing and potential analysis",
					"Accidental activations might still capture brief moments of unintended audio"
				],
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
	},
	{
		"id": "q13",
		"question": "You open your email and find a message from 'RiverZone': 'We noticed you were checking out that noise-canceling headset! Here are some other cool gadgets you might like...' It's a bit creepy how well they know your browsing habits, but also, those gadgets do look pretty sweet.",
		"summary": "Online store product recommendations",
		"image": "/images/q13.png",
		"articleLinks": [],
		"writeup": "While receiving targeted product recommendations can feel intrusive, it's often not a direct privacy violation. This is a common practice used by online retailers to enhance user experience and increase sales. The store's ability to show you these recommendations typically relies on browser cookies and your browsing history within their own site. This means they are primarily tracking your activity on their platform, not across the entire web. This data is often used to personalize your shopping experience, suggesting items you might genuinely be interested in. However, it's important to be aware of how the store uses this data and to review their privacy policy to understand your options.",
		"options": [
			{
				"id": "q13o1",
				"text": "Ignore the email and continue browsing.",
				"outcome": "You ignore the email, accepting the targeted recommendations as part of the online shopping experience. You continue to browse the store and potentially see more personalized product recommendations.",
				"leaks": [],
				"satisfactionPoints": 90
			},
			{
				"id": "q13o2",
				"text": "Unsubscribe from promotional emails.",
				"outcome": "You unsubscribe from promotional emails, preventing further targeted recommendations. You avoid further targeted marketing but may miss out on relevant product suggestions.",
				"leaks": [],
				"satisfactionPoints": 70
			},
			{
				"id": "q13o3",
				"text": "Stop using the platform.",
				"outcome": "You decide to stop using the platform entirely. You avoid all future targeted recommendations and data collection from this store. This provides the highest level of privacy protection, but you lose access to the store's products and services.",
				"leaks": [],
				"satisfactionPoints": 0
			}
		]
	}
];