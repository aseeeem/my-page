---
title: You Should Be More Optimistic
slug: you-should-be-more-optimistic
date: 4/14/2023
---

You wanna know what keeps me up at night?

**Bad UX.**

Bad UX is not the most difficult thing to sniff out. Despite trying to educate myself by studying the outputs of great designers I'm still only at a level where I don't know how to curate a good user experience myself. But, I definitely can recognize and diagnose a bad one. For example have you ever tried to write message in Teams? Trying to use any formatting like **bold** or _italicized_ text is a nightmare. Or `some code?` Yeah good luck trying to make sure the rest of your message isn't monospaced.

You know what they get right though? The actual experience of sending a message that gets yeeted into the cloud. You ever notice that you don't worry about if it has sent or not? Even if your internet cut out, the UI still shows that message where it should along with an error message. That my friends is called an **Optimistic UI**. Lets learn how we can emulate that good feeling in our own apps.

### TL;DR

Show the successful state of your interactions immediately, and your users will be happier. Nobody wants your spinners, loading animations, or weird blocking non-interactivity. Kinda like how I gave you the successful output of this document before you do all the work to read the whole thing.

### The Different States

Before I can talk about Optimistic UI as a pattern, we should establish some understanding around state.

Most large scale enterprise applications I've seen generally don't follow the same design. We just put a bunch of input fields onto a page then need to synchronize that with a backend somewhere. Most of the complex code comes from weirdly formed data we're tied to because changing the backend is out of scope (sales promised we'd have feature done in two months). If you wanted advice on how to handle complex state, too bad that's not what this article is about. This isn't about how to structure your application state, this is about **when we should update it.**

For the purpose of this article, we'll say that there are two main types of state: **application** and **external** state.

**Application state**

- This is the internal memory of your application. You might associate it things like a timer running, a counter counting, a button being enabled/disabled, or data loading
- More complex application state examples:
  - authentication status
  - form state. form state is not simple idc who says otherwise

**External State**

- Data elements that exist outside of your app, but represent a concept _inside._
- For example:
  - authentication status
  - CRUD operations
  - user data
  - even the current URL
  - For now we'll consider it to be "what exists on the backend."

External state, in the most React-y of terms, is just state that exists _outside of React's internal state management._ That can be anything from the examples above (data being fetched from the server) or even some data on the DOM that is outside of your particular application. That one is common in micro frontends, where the old monolith has data attributes on the page that should be reflected in the state of the entire).

### Synchronizing State

Dan Abramov expressed a user interface in a very simple way [^1]:

```
ui = fn(server(data), state)
```

We take the output of our server, mix in some application state, and get a UI out of it! With that in mind, I should tell you that the spookiest part of a frontend application is the whole `server(data)` part. This is what we call an **application boundary**.

Say the user clicks a button to increase the value of a field from 1 to 2. They then hit a "save" button somewhere which makes a network request. That request is your application state crossing the network boundary to the server. The server will eventually respond and your UI can revalidate its state by doing what's called **synchronizing state**. That is, taking the data from an external state and putting that into it's own internal state. You can think of that as the goal of the `fn()`  in the formula above.

### Can you get to the point?

I'm getting there! I have a tendency to get carried away on concepts. Its why I tried to write a catchy intro. Anyway moving on, ask yourself the following questions:

1.  **How long does a network request take?**
2.  **How do I know it'll even work?**
3.  **What does the user look at in the meantime?**

If you don't care about your user experience [^2], you'd probably answer it with the following:

- as long as it takes
- my unit tests passed (lol)
- spinner goes brrr

The more accurate (but not definitive) answers are:

1.  A network request can take anywhere from 30ms to 30 seconds honestly [^3]
2.  You don't! You have no idea whether your request is going to succeed. That's why there's a `try` block in almost every language. We're gonna `try`  to save it.
3.  So what does the user see in the meantime? They'll look at whatever you choose to show them. A spinner, a disabled input, or just *nothing*.

**Its because of these answers that we have to start talking about optimistic UIs.**

### The Problem

