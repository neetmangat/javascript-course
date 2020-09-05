let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


// 1. Split string into array
const storyWords = story.split(' ');


// 2. Log original word count
console.log('Original word count:', storyWords.length);


// 3. Filter out any unnecessary words
function betterWording(arr) {
    let tempArr = arr.filter((word) => {
        if (unnecessaryWords.includes(word)) {
            return;
        } else {
            return word;
        }
    });
    return tempArr
};
const betterWords = betterWording(storyWords);
const betterWordCount = betterWords.length;


// 4. Count number of overused words
function overusedCounter(arr) {
    let count = 0;
    arr.forEach((word) => {
        if (overusedWords.includes(word)) {
            count++;
        }
    });
    return count;
};
const overusedCount = overusedCounter(betterWords);


// 5. Count number of sentences
function sentenceCounter(string) {
    let tempArr = string.split('');
    let counter = 0;
    tempArr.filter((char) => {
        if (char === "." || char === "!") {
            counter++;
        }
    });
    return counter;
};
const sentenceCount = sentenceCounter(story);


// 6. Log word count, sentence count, and overused words count
function logCounts(words, overused, sentence) {
    console.log('Better word count:', words);
    console.log('Overused words:', overused);
    console.log('Sentence count:', sentence);
}
logCounts(betterWordCount, overusedCount, sentenceCount);

// 7. Log betterWords as string
console.log(betterWords.join(' '));