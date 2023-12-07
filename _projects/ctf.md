---
layout: page
title: HITCON CTF 2018
description: A write-up of my approach to solving selected Capture The Flag challenges.
importance: 4
category: school
img: assets/img/project_mapforphotographers-preview.gif
---

## HITCON CTF 2018
### EV3 Basic
This challenge came with one `.jpg` and `.pklg` files.
1. First, I used steganography detection packages (`zsteg` for example) to inspect the `.jpg` file. Unfortunately, there was nothing with steganography in this challenge. However, there is some characters on the LEGO EV3 screen: `hitcon{ ...1... d...  a...  e... }`. This probably has something to do with the flag.
2. The `.pklg` file is the record file from the `WireShark`. 
![](https://i.imgur.com/7t9oBBb.png)
After reading the contents briefly, this is the log of the connection between the computer (Macbook Pro here) and the LEGO V3 via bluetooth.
3. Moreover, I sorted the logs based on the protocol, and from No. 196, there are `RFCOMM` (Radio frequency communication) packages. According to the information from Internet, I thought there might be the contents shown on LEGO V3 screen in `RFCOMM` packages.
4. After scrolling through every package, I found something interesting. There is a character ==h== in package No. 289.
![](https://i.imgur.com/zT6X1zZ.png)
In package No. 299, there is another character, ==i==, in it.
![](https://i.imgur.com/ZREb5Q2.png)
The difference between these two packages are at the addresses `0x16` and `0x1A`. The latter one is the ASCII of ==h== and ==i==. The former one might be the **offset** of the address where the character shown on the screen. The package No. 289 has `0x0A` at address `0x16`, and the package No. 299 has `0x14` at the same address. Since `0x14 - 0x0A = 0x0A`, I guess there is another packag with `0x14 + 0x0A = 0x1E` at the same address.
5. To verify whether my guess is correct or not, I tried to find another package whose `0x16` (that is, `frame[22]`) is `0x1E`:
![](https://i.imgur.com/z9z14wZ.png)
*Whoa!* I found it! In addition, the character (at `0x1A`) is ==t==, which it exactly what I expected to find, because the flag starts with ==hitcon{...}== according to the `.jpg` file.
6. Strangely, there are total *four* packages whose `0x16` is `0x1E`; if I set the filter to `frame[22]==28` there is nothing shown. Instead, after `0x1E` offset, we have to set `frame[23]` due to some carry bits or something else:
![](https://i.imgur.com/IDU1g62.png)
There are also four packages. The value at `0x19` alters, and this might be another offset.
7. Based on the `.jpg` file, I concluded that there are a *horizontal* offset and a *vertical* offset, and by setting `frame[22]` (or `frame[23]`) to a specific value (ex: `0x28` shown in above image), we have four packages in the same *row*, whose vertical offset in at `0x19` (`frame[25]`).
![](https://i.imgur.com/C3OrqZ0.png)
9. After that, we are able to draw a table to illustrate my conclusion and based on the packages we've found:

| \ | 0A | 14 | 1E | 28 | 32 | 3C | 46 | 50 | 
| - | - | - | - | - | - | - | - | - |
| 28 | h | i | t | c | o | n | { | m | 1 | n | d | 5 | t | 0 | r | m |
| 36 | _ | c | o | m | m | u | n | i | c | a | t | i | o | n | _ | a |
| 44 | n | d | _ | f | i | r | m | w | a | r | e | _ | d | e | v | e |
| 52 | l | o | p | e | r | _ | k | i | t | } |   |   |   |   |   |   |


| \ |  5A | 64 | 6E | 78 | 82 | 8C | 96 | A0 |
| - | -   | -  | -  | -  | -  | -  | -  | -  |
| 28 | 1 | n | d | 5 | t | 0 | r | m |
| 36 | i | c | a | t | i | o | n | _ | a |
| 44 | a | r | e | _ | d | e | v | e |
| 52 | t | } |   |   |   |   |   |   |


- The first column is the value at `frame[25]`, whereas the first row is the value at  `frame[22]` or `frame[23]`.
- Because `HackMD` has the width limit of the table, I have to split the results into two tables, which are shown above, or you can refer to the table below, which is created in Excel.

![](https://i.imgur.com/4ZuC9D9.png)

10. Here comes the flag! **hitcon{m1nd5t0rm_communication_and_firmware_developer_kit}**
