# Poker

Poker is an interesting (at least to me) hobby, but not one I suggest
you take up. For what it's worth, in addition to poker, I like
drinking alcohol, but it too is not something I suggest you take up.
I'm also not trying to discourage you from either, but if you partake,
I wish you the blessing of circumspection.

From a scoring point of view, poker is a zero sum game, meaning every
chip you win is at someone else's expense. Spending time with friends,
however, can be a positive sum endeavor, in that both you and your friend
may benefit from the time you spend together (even if it's playing poker).
So, social poker, from a friendship point of view doesn't have to be
zero-sum, when one's utility function is more than mere chips.

My introduction was the video poker machine at the hotel I stayed in
when I went to Las Vegas to see and hear the Grateful Dead play the
[Aladdin Theater on March 26th,
1983](https://archive.org/details/gd1983-03-26.140315.sbd.eaton.miller.clugston.flac1648).
That's not real poker, and I wasn't as clever as I thought I was
&lt;cough&gt;[martingale](https://en.wikipedia.org/wiki/Martingale_(betting_system))&lt;/cough&gt;, but being a programmer, I got back to Albuquerque
and coded up a video poker simulator.

Fast foward many years and I discovered IRC poker and rec.gambling.
The IRC bot was dealing poker "ring games", but we could approximate
tournaments by having up to 23 players at a table playing Hold'Em with
a gentleman's agreement to raise the blinds periodically.  That was
crazy and fun, but it too wasn't real poker.

As I explored poker, I found some free software that did hand analysis
and performed some simulations.  It was in C, the language I was
programming at the time, so I made some contributions and released the
source code.

In the back of my mind, I had been thinking about writing an IRC bot
to deal multi-tab;e poker tournaments (so, e.g., 23 players would
initially start out on three separate tables: two with eight players
and one with seven). On Halloween night, 1998, ~~on a handful of cheap
amphetimines~~[^1] I pulled the trigger and wrote the core of
[multibot](https://ctm.github.io/docs/players_manual/thanks/multibot.html).

Although what I wrote on Halloween was in C, that was a
proof-of-concept that I rewrote in Objective-C.  Why? Because I wanted
to increase my knowledge of Objective-C.  My plan was to give away
the source to multibot, but I wound up selling it instead, to Poker
School Online.

Fast forward to April 2019 and I started work on
[mb2](https://ctm.github.io/docs/players_manual/).  Fast forward to
January 2021 and I founded [Craft Poker Co.](https://craftpoker.com/).

Anyway, I have a bunch of poker stories to share. If there's interest,
I'll start populating this chapter.

[^1]: [Bluegrass Widow](https://youtu.be/aCcf65G9TLc?t=191)
