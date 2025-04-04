// src/components/ResourcesPage.jsx 

const citations = [
	{
		author: "EY",
		title: "How Location Tracking Is Raising the Stakes on Privacy Protection",
		source: "EY",
		date: "Accessed April 4, 2025",
		url: "https://www.ey.com/en_gl/insights/forensic-integrity-services/how-location-tracking-is-raising-the-stakes-on-privacy-protection"
	},
	{
		author: "Stuart A. Thompson and Charlie Warzel",
		title: "Opinion: Twelve Million Phones, One Dataset, Zero Privacy",
		source: "The New York Times",
		date: "December 19, 2019",
		url: "https://www.nytimes.com/interactive/2019/12/19/opinion/location-tracking-cell-phone.html"
	},
	{
		author: "Sheera Frenkel",
		title: "Weather Channel App Accused of Covertly Mining User Data",
		source: "The New York Times",
		date: "January 3, 2019",
		url: "https://www.nytimes.com/2019/01/03/technology/weather-channel-app-lawsuit.html"
	},
	{
		author: "Federal Trade Commission",
		title: "FTC Staff Report Finds Large Social Media and Video Streaming Companies Have Engaged in Vast Surveillance of Users with Lax Privacy Controls and Inadequate Safeguards for Kids and Teens",
		source: "Federal Trade Commission",
		date: "September 11, 2024",
		url: "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-staff-report-finds-large-social-media-video-streaming-companies-have-engaged-vast-surveillance"
	},
	{
		author: "Federal Trade Commission",
		title: "A Look Behind the Screens: Examining the Data Practices of Social Media and Video Streaming Services",
		source: "Federal Trade Commission",
		date: "September 11, 2024",
		url: "https://www.ftc.gov/reports/look-behind-screens-examining-data-practices-social-media-video-streaming-services"
	},
	{
		author: "Federal Trade Commission",
		title: "FTC and DOJ Charge Amazon with Violating Children's Privacy Law by Keeping Kids' Alexa Voice Recordings Forever and Undermining Parents' Deletion Requests",
		source: "Federal Trade Commission",
		date: "May 31, 2023",
		url: "https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever"
	},
	{
		author: "Clifford Chance",
		title: "The Italian Data Protection Authority Halts ChatGPT's Data Processing Operations",
		source: "Clifford Chance",
		date: "April 6, 2023",
		url: "https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2023/04/the-italian-data-protection-authority-halts-chatgpt-s-data-proce.html"
	},
	{
		"author": "Meta",
		"title": "Terms of Service",
		"source": "Facebook",
		"date": "Accessed April 4, 2025",
		"url": "https://www.facebook.com/terms/"
	},
	{
		"author": "Meta",
		"title": "Data Policy",
		"source": "Instagram Help Center",
		"date": "Accessed April 4, 2025",
		"url": "https://help.instagram.com/155833707900388"
	},
	{
		"author": "TikTok",
		"title": "Privacy Policy",
		"source": "TikTok",
		"date": "September 30, 2024",
		"url": "https://www.tiktok.com/legal/page/row/privacy-policy/en"
	},
	{
		"author": "Alex Oliveira",
		"title": "Priest Outed for Using Grindr Sues Dating App for Allegedly Selling Data",
		"source": "New York Post",
		"date": "July 28, 2024",
		"url": "https://nypost.com/2024/07/28/us-news/priest-outed-for-using-grindr-sues-dating-app-for-allegedly-selling-data-report/"
	},
	{
		"author": "Osgoode Hall Law School",
		"title": "Social Media Privacy: Legalities of Personal Data Collection",
		"source": "IP Osgoode",
		"date": "April 5, 2021",
		"url": "https://www.yorku.ca/osgoode/iposgoode/2021/04/05/social-media-privacy-legalities-of-personal-data-collection/"
	},
	{
		"author": "Get Cyber Safe",
		"title": "What to Know About Internet Cookies",
		"source": "Government of Canada",
		"date": "December 1, 2022",
		"url": "https://www.getcybersafe.gc.ca/en/blogs/what-know-about-internet-cookies"
	},
	{
		"author": "Office of the Privacy Commissioner of Canada",
		"title": "Web Tracking with Cookies",
		"source": "Office of the Privacy Commissioner of Canada",
		"date": "Accessed April 4, 2025",
		"url": "https://www.priv.gc.ca/en/privacy-topics/technology/online-privacy-tracking-cookies/cookies/02_05_d_49/"
	},
	{
		"author": "Brown University Office of Information Technology",
		"title": "Know Your Cookies",
		"source": "Brown University",
		"date": "Accessed April 4, 2025",
		"url": "https://ithelp.brown.edu/kb/articles/know-your-cookies"
	},
	{
		"author": "OWASP Foundation",
		"title": "Session Management Cheat Sheet",
		"source": "OWASP Cheat Sheet Series",
		"date": "Accessed April 4, 2025",
		"url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
	},
	{
		"author": "David Gewirtz",
		"title": "Android Owners, Watch Out for These 7 Shady VPN Apps",
		"source": "CNET",
		"date": "August 26, 2021",
		"url": "https://www.cnet.com/tech/services-and-software/shady-android-vpn-apps-to-avoid-privacy-google-play/"
	},
	{
		"author": "Patrick Coffee",
		"title": "NFL Teams Gathered Detailed Consumer Data Without Standard Notice or Opt-Outs",
		"source": "The Wall Street Journal",
		"date": "February 14, 2025",
		"url": "https://www.wsj.com/articles/nfl-teams-gathered-detailed-consumer-data-without-standard-notice-or-opt-outs-ab70582d"
	},
	{
		"author": "CBC News",
		"title": "TikTok's Data Collection Practices Raise Privacy Concerns in Canada",
		"source": "CBC News",
		"date": "February 23, 2023",
		"url": "https://www.cbc.ca/news/canada/tiktok-data-collection-privacy-1.6763626"
	},
	{
		"author": "BBB National Programs",
		"title": "NFL Voluntarily Complies with Consumer Data Privacy Standards",
		"source": "BBB National Programs",
		"date": "Accessed April 4, 2025",
		"url": "https://bbbprograms.org/media/newsroom/decisions/daap-nfl"
	},
	{
		"author": "Current360",
		"title": "Instagram's New TOS: What Do They Mean?",
		"source": "Current360",
		"date": "December 19, 2012",
		"url": "https://current360.com/instagrams-new-tos-what-do-they-mean/"
	},
	{
		"author": "Thomas Hawk",
		"title": "Photographers Upset By Instagram's Change in Terms of Service",
		"source": "Thomas Hawk Digital Connection",
		"date": "December 18, 2012",
		"url": "https://thomashawk.com/2012/12/photographers-upset-by-instagrams-change-in-terms-of-service.html"
	},
	{
		"author": "Amanda Holpuch",
		"title": "Instagram Reassures Users Over Terms of Service After Massive Outcry",
		"source": "The Guardian",
		"date": "December 18, 2012",
		"url": "https://www.theguardian.com/technology/2012/dec/18/instagram-issues-statement-terms-of-service"
	},
	{
		"author": "Tomi Ogeron",
		"title": "After Backlash, Instagram Changes Back To Original Terms Of Service",
		"source": "Forbes",
		"date": "December 20, 2012",
		"url": "https://www.forbes.com/sites/tomiogeron/2012/12/20/after-backlash-instagram-changes-back-to-original-terms-of-service/"
	},
	{
		"author": "Mozilla Foundation",
		"title": "Nissan | Privacy & Security Guide",
		"source": "Mozilla Foundation",
		"date": "August 15, 2023",
		"url": "https://foundation.mozilla.org/en/privacynotincluded/nissan/"
	},
	{
		"author": "Mozilla Foundation",
		"title": "It's Official: Cars Are the Worst Product Category We Have Ever Reviewed for Privacy",
		"source": "Mozilla Foundation",
		"date": "September 6, 2023",
		"url": "https://foundation.mozilla.org/en/privacynotincluded/articles/its-official-cars-are-the-worst-product-category-we-have-ever-reviewed-for-privacy/"
	},
	{
		"author": "Hibaq Farah and Jasper Jolly",
		"title": "From Sex Life to Politics: Car Driver Data Grab Presents ‘Privacy Nightmare’, Says Study",
		"source": "The Guardian",
		"date": "September 6, 2023",
		"url": "https://www.theguardian.com/business/2023/sep/06/cars-collect-extensive-personal-data-on-drivers-study-warns"
	},
	{
		"author": "Julia Carrie Wong and Olivia Solon",
		"title": "Google to Shut Down Google+ After Failing to Disclose User Data Leak",
		"source": "The Guardian",
		"date": "October 8, 2018",
		"url": "https://www.theguardian.com/technology/2018/oct/08/google-plus-security-breach-wall-street-journal"
	},
	{
		"author": "Suzanne Smalley",
		"title": "Google Agrees to $350 Million Settlement Over Data Leak",
		"source": "The Record",
		"date": "February 6, 2024",
		"url": "https://therecord.media/google-agrees-to-settle-data-leak"
	},
	{
		"author": "BBC News",
		"title": "Apple to Pay $95m to Settle Siri 'Listening' Lawsuit",
		"source": "BBC News",
		"date": "Accessed April 4, 2025",
		"url": "https://www.bbc.com/news/articles/cr4rvr495rgo"
	},
	{
		"author": "USA Today",
		"title": "Amazon Echo and Alexa Are Listening More Than You Think: How to Protect Your Privacy",
		"source": "USA Today",
		"date": "March 17, 2025",
		"url": "https://www.usatoday.com/story/tech/2025/03/17/amazon-echo-alexa-reporting-privacy/82503576007/"
	}		
];


function ResourcesPage() {
    return (
        <div className="p-8 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Resources</h1>
            <ul className="list-none">
                {citations.map((citation, index) => (
                    <li key={index} className="mb-4 text-left">
                        <span className="font-bold">[{index + 1}]</span> {citation.author} ({citation.date}). <i>{citation.title}</i>. {citation.source}. Retrieved from{' '}
                        <a href={citation.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            {citation.url}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResourcesPage;