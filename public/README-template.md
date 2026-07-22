# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

## Frontend functionality

1. The planning has taken a lot from me, not knowing how to start. The sstructure of the json file complicates things quite a bit with main user seperated from the comments but I can see how I could have used that if I had auth but still it is the blue print container of the entire comment section.
2. For now I will just build a stati site which will look like the the given one then I will see if I will do the functionality on it first or if I will connecct to db first then work on the funtionality.
- So far I am loadng static data but I will see if it wll not give me problems when I fetch it from db (async and fetch will be my goto)
3. So i designed the forms for the comment and reply
- The design was not as simple as it looks and still needs tweaking
- I also have trouble on where to put the forms but I have decided that they will go on every element just hidden whereby I was making it a a sibling of the component instead as a child of individual component
4. The adding of reply and comment. I wanted to add a comment, initially you know since you have an array you use a push property. Though this needs to add an object to the array but I don't want to change the original one meaning I have to spread the array and add.
So my solution was to just set the data to the on submit function of both forms only to realise this is not the correct approach.
- I think the solution is to move everything on the submit to the contextt and turn it into a fucntion whereby i will call any which one I require. 
# Will complete later
5. Voter component. Initially I cheated by making a state which gets the score from the the components and changes the value. What I noticed is that the value only changes on the ui but not the component. I figured i needed to change the post
# Note to self, choosing to work with nested data is not ideal, next time I will rather make states for the nested data and look for a way to sync the data. As I am struggling now, I don't know what I am going to do when it comes to working with the backend.
- I thought of making a component which accepts the type off component and it wll conditionally render the reply or comment voter function, then I would go on to try and add whether it is increaing or decreasing to add to the function to also conditionally render the button interactivity function.
- I was having too many error whereby I decded to spliit the the reply and comment vote components. A little( by a little I mean trial and error) tweaking and I got the buttons to work.
6. Adding comment and reply funcionality.
- I initially i had an add comment and add reply on their respectivve component but on trying it out I realised that it is not functioning the way I intended, where the reply function had to be used on both components with the comment used on the add comment form only
- A minor bottleneck was that I used the same reply function on comment and reply component and it didn't work as expected and had to tweak it for replies.
- FOr the whole day I am working on removing duplicate username on form, still no solution. Tried on the component side nothing, now I am working on the form side but still o luck. I am starting to get the feeling it has somethig to do with the decorator. My guess got me close, I was working with data not considering the decorator
- The way to solve the issue was to put the username into a variable since it did not allow m to use decorators but then I used the variable as a conditional and it works.
7. Now I will attempt to edit a text. I wil take the same route i did with deletion just I have to work on getting the text in order to play around with.

## Backend functionality
 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

**Note: Delete this note and the content above if you didn't use AI, or replace with your own experience.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
