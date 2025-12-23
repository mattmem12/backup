// 24 verses, one for each hour
const bibleVerses = {
  "00": "Genesis 1:1 - In the beginning God created the heaven and the earth.",
  "01": "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
  "02": "John 3:16 - For God so loved the world...",
  "03": "Proverbs 3:5 - Trust in the Lord with all thine heart...",
  "04": "Isaiah 40:31 - But they that wait upon the Lord shall renew their strength...",
  "05": "Matthew 6:33 - But seek ye first the kingdom of God...",
  "06": "Philippians 4:13 - I can do all things through Christ which strengtheneth me.",
  "07": "Romans 8:28 - And we know that all things work together for good...",
  "08": "Psalm 46:10 - Be still, and know that I am God.",
  "09": "Jeremiah 29:11 - For I know the thoughts that I think toward you...",
  "10": "Psalm 119:105 - Thy word is a lamp unto my feet...",
  "11": "Hebrews 11:1 - Now faith is the substance of things hoped for...",
  "12": "Romans 12:2 - Be not conformed to this world...",
  "13": "Matthew 11:28 - Come unto me, all ye that labor and are heavy laden...",
  "14": "1 Corinthians 13:4 - Charity suffereth long, and is kind...",
  "15": "Galatians 5:22 - But the fruit of the Spirit is love, joy, peace...",
  "16": "Ephesians 6:10 - Finally, my brethren, be strong in the Lord...",
  "17": "Isaiah 41:10 - Fear thou not; for I am with thee...",
  "18": "Psalm 37:4 - Delight thyself also in the Lord...",
  "19": "James 1:5 - If any of you lack wisdom, let him ask of God...",
  "20": "1 Peter 5:7 - Casting all your care upon him; for he careth for you.",
  "21": "John 14:6 - Jesus saith unto him, I am the way, the truth, and the life...",
  "22": "Psalm 121:1 - I will lift up mine eyes unto the hills...",
  "23": "Revelation 3:20 - Behold, I stand at the door, and knock..."
};

// Update the clock every minute
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
updateClock();
setInterval(updateClock, 60000);

let verseTimeout;

document.getElementById('clock').addEventListener('click', () => {
    const hours = new Date().getHours().toString().padStart(2,'0');
    const verseText = bibleVerses[hours] || "No verse for this hour.";

    // Detect mobile width
    if (window.innerWidth <= 768) {
        const mobileVerseDiv = document.getElementById('mobile-verse');
        mobileVerseDiv.textContent = verseText;
        mobileVerseDiv.style.display = "block";

        if (verseTimeout) clearTimeout(verseTimeout);
        verseTimeout = setTimeout(() => {
            mobileVerseDiv.style.display = "none";
        }, 5000);
    } else {
        const verseDiv = document.getElementById('verse');
        verseDiv.textContent = verseText;
        verseDiv.style.display = "block";

        if (verseTimeout) clearTimeout(verseTimeout);
        verseTimeout = setTimeout(() => {
            verseDiv.style.display = "none";
        }, 5000);
    }
});

