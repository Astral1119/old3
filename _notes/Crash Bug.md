---
title: The Crash Bug
excerpt: Breaking Google Sheets with 17 characters.
header:
  teaser: assets/images/broken.jpg
tags:
  - bugs
toc: true
date: 2023-02-14
---
### Update

Google has since been made aware of the issue and has remedied it.

### Introduction

Since this is my first post here, I figured I'd start strong.

Not too long ago, I was designing an [intermediate to advanced formula practice sheet](https://docs.google.com/spreadsheets/d/1RZVTUJj_qzugq_WCd7rMjmjzKtUM72Jb5x0RGFAVNnk/edit#gid=890374412) when I accidentally hit enter on one of the formulae intended to generate test data. (I'll probably make some posts on the formula practice sheet later.) It immediately crashed the sheet, and would continuously spit out the following:

 <img src="/assets/img/crashbug1.png" style="box-shadow: 2px 2px 20px 0 #ddd;"/>

So clearly, something went pretty horribly wrong. It completely bricked the workbook, but for some reason it still let me access it through iOS sheets so I was able to salvage it.

So what happened?

### The Bug

Well, the first part of the problem I needed to solve was reducing the formula that created the problem. Here's what it looked like when it crashed the sheet:

```haskell
=index(lambda(d,lambda(e,reduce("!",d,lambda(a,c,lambda(f,if(and(a="!"),f,{a,f}))(flatten(filter(query(d,"where Col1 is not null offset 1",),index(d,1,)=c))))))(reduce("!",sequence(12)+1,lambda(a,c,lambda(y,if(and(a="!"),y,{a,y}))({text(date(,c,),"mmmm"),d;query(map(sequence(20),lambda(x,lambda(y,z,{"Item "&randbetween(1,30),y,y*z,z})(randbetween(1,10),randbetween(5,10)))),"select 2/0,Col1,Col2,Col3,Col4,1/0label 1/0'',2/0''",)}))))({"SKU","Quantity","Total Price","Average Price",""})))
```

This is obviously not the most readable. It was also designed before `LET` and `HSTACK` came to Google Sheets, so everything is obscured behind nested `LAMBDA`s. But slowly, I started chipping away at it, and eventually I was left with the following:

```haskell
=index(lambda(,))
```

That's it. That's all you need to nuke a sheet.

### The Investigation

I did a little more testing, and found that this only happened when `LAMBDA` had a variable expressed, and no argument passed to it; the variable name didn't even need to be valid, but my guess is something about `LAMBDA` execution outputs an error that carries down if no arguments are expressed. For example,

```haskell
=index(lambda())
```

outputs an error, but doesn't cause a meltdown. Instead, it sends out a `#N/A` error due to having too few arguments. Hence, a comma is necessary for the bug to occur.

The next thing I tried was wrapping it in `IFERROR` or literally any other function, and it persisted. Something about the interaction between `INDEX` and an argumentless `LAMBDA` causes a fatal error. Interestingly,

```haskell
=if(,index(lambda(,)))
```

does *not* cause an error. If is quite nice because it only evaluates the condition corresponding to the Boolean it is passed. What this effectively means is that the `=index(lambda(,))` needs to be parsed and evaluated to have an effect. Which makes sense.

Further along in my testing, I was able to induce a state where I was able to edit a bugged sheet without being kicked out. I still have no idea how it happened or how to replicate it, but it was extremely handy to be able to have one tab where I was not continuously kicked out and another to see if whatever I was testing had any effects.

### Elly Helps Out

It was at this point I shared what information I had with some of the lovely folks over on the [Spreadsheets Discord Community](https://discord.gg/M9GKpPd). One person in particular, [Elly](https://www.reddit.com/user/Keipaws), was instrumental in determining the cause of this issue. After playing around with it for a while, they sent me this:

> <img src="/assets/img/crashbug2.png" style="box-shadow: 2px 2px 20px 0 #ddd;"/>

I couldn't believe I hadn't thought to look at the console! Lo and behold, we have the exact cause of the fatal error. It seems like searchArrayOrRef, a backend function used in INDEX, is not compatible with new data types that result from LAMBDA.

### Extending the Bug

But to go one step further, I was a bit intrigued by the searchArrayOrRef function. Given its name, I guessed that it would be used in functions of the Lookup type. As it turns out, LOOKUP, MATCH, XLOOKUP, etc. are all susceptible to this error.

Of course, with proper syntax, this is a non-issue. With how new LAMBDA is, and how game-changing it's proven to be already, I think issues were to be expected. I'm not sure if there are any meaningful implications to this adventure, other than that finding a bug in one of a trillion-dollar company's flagship products is pretty nifty. But if you're curious, you can find out more [at this link](https://docs.google.com/spreadsheets/d/1dH_diVwMm8XMVUP1bxFhForIc0my_X2_2oDLbJGUBPo/edit#gid=0).

'Til later,

\- Astral