On the web, pauses and delays in responsiveness have notable usability and financial impacts. In a world of ever shortening attention spans, numerous studies have been conducted to determine what people overall consider to be "good feedback" from a UI. [Here's a quote from Mozilla on responsiveness](https://developer.mozilla.org/en-US/docs/Web/Performance/How_long_is_too_long#responsiveness_goal).

> it is important to provide feedback and acknowledge the user's response or interaction and to do so within 100ms, preferably within 50ms. 50ms seconds feels immediate

**50ms!** Recall the answer to question #1! Network requests on the lowest of latencies with the least data manipulation are almost already at 50ms!

I'm gonna throw a bunch of hypotheticals at you

- Imagine if Confluence waited for state to completely synchronize every time you typed something. How do you type more than one letter at a time if its trying to synchronize your state?
- Imagine a page full of toggles. Imagine that on _each_ toggle flipped, we made a network request. What if the user wanted to quickly flip 5 toggles?
- A user fills out a customer info form that'll add that customer to a table on the page. What happens after they hit submit on the form?

All these hypothetical questions trend towards one major issue. Depending on how you write your logic, you can inadvertently couple the slow external synchronization process with what should be (as explored above) an almost immediate action. This can lead your user **waiting on something to actually happen.** Now *you* might know that its connecting to some monolith or traveling to AWS in Ohio to get the data and come back, but I guarantee you your users do not care and it gets us no sympathy.

**Users want immediate feedback, and waiting to synchronize external state with your application state before providing feedback leaves them blocked.**

### The Solution

Hopefully the problem has been set up well enough that you're already aware of the solution: _just show them the UI they want to see!_ Who honestly cares if its wrong, just show it to em! So what if we don't know the backend save that does some insane workflow has finished yet. Our user doesn't care, nor should they! They're _optimistic_ that the software they paid for will actually work (depends on your softwares track record tho) and just want to do their actions and go to lunch.

Going back to our hypotheticals from earlier, lets go into some small detail on how to handle these scenarios!

#### Confluence Save

I like this example because its inherently observable. Confluence lets me type all I want. The state of the application sync's in the background, but without blocking re-renders. Even if my machine has connection issues, I can *still* take actions in the hope that I can sync at a later time. And when my save finally does happen? I see a little "Changes Saved" at the bottom right next to the Publish button. This bit of feedback is excellent, because not only do I know that they did save, but if I stopped typing I know that *this specific version of the document* is saved. Some editors just give you a "last saved" text, as if I'm a damn computer who knows the exact second I stopped typing and what the application state was then. This is the only time I'll say this, but be more like Confluence.

#### A page of toggles

This is based off a real example, and the first time I experimented with the optimistic UI pattern. You know what people like about toggles? It's one of those pieces of UI that translates to reality *so well*. Say you have a light switch that you turn on and off. You're very used to the effect operating at however fast electricity works. Now imagine that every time you flipped a light switch you had to wait 2 seconds before the light turned off. Now imagine that it was an accident, and you want to flip it on again immediately but unfortunately the switch stops working in between till the light fully turns on or off. There are many existing UIs that actually do this. They wait for the full external sync, causing a delay in what the user is accustomed to being immediate.

For the best UX, immediately show them the toggle state they set it to. The best part is, when the save is successful you can just leave it be and don't need to trigger a re-render on sync of external state because your app should already have the same outcome (recall our equation for a UI)! If the save is still pending and they try to leave, write navigation prevention logic that's dependent on external state.

#### Form Submissions

In this example, when the user hits submit on a valid form, the client should immediately update the hypothetical table with it's newest entry. Ideally, your application state update starts on submit also sends that data out to update the backend. Pretty straightforward! I won't expand too far into this because everyone is envisioning a different type of application/data table in their head right now.

### No I didn't Forget #2 (error handling)

Does it bother you that I went from answering question 1, to 3, then back to 2? Good.

Question 2 was "How do I know it'll even work?" The answer was "you don't" but that's not helpful. Let's talk about what do to if your attempt to sync state across the application boundary failed, _after_ you've already optimistically shown your UI! What do? Intuitively you might think "ok just throw an error and crash the whole thing". I'd say that's a last resort! You are always allowed to revert back to the last known working state! Of course consult your UXer, but its totally encouraged to just show them what they had before, or what they attempted to have with a little error.

Going back to the Form Submission example. Imagine the user is working with shitty Starbucks wifi and they filled out a form with a bunch of data. Just as they go to submit, the signal drops and their request failed. Would *you* want all your hard work to just disappear? Sure an error popup is great because it gives them awareness or even a next step. But maybe they just wrote a long note in a free text field and they want to copy paste it for later. Maybe they can just take a screenshot of their attempted submission and use it for submitting a bug report! This graceful error handling wouldn't have been possible if you had explicitly tied your client state to the external state's success/failure, or if you had shown spinners (that might not go away because you didn't write a `finally`  clause to remove the loading indicator). Of course there's nuances here, but in general I hope you see the benefit.

Looking at the toggle example, we can just revert the toggle back to its original state before the user touched it, to provide a hint that their action was not successful. Binary states like on/off are much easier to deal with in that regard.

### Summary

To wrap this all up, just keep in mind that your users want a snappy experience and its ok to promise them success in the immediate term even if you have to rescind it later on failure. In certain cases they'll be ok with their failed attempt persisting on the page as long as you indicate that it's presently invalid (e.g., "Failed to save, resubmit.") Web development is just as much smoke and mirrors as it is an intricate dance between application and external state. We are allowed to fake it till we make it, and that's what makes this whole process optimistic!

Going into coding examples would be a lot of work for a document I threw together at the last minute. I might come back and write some later! For now, I've attached some further readings.

### Further Reading

- React Transition API
  - [https://react.dev/blog/2022/03/29/react-v18#new-feature-transitions](https://react.dev/blog/2022/03/29/react-v18#new-feature-transitions)
    - A new API in React 18 to help demarcate urgent updates
- Remix Optimistic UI
  - [https://remix.run/docs/en/main/guides/optimistic-ui](https://remix.run/docs/en/main/guides/optimistic-ui)
    - Has some practical code to look at, especially with Forms
  - https://www.youtube.com/watch?v=EdB_nj01C80
    - *The above video is an* *excellent summary of the concepts I described above if you're more a visual person*
- Apollo Optimistic UI
  - [https://www.apollographql.com/docs/react/performance/optimistic-ui/](https://www.apollographql.com/docs/react/performance/optimistic-ui/)
    - Seeing a whole page on one of the premiere GQL solutions should signify its importance as a design pattern
- React Query Optimistic UI
  - [https://tanstack.com/query/latest/docs/react/guides/optimistic-updates](https://tanstack.com/query/latest/docs/react/guides/optimistic-updates)
    - React Query is the beloved data fetching library (i guess tRPC is inching there but for most SPA its React Query)
    - Check out their rollback pattern! neat!
- Syncing External State
  - [https://react.dev/reference/react/useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
    - I'm pretty sure lots of state libraries are really just like proxy objects that are then synced using this hook.
    - You can use this hook for things like subscribing to browser APIs
  - [https://react.dev/learn/synchronizing-with-effects](https://react.dev/learn/synchronizing-with-effects)
    - **Kinda the most important one in this subtopic idk why I put it 2nd**
  - [https://react.dev/reference/react/useEffect#connecting-to-an-external-system](https://react.dev/reference/react/useEffect#connecting-to-an-external-system)
    - Learn more about how to use useEffect... _effectively_

[^1]: https://twitter.com/dan_abramov/status/1632535654142713862?s=20
[^2]: I will assume that the enterprising amongst you reading this document actually care about providing your users a great UX. Any half-decent engineer engaged in even the slightest dogfooding endeavor would be craving a better experience. If not for the real end user then for themselves.
[^3]: Obviously these aren't real numbers backed by data. This isn't a research paper. There's too many variables and that's not the point I'm trying to get across. When you're writing a frontend that relies on a backend you either don't control or can't optimize, these numbers are things to be conscious of as their timings impact how high priority an optimistic update is.
